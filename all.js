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

    console.log("no")
})