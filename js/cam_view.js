const video = {
    options : {
        video : document.getElementById("cam_vid"),
        continuous : true,
        mirror : false,
        captureImage : false,
        backgroundScan : true,
        refractoryPeriod : 5000,
        scanPeriod : 1
    },
    camera_scanner : null,
    init(){
        this.camera_scanner = new Instascan.Scanner(this.options);
        
    }
};

console.log(video.camera_options);


