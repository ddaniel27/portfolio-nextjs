import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './sidebarPermanent.module.css'

export default function SidebarPermanent(){

    const router = useRouter()

    return(
        <div className={style.sidebar}>
	  
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
