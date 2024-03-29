let className = "inverted"
let btnClassName = "invertedBtn"
let scrollTrigger = 400

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className)
    document.getElementById("headerBtn").classList.add(btnClassName)
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className)
    document.getElementById("headerBtn").classList.remove(btnClassName)
  }
}
