"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const step = target / 125;
          let cur = 0;
          const iv = setInterval(() => {
            cur += step;
            if (cur >= target) {
              setCount(target);
              clearInterval(iv);
            } else {
              setCount(Math.floor(cur));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <div className="text-3xl font-bold text-white counter">{count}+</div>
      <div className="text-primary-300 text-sm">{label}</div>
    </div>
  );
}
