function narguiles_func() {

    window.location.href = "./index.html#narguiles"

}
function carvao_func() {

    window.location.href = "./index.html#carvao"

}
function essencias_func() {

    window.location.href = "./index.html#essencias"

}
function contato_func() {

    window.location.href = "./index.html#contato"

}
function chamar_menu() {
    document.querySelectorAll.foreach('#boxMenuId').classList.toggle("boxMenuAtivo")
}
function face() {
    window.location.href = "https://www.facebook.com/allahubhookah6/"
} function insta() {
    window.location.href = "https://www.instagram.com/allahubhookah6/"
}
function boxClickOne(){
    document.querySelector('#oneBox').classList.toggle("boxGrande")
}
function boxClickTwo(){
    document.querySelector('#twoBox').classList.toggle("boxGrande")
}
function boxClickThree(){
    document.querySelector('#threeBox').classList.toggle("boxGrande")
}
showProgressBar = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("js-barraDeLeitura").style.width = `${scrolled}%`;
  };
  window.onscroll = () => {
    showProgressBar();
  };