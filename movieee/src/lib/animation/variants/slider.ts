import { Variants } from 'framer-motion';

export const rowVariants: Variants = {
    hidden: (domWidth: number) => ({
        x: domWidth,
    }),
    visible: {
        x: 0,
    },
    exit: (domWidth: number) => ({
        x: -domWidth,
    }),
};

export const boxVariants: Variants = {
    normal: {
        scale: 1,
        type: 'tween',
    },
    hover: {
        scale: 1.3,
        y: -100,
        transition: {
            delay: 0.5,
            type: 'tween',
        },
    },
};

export const infoVariants: Variants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            type: 'tween',
        },
    },
};
