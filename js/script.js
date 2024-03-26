const floater = document.getElementById("Ellipse");
const sec01 = document.getElementsByClassName("sec01");
const sec04 = document.getElementsByClassName("sec04");
console.log(sec01);

window.addEventListener(
  "scroll",
  function () {
    floater.style.transition = "900ms";
    var scroll = this.scrollY;
    var height = sec04[0].offsetHeight;
    if (scroll < height - 30) {
      floater.attributes.fill.value = "#EE5B3C";
      floater.style.transform = "";
    } else if (scroll < (height - 30) * 3) {
      floater.attributes.fill.value = "#24333F";
    } else {
      floater.style.transform = "";
      floater.attributes.fill.value = "#F0FEE4";
    }
  },
  0.1
);
