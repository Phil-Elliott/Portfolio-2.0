import { gsap } from "gsap";

export const Animate = (ref, q) => {
  const el = ref;
  gsap.fromTo(
    q(".animate"),
    {
      duration: 0.5,
      opacity: 0,
      y: 25,
      stagger: 0.2,
      ease: "power3.out",
    },
    {
      opacity: 1,
      duration: 0.75,
      y: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top center" },
    }
  );
};

export const SimpleAnimate = (ref) => {
  const el = ref;
  gsap.fromTo(
    el,
    {
      duration: 0.5,
      opacity: 0,
      y: 25,
      stagger: 0.2,
      ease: "power3.out",
    },
    {
      opacity: 1,
      duration: 0.75,
      y: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top center" },
    }
  );
};

export const AboutAnimate = (ref) => {
  const el = ref;
  gsap.fromTo(
    el,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );
};
