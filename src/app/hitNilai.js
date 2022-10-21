import { parse } from "./parse.js";
export class HitNilai {
  constructor() {
    this.angka1 = document.querySelector(".random-angka1").textContent;
    this.angka2 = document.querySelector(".random-angka2").textContent;
    this.ope = document.querySelector(".operator .op").textContent;
    this.hasil;
  }
  getInputAngka1() {
    parse(this.angka1);
    this.angka1 = ~~(Math.random() * 10);
    return this.angka1;
  }
  getInputAngka2() {
    parse(this.angka2);
    this.angka2 = ~~(Math.random() * 10);
    return this.angka2;
  }
  getInputope() {
    const arr = ["+", "-", "x"];
    this.ope = ~~(Math.random() * arr.length);
    return arr[this.ope];
  }
  tampil(a, b, c) {
    setTimeout(() => {
      a.innerHTML = `${this.getInputAngka1()}`;
      b.innerHTML = `${this.getInputAngka2()}`;
      c.innerHTML = `${this.getInputope()}`;
    }, 1000);
  }
}
