import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import HeroLayout from '../components/heroLayout'
import '../styles/globals.css'

export default function CustomApp({ Component, pageProps }) {

    const router = useRouter()
   
    return <div className='custom-background'>
            <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
            <m.div 
               className= 'page-container'
               initial = {{ opacity: 0 }}
               animate = {{ opacity: 1 }}
               exit = {{ opacity: 0 }}
               transition = {{ duration: 0.7 }}
               key = {router.pathname === '/' ? 'landing' : 'content'}
            >
            {
                router.pathname === '/' ?  
                <div className='page-container center-align'>
                  <Component {...pageProps} />
                </div>:
                <HeroLayout>
		  <Component key={router.pathname.replace('/','')} {...pageProps} />
                </HeroLayout>
            }
        </m.div>
        </AnimatePresence>
        </LazyMotion>
    </div>
}
