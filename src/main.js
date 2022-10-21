import { HitNilai } from "./app/hitNilai.js";
import { putar } from "./app/putar.js";
import { hitung } from "./app/Menghitung.js";
import { notifikasi } from "./app/notif.js";
import { toLocal } from "./app/toLocaleStorage.js";
const getNilai = new HitNilai();
const notif = new notifikasi();
let angka1 = document.querySelector(".random-angka1");
let angka2 = document.querySelector(".random-angka2");
let ope = document.querySelector(".operator .op");
let acak = document.querySelector(".acak-angka");
let menit = document.querySelector(".menit");
let klik = document.querySelector(".klik");
let input = document.querySelector(".inputan-user");
let interval;
let time = 31;
const reg = /[a-zA-Z]/gi;
acak.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(interval);
  input.value = "";
  setTimeout(() => {
    time = 30;
    menit.textContent = time;
    interval = setInterval(waktu, 1000);
  }, 1002);
  putar(angka1, angka2, ope);
  getNilai.tampil(angka1, angka2, ope);
});

klik.addEventListener("click", () => {
  clearInterval(interval);
  let hasil = hitung(angka1.textContent, ope.textContent, angka2.textContent);
  let jawaban = "";
  let inputan = parseInt(input.value);
  if (input.value == "") {
    notif.novalue();
  } else if (reg.test(input.value) == true) {
    notif.notNumber();
  } else {
    if (inputan == hasil && time >= 20) {
      notif.ansFast();
      jawaban = "benar";
    } else if (inputan == hasil && time < 20 && time >= 10) {
      notif.ansNotSlow();
      jawaban = "benar";
    } else if (inputan == hasil && time < 10) {
      notif.ansSlow();
      jawaban = "benar";
    }
    if (inputan != hasil) {
      notif.ansWrong(hasil);
      jawaban = "salah";
    }
    const local = new toLocal(
      jawaban,
      inputan,
      angka1.textContent,
      ope.textContent,
      angka2.textContent
    );
  }
});
let item = localStorage.getItem("list");
if (item) {
  let turunan = document.querySelector(".tabel");
  let has = JSON.parse(item)
    .map((value, index) => {
      return `<tr class ="index${index}">
  <td class="center">${value.angka.join("")}</td>
 <td>${value.hasil}</td>
 <td>${value.jawaban}</td> 
</tr>`;
    })
    .join("");
  turunan.innerHTML = has;
}
// function waktu
function waktu() {
  time--;
  if (time < 10) {
    menit.textContent = `0${time}`;
  } else if (time >= 10) {
    menit.textContent = `${time}`;
  }
  if (time == 0) {
    notif.timeLost();
    clearInterval(interval);
    return;
  }
  console.log(time);
}
