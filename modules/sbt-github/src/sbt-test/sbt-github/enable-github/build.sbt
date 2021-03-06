ThisBuild / githubEnabled   := false
ThisBuild / githubAuthToken := Some(AuthToken("1234"))

name := "enable-github"

TaskKey[Unit]("check", "Checks all the elements downloaded from the Github API are correct") := {
  assert(description.value == "enable-github")
  assert(organizationName.value == "default")
  assert(startYear.value.isEmpty)
  assert(yearRange.value.isEmpty)
  assert(homepage.value.isEmpty)
  assert(organizationHomepage.value.isEmpty)
  assert(organizationEmail.value.isEmpty)
  assert(licenses.value.isEmpty)
  assert(developers.value.isEmpty)
  assert(contributors.value.markdown == "")
  assert(collaborators.value.markdown == "")
}
