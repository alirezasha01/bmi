"use strict";
function calculate() {
  let weight = Number(document.getElementById("Weight").value);
  let height = Number(document.getElementById("Height").value);
  let heightM = height / 100;
  let bmi = weight / Math.pow(heightM, 2);
  document.getElementById("bmi").innerText = Math.round(bmi);
  if (bmi < 15) {
    return "کمبود وزن بسیار شدید";
  } else if (bmi >= 15 && bmi < 16) {
    return "کمبود وزن شدید";
  } else if (bmi >= 16 && bmi < 18.5) {
    return "کمبود وزن";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "وزن طبیعی و نرمال";
  } else if (bmi >= 25 && bmi < 30) {
    return "اضافه وزن";
  } else if (bmi >= 30 && bmi < 35) {
    return "چاقی معمولی (نوع اول)";
  } else if (bmi >= 35 && bmi < 40) {
    return "چاقی شدید (نوع دوم)";
  } else {
    return "چاقی بسیار شدید (نوع سوم)";
  }
}
document.getElementById("bmi").innerText = calculate();
