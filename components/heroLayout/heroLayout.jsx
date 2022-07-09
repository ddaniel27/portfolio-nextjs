import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import Sidebar from '../sidebar/sidebar'
import style from '../../styles/heroLayout.module.css'

export default function HeroLayout({ children }){
    
    return (
        <div className={style.container}>
            <Sidebar />
            <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter={false}>
                    <m.div 
                        className={style.children}
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}
                        exit = {{ opacity: 0 }}
                        transition = {{ duration: 0.7 }}
                        key = {children.key}
                    >
                        {children}
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
        </div>
    )
}