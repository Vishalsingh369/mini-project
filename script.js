const acordians=document.querySelectorAll('.acordian');

acordians.forEach(acordian=>{
    const icon=acordian.querySelector('.icon');
    const answer=acordian.querySelector('.answer');

    acordian.addEventListener('click',()=>{
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.classList.remove('active');
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight=answer.scrollHeight+'px';
        }
    })
})
