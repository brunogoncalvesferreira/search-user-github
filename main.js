let input = document.querySelector("input")
let buttonGetUserGithub = document.querySelector("#buttonGetUserName")

buttonGetUserGithub.addEventListener("click", handleGetUserGithub)

function handleGetUserGithub() {
  let nameUserGithub = input.value

  async function fetchData() {
    const response = await fetch(
      `https://api.github.com/users/${nameUserGithub}`
    )
    const data = await response.json()
    document.querySelector("#avatar").src = data.avatar_url
    document.querySelector("#name").innerHTML = data.name
    document.querySelector("#login").innerHTML = data.login
    document.querySelector("#bio").innerHTML = data.bio
    document.querySelector("#date").innerHTML = document.querySelector(
      "#repos"
    ).innerHTML = data.public_repos
    document.querySelector("#followers").innerHTML = data.followers
    document.querySelector("#following").innerHTML = data.following
    document.querySelector("#locale").innerHTML = data.location
    document.querySelector("#social").innerHTML = data.twitter_username
    document.querySelector("#page").innerHTML = data.blog
    document.querySelector("#jobs").innerHTML = data.company
    console.log(data)
  }
  fetchData()
}
