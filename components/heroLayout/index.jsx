import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import Sidebar from '../sidebar'
import style from './heroLayout.module.css'

export default function HeroLayout({ children }){
    
    return (
        <div className={style.container}>
            <Sidebar />
            <LazyMotion features={domAnimation}>
                <AnimatePresence exitBeforeEnter={false}>
                    <m.div 
                        className={style.children}
                        initial = {{ transform: 'translateY(-100%)' }}
                        animate = {{ transform: 'translateY(0%)' }}
                        exit = {{ transform: 'translateX(100%)' }}
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
