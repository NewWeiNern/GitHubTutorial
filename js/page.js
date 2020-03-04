class PageController{
    constructor(nav, container){
        this._store = new Store();
        this.info_status = this._store.get("info_status") || false;
        this.from = "";
        this.to = "";
        this.user = {...JSON.parse(this._store.get("user_data"))};

        this._nav = nav;
        this._container = container;

        if(!this.info_status || Object.keys(this.user).length == 0){
            nav.addClass("disable");
        }
        if(!this.info_status){
            this.from = this.setHash("#intro");
        }
        if(this.info_status && Object.keys(this.user).length == 0){
            this.from = this.setHash("#login");
        }
        if(this.info_status && Object.keys(this.user).length > 0){
            const fd = new FormData();
            fd.append("email", JSON.parse(this._store.get("user_data"))["email"]);
            fetch("php/data.php",{
                method : "POST",
                body : fd
            })
            .then(e=>e.json())
            .then(e=>{
                this.setData(e);
            });

            this.from = this.setHash("#profile");
            $("a[href='#profile']").addClass("active");
            nav.addClass("enable");
        }
    }
    userLogin(data){
        this.user = {...data};
    }
    setHash(page){
        $(".page.active").removeClass("active");
        $(page).addClass("active");
         return window.location.hash = page;
    }
    view(from, to, dir){
        const _p = this;
        
        return new Promise((resolve)=>{
            const removeClass = function(){
                resolve({from : from, to : to, dir : dir, _p : _p});
                $(this).removeClass("active");
                $(`.${dir}_in, .${dir}_out`).removeClass(`${dir}_in ${dir}_out`);
            };

            $(from).addClass(dir + "_out").one("animationend", removeClass);
            $(to).addClass(dir + "_in active");
        });
    }
    setData(data){
        const name = $("#profile.page .greet-msg h1");
        const current = $("#profile.page .total_weighed .cur h2");
        const next_reward = $("#profile.page .nxt_reward h2");
        const reward_bar = $("#profile.page img[alt='bg_total']");

        name.text(data.name);
        current.text((parseFloat(data.next_reward) - parseFloat(data.current_kg)).toFixed(1) + "kg");
        next_reward.text(parseFloat(data.next_reward).toFixed(1) + "kg");
        reward_bar.css("clip", "rect(" + (reward_bar.height() - (data.current_kg / data.next_reward) * reward_bar.height()) + "px, auto, auto, auto)");
        
        for(let i= 0; i < data.next_reward; i++){

            if(i == data.next_reward-1 && parseFloat(data.current_kg) < parseFloat(data.next_reward)){
                continue;
            }
            $(".rewards .reward-cont:nth-child(" + (i+1) + ") div.info + div")
            .css("background-color", "#37bd6b")
            .text("Redeem");
        }
    }
}
