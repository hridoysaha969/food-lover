var gallery =new SimpleLightbox('.gallery a', {
    sourceAttr:'href',
    overlay:true,
    spinner:true,
    nav:true,
    close:true,
    closeText:'X',
    captions: true,
    captionDelay: 0,
    captionSelector: 'img',
    captionType: 'attr',
    captionPosition: 'bottom',
    captionClass: '',
});

let hamberger = document.getElementById('hamberger');
let mobileMenu = document.getElementById('mobileMenu');
let times = document.getElementById('times');

hamberger.addEventListener('click', function() {
    mobileMenu.classList.add('show')
})
times.addEventListener('click', function() {
    mobileMenu.classList.remove('show')
})
