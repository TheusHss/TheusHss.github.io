function menu() {
    document.querySelector('#boxMenuId').classList.toggle("boxMenuAtivo")
}

var sumir;
function prosseguir() {
    matheusIdImg.src = "img/matheusPic.png"

    sumir = setTimeout(sumaFunc, 500)
    function sumaFunc() {
        document.querySelector('#body').classList.add("body2")
        bv.style.display = 'none'
        tudo.style.display = 'block'
    }
}
function todasPoesias(){
    window.location.href="poesias/Todas.html"
}