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

//Week2

$("#2button1").click(function() {
  showBSlide(1);
  $("#2button1").addClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button2").click(function() {
  showBSlide(2);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").addClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button3").click(function() {
  showBSlide(3);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").addClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button4").click(function() {
  showBSlide(4);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").addClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button5").click(function() {
  showBSlide(5);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").addClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button6").click(function() {
  showBSlide(6);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").addClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button7").click(function() {
  showBSlide(7);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").addClass("currentBdot")
  $("#2button8").removeClass("currentBdot")
});

$("#2button8").click(function() {
  showBSlide(8);
  $("#2button1").removeClass("currentBdot")
  $("#2button2").removeClass("currentBdot")
  $("#2button3").removeClass("currentBdot")
  $("#2button4").removeClass("currentBdot")
  $("#2button5").removeClass("currentBdot")
  $("#2button6").removeClass("currentBdot")
  $("#2button7").removeClass("currentBdot")
  $("#2button8").addClass("currentBdot")
});

$("#2next-image").click(function() {
  nextBSlide();
});

$("#2prev-image").click(function() {
  prevBSlide();
});

const BSLIDES = $(".Bslide");
const BDOTS = $(".Bimgbutton");

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

$("#2next-image").hover(function() {
  $("#2next-image").addClass("dark");
}, function() {
  $("#2next-image").removeClass("dark");
});

$("#2prev-image").hover(function() {
  $("#2prev-image").addClass("dark");
}, function() {
  $("#2prev-image").removeClass("dark");
});

// Week3

$("#3button1").click(function() {
  showCSlide(1);
  $("#3button1").addClass("currentCdot")
  $("#3button2").removeClass("currentCdot")
  $("#3button3").removeClass("currentCdot")
  $("#3button4").removeClass("currentCdot")
  $("#3button5").removeClass("currentCdot")
  $("#3button6").removeClass("currentCdot")
  $("#3button7").removeClass("currentCdot")
});

$("#3button2").click(function() {
  showCSlide(2);
  $("#3button1").removeClass("currentCdot")
  $("#3button2").addClass("currentCdot")
  $("#3button3").removeClass("currentCdot")
  $("#3button4").removeClass("currentCdot")
  $("#3button5").removeClass("currentCdot")
  $("#3button6").removeClass("currentCdot")
  $("#3button7").removeClass("currentCdot")
});

$("#3button3").click(function() {
  showCSlide(3);
  $("#3button1").removeClass("currentCdot")
  $("#3button2").removeClass("currentCdot")
  $("#3button3").addClass("currentCdot")
  $("#3button4").removeClass("currentCdot")
  $("#3button5").removeClass("currentCdot")
  $("#3button6").removeClass("currentCdot")
  $("#3button7").removeClass("currentCdot")
});

$("#3button4").click(function() {
  showCSlide(4);
  $("#3button1").removeClass("currentCdot")
  $("#3button2").removeClass("currentCdot")
  $("#3button3").removeClass("currentCdot")
  $("#3button4").addClass("currentCdot")
  $("#3button5").removeClass("currentCdot")
  $("#3button6").removeClass("currentCdot")
  $("#3button7").removeClass("currentCdot")
});

$("#3button5").click(function() {
  showCSlide(5);
  $("#3button1").removeClass("currentCdot")
  $("#3button2").removeClass("currentCdot")
  $("#3button3").removeClass("currentCdot")
  $("#3button4").removeClass("currentCdot")
  $("#3button5").addClass("currentCdot")
  $("#3button6").removeClass("currentCdot")
  $("#3button7").removeClass("currentCdot")
});

$("#3button6").click(function() {
  showCSlide(6);
  $("#3button1").removeClass("currentCdot")
  $("#3button2").removeClass("currentCdot")
  $("#3button3").removeClass("currentCdot")
  $("#3button4").removeClass("currentCdot")
  $("#3button5").removeClass("currentCdot")
  $("#3button6").addClass("currentCdot")
  $("#3button7").removeClass("currentCdot")
});

$("#3button7").click(function() {
  showCSlide(7);
  $("#3button1").removeClass("currentCdot")
  $("#3button2").removeClass("currentCdot")
  $("#3button3").removeClass("currentCdot")
  $("#3button4").removeClass("currentCdot")
  $("#3button5").removeClass("currentCdot")
  $("#3button6").removeClass("currentCdot")
  $("#3button7").addClass("currentCdot")
});

$("#3next-image").click(function() {
  nextCSlide();
});

$("#3prev-image").click(function() {
  prevCSlide();
});

const CSLIDES = $(".Cslide");
const CDOTS = $(".Cimgbutton");

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

$("#3next-image").hover(function() {
  $("#3next-image").addClass("dark");
}, function() {
  $("#3next-image").removeClass("dark");
});

$("#3prev-image").hover(function() {
  $("#3prev-image").addClass("dark");
}, function() {
  $("#3prev-image").removeClass("dark");
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
