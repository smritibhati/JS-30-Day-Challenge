function rmvtransition(e){
    // console.log(e);
    // if(e.propertyName!='transform')
    //     return;
    e.target.classList.remove('playing');
}
function playsound(e){
    const btn = document.querySelector(`.btnbox[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
    if(audio==null)
        return;
    audio.currentTime=0;
    audio.play();
    btn.classList.add("playing");
}

const btns = document.querySelectorAll('.btnbox');
btns.forEach(element => {
    element.addEventListener('transitionend',rmvtransition);
});

window.addEventListener('keydown',playsound);
