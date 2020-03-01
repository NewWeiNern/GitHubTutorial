class Store{
    constructor(){}
    set(key,val){
        localStorage.setItem(key,val);
        return val;
    }
    get(key){
        return localStorage.getItem(key);
    }
    delete(key = ""){
        if(key == "")
            localStorage.clear();
        else
            localStorage.removeItem(key);
    }
}