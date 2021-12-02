console.log("JavaScript loaded!!!");

// Ethan's code for carousel

// WEEK1

$("#1button1").click(function() {
    showSlide(1);
    $("#1button1").addClass("currentdot")
    $("#1button2").removeClass("currentdot")
    $("#1button3").removeClass("currentdot")
    $("#1button4").removeClass("currentdot")
    $("#1button5").removeClass("currentdot")
});

$("#1button2").click(function() {
    showSlide(2);
    $("#1button1").removeClass("currentdot")
    $("#1button2").addClass("currentdot")
    $("#1button3").removeClass("currentdot")
    $("#1button4").removeClass("currentdot")
    $("#1button5").removeClass("currentdot")
});

$("#1button3").click(function() {
    showSlide(3);
    $("#1button1").removeClass("currentdot")
    $("#1button2").removeClass("currentdot")
    $("#1button3").addClass("currentdot")
    $("#1button4").removeClass("currentdot")
    $("#1button5").removeClass("currentdot")
});

$("#1button4").click(function() {
    showSlide(4);
    $("#1button1").removeClass("currentdot")
    $("#1button2").removeClass("currentdot")
    $("#1button3").removeClass("currentdot")
    $("#1button4").addClass("currentdot")
    $("#1button5").removeClass("currentdot")
});

$("#1button5").click(function() {
    showSlide(5);
    $("#1button1").removeClass("currentdot")
    $("#1button2").removeClass("currentdot")
    $("#1button3").removeClass("currentdot")
    $("#1button4").removeClass("currentdot")
    $("#1button5").addClass("currentdot")
});

$("#next-image").click(function() {
  nextSlide();
});

$("#prev-image").click(function() {
  prevSlide();
});

const SLIDES = $(".slides > .slide");
const DOTS = $(".imgbutton");

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
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  let currentDot = DOTS.eq(index);
  DOTS.removeClass("currentdot");
  currentDot.addClass("currentdot");
  console.log(SLIDES.length);
  console.log(DOTS.length);
  //
  // let currentDot = 1BUTTON.eq(index);
  // const 1BUTTON = $("imgbutton");
  // 1BUTTON.removeClass("dark");
  //   currentDots.addClass("dark");
}

//Week2

$("#2button1").click(function() {
  $("#Bslide1").removeClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button2").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").removeClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button3").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").removeClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button4").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").removeClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button5").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").removeClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button6").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").removeClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button7").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").removeClass("hidden")
  $("#Bslide8").addClass("hidden")
});

$("#2button8").click(function() {
  $("#Bslide1").addClass("hidden")
  $("#Bslide2").addClass("hidden")
  $("#Bslide3").addClass("hidden")
  $("#Bslide4").addClass("hidden")
  $("#Bslide5").addClass("hidden")
  $("#Bslide6").addClass("hidden")
  $("#Bslide7").addClass("hidden")
  $("#Bslide8").removeClass("hidden")
});


$("#2next-image").click(function() {
  nextBSlide();
});

$("#2prev-image").click(function() {
  prevBSlide();
});

const BSLIDES = $(".Bslide");
const BDOTS = $("Bimgbutton");

function nextBSlide() {
  let nextBNum = BSLIDES.index($(".Bslide").not($(".hidden"))) + 1 + 1;
  if (nextBNum > BSLIDES.length) {
    nextBNum = 1;
  }
  showBSlide(nextBNum);
}

function prevBSlide() {
  let prevBNum = BSLIDES.index($(".Bslide").not($(".hidden"))) - 1 + 1;
  if (prevBNum <= 0) {
    prevBNum = BSLIDES.length;
  }
  showBSlide(prevBNum);
}

function showBSlide(Bnum) {
  let Bindex = Bnum - 1;
  let currentBSlide = BSLIDES.eq(Bindex);
  BSLIDES.addClass("hidden");
  currentBSlide.removeClass("hidden");
  let currentBDot = BDOTS.eq(Bindex);
  BDOTS.removeClass("currentBdot");
  currentBDot.addClass("currentBdot");
}

// Week3

$("#3button1").click(function() {
  $("#Cslide1").removeClass("hidden")
  $("#Cslide2").addClass("hidden")
  $("#Cslide3").addClass("hidden")
  $("#Cslide4").addClass("hidden")
  $("#Cslide5").addClass("hidden")
  $("#Cslide6").addClass("hidden")
  $("#Cslide7").addClass("hidden")
});

$("#3button2").click(function() {
  $("#Cslide1").addClass("hidden")
  $("#Cslide2").removeClass("hidden")
  $("#Cslide3").addClass("hidden")
  $("#Cslide4").addClass("hidden")
  $("#Cslide5").addClass("hidden")
  $("#Cslide6").addClass("hidden")
  $("#Cslide7").addClass("hidden")
});

