/**
 * Created by CeShang on 2016/3/8.
 */
$("#talk").click(function(){
    var talk = confirm("Are you sure you want to talk to us?");
    if(talk == true){
        window.open("https://microventures.com");
    }
    else{
    }
});
$(".nav-item li").click(function(){
    $(".nav-item li.current").removeClass("current");
    $(this).addClass("current");
});

