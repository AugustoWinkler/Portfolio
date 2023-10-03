function mostrarTexto(id) {
    let text = document.querySelector('#texto');
    switch (id) {
        case 'css':
            text.textContent = '/* CSS3 Cascate Style Sheet */';
            break;
        case 'html':
            text.textContent = '/* HTML5 Hyper Text Markup Language */';
            break;
        case 'js':
            text.textContent = '/* JavaScript: A good way to make your site interactive */';
            break;
        case 'python':
            text.textContent = '/* Python: Simple and efficient programming language */';
            break;
        default:
            break;
    }
}

function mudar(id) {
    // Seleciona o elemento de imagem com base no ID passado como argumento
    let imagem = document.querySelector(`#${id}`);

    
    // Define o novo valor para o atributo 'src' com base no ID
    switch (id) {
        case 'css':
            imagem.src = 'imagens/CSSColor.png';
            break;
        case 'html':
            imagem.src = 'imagens/HTML5Color.png';
            break;
        case 'js':
            imagem.src = 'imagens/JavaScriptColor.png';
            break;
        case 'python':
            imagem.src = 'imagens/PythonColor.png';
            break;
        default:
            break;
    }
}

function restaurar(id) {
    // Seleciona o elemento de imagem com base no ID passado como argumento
    let imagem = document.querySelector(`#${id}`);
    
    // Restaura o valor original do atributo 'src' com base no ID
    switch (id) {
        case 'css':
            imagem.src = 'imagens/CSSBlack.png';
            break;
        case 'html':
            imagem.src = 'imagens/HTML5Black.png';
            break;
        case 'js':
            imagem.src = 'imagens/JavaScriptBlack.png';
            break;
        case 'python':
            imagem.src = 'imagens/PythonBlack.png';
            break;
        default:
            break;
    }
}
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let active = 3;

function loadShow(){
    let stt= 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1 ;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i =  active + 1; i < items.length; i++ ){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >=0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();


next.onclick = function(){
    active =  active +1 < items.length ? active + 1 : active;
    loadShow()
}

prev.onclick = function(){
    active =  active -1 >=0 ? active - 1 : active;
    loadShow()

}