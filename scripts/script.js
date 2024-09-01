window.onload=()=>{
let directors= document.querySelectorAll('.social-btn');
let modalContent=document.querySelector('.modal-ad .content');
let modal=document.querySelector('.modal-ad');
let modal_heading=document.querySelector('.modal-nav .heading');
let form_url="https://docs.google.com/forms/d/e/1FAIpQLScTMCtHuyuJcBoiOwtcP8i8CkXIew-wSpqU-q6kFLa7fgiIqw/viewform";

function waitForMs(ms) {

    return new Promise(resolve => setTimeout(resolve, ms))

  }
directors.forEach((e,index)=>{

	 e.onclick=function(){
let location=this.getAttribute("data");
	 	alert('moving to "'+location+'" soon' )
	 	
	 modalContent.innerHTML=`<iframe src="${form_url}"></iframe>` ;
	 modal_heading.innerHTML=this.textContent
	 modal.classList.add("active");
    
    
    // Check the userInput and navigate if needed
   /* if (userInput !== null) {
        window.location.href = 
    }*/
	 }
})
}
