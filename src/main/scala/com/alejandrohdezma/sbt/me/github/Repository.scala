package com.alejandrohdezma.sbt.me.github

import sbt.URL

import com.alejandrohdezma.sbt.me.http.{client, Authentication}
import com.alejandrohdezma.sbt.me.json.Json.Fail.NotFound
import com.alejandrohdezma.sbt.me.json.{Decoder, Json}
import com.alejandrohdezma.sbt.me.syntax.either._
import com.alejandrohdezma.sbt.me.syntax.json._

/** Represents a repository in Github */
final case class Repository(description: String, license: License, url: String) {

  /** Returns the license extracted from github in the format that SBT is expecting */
  def licenses: List[(String, URL)] = List(license.id -> sbt.url(license.url))

}

object Repository {

  /** Download repository information from Github, or returns a string containing the error */
  def get(user: String, name: String)(
      implicit auth: Authentication
  ): Either[String, Repository] = {
    val body = client.get(s"https://api.github.com/repos/$user/$name")

    Json.parse(body).as[Repository].leftMap {
      case "description" / NotFound =>
        s"Repository doesn't have a description! Go to https://github.com/$user/$name and add it"
      case "license" / NotFound =>
        s"Repository doesn't have a license! Go to https://github.com/$user/$name and add it"
      case "license" / ("spdx_id" / NotFound) =>
        s"Repository's license id couldn't be inferred! Go to https://github.com/$user/$name and check it"
      case "license" / ("url" / NotFound) =>
        s"Repository's license url couldn't be inferred! Go to https://github.com/$user/$name and check it"
      case _ => "Unable to get repository information"
    }
  }

  implicit val RepositoryDecoder: Decoder[Repository] = json =>
    for {
      description <- json.get[String]("description")
      license     <- json.get[License]("license")
      url         <- json.get[String]("html_url")
    } yield Repository(description, license, url)

}
