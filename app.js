const imgs = document.querySelectorAll('.header-slider ul img');
const pre_Btn = document.querySelector('.control-prev');
const next_Btn = document.querySelector('.control-next');

let n = 0;
function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
};

changeSlide();

pre_Btn.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
});

next_Btn.addEventListener('click', (e) => {
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
});

const productsScroller = document.querySelectorAll('.products');
for (const items of productsScroller) {
    items.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        items.scrollLeft = items.scrollLeft + evt.deltaY;
    });
};
