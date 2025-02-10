import React from "react";
import { motion, Transition } from "framer-motion";
import "intl-segmenter-polyfill";
export interface RotatingTextRef {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
}
export interface RotatingTextProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.span>, "children" | "transition" | "initial" | "animate" | "exit"> {
    texts: string[];
    transition?: Transition;
    initial?: any;
    animate?: any;
    exit?: any;
    animatePresenceMode?: "sync" | "wait";
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    loop?: boolean;
    auto?: boolean;
    splitBy?: string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
}
declare const RotatingText: React.ForwardRefExoticComponent<RotatingTextProps & React.RefAttributes<RotatingTextRef>>;
export default RotatingText;
