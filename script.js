//controlls the events triggered by scroll
function debounce(fn,wait = 200){
  let timeout;
  return function(){
    clearTimeout(timeout);
    timeout = setTimeout(() =>{fn.apply(this,arguments)},wait);
  }
}

const images = document.querySelectorAll('img');

function slideInCheck(){
  images.forEach(img=>{
    const positionAt = (window.scrollY + window.innerHeight) - img.height/2;

    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = positionAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
      img.classList.add('slideIn');
    }
  });
}
window.addEventListener('scroll',debounce(slideInCheck));


