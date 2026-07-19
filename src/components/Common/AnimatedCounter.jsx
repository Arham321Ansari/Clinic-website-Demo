import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({ end, suffix = "", duration = 2.5 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
        />
      ) : (
        0
      )}
    </div>
  );
}

export default AnimatedCounter;