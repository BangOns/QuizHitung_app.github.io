export const putar = (a, b, c) => {
  let waktu = new Date().getTime();
  const arr = ["+", "-", "x"];
  setInterval(() => {
    if (new Date().getTime() - waktu > 1000) {
      clearInterval;
      return;
    } else {
      a.innerHTML = ~~(Math.random() * 10);
      b.innerHTML = ~~(Math.random() * 10);
      c.innerHTML = arr[~~(Math.random() * arr.length)];
    }
  }, 100);
};
