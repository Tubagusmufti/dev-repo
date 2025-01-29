//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// burger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-activ');
    navMenu.classList.toggle('hidden');
});


//klik luar burger
window.addEventListener('click', function (e){
    if (e.target != burger && e.target != navMenu) {
        burger.classList.remove('burger-activ');
        navMenu.classList.add('hidden');
    }
});


document.addEventListener("DOMContentLoaded", function (){
    new TypeIt("#ty", {
        waitUntilVisible: true,
      })
        .type("")
        .exec(async () => {
          //-- Return a promise that resolves after something happens.
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve();
            }, 1000);
          });
        })
        .type("")
        .go();

    })