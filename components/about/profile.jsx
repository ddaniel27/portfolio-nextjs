import Image from 'next/image'
import style from '../../styles/profile.module.css' 

const myLoader = ({src}) => (`https://via.placeholder.com/${src}`)

export default function Profile({age, career}){
    return(
            <div className={style.profile}>
                <div className = {style.imageWrapper}>
                    <Image
                        loader={myLoader}
                        src="150.png"
                        alt = "placeholder"
                        layout='fill'
                    />
                </div>
                <div className={style.data}>
                    <h2>Daniel Dorado</h2>
                    <h3>{age}</h3>
                    <h3>{career}</h3>
                </div>
            </div>
    )
}