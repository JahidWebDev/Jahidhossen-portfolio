import gsap from "gsap";

export const initHeroAnimation = () => {
  // ===========================
  // Entrance Timeline
  // ===========================

  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  tl.from(".hero-front", {
    y: 180,
    opacity: 0,
    rotateX: 80,
    duration: 1.2,
  })

    .from(
      ".hero-middle",
      {
        y: 160,
        opacity: 0,
        rotateX: 70,
        duration: 1.1,
      },
      "-=0.9"
    )

    .from(
      ".hero-back",
      {
        y: 140,
        opacity: 0,
        rotateX: 60,
        duration: 1,
      },
      "-=0.8"
    )

    .from(
      ".hero-orb",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.8)",
      },
      "-=1"
    )

    .from(
      ".hero-ring",
      {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
      },
      "-=1"
    )

    .from(
      ".hero-tag",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.8"
    )

    .from(
      ".hero-heading",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    )

    .from(
      ".hero-description",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    )

    .from(
      ".hero-btn",
      {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
      },
      "-=0.5"
    );

  // ===========================
  // Floating Title
  // ===========================

  gsap.to(".hero-title", {
    y: -10,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // ===========================
  // Purple Orb Pulse
  // ===========================

  gsap.to(".hero-orb", {
    scale: 1.15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // ===========================
  // Rings Rotation
  // ===========================

  gsap.to(".hero-ring-1", {
    rotate: 360,
    duration: 18,
    repeat: -1,
    ease: "none",
    transformOrigin: "50% 50%",
  });

  gsap.to(".hero-ring-2", {
    rotate: -360,
    duration: 26,
    repeat: -1,
    ease: "none",
    transformOrigin: "50% 50%",
  });

  gsap.to(".hero-ring-3", {
    rotate: 360,
    duration: 38,
    repeat: -1,
    ease: "none",
    transformOrigin: "50% 50%",
  });

  // ===========================
  // Mouse Parallax
  // ===========================

  const move = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;

    gsap.to(".hero-title", {
      rotationY: x,
      rotationX: -y,
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(".hero-orb", {
      x: x * 2,
      y: y * 2,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".hero-ring-1", {
      x: x,
      y: y,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".hero-ring-2", {
      x: x * 1.5,
      y: y * 1.5,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(".hero-ring-3", {
      x: x * 2,
      y: y * 2,
      duration: 1.4,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", move);

  // ===========================
  // Cleanup
  // ===========================

  return () => {
    window.removeEventListener("mousemove", move);
    gsap.killTweensOf(".hero-title");
    gsap.killTweensOf(".hero-orb");
    gsap.killTweensOf(".hero-ring-1");
    gsap.killTweensOf(".hero-ring-2");
    gsap.killTweensOf(".hero-ring-3");
  };
};