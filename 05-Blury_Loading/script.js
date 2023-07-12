const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if(load > 99) {
    clearInterval(int)
  } 

  /*
  if(load < 30) {
    loadingText.style.color = '#000'
  }else {
    loadingText.style.color = '#fff'
  }
  */


  loadingText.innerHTML= `${load}%`
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)

  // bg.style.opacity = scale(load, 0, 100, 0, 1) 

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

