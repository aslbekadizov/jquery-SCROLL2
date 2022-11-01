    // $(function(){


    //     $(window).scroll(function(){


    //         var scroll = $(this).scrollTop();
            
    //         if(scroll > 250){
    //             $('#top').fadeIn();
    //         }
    //         else{
    //             $('#top').fadeOut();
    //         }
    //     })
    
    
    
    //     $('#top').click(function(){
    //         $('html, body').animate({
    //             scrollTop: 0
    //         }, 500)
    //     })
    // })
    
$(function () {
    

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop()
        console.log($scroll)
        if($scroll > 300){
            $('#top').fadeIn()
        }
        else{
            $('#top').fadeOut()
        }
      })
      $('#top').click(function () {  
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
      })


});