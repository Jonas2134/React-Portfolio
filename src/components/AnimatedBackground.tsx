const AnimatedBackground = () => {
  return (
    <div className="bg-bg fixed inset-0 -z-1 transition-all">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          style={{ color: "rgb(var(--text-rgb))" }}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="40" height="40" fill="transparent" />
              <path
                d="M0 0 H40"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.06"
              />
              <path
                d="M0 0 V40"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.06"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-20 left-40 w-12 h-12 border border-text opacity-10 animate-wobble" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-text opacity-6 animate-rotate-slow" />
      <div className="absolute bottom-32 right-20 w-10 h-10 border border-text opacity-15 animate-wobble" />
      <div className="absolute top-10 right-1/4 w-8 h-8 border border-text opacity-10 animate-rotate-slow" />
      <div className="absolute top-1/4 left-10 w-14 h-14 border border-text opacity-5 animate-wobble" />
      <div className="absolute top-1/3 right-16 w-20 h-20 border border-text opacity-8 animate-rotate-slow" />
      <div className="absolute top-1/2 right-1/5 w-12 h-12 border border-text opacity-12 animate-wobble" />
      <div className="absolute bottom-1/4 left-1/6 w-10 h-10 border border-text opacity-7 animate-rotate-slow" />
      <div className="absolute bottom-12 left-1/3 w-16 h-16 border border-text opacity-9 animate-wobble" />
      <div className="absolute bottom-1/2 right-1/3 w-14 h-14 border border-text opacity-6 animate-rotate-slow" />
      <div className="absolute bottom-20 left-1/4 w-18 h-18 border border-text opacity-10 animate-wobble" />
      <div className="absolute top-1/6 left-1/2 w-8 h-8 border border-text opacity-12 animate-rotate-slow" />
      <div className="absolute top-28 right-1/2 w-10 h-10 border border-text opacity-7 animate-wobble" />
      <div className="absolute top-40 left-1/5 w-16 h-16 border border-text opacity-5 animate-rotate-slow" />
      <div className="absolute bottom-1/5 right-1/6 w-12 h-12 border border-text opacity-8 animate-wobble" />
      <div className="absolute bottom-10 right-1/2 w-20 h-20 border border-text opacity-11 animate-rotate-slow" />
      <div className="absolute top-1/12 right-12 w-14 h-14 border border-text opacity-6 animate-wobble" />
      <div className="absolute top-1/4 right-1/2 w-12 h-12 border border-text opacity-9 animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-12 w-10 h-10 border border-text opacity-8 animate-wobble" />
      <div className="absolute bottom-1/6 right-24 w-16 h-16 border border-text opacity-10 animate-rotate-slow" />
      <div className="absolute top-1/5 left-1/4 w-18 h-18 border border-text opacity-7 animate-wobble" />
    </div>
  );
};

export default AnimatedBackground;
