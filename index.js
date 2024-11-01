var len=document.querySelectorAll(".drum").length;
/*
for(var i=0;i<len;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",function fun(){
    alert("hello");
   });
}
*/
for(var i=0;i<len;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      buttoninnerhtml=this.innerHTML;
      make_sound(buttoninnerhtml);
      buttonanimation(buttoninnerhtml);
   })
}
/*
for(var i=0;i<len;i++)
{
   document.querySelectorAll("button")[i].addEventListener("click",function(){
      //this.style.color="orange";
      buttoninnerhtml=this.innerHTML;
      switch(buttoninnerhtml) {
         case 'w':var audio=new Audio('sounds/crash.mp3');
                  audio.play();
               break;
         case 'a':var audio=new Audio('sounds/kick-bass.mp3');
                  audio.play();
               break;   
         case 's':var audio=new Audio('sounds/snare.mp3');
                  audio.play();
               break;
         case 'd':var audio=new Audio('sounds/tom-1.mp3');
                  audio.play();
               break;   
         case 'j':var audio=new Audio('sounds/tom-2.mp3');
                  audio.play();
               break;
         case 'k':var audio=new Audio('sounds/tom-3.mp3');
                  audio.play();
               break;   
         case 'l':var audio=new Audio('sounds/tom-2.mp3');
                  audio.play();
               break;         
         default:console.log(buttoninnerhtml);
            break;
      }
   });
}
*/
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
      default://console.log(key);
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
/*
document.addEventListener("keydown",function(event) {
   //alert("key was pressed");
   console.log(event);
})
   */

/*function audio_play()
{
  var audio=new Audio('sounds/tom-3.mp3');
  audio.play();
}
  */
//document.querySelector("button").addEventListener("click",fun);

//function fun(){
//    alert("I got clicked");
//}
