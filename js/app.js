// This waits till the page finishes loading before running the code inside the {}
// $(document).ready(function() {

  console.log("If you see this message, jQuery is working.")

  $(document).ready(function(){
    $('.bxslider').bxSlider({
      slideWidth: 450
    });
  });
