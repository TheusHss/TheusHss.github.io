function menu() {
    document.querySelector('#menuId').classList.toggle("menuClass")
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
function audFunc(){
    alert('Musica, Caso Não Queira, Aperte "pare" Abaixe o som Ou recarregue a Pagina ')
    AudId.play()
}
function audFuncMute(){
    AudId.pause()
}
var seg=00;
var min=00;
var hou=00
function paiHr(){
    seg++
    if(seg==60){
        min++
        seg=00
    }
    if(min==60){
        hou++
        min=00
    }
    segundos.innerHTML=`${seg}`
    minutos.innerHTML=`${min}`
    horas.innerHTML=`${hou}`
  setTimeout(paiHr,1000)
}
function session() {
    paiHr()
    // var emailSession = sessionStorage.getItem('emailUserSession')
    var nomeSession = sessionStorage.getItem('nomeUserSession')
    if (nomeSession == null) {
        respostaDelog.innerHTML += `Ainda não logado`
    } else {
        respostaDelog.innerHTML += `Bem Vindo ${nomeSession}`
    }
}
window.onload=session
function verifico(){
    var nomeSession = sessionStorage.getItem('nomeUserSession')
    if (nomeSession == null) {
        alert("Não Logado")
        return
    } else {
        alert(`Bem Vindo ${nomeSession}`)
        window.location.href="poesias/Todas.html"
    }
}
function todasPoesias(){
  verifico()
    
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
function sa(){
    window.location.href="sobre_a.html"
}
function ss(){
    window.location.href="sobre_s.html"
    
}
function cadastro(){
    window.location.href="cad/cad/cadastro.html"

}