$("#3button3").click(function() {
  $("#Cslide1").addClass("hidden")
  $("#Cslide2").addClass("hidden")
  $("#Cslide3").removeClass("hidden")
  $("#Cslide4").addClass("hidden")
  $("#Cslide5").addClass("hidden")
  $("#Cslide6").addClass("hidden")
  $("#Cslide7").addClass("hidden")
});

$("#3button4").click(function() {
  $("#Cslide1").addClass("hidden")
  $("#Cslide2").addClass("hidden")
  $("#Cslide3").addClass("hidden")
  $("#Cslide4").removeClass("hidden")
  $("#Cslide5").addClass("hidden")
  $("#Cslide6").addClass("hidden")
  $("#Cslide7").addClass("hidden")
});

$("#3button5").click(function() {
  $("#Cslide1").addClass("hidden")
  $("#Cslide2").addClass("hidden")
  $("#Cslide3").addClass("hidden")
  $("#Cslide4").addClass("hidden")
  $("#Cslide5").removeClass("hidden")
  $("#Cslide6").addClass("hidden")
  $("#Cslide7").addClass("hidden")
});

$("#3button6").click(function() {
  $("#Cslide1").addClass("hidden")
  $("#Cslide2").addClass("hidden")
  $("#Cslide3").addClass("hidden")
  $("#Cslide4").addClass("hidden")
  $("#Cslide5").addClass("hidden")
  $("#Cslide6").removeClass("hidden")
  $("#Cslide7").addClass("hidden")
});

$("#3button7").click(function() {
  $("#Cslide1").addClass("hidden")
  $("#Cslide2").addClass("hidden")
  $("#Cslide3").addClass("hidden")
  $("#Cslide4").addClass("hidden")
  $("#Cslide5").addClass("hidden")
  $("#Cslide6").addClass("hidden")
  $("#Cslide7").removeClass("hidden")
});

$("#3next-image").click(function() {
  nextCSlide();
});

$("#3prev-image").click(function() {
  prevCSlide();
});

const CSLIDES = $(".Cslide");
const CDOTS = $("Cimgbutton");

function nextCSlide() {
  let nextCNum = CSLIDES.index($(".Cslide").not($(".hidden"))) + 1 + 1;
  if (nextCNum > CSLIDES.length) {
    nextCNum = 1;
  }
  showCSlide(nextCNum);
}

function prevCSlide() {
  let prevCNum = CSLIDES.index($(".Cslide").not($(".hidden"))) - 1 + 1;
  if (prevCNum <= 0) {
    prevCNum = CSLIDES.length;
  }
  showCSlide(prevCNum);
}

function showCSlide(Cnum) {
  let Cindex = Cnum - 1;
  let currentCSlide = CSLIDES.eq(Cindex);
  CSLIDES.addClass("hidden");
  currentCSlide.removeClass("hidden");
  let currentCDot = CDOTS.eq(Cindex);
  CDOTS.removeClass("currentCdot");
  currentCDot.addClass("currentCdot");
}

$("#next-image").hover(function() {
  $("#next-image").addClass("dark");
}, function() {
  $("#next-image").removeClass("dark");
});

$("#prev-image").hover(function() {
  $("#prev-image").addClass("dark");
}, function() {
  $("#prev-image").removeClass("dark");
});

// End of Ethan's code


$('#button-about').click(function() {
  $('#tab-about').removeClass('accessible-hidden');
  $('#tab-content').addClass('accessible-hidden');
  $('#tab-instructors').addClass('accessible-hidden');
  $('#tab-outcome').addClass('accessible-hidden');
  $('#tab-faq').addClass('accessible-hidden');
})
$('#button-content').click(function() {
  $('#tab-content').removeClass('accessible-hidden');
  $('#tab-about').addClass('accessible-hidden');
  $('#tab-instructors').addClass('accessible-hidden');
  $('#tab-outcome').addClass('accessible-hidden');
  $('#tab-faq').addClass('accessible-hidden');
})
$('#button-instructors').click(function() {
  $('#tab-instructors').removeClass('accessible-hidden');
  $('#tab-about').addClass('accessible-hidden');
  $('#tab-content').addClass('accessible-hidden');
  $('#tab-outcome').addClass('accessible-hidden');
  $('#tab-faq').addClass('accessible-hidden');
})
$('#button-outcome').click(function() {
  $('#tab-outcome').removeClass('accessible-hidden');
  $('#tab-about').addClass('accessible-hidden');
  $('#tab-content').addClass('accessible-hidden');
  $('#tab-instructors').addClass('accessible-hidden');
  $('#tab-faq').addClass('accessible-hidden');
})
$('#button-faq').click(function() {
  $('#tab-faq').removeClass('accessible-hidden');
  $('#tab-about').addClass('accessible-hidden');
  $('#tab-content').addClass('accessible-hidden');
  $('#tab-instructors').addClass('accessible-hidden');
  $('#tab-outcome').addClass('accessible-hidden');
})
