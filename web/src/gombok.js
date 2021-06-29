const kijelzo = document.getElementById('kijelzo')
const torles = document.getElementById('törlés')
const rejtett_kijelzo = document.getElementById('rejtett_kijelzo')
const ures_kijelzo = document.getElementById('üres')
const utolso_torlese = document.getElementById('ck')



utolso_torlese.addEventListener('click', function() {
    if (kijelzo.value.length != 0) {
        let torlendo_karakter = kijelzo.value.slice(-1);
        let kijelzo_tartalma = kijelzo.value;
        let eredmeny = kijelzo_tartalma.replace(torlendo_karakter, '');
        kijelzo.value = eredmeny;
        rejtett_kijelzo.innerHTML = eredmeny;
        if (kijelzo.value.length == 0) {
            ures_kijelzo.style.display = 'block';
            kijelzo.style.display = 'none';
            window.resizeTo(584, 617);
        }
    } else {
        console.log('üres')
    }
});

torles.addEventListener('click', function() {
    kijelzo.value = '';
    kijelzo.style.display = 'none';
    rejtett_kijelzo.innerHTML = '';
    ures_kijelzo.style.display = 'block';
    window.resizeTo(584, 617);
});

function hozzáadás(bemenet) {
    if (bemenet == '÷') {
        kijelzo.value += '÷'
        rejtett_kijelzo.innerHTML += '/'
    } else if (bemenet == '×') {
        kijelzo.value += '×'
        rejtett_kijelzo.innerHTML += '*'
    } else {
        kijelzo.value += bemenet;
        rejtett_kijelzo.innerHTML += bemenet;
    }
    kijelzo.style.display = 'unset';
    ures_kijelzo.style.display = 'none';

}