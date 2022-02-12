var generate=document.getElementById('submit');
let url1= document.getElementById('g');
var err=document.querySelector('.toast-error');
var suc=document.querySelector('.toast-success');

const url = new URL("https://t.ly/api/v1/link/shorten");

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}
generate.addEventListener('click',()=>{
    if(url1.value){
        chrome.storage.local.get(['API'], function(result) {
            let body = {
                "long_url":url1.value ,
                "domain": "https://t.ly/",
                "api_token": result.API 
            }
            
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(json => {
                    suc.classList.remove('d-hide');
                    suc.textContent=json.short_url;
                });
   
          });

  
  

  
  


    }





    
    else{
        err.classList.remove('d-hide');
      setTimeout(()=>{
        err.classList.add('d-hide');
      },1600)


    }
})