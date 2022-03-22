$(function(){

    $(window).on("scroll",function(){
        if($(this).scrollTop() > 80){
            $("header").addClass("sticky");
        }
        else{
            $("header").removeClass("sticky");
        }
    });


    $(".card").on("mouseenter",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    
    $(".grid-item").each(function(){
        var itemTitle = $(".grid-item-title");
        // Add a class on mouse enter in the grid-item
        $(this).on("mouseenter",function(){
            if($(this).data("title")){

                itemTitle.html("<span>" + $(this).data("title") + "</span>");
                itemTitle.addClass("visible");
            }

            $(document).on("mousemove",function(e){
                itemTitle.css({
                    left: e.clientX - 10,
                    top: e.clientY + 25,
                });             
            });
        });

        
        $(this).on("mouseleave",function(){
            itemTitle.removeClass("visible");
        });
    });

    
});