import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import style from '../../styles/sidebar.module.css'

export default function Sidebar(){

    const router = useRouter()
    const [active, setActive] = useState(router.pathname)
    
    useEffect(() => {
        setActive(router.pathname)
    }, [router.pathname])

    return (
        <div className={style.sidebar}>
            <Link href="/ssr">
                <a className={`${active === '/ssr' ? style.active : style.noActive}`}>SSR</a>
            </Link>
            <Link href="/about">
                <a className={`${active === '/about' ? style.active : style.noActive}`}>About</a>
            </Link>
            <Link href="/env">
                <a className={`${active === '/env' ? style.active : style.noActive}`}>Env</a>
            </Link>
        </div>
    )
}