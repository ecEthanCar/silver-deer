console.log("JavaScript loaded!!!");

// Ethan's code for carousel

$("#1button1").click(function() {
  $("#slide1").removeClass("hidden")
  $("#slide2").addClass("hidden")
  $("#slide3").addClass("hidden")
  $("#slide4").addClass("hidden")
  $("#slide5").addClass("hidden")
});

$("#1button2").click(function() {
  $("#slide1").addClass("hidden")
  $("#slide2").removeClass("hidden")
  $("#slide3").addClass("hidden")
  $("#slide4").addClass("hidden")
  $("#slide5").addClass("hidden")
});

$("#1button3").click(function() {
  $("#slide1").addClass("hidden")
  $("#slide2").addClass("hidden")
  $("#slide3").removeClass("hidden")
  $("#slide4").addClass("hidden")
  $("#slide5").addClass("hidden")
});

$("#1button4").click(function() {
  $("#slide1").addClass("hidden")
  $("#slide2").addClass("hidden")
  $("#slide3").addClass("hidden")
  $("#slide4").removeClass("hidden")
  $("#slide5").addClass("hidden")
});

$("#1button5").click(function() {
  $("#slide1").addClass("hidden")
  $("#slide2").addClass("hidden")
  $("#slide3").addClass("hidden")
  $("#slide4").addClass("hidden")
  $("#slide5").removeClass("hidden")
});

$("#next-image").click(function() {
  nextSlide();
});

$("#prev-image").click(function() {
  prevSlide();
});

const SLIDES = $(".slides > .slide");

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  const DOTS = $("circle");
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");

}
