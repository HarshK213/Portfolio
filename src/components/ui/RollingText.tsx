"use client";

export const title = "Rolling Text";

import {
  motion,
  type Transition,
  type UseInViewOptions,
  useInView,
} from "motion/react";
import * as React from "react";

const formatCharacter = (char: string) => (char === " " ? "\u00A0" : char);

type RollingTextProps = Omit<React.ComponentProps<"span">, "children"> & {
  transition?: Transition;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
  text: string;
  active?: boolean;
};

function RollingText({
  ref,
  transition = { duration: 0.2, delay: 0.1, ease: "linear" },
  inView = false,
  inViewMargin = "0px",
  inViewOnce = true,
  text,
  active,
  ...props
}: RollingTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(ref as undefined, () => localRef.current!);

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });
  const isInView = active !== undefined ? active : !inView || inViewResult;

  // const characters = React.useMemo(() => text.split(""), [text]);
  const characters = React.useMemo(() => text.split(""), [text]);

  const itemVariants1 = {
    initial: { rotateX: 0 },
    active: { rotateX: 180 },
  };

  const itemVariants2 = {
    initial: { rotateX: -180 },
    active: { rotateX: 0 },
  };

  return (
    <span data-slot="rolling-text" {...props} ref={ref}>
      {characters.map((char, idx) => (
        <span
          aria-hidden="true"
          className="relative inline-block perspective-[9999999px] transform-3d w-auto"
          key={idx}
        >
          <motion.span
            variants={itemVariants1}
            animate={isInView ? "active" : "initial"}
            className="absolute inline-block backface-hidden origin-[50%_25%]"
            transition={{
              ...transition,
              delay: idx * (transition?.delay ?? 0),
            }}
          >
            {formatCharacter(char)}
          </motion.span>
          <motion.span
            variants={itemVariants2}
            animate={isInView ? "active" : "initial"}
            className="absolute inline-block backface-hidden origin-[50%_100%]"
            transition={{
              ...transition,
              delay: idx * (transition?.delay ?? 0),
            }}
          >
            {formatCharacter(char)}
          </motion.span>
          <span className="invisible">{formatCharacter(char)}</span>
        </span>
      ))}

      <span className="sr-only">{text}</span>
    </span>
  );
}

export { RollingText, type RollingTextProps };
export default RollingText;
