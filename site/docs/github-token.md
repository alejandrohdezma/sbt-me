# Github Token

The Github [personal access token](https://github.com/settings/tokens) that the plugin will use can be set using the `githubAuthToken` setting:

```scala
//Defaults to the value of environment variable `GITHUB_TOKEN`
ThisBuild / githubAuthToken := Some(AuthToken("my-github-token"))
```

By default, the plugin will read the value of an environment variable `GITHUB_TOKEN` read the value of an environment variable:

```scala
Global / githubAuthToken := sys.env.get("GITHUB_TOKEN").map(AuthToken)
```

## Plugin permissions

If you are enabling this in a public repository usually `public-repo` inside `repo` scope should be enough. In the case of a private one you will need to enable the whole `repo` scope.

## Github Actions

If you are using Github Actions, you can use the [provided `GITHUB_TOKEN`](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token#about-the-github_token-secret).
