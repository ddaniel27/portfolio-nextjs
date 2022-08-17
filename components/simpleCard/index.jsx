import Image from 'next/image'
import style from './simpleCard.module.css'

const myLoader = ({src}) => (`./images/frontend-preview/${src}`)

export default function SimpleCard({src='front1.png', alt='project image', text=['Placeholder Text'], web, github }){
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

      <div className={style.cardText}>
	{text.map((item, index) => <p key={index}>{item}</p>)}
      </div>

      <div className={style.cardLinks}>

	{web && (
	  <a href={web} target="_blank">
	    <Image
	      src="/images/social-media/pager.svg"
	      alt="web" width={30} height={30}
	    />
	  </a>
	)}

	{github && (
	  <a href={github} target="_blank">
	    <Image
	      src="/images/social-media/github.svg"
	      alt="github" width={30} height={30}
	    />
	  </a>
	)}

      </div>
    </div>
  )
}
