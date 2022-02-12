var generate=document.getElementById('fine');
let url= document.getElementById('g');
var err=document.querySelector('.toast-error');
var suc=document.querySelector('.toast-success');



generate.addEventListener('click',()=>{
    if(url.value){

  suc.classList.remove('d-hide');

  chrome.storage.local.set({"API": url.value}, function() {
    console.log('Value is set to ' + url.value);
  });
     


    }





    
    else{
        err.classList.remove('d-hide');
      setTimeout(()=>{
        err.classList.add('d-hide');
      },1600)


    }
})
//89ja4oQPl7SOaBZhYmNj4wXzYf0w6mGGRSExRZzgWjRRZTo73HzLTlaMo7oz