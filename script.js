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
function face(){
    window.location.href="https://www.facebook.com/matheus.tophenrique.3/"
    
}
function insta(){
    window.location.href="https://www.instagram.com/theu.hss/"
    
}

function git(){
    window.location.href="https://github.com/TheusHss"

}