$(window).resize(function () {
  var scrwidth = $(window).width();
  if (scrwidth < 800) {
    var itemheight = scrwidth * (2 / 3);
    $('.item>img').css('height', itemheight);
    $('#ta .panel-default').css('height', 'auto');
    $('.item a>img').css('height', 'auto');
    // $('#home .panel-default .panel-heading .bxslider img,').css('height','auto');
  }
  else {
    $('.item>img').css('height', '570px');
    $('#ta .panel-default').css('height', '440px');
    // $('#tab-shan .panel-default .panel-heading .bxslider img').css('height','570px')';'
    $('.item a>img').css('height', '477px');
  }
})
$(document).ready(function () {
  scrolltop = $(window).scrollTop();

  if (scrolltop < 100) {
    $("#scrolltop").hide();
  }

  $(window).scroll(function () {
    scrolltop = $(window).scrollTop();

    if (scrolltop < 100) {
      $("#scrolltop").hide('slow');
    }
    else {
      $("#scrolltop").show('slow');
    }
  });
  var scrwidth = $(window).width();
  if (scrwidth < 800) {
    var itemheight = scrwidth * (2 / 3);
    $('.item>img').css('height', itemheight);
    $('#ta .panel-default').css('height', 'auto');
    $('.item a>img').css('height', 'auto');
    // $('#tab-shan .panel-default .panel-heading .bxslider img').css('height','auto');
  }
  else {
    $('.item>img').css('height', '570px');
    $('#ta .panel-default').css('height', '440px');
    $('.item a>img').css('height', '477px');
    // $('#tab-shan .panel-default .panel-heading .bxslider img').css('height','570px');
  }
  $("#home").show("slide", 2000);

  $("#nav-home").click(function () {
    $("#fp,#um,#lm,#tq,#contact,#ta,#about,#festival").css({
      "display": "none"
    });
    $("#home").show("clip", 1000);
    $("#nav-fp,#nav-contact,#nav-ta,#nav-about,#nav-tq").removeClass("active");
    $("#nav-home").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#card-um,#nav-um").click(function () {
    $("#home,#fp,#lm,#tq,#contact,#ta,#about,#festival").css({
      "display": "none"
    });
    $("#um").show("clip", 1000);
    $("#nav-home,#nav-contact,#nav-ta,#nav-about,#nav-tq").removeClass("active");
    $("#nav-fp").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#card-lm,#nav-lm").click(function () {
    $("#home,#fp,#um,#tq,#contact,#ta,#about,#festival").css({
      "display": "none"
    });
    $("#lm").show("clip", 1000);
    $("#nav-home,#nav-contact,#nav-ta,#nav-about,#nav-tq").removeClass("active");
    $("#nav-fp").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#nav-contact,#card-contact").click(function () {
    $("#home,#fp,#um,#tq,#lm,#ta,#about,#festival").css({
      "display": "none"
    });
    $("#contact").show("clip", 1000);
    $("#nav-fp,#nav-home,#nav-ta,#nav-tq,#nav-about").removeClass("active");
    $("#nav-contact").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#nav-ta,#card-ta").click(function () {
    $("#home,#fp,#um,#tq,#contact,#lm,#about,#festival").css({
      "display": "none"
    });
    $("#ta").show("clip", 1000);
    $("#nav-fp,#nav-home,#nav-contact,#nav-about,#nav-tq").removeClass("active");
    $("#nav-ta").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#nav-tq,#card-tq").click(function () {
    $("#home,#fp,#um,#ta,#contact,#lm,#about,#festival").css({
      "display": "none"
    });
    $("#tq").show("clip", 1000);
    $("#nav-fp,#nav-home,#nav-ta,#nav-about,#nav-contact").removeClass("active");
    $("#nav-tq").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#nav-about,#card-about").click(function () {
    $("#home,#um,#lm,#tq,#contact,#ta,#fp,#festival").css({
      "display": "none"
    });
    $("#about").show("clip", 1000);
    $("#nav-home,#nav-contact,#nav-ta,#nav-tq,#nav-fp").removeClass("active");
    $("#nav-about").addClass("active");
    // $(this).effect("bounce",10);
    $('.collapse').collapse('hide');
    $("#top>.navbar-default .navbar-brand span").effect("shake", 5);
  });

  $("#card-fastival").click(function () {
    window.location.href = "https://www.myanmartour.com/top_important_festival_in_myanmar_n129.html";
  });

  $("#card-hotel").click(function () {
    window.location.href = "https://bookmyanmarhotels.com/";
  });

  $("#card-bus").click(function () {
    window.location.href = "https://myanmarbusticket.com/";
  });

});


function openNav1() {
  document.getElementById("mySidenav1").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

// Start footer animation
//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  // var elements = document.getElementsByClassName('typewrite');
  var elements = $("#footer h1 >.typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "#footer h1 >.typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
    // end footer animation