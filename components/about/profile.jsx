import Image from 'next/image'
import style from './profile.module.css' 

const myLoader = ({src}) => (`https://picsum.photos/${src}`)

export default function Profile(){
    return(
            <div className={style.profile}>
                <div className = {style.imageWrapper}>
                    <Image
                        loader={myLoader}
                        src="200"
                        alt = "placeholder"
                        layout='fill'
			style={{ borderRadius: '20px' }}
                    />
                </div>
                <div className={style.data}>
                    <h2>Daniel Dorado</h2>
                    <h3>22 years</h3>
                    <h3>Web Developer</h3>
                </div>
            </div>
    )
}
