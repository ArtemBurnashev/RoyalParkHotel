const preloader = document.getElementById('preloader');
window.addEventListener('load', function(){
  setTimeout(function(){
   preloader.classList.add('done');
   setTimeout(function(){ preloader.remove();},300);
  },1000);});

