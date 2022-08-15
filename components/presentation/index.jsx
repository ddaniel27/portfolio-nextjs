import Image from 'next/image'
import Link from 'next/link'
import SpanAnimated from '../styledSpan'
import style from './presentation.module.css'
export default function Presentation(){
    return <div className={style.container}>
      <h1>
	<SpanAnimated>D</SpanAnimated>
	<SpanAnimated>a</SpanAnimated>
	<SpanAnimated>n</SpanAnimated>
	<SpanAnimated>i</SpanAnimated>
	<SpanAnimated>e</SpanAnimated>
	<SpanAnimated>l</SpanAnimated>
	<span>&nbsp;</span>
	<SpanAnimated>D</SpanAnimated>
	<SpanAnimated>o</SpanAnimated>
	<SpanAnimated>r</SpanAnimated>
	<SpanAnimated>a</SpanAnimated>
	<SpanAnimated>d</SpanAnimated>
	<SpanAnimated>o</SpanAnimated>
      </h1>
        <div className={style.textContainer}>
            <p className={style.fullerrorText}><span>Full</span></p>
            <p className={style.backerrorText}><span>Back</span></p>
            <p className={style.fronterrorText}><span>Fron</span></p>
            <p className={style.finalText}><span>Web Developer</span></p>
        </div>
        <div className={style.imageContainer}>
            <Link href='/about'>
                <Image src="/images/down-arrow-svgrepo-com.svg" alt="Down" width={300} height={300} />
            </Link>
        </div>
    </div>
}
