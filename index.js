let btnClick = document.querySelectorAll(".drum")
let cur_btn

for(let i=0;i<btnClick.length;i++){
     btnClick[i].addEventListener('click',clicked)
     function clicked(e){
          cur_btn = this.textContent
          sound(cur_btn)
          btnAnimation(cur_btn)
     }
}
document.addEventListener('keydown',function(e){
     sound(e.key)
     btnAnimation(e.key)
})
function sound(key){
     switch(key){
          case 'w': var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;

          case 'a': var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;

          case 's': var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;

          case 'd': var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;

          case 'j': var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;

          case 'k': var audio = new Audio('sounds/crash.mp3');
          audio.play();
          break;

          case 'l': var audio = new Audio('sounds/kick.mp3');
          audio.play();
          break;
     }
}
function btnAnimation(btn){
     let mybtn = document.querySelector("."+btn)
     mybtn.classList.add("pressed")
     setTimeout(function(){
          mybtn.classList.remove("pressed")
     },100)
}