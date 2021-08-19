
window.addEventListener("DOMContentLoaded", function () {


const header =  document.querySelector('header');
window.addEventListener('scroll' , ()=>{
   if(window.innerWidth>767){ 
     if(parseInt(pageYOffset)>50){
        header.style.backgroundColor = '#f7f7f7';
     }
     else{
        header.style.backgroundColor = '';
     }
    }
});


const burger = document.querySelector('.menu-burger'),
      menu = document.querySelector('.menu');
      span = burger.querySelectorAll('span');


if(burger){
burger.addEventListener("click", ()=>{

    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  
});
}


const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 110;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
    let scrollBy = coordY / framesCount;
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});




const accommodations = document.querySelectorAll('.col-item'),
      accommodationsBtn = document.querySelector('.accommodations__all');
    
for(let i=4; i<accommodations.length; i++)
{
    accommodations[i].style.display = 'none';
}

accommodationsBtn.addEventListener('click',()=>{

    for(let i=4; i<accommodations.length; i++)
    {
        accommodations[i].style.display = 'block';
    }
    accommodationsBtn.style.display = 'none';

    
});


const input = document.querySelectorAll('input'),
      errorMessage = document.querySelectorAll(".error-mess"),
      submitEmail = document.querySelectorAll(".submit__btn");


input.forEach((email, index)=>{
    email.addEventListener("input" ,()=>{
        if (!validate(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        email)) { validError(email, errorMessage[index], "* Enter correct email address");
    } else {
            validDone(email, errorMessage[index], "");
            submitEmail[index].disabled = false;
            submitEmail[index].style.backgroundColor = '#1B75BB';
            submitEmail[i].disabled = true;
            submitEmail[i].style.backgroundColor = "#87ceeb";

    }
    });
});

submitEmail.forEach((s,i)=>{
    s.addEventListener('click', (e)=>{
        e.preventDefault(); 
        input[i].value = '';
        input[i].style.border = '1px solid rgba(0, 0, 0, 0.25)';
    });
});



function validate(reg, input) {
    return reg.test(input.value);
}

function validError(input, span, message) {
  input.classList.add("is-invalid");
  span.textContent = message;
  input.style.border = '1px solid red';
}

function validDone(input, span, message) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  span.textContent = message;
  input.style.border = '1px solid green';
}


const  items = document.querySelectorAll('.reviews-item'),
       wrapper = document.querySelector('.reviews__wrapper');


couruselSlider(wrapper, items);

window.addEventListener('resize', (event)=>{
    if(window.innerWidth > 767.5){
        wrapper.style.transform = `translateX(${0}%)`;
    }
    
    
});


function couruselSlider(wrapper, elem){
   let counter = 0;
   elem.forEach((item, index)=>{ 
    item.addEventListener('click' ,function func(){
        if(window.innerWidth<767.5){ 
        const active = document.querySelector('.reviews-item._active');
        if(!item.classList.contains('_active'))
        {  
            if(index>counter){
            counter+=1;
        }else{
            counter-=1;
        }
        wrapper.style.transform = `translateX(${-26 * counter}%)`;
        active.classList.remove('_active');
        item.classList.add('_active');
        }  
    }
      });         
    });
}});
