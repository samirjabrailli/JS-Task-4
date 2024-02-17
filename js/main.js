let soyad = document.getElementById("soyad")
let ad = document.getElementById("ad")
let metn = document.getElementById("metn")

function bax() {
    let name = ad.value [0].toUpperCase()

    let surname = soyad.value [0].toUpperCase () +soyad.value.slice(1)

    metn.innerHTML = `${surname} ${name}.`
}