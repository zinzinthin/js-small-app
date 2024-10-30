//UI
const title = document.getElementsByClassName('acctitle');
const contents = document.querySelectorAll('.acccontent');
for(let x =0;  x < contents.length; x++){
	title[x].addEventListener('click', e=>{
      // console.log(title[x].textContent0.);
		//console.log(e.target);
		e.target.classList.toggle('active');
		const getcontent = e.target.nextElementSibling;
	    //console.log(getcontent.scrollHeight);
	  
	    if(getcontent.style.height){
	    	getcontent.style.height = null; // 0 is also height, so set null value
	    }else{
	    	  getcontent.style.height = getcontent.scrollHeight+"px";
	    }
	});

     if(title[x].classList.contains('active')){
		contents[x].style.height = contents[x].scrollHeight+"px";
	}
}