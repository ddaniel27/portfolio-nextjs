import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './sidebarModal.module.css'

export default function SidebarModal({ onClose }){

    const router = useRouter()

    return(
        <div className={style.container}>
            <button onClick={() => {onClose(false)}}>X</button>

             <Link href={`/about`}>
	      <a className={`${router.pathname === `/about` ? style.active : style.noActive}`}>
		About me
	      </a>
            </Link>

            <Link href="/ssr">
	      <a className={`${router.pathname === '/ssr' ? style.active : style.noActive}`}>
		SSR
	      </a>
            </Link>
            
            <Link href="/env">
	      <a className={`${router.pathname === '/env' ? style.active : style.noActive}`}>
		Env
	      </a>
            </Link>

        </div>
    )
}
