/*this makes both contents of the navbar and the divider for the navbar scroll horizontally, whilst still being in fixed/absolute position*/
$(window).scroll(function(){
    $('#navcontainer').css('left','-'+$(window).scrollLeft()+'px');
});
$(window).scroll(function(){
    var scroll = +$(window).scrollLeft();
    var total = 160 - scroll;
    $('#divider').css('left',total+'px');
});
