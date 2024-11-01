var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      buttoninnerhtml=this.innerHTML;
      make_sound(buttoninnerhtml);
      buttonanimation(buttoninnerhtml);
   })
}

document.addEventListener("keydown",function(event){
   make_sound(event.key);
   buttonanimation(event.key);
})
function make_sound(key)
{
   switch(key)
   {
      case 'w':var audio=new Audio('crash.mp3');
               audio.play();
               break;
      case 'a':var audio=new Audio('kick-bass.mp3');
               audio.play();
               break;
      case 's':var audio=new Audio('snare.mp3');
               audio.play();
               break;
      case 'd':var audio=new Audio('tom-1.mp3');
               audio.play();
               break;
      case 'j':var audio=new Audio('tom-2.mp3');
               audio.play();
               break;
      case 'k':var audio=new Audio('tom-3.mp3');
               audio.play();
               break;
      case 'l':var audio=new Audio('tom-4.mp3');
               audio.play();
               break;
      default:
      alert(key +" is not valid");
      break;
   }
}
function buttonanimation(key)
{
   var activebutton=document.querySelector("."+key);
   activebutton.classList.add("pressed");
   setTimeout(function(){
      activebutton.classList.remove("pressed");
   }, 100);
}

