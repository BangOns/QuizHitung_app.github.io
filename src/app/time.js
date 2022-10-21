export function waktu() {
  time--;
  if (time < 10) {
    menit.textContent = `0${time}`;
  } else if (time > 10) {
    menit.textContent = `${time}`;
  }
  if (time == 0) {
    clearInterval(interval);
    return;
  }
  console.log(time);
}
