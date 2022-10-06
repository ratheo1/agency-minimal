const play = document.querySelector('.play-video');
const exit = document.querySelector('.popup-video span');
const image = document.querySelector('.popup-video');

play.addEventListener('click', ()=>{
    image.style.display='block';
})

exit.addEventListener('click', ()=>{
    image.style.display='none';
})