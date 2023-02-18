let form = document.querySelector("form")
let input = document.querySelector("input")
let buttonGetUserGithub = document.querySelector("#buttonGetUserName")
let buttonModeDarkLight = document.querySelector("#modeDarkLight")

buttonModeDarkLight.addEventListener("click", handleModeLightAndDark)

function handleModeLightAndDark() {
  document.body.classList.toggle("bg-gray-400")
  document.body.classList.toggle("text-gray-900")
  document.querySelector("input").classList.toggle("bg-gray-600")
  document.querySelector("#container").classList.toggle("bg-gray-600")
  document.querySelector("#container-repos").classList.toggle("bg-gray-400")
  document.querySelector("#container-repos").classList.toggle("text-gray-700")
  document.querySelector("#login").classList.toggle("text-green-500")
  document.querySelector("#icon-search").classList.toggle("text-green-500")
  document.querySelector("#buttonGetUserName").classList.toggle("bg-green-500")
  document
    .querySelector("#buttonGetUserName")
    .classList.toggle("hover:bg-green-600")
  document.querySelector("#avatar").classList.toggle("border-green-500")

  if (buttonModeDarkLight.innerHTML === 'Dark <i class="ph-moon"></i>') {
    buttonModeDarkLight.innerHTML = 'Light <i class="ph-sun"></i>'
  } else {
    buttonModeDarkLight.innerHTML = 'Dark <i class="ph-moon"></i>'
  }
}

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()

  input.value = ""
  input.focus()
}

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
    document.querySelector("#date").innerHTML = new Date(
      data.created_at
    ).toLocaleDateString("pt-br", {})
    document.querySelector("#repos").innerHTML = data.public_repos
    document.querySelector("#followers").innerHTML = data.followers
    document.querySelector("#following").innerHTML = data.following
    document.querySelector("#locale").innerHTML = data.location
    document.querySelector("#social").innerHTML = data.twitter_username
    document.querySelector("#page").innerHTML = data.blog
    document.querySelector("#jobs").innerHTML = data.company
  }
  fetchData()
}
