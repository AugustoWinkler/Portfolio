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
            imagem.src = '../img/CSSColor.png';
            break;
        case 'html':
            imagem.src = '../img/HTML5Color.png';
            break;
        case 'js':
            imagem.src = '../img/JavaScriptColor.png';
            break;
        case 'python':
            imagem.src = '../img/PythonColor.png';
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
            imagem.src = '../img/CSSBlack.png';
            break;
        case 'html':
            imagem.src = '../img/HTML5Black.png';
            break;
        case 'js':
            imagem.src = '../img/JavaScriptBlack.png';
            break;
        case 'python':
            imagem.src = '../img/PythonBlack.png';
            break;
        default:
            break;
    }
}