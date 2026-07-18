
console.log("JS Loaded");

gsap.registerPlugin(ScrollTrigger);
console.log("JS Loaded");

const tl = gsap.timeline();

tl.from(".brand", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
})

.from(".navbar", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.6")

.from(".line", {
    y: 80,
    opacity: 0,
    stagger: 0.15,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.3")

.from(".hero-para", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.7")

.from(".btn", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.4");






gsap.from(".topleft", {
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".outercard",
    start: "top 75%",
  }
});

gsap.from(".topright", {
  x: 120,
  opacity: 0,
  duration: 1.2,
  delay: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".outercard",
    start: "top 75%",
  }
});

gsap.from(".bottomleft", {
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".bottomleft",
    start: "top 85%",
  }
});

gsap.from(".bottomright", {
  x: 120,
  opacity: 0,
  duration: 1.2,
  delay: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".bottomright",
    start: "top 85%",
    
  }
});



const stackTl = gsap.timeline({
  scrollTrigger:{
    trigger:".timeline-section",
    start:"top top",
    end:"+=3000",
    pin:true,
    scrub:4
  }
});

stackTl
.to(".card2",{ y:0,duration:1 })
.to(".card3",{ y:0,duration:1  })
.to(".card4",{ y:0,duration:1  })
.to(".card5",{ y:0,duration:1  })
.to(".card6",{ y:0,duration:1  });

// gsap.registerPlugin(ScrollTrigger);

// let tlCards = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".timeline-section",
//     start: "top top",
//     end: "+=3000",
//     scrub: 1,
//     pin: true
//   }
// });

// tlCards
// .to(".card2", { y: -500 })
// .to(".card3", { y: -500 })
// .to(".card4", { y: -500 })
// .to(".card5", { y: -500 })
// .to(".card6", { y: -500 });


// gsap.from(".card2",{
//     y:600,
//     scrollTrigger:{
//         trigger:".timeline-section",
//         start:"top center",
//         end:"+=300",
//         scrub:true
//     }
// });

// gsap.from(".card3",{
//     y:700,
//     scrollTrigger:{
//         trigger:".timeline-section",
//         start:"top center+=200",
//         end:"+=300",
//         scrub:true
//     }
// });

// gsap.from(".card4",{
//     y:800,
//     scrollTrigger:{
//         trigger:".timeline-section",
//         start:"top center+=400",
//         end:"+=300",
//         scrub:true
//     }
// });

// gsap.from(".card5",{
//     y:900,
//     scrollTrigger:{
//         trigger:".timeline-section",
//         start:"top center+=600",
//         end:"+=300",
//         scrub:true
//     }
// });

// gsap.from(".card6",{
//     y:1000,
//     scrollTrigger:{
//         trigger:".timeline-section",
//         start:"top center+=800",
//         end:"+=300",
//         scrub:true
//     }
// });

// gsap.to(".card6",{
//     x:200,
//     duration:2
// });

