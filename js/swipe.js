function swipe(parent){
    const animate = function(dir){
        $(`.${dir}_out`).removeClass("active");
        $(`.${dir}_in, .${dir}_out`).removeClass(`${dir}_in ${dir}_out`);
    };

    const swipeAction = function(){
        const h = new Hammer(this);
        h.get("swipe").set({direction : Hammer.DIRECTION_ALL});
        h.on("swipeleft swiperight",e=>{
            let index;
            if($(this).parent().children(".active").length > 1){return;}
            switch(e.type){
                case "swipeleft" : 
                    if(
                        $(this).next().length == 0 || 
                        !$(this).next().hasClass("content")
                    ){
                        break;
                    }else{
                        index = $(this).next();
                        $(this).addClass("left_out").on("animationend", animate.bind(null, "left"));
                        $(this).next().addClass("left_in active");
                    }
                break;
                case "swiperight" : 
                    if($(this).prev().length == 0){
                        break;
                    }
                    else{
                        index = $(this).prev();
                        $(this).addClass("right_out").on("animationend", animate.bind(null, "right"));
                        $(this).prev().addClass("right_in active");
                    }
                break;
            }

            if(index){
                $(".dots-cont span").removeClass("active");
                $(`.dots-cont span:nth-child(${index.index()+1})`).addClass("active");
                if(index.index() == 2){
                    $("#onboard .special_btn").css("bottom", 0);
                }
                else{
                    $("#onboard .special_btn").css("bottom", "-100%");
                }
            }
        });
    }
    parent.children(".content").each(swipeAction);
    $("#onboard .special_btn").click(function(){
        const data = val=>$(this).data(val);
        page._store.set("info_status", true);
        page.view(data("from"), data("to"), "left").then(e=>e._p.setHash(e.to));
    });
}