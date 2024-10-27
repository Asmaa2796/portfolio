import React, { useEffect, useState, useRef, useCallback } from 'react';

const SkillProgress = ({ progress, skillBgColor }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const progressRef = useRef(null);

  const handleScroll = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setAnimatedProgress(progress);
      } else {
        setAnimatedProgress(0);
      }
    });
  }, [progress]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1
    });

    const currentRef = progressRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleScroll]);

  return (
    <div ref={progressRef} className='skill-progress-inner'>
      <div
        className="skill-perc"
        style={{
          width: animatedProgress + "%",
          backgroundColor: skillBgColor,
        }}
      ></div>
    </div>
  );
};

export default SkillProgress;
