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
}
