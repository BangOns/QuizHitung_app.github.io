export class notifikasi {
  constructor() {
    this.angka1 = document.querySelector(".random-angka1");
    this.angka2 = document.querySelector(".random-angka2");
    this.ope = document.querySelector(".operator .op");
    this.input = document.querySelector(".inputan-user");
    this.menit = document.querySelector(".menit");
  }
  novalue() {
    Swal.fire({
      icon: "error",
      title: `Tidak ada Inputan`,
      text: `Mohon Diisi `,
      footer: "<p>Jangan Menyerah :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
  notNumber() {
    Swal.fire({
      icon: "error",
      title: `Mohon diisi dengan angka`,
      text: `Semangat`,
      footer: "<p>Jangan Menyerah :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.input.value = "";
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
  ansFast() {
    Swal.fire({
      icon: "success",
      title: `${this.input.value}`,
      text: "Wah kamu hebat",
      footer: "<p>Ayo kembangkan terus :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.input.value = "";
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
  ansNotSlow() {
    Swal.fire({
      icon: "success",
      title: `${this.input.value}`,
      text: "Wah keren !!",
      footer: "<p>Ayo Lebih Cepat Menghitungnya :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.input.value = "";
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
  ansSlow() {
    Swal.fire({
      icon: "success",
      title: `${this.input.value}`,
      text: "Terbaik",
      footer: "<p>Ayo Semangat Belajarnya :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.input.value = "";
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
  ansWrong(a) {
    Swal.fire({
      icon: "error",
      title: `${this.input.value}`,
      text: `Wah.. jawaban kamu salah , jawaban yang benar adalah ${a} `,
      footer: "<p>Jangan Menyerah :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.input.value = "";
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
  timeLost() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Waktu Anda Habis ;(",
      footer: "<p>Silahkan  coba lagi :)</p>",
    }).then((result) => {
      if (result.isConfirmed) {
        this.input.value = "";
        this.angka1.innerText = `0`;
        this.angka2.innerText = `0`;
        this.ope.innerText = `+`;
        this.menit.innerText = `00`;
      }
    });
  }
}
