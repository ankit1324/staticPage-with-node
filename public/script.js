function moveSlider(index) {
  var sliderContainers = document.querySelectorAll(".slider-container");
  var percentage = (index / 4) * 100; // 4 is the number of buttons minus 1
  sliderContainers.forEach(function (container) {
    var sliders = container.querySelectorAll(".slider");
    sliders.forEach(function (slider) {
      slider.style.transform = "translateY(" + percentage + "%)";
    });
  });
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("hidden");
}
