// Using inline event attributes
/*function animateIn() {
        document.getElementById("hi").classList.add("animate__bounce");
      }

      function animateOut() {
        document.getElementById("hi").classList.remove("animate__bounce");
      }
      function animate() {
        var element = document.getElementById("hi");
        element.classList.add("animate__bounce");
      }*/

//Using eventlisteners
const myPElement = document.querySelectorAll(".csa-img");

myPElement.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.add("animate__animated", "animate__bounce");
  });

  element.addEventListener("mouseout", function () {
    element.classList.remove("animate__animated", "animate__bounce");
  });
});
