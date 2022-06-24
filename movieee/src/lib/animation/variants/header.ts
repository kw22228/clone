import { Variants } from 'framer-motion';

export const logoVariants: Variants = {
    normal: {
        fillOpacity: 1,
    },
    active: {
        fillOpacity: [1, 0.5, 1],
        transition: {
            repeat: Infinity,
        },
    },
};

export const navVariants: Variants = {
    top: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    scroll: {
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
};
