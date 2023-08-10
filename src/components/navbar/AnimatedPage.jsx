import { motion } from "framer-motion"
import '../../scss/animatedpage.scss'

export const AnimatedPage = ({ children }) => {

    const animations = {
        initial: { opacity: 0, x: 0, },
        animate: { opacity: 1 },
        exit: { opacity: 0, x: 0 }
    }

    return (
        <motion.div className="animated-div" variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}
