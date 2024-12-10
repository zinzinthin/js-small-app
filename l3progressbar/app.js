//UI

const getbtndownload = document.querySelector('.btn-download');
const getprogressbar = document.querySelector('.progress-bar');
const seturl = "https://linkedin.com";

getbtndownload.addEventListener('click',function(){
    ;
    let setwidth = 0;

    let setinv = setInterval(progressinc,100);

    function progressinc(){
        if(setwidth >= 100){
            clearInterval(setinv);
            //redirect
            window.location.href = seturl;

        }else{
            setwidth++;
            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
            getbtndownload.setAttribute('disabled',true);
        }

    }
});