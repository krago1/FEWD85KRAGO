

$('.article-more1').hide()

$('.read-less1').hide()

$('.article-more2').hide()

$('.read-less2').hide()

$('.about-more').hide()

$('.learn-less').hide()

function articleMore1Show() {
  $(".article-more1").show('')
  $(".read-less1").show('')
  $(".read-more1").hide('')
}

$(".read-more1").click(articleMore1Show);

function articleMore1Hide() {
  $(".article-more1").hide('')
  $(".read-less1").hide('')
  $(".read-more1").show('')
}

$(".read-less1").click(articleMore1Hide);

function articleMore2Show() {
  $(".article-more2").show('')
  $(".read-less2").show('')
  $(".read-more2").hide('')
}

$(".read-more2").click(articleMore2Show);

function articleMore2Hide() {
  $(".article-more2").hide('')
  $(".read-less2").hide('')
  $(".read-more2").show('')
}

$(".read-less2").click(articleMore2Hide);

function aboutMoreShow() {
  $(".about-more").show('')
  $(".learn-less").show('')
  $(".learn-more").hide('')
}

$(".learn-more").click(aboutMoreShow);

function aboutMoreHide() {
  $(".about-more").hide('')
  $(".learn-less").hide('')
  $(".learn-more").show('')
}

$(".learn-less").click(aboutMoreHide);