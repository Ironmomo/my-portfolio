import './styles/style.scss'
import TypeWriter from "./TypeWriter.js";
import './imageLoader.js'
import './downloadLoader.js'

const tw1 = new TypeWriter(["Engineer", "Designer", "Architect"], 150, "profession")
tw1.write()

gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
    scrollTrigger: {
        trigger: '.work-title',
        start: 'center center',
        end: '+=1200',
        scrub: true,
        pin: true
    }
})
    .fromTo('.work-title',
        { opacity: 0 },
        { opacity: 1 }
    )

gsap.utils.toArray('.work article').forEach((article) => {
    gsap.from(article, {
        scrollTrigger: {
            trigger: article,
            start: 'top 75%'
        },
        opacity: 0,
        x: '-100%',
        duration: 1
    })
})

gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-title',
        start: 'center center',
        end: '+=1200',
        scrub: true,
        pin: true
    }
})
    .fromTo('.projects-title',
        { opacity: 0 },
        { opacity: 1 }
    )

gsap.to('.work-progress', {
    scrollTrigger: {
        // start animation when in viewport
        trigger: '.work',
        // when to start (triggerElement, position in viewport)
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    },
    // animation
    css: {
        '--s': '100%',
    },
    ease: 'none'
});

gsap.to('.projects-progress', {
    scrollTrigger: {
        // start animation when in viewport
        trigger: '.projects',
        // when to start (triggerElement, position in viewport)
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
    },
    // animation
    css: {
        '--s': '100%',
    },
    ease: 'none'
});

gsap.timeline({
    scrollTrigger: {
        trigger: '.education-title',
        start: 'center center',
        end: '+=1200',
        scrub: true,
        pin: true
    }
})
    .fromTo('.education-title',
        { opacity: 0 },
        { opacity: 1 }
    )

gsap.to('.work-hexagon', {
    scrollTrigger: {
        // start animation when in viewport
        trigger: '.work',
        // how does the animation behave when scrolling out and in again
        toggleActions: "restart pause restart reset",
        // when to start (triggerElement, position in viewport)
        start: "top bottom",
        end: "bottom top",
    },
    // animation
    background: 'var(--accent-color)'
})

gsap.to('.projects-hexagon', {
    scrollTrigger: {
        // start animation when in viewport
        trigger: '.projects',
        // how does the animation behave when scrolling out and in again
        toggleActions: "restart pause restart reset",
        // when to start (triggerElement, position in viewport)
        start: "top bottom",
        end: "bottom top",
    },
    // animation
    background: 'var(--accent-color)'
})

gsap.to('.education-hexagon', {
    scrollTrigger: {
        // start animation when in viewport
        trigger: '.education',
        // how does the animation behave when scrolling out and in again
        toggleActions: "restart pause restart reset",
        // when to start (triggerElement, position in viewport)
        start: "top bottom",
        end: "bottom top",
    },
    // animation
    background: 'var(--accent-color)'
})