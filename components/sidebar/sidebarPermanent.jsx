import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './sidebarPermanent.module.css'

export default function SidebarPermanent(){

    const router = useRouter()

    return(
        <div className={style.sidebar}>
	  
            <Link href="/about">
	      <a className={`${router.pathname === '/about' ? style.active : style.noActive}`}>
		About me
	      </a>
            </Link>

            <Link href="/front">
	      <a className={`${router.pathname === '/front' ? style.active : style.noActive}`}>
		Frontend
	      </a>
            </Link>

            <Link href="/back">
	      <a className={`${/^\/back/.test(router.pathname) ? style.active : style.noActive}`}>
		Backend
	      </a>
            </Link>
            
            <Link href="/contact">
	      <a className={`${router.pathname === '/contact' ? style.active : style.noActive}`}>
		Contact
	      </a>
            </Link>

        </div>
    )
}
