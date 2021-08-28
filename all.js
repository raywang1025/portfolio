$(document).ready(function(){
    console.log("ok")

    // print mousemove path
    $(document).mousemove(function(event){
        // $("span").text(event.pageX + ", " + event.pageY);
        console.log(event.pageX + ", " + event.pageY);

        // more than 720 bigger
        if (event.pageX > 720){
            console.log(">720")
            $(".square1").css('transform', 'scale(1.2)');
        }else{
        // less than 720 smaller
            console.log("<720")
            $(".square1").css('transform', 'scale(1)');
        }
        
        if (event.pageY > 350){
            console.log(">350")
            $(".square2").css('transform', 'scale(1)');
        }else{
            console.log("<350")
            $(".square2").css('transform', 'scale(0.8)');
        }
      });
    
})

    //   back to top 
const backToTop = document.querySelector('.backToTop')
    backToTop.style.opacity = 0;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    backToTop.style.opacity = 1;
  } else {
    backToTop.style.opacity = 0;
  }
}

backToTop.addEventListener('click',function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})