import IconLink from './iconLink'
import SpanAnimated from '../styledSpan'
import style from './contact.module.css'

export default function Contact(){
  return(
    <div className={style.container}>
      <h2>
	<SpanAnimated text={'Find Me Out'}/>
      </h2>
      <div className={style.iconsContainer}>

	<IconLink
	  title='My LinkedIn Profile'
	  href='https://www.linkedin.com/in/daniel-dorado-a83157200/'
	  src='/images/social-media/linkedin.svg'
	  alt='LinkedIn'
	  width={100}
	  height={100}
	/>

	<IconLink
	  title='My GitHub Profile'
	  href='https://github.com/ddaniel27'
	  src='/images/social-media/github.svg'
	  alt='GitHub'
	  width={100}
	  height={100}
	/>

      </div>
    </div>
  )
}
