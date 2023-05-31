function scrollpage() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function notebook() {
    window.scrollTo ({
        top: 100,
        left: 0,
        behavior: "smooth"
    });
}

function desktop() {
    window.scrollTo ({
        top: 1750,
        left: 0,
        behavior: "smooth"
    });
}

function monitor() {
    window.scrollTo ({
        top: 3888,
        left: 0,
        behavior: "smooth"
    });
}

function acessorios() {
    window.scrollTo ({
        top: 5100,
        left: 0,
        behavior: "smooth"
    })
}

function informacoes() {
    window.scrollTo ({
        top: 7000,
        left: 0,
        behavior: "smooth"
    })
}

function scrollPosition() {
    if (window.scrollY == 0) {
        document.querySelector('.scroll-button').style.display = 'none';
    //OCULTAR
    } else {
    document.querySelector('.scroll-button').style.display = 'block';
    }
}

setInterval(scrollPosition, 1000);