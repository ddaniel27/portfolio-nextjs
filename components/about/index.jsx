import Profile from './profile'
import SpanAnimated from '../styledSpan'
import style from './about.module.css'

export default function About(){
    
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <Profile />
            </div>
            <div className={style.description}>
	      <h2>
		<SpanAnimated text={'About me'}/>
	      </h2>
                <div className={style.paragraphs}>
		  <p>
		    I'm a web developer oriented to Back-end, with 2 years of experience on development. Experienced with <span>HTML5, CSS3, Javascript, ReactJS, NodeJS, MySQL, MongoDB</span> and other technologies that you can find in next sections. 
		  </p>
		  <p>
		    I love to write code and to learn new things. I'm a fan of the open-source community and I'm always looking for <span>new technologies</span> to learn and to improve my skills.
		  </p>
		  <p>
		    Explore my portfolio and contact me to know more about me, I'll be happy to answer your questions.
		  </p>
                </div>
            </div>
        </div>
    )
}
