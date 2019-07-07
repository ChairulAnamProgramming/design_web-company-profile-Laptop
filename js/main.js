$(document).ready(function(){

  const slider = $('.slider');
  const dot = $('.dot');

  var slideIndex = 1;
  showImage(slideIndex);

  $('.next').on('click', ()=>{
    var n = 1;
    showImage(slideIndex += n);
  });

  $('.prev').on('click', ()=>{
    var n = 1;
    const dots = $('.dot');


    showImage(slideIndex -= n);
  });

  $('.btn .dot').on('click',function(){
    const dot = $(this).attr('number');

    $('.dot').removeClass('active-dot');
    $(this).addClass('active-dot');

    showImage(slideIndex = dot);
  });



  function showImage(n){
    const slide = $('.slide');
    if (n > slide.length) { slideIndex =1 }
    if (n < 1) { slideIndex = slide.length}

    for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";


    }
    slide[slideIndex-1].style.display = "block";
  }



});
