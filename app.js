// Highlight page 2
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        scrub: true,
        start: '-40%',
        end: '50%'
    }
})

tlH.to('.highlight', {color: 'rgba(255,255,255, 1)', stagger: 1})

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        scrub: true,
        start: '-17%',
        end: '70%'
    }
})

tlHRemove.to('.highlight', {color: 'rgba(255,255,255, 0.4)', stagger: 1})

// pin first page

const tlIntro = gsap.timeline(
    {scrollTrigger: {
        trigger: '.first-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false
    }
})

// split page 3

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        scrub: true,
        start: '-40%',
        end: '0%',
    }
})

tl3.fromTo('.large-phone', {x: '40%'}, {x: '8%'})
tl3.fromTo('.small-phone', {x: '-40%'}, {x: '0%'}, '<')
tl3.fromTo('.product-text-right',{opacity: 0}, {opacity: 1}, '<50%')
tl3.fromTo('.product-text-left',{opacity: 0}, {opacity: 1}, '<')

const pinPage3 = gsap.timeline({
        scrollTrigger: {
        trigger: '.third-page',
        pin: true,
        pinSpacing: false,
        start: '0%',
        end: '100%'
    }
})

// carousel

const swatches = document.querySelectorAll('.swatches img')
const gallery = document.querySelector('.phone-galery')
const slides = document.querySelectorAll('.phone-galery-container')

let currentSwatch = 'blue'
let topIndex = 2

swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left

    swatch.addEventListener('click', (e) => {
        let color = e.target.getAttribute('swatch')
        let closeUp = document.querySelector('.' + color)
        
        if (currentSwatch === color) return

        gsap.set(closeUp, {zIndex: topIndex})
        gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1})

        topIndex++
        currentSwatch = color

        gsap.to(gallery, {x: -coord, duration: 1, ease: "back.out(1)"})
    })
})

// fifth page

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.fifth-page',
        scrub: true,
        start: '-40%',
        end: '50%',
    }
})

tl5.fromTo('.product-video', {currentTime: 0}, {currentTime: 3})