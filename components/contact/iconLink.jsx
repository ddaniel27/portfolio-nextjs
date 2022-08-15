import Image from 'next/image'
import style from './iconLink.module.css'

export default function IconLink({ title='My ref', href, src, alt='My icon', width=50, height=50 }){

  return(
    <div className={style.container}>
      <p>{title}</p>
      <a 
	href={href}
	target='_blank'
      >
	<Image 
	  src={src}
	  alt={alt} width={width} height={height}
	/>
      </a>
    </div>
  )

}
