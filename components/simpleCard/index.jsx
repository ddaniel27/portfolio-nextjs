import Image from 'next/image'
import style from './simpleCard.module.css'

const myLoader = ({src}) => (`https://picsum.photos/${src}`)

export default function SimpleCard({src='200', alt='project image', text='Placeholder Text'}){
  return(
    <div className={style.cardContainer}>
      <div className={style.cardImg}>
	<Image
	  loader={myLoader}
	  src={src}
	  alt={alt}
	  layout="fill"
	  style={{borderRadius: '20px 20px 0px 0px'}}
	/>
      </div>
      <p className={style.cardText}>
	{text}
      </p>
    </div>
  )
}
