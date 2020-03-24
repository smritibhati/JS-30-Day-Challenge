function setdate(){
    var now = new Date();
    var s = now.getSeconds();
    var sdeg = (s/60) *360;
    var shand = document.querySelector(".sec");
    shand.style.transform = `rotate(${sdeg +90}deg)` ;
    var m = now.getMinutes();
    var mdeg = (m/60) *360;
    var mhand = document.querySelector(".min");
    mhand.style.transform = `rotate(${mdeg +90}deg)` ;
    var h = now.getHours();
    var hdeg = (h/12) *360;
    var hhand = document.querySelector(".hour");
    hhand.style.transform = `rotate(${hdeg +90 + (m/60) * (360/12)}deg)` ;
}
setInterval(setdate,1000);