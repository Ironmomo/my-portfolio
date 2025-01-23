import './styles/style.scss'
import TypeWriter from "./TypeWriter.js";

const tw1 = new TypeWriter(["Engineer", "Designer", "Architect"], 150, "profession")
tw1.write()

gsap.registerPlugin(ScrollTrigger)

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