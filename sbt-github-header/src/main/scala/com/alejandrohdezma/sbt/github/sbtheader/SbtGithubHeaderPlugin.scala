/*
 * Copyright 2019-2020 Alejandro Hernández <https://github.com/alejandrohdezma>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alejandrohdezma.sbt.github.sbtheader

import sbt.Def
import sbt.Keys._
import sbt._

import com.alejandrohdezma.sbt.github.SbtGithubPlugin
import com.alejandrohdezma.sbt.github.SbtGithubPlugin.autoImport._
import com.github.ghik.silencer.silent
import de.heikoseeberger.sbtheader.HeaderPlugin
import de.heikoseeberger.sbtheader.HeaderPlugin.autoImport._
import de.heikoseeberger.sbtheader.LicenseDetection
import de.heikoseeberger.sbtheader.LicenseStyle

/**
 * Populates the `headerLicense` setting from [[https://github.com/sbt/sbt-header sbt-header]]
 * with values extracted from Github by `SbtGithubPlugin`:
 *
 *  - '''Year''': The information stored in `yearRange`.
 *  - '''Copyright Owner''': The information stored in `copyrightOwner`, provided by this own
 *   plugin. Defaults to `organizationName` value if there is no value for `organizationHomepage` or
 *   `organizationName <organizationHomepage>` if it is present.
 *
 *  The `headerLicenseStyle` setting from the `HeaderPlugin` will be used to set the style of the
 *  autogenerated headers.
 */
object SbtGithubHeaderPlugin extends AutoPlugin {

  object autoImport {

    val copyrightOwner = settingKey[String] {
      "The name of the copyright owner to be used in file header licenses." +
        " Defaults to `organizationName` value if there is no value for `organizationHomepage` or " +
        "`organizationName <organizationHomepage>` if it is present."
    }

    @deprecated("Use headerLicenseStyle instead", since = "0.7.2")
    val licenseStyle = settingKey[LicenseStyle] {
      "The license style to be used. Can be `Detailed` or `SpdxSyntax`. Defaults to Detailed."
    }

  }

  import autoImport._

  override def trigger = allRequirements

  override def requires: Plugins = HeaderPlugin && SbtGithubPlugin

  @silent
  override def projectSettings: Seq[Def.Setting[_]] = Seq(
    licenseStyle := headerLicenseStyle.value,
    headerLicense := LicenseDetection(
      licenses.value.toList,
      copyrightOwner.value,
      yearRange.value,
      licenseStyle.value
    ),
    copyrightOwner := {
      organizationHomepage.value
        .map(url => s"${organizationName.value} <$url>")
        .getOrElse(organizationName.value)
    }
  )

}
