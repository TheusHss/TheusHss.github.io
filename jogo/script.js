var bola = document.getElementById('person')
var bolaFuga = document.getElementById('person2')
var topB = 0
var left = 0


function esquerda(){
    left -= 0.5;
        if (left < 0) {
            left += 1.5
        }
        bola.style.left = `${left}%`

        
    }
    function baixo(){
    topB += 0.5;
        if (topB == 46) {
            topB -= 1.5
        }
        bola.style.top = `${topB}%`;
}
function cima(){

    topB -= 0.5;
    if (topB <= 0.4) {
        topB += 1.5
    }
    bola.style.top = `${topB}%`;

}

function direita(){
    left += 0.5;

    if (left == 97.5) {
        left -= 1.5
    }
    bola.style.left = `${left}%`

}

document.addEventListener('keydown', () => {
    var code = event.keyCode;
    if (code == 38) {
        topB -= 0.5;
        if (topB <= 0.4) {
            topB += 1.5
        }
        bola.style.top = `${topB}%`;
        
    } else if (code == 37) {
        left -= 0.5;
        if (left < 0) {
            left += 1.5
        }
        bola.style.left = `${left}%`
    } else if (code == 40) {
        topB += 0.5;
        if (topB == 46) {
            topB -= 1.5
        }
        bola.style.top = `${topB}%`;
    } else if (code == 39) {
        left += 0.5;

        if (left == 97.5) {
            left -= 1.5
        }
        bola.style.left = `${left}%`
    }
})
var seg=45;
window.onload=paiHr()
function paiHr(){
    seg--
        segundos.innerHTML=`${seg}`
      setTimeout(paiHr,1000)
    }


