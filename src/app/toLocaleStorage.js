//
export class toLocal {
  constructor(hasil, jawaban, ...angka) {
    let paramHasil = { angka, jawaban, hasil };
    let kumpul = this.getArr();
    kumpul.push(paramHasil);
    localStorage.setItem("list", JSON.stringify(kumpul));
    this.displayItem();
  }
  getArr() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }
  displayItem() {
    let item = localStorage.getItem("list");
    let turunan = document.querySelector(".tabel");
    let hasil = JSON.parse(item)
      .map((value, index) => {
        return `<tr class ="index${index}">
      <td class"center">${value.angka.join("")}</td>
     <td>${value.hasil}</td>
     <td>${value.jawaban}</td> 
</tr>`;
      })
      .join("");
    turunan.innerHTML = hasil;
  }
}
