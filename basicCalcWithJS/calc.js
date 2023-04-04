let button = document.getElementsByTagName("input");
let ekran = document.getElementsByClassName("ustEkran")[0];
let sonuc = document.getElementById("esittir");
let sıfırlama = document.getElementById("sıfırla");
let backspace = document.getElementById("backspace");

for (let i = 0; i < 20; i++) {
    if (i != 3 && i != 4 && i != 19) {
        button[i].addEventListener("click", yazdir);
    }
}

function yazdir() {
    ekran.value = ekran.value + this.value;
}

sonuc.addEventListener("click", hesap);

function hesap() {
    ekran.value = eval(ekran.value);
}

sıfırlama.addEventListener("click", sıfır);

function sıfır() {
    ekran.value = "";
}

backspace.addEventListener("click", silme);

function silme() {
    ekran.value = ekran.value.substr(0, ekran.value.length - 1);
}
