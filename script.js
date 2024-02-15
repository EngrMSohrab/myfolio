// toggle icon    navbar
let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};
 



// scroll section active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top > offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };

    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon when scroling

    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');

};

//scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100,
    
});
ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


// typed js 

const typed = new Typed('.multiple-text',{
strings: ['An Embeded Systems Engineer', 'A VLSI & FPGA Expert','A Verilog/VHDL/SV Expert','A SOC & An IC designer','An Author'],
typeSpeed:100,
backSpeed:100,
backDelay:100,
loop:true



});

//smtp js contactform




