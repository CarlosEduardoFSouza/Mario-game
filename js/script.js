function start() {

    $(".inicio").hide();

    $(".game-board").append("<img src='/imagens/clouds.png' alt='tubo' class='clouds'>")
    $(".game-board").append("<img src='/imagens/mario.gif' alt='tubo' class='mario'>")
    $(".game-board").append("<img src='/imagens/pipe.png' alt='tubo' class='pipe'>")
    $(".game-board").append("<div id='scoreboard'></div>")

    let scoreboard = document.getElementById('scoreboard')

    const mario = document.querySelector('.mario')
    const pipe = document.querySelector('.pipe')

    var pontos = 0;

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 700);
    }

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        pontos = pontos + 1;
        scoreboard.innerHTML = '<p>Score: ' + pontos + '</p>';

        console.log(pontos)
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`

            mario.src = '/imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px'
            gameOver();
            clearInterval(loop);

        }
    }, 10);

    document.addEventListener('keydown', jump);

    function gameOver() {

        $(".clouds").remove();
    
        $(".game-board").append("<div id='fim'></div>");
    
        $("#fim").html("<img class='gameOverImg' src='/imagens/gameOver.webp' alt='mario'><p>Sua pontuacao foi: " + pontos + "</p>" + "<button id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></button>");
    }

}

function reiniciaJogo() {
    $("#fim").remove();
    $(".pipe").remove();
    $(".mario").remove();
    $("#scoreboard").remove();
    start();
}