



// jqurey 


  $(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });


    
 


    $(".count").each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 4000,
                  easing:"swing",
                  step:function (now) {
                    now = Number(Math.ceil(now)).toLocaleString('en');
                  $(this).text(now);
                  },
                }
              );
    });
      

    $('.counterf').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
  
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
  
      {
  
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    }); 





  });



  