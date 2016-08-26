
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));


$(".trait").inViewport(function(px){
    if(px) $(this).addClass("effet_trait");
});

$(".trait2").inViewport(function(px){
    if(px) $(this).addClass("effet_trait2");
});

$(".scale").inViewport(function(px){
    if(px) $(this).addClass("effet_scale");
});

$(".opacity").inViewport(function(px){
    if(px) $(this).addClass("effet_opacity");
});

$(".left").inViewport(function(px){
    if(px) $(this).addClass("effet_left");
});

$(".left2").inViewport(function(px){
    if(px) $(this).addClass("effet_left2");
});

$(".right").inViewport(function(px){
    if(px) $(this).addClass("effet_right");
});

$(".progress_anim").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_anim");
});

$(".progress_html").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_html");
});

$(".progress_css").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_css");
});

$(".progress_php").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_php");
});

$(".progress_javascriptjquery").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_javascriptjquery");
});

$(".progress_joomla").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_joomla");
});

$(".progress_wordpress").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_wordpress");
});

$(".progress_bootstrap").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_bootstrap");
});

$(".progress_laravel").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_laravel");
});

$(".progress_angularjs").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_angularjs");
});

$(".progress_symfony").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_symfony");
});

$(".progress_photoshop").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_photoshop");
});

$(".progress_illustrator").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_illustrator");
});

$(".progress_indesign").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_indesign");
});

$(".progress_flash").inViewport(function(px){
    if(px) $(this).addClass("effet_progress_flash");
});