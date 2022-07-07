import { useEffect, useRef } from 'react'
import Header from '../components/prefix/header'
import Footer from '../components/prefix/footer'
import ThreeController from "../components/three/three"
import '../styles/globals.css'

export default function CustomApp({ Component, pageProps }) {
    const divRef = useRef(null)
    
    useEffect(() => {
        if(divRef.current){
            console.log('Here')
            ThreeController(divRef.current)
        }
    }, [])

    return <div ref={divRef} className='custom-background'>
        <div className='page-container center-align'>
            <Component {...pageProps} />
        </div>
    </div>
}