import { motion } from 'framer-motion';

const FadeIn = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.75, default: { duration: 1.5 } }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            {children}
        </motion.div>
    );
};

export default FadeIn;
