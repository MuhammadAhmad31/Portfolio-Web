window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset:true
})


sr.reveal('.text-center h2',{delay:200, origin:'top'})
sr.reveal('.text-center p',{delay:200, origin:'bottom'})
sr.reveal('.row, .logos',{delay:400, origin:'top'})
