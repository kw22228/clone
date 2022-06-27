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
