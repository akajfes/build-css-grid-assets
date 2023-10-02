let btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', function(){
    document.querySelector('.top-nav').classList.toggle('show-nav');
    let expanded = this.getAttribute('aria-expanded') == 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});