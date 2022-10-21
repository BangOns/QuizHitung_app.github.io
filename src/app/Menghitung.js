export function hitung(angka1, operator, angka2) {
  let num1 = parseInt(angka1);
  let num2 = parseInt(angka2);
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "x") {
    return num1 * num2;
  }
}
