import Profile from './profile'
import style from '../../styles/about.module.css'

export default function About({ text }){
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <Profile {...text.info} />
            </div>
            <div className={style.description}>
                <h2>{text.title}</h2>
                <div className={style.paragraphs}>
                    {text.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
