const preloader = document.getElementById('preloader');
  setTimeout(function(){
   preloader.classList.add('done');
   setTimeout(function(){ preloader.remove();},600);
  },2000);

