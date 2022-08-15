import { useState } from 'react'
import SidebarPermanent from './sidebarPermanent'
import SidebarModal from './sidebarModal'
import style from './sidebar.module.css'

export default function Sidebar(){

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <SidebarPermanent />
            {isOpen && <SidebarModal onClose={setIsOpen} />}
            {!isOpen && <button className={style.modal} onClick={()=>{setIsOpen(true)}}>O</button>}
        </>
    )
}
