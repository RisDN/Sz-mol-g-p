const egyenloseg = document.getElementById('egyenloseg')

window.addEventListener('resize', function(e) {
    e.preventDefault();
    window.resizeTo(584, 617);
});

egyenloseg.addEventListener('click', function() {
    eel.kiszamitas(rejtett_kijelzo.innerHTML);
});

eel.expose(eredmeny_megjelenites);
eel.expose(hibas_egyenlet)

function eredmeny_megjelenites(eredmeny) {
    rejtett_kijelzo.innerHTML = eredmeny;
    kijelzo.value = eredmeny;
    window.resizeTo(584, 617);
}

function hibas_egyenlet() {
    rejtett_kijelzo.innerHTML = '';
    kijelzo.value = '';
    ures_kijelzo.style.display = 'block';
    kijelzo.style.display = 'none';
    alert('Hiba!')
    window.resizeTo(584, 617);
}