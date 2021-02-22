window.onload=inserir

function inserir(){
    document.querySelector(".container_dois").innerHTML=`
    <div id="narguiles" class="line_divisor">Narguiles</div>

    <div onclick="boxClickOne()" id="oneBox" class="box">
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
    </div>
    <div id="carvao" class="line_divisor">Carvão</div>
    <div onclick="boxClickTwo()" id="twoBox" class="box">

        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
    </div>

    <div id="essencias" class="line_divisor">Essências</div>
    <div onclick="boxClickThree()" id="threeBox" class="box">

        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
        <div class="boxImg">
            <img src="./src/narguile_dourado.jpg" alt="">
        </div>
    </div>

    `
}