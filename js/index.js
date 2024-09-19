const btnTop=document.querySelector('.top')


document.addEventListener('scroll',()=>{

    if (document.documentElement.scrollTop > 100) {
        
        btnTop.classList.remove('d-none');

    } else {

        btnTop.classList.add('d-none');
    }
    console.log(document.documentElement.scrollTop);
    console.log(btnTop);
    
})
btnTop.addEventListener('click',()=>{
document.documentElement.scrollTop=0    
})