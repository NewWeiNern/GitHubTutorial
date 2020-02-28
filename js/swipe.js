function swipe(parent){
    const swipeAction = function(){
        const h = new Hammer(this);
        h.get("swipe").set({direction : Hammer.DIRECTION_ALL});
        h.on("swipeleft swiperight", e=>{
            let index;
            if($(this).parent().children(".active").length > 1){return;}
            switch(e.type){
                case "swipeleft":
                    if($(this).next().length == 0 || !$(this).next().hasClass("content")){
                        break;
                    }else{
                        index = $(this).next();
                        $(this)
                        .next()
                        .addClass("active")
                        .css("left", "100%")
                        .animate({left : 0});

                        $(this)
                        .animate({left : "-100%"}, ()=>$(this).removeClass("active"));
                    }
                break;
                case "swiperight":
                    if($(this).prev().length == 0){
                        break;
                    }else{
                        index = $(this).prev();

                        $(this)
                        .prev()
                        .addClass("active")
                        .css("left", "-100%")
                        .animate({left : 0});

                        $(this)
                        .animate({left : "100%"},()=>$(this).removeClass("active"));

                    }
                break;
            }

            if(index){
                $(".dot-indicator span").removeClass("active");
                $(".dot-indicator span:nth-child("+ (index.index() + 1) + ")").addClass("active");
                if(index.index() == 2){
                    $("#onboarding #sp-btn").css("bottom", 0);
                }
                else{
                    $("#onboarding #sp-btn").css("bottom", "-100%");
                }
            }
        });
    }

    $(parent).children(".content").each(swipeAction);
}