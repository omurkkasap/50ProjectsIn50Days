const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//! async await kullanarak yapıldı
async function generateJoke() {

  const config = {
    headers: {
      Accept: 'application/json'
    }
  }


  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEL.innerHTML = data.joke

}

//? .then() kullanarak yapıldı
// function generateJoke() {

//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }


//   fetch('https://icanhazdadjoke.com', config)
//   .then(res => res.json())
//   .then(data => {
//     jokeEL.innerHTML = data.joke
//   })
// }