import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/presentation.module.css'
export default function Presentation(){
    return <div className={style.container}>
        <h1>Daniel Dorado</h1>
        <div className={style.textContainer}>
            <p className={style.fullerrorText}><span>Full</span></p>
            <p className={style.backerrorText}><span>Back</span></p>
            <p className={style.fronterrorText}><span>Fron</span></p>
            <p className={style.finalText}><span>Web Developer</span></p>
        </div>
        <div className={style.imageContainer}>
            <Link href='/ssr'>
                <Image src="/images/down-arrow-svgrepo-com.svg" alt="Mouse" width={300} height={300} />
            </Link>
        </div>
        
    </div>
}