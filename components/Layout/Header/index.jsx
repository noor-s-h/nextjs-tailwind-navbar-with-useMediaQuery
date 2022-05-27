import { useState, useEffect } from 'react'
import NavData from 'data/NavData'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import Menu from 'components/icons/Menu'
import { useRouter } from 'next/router';
import DeskTopMenu from './DeskTopMenu'
import AuthBtn from './AuthBtn'
import Close from 'components/icons/Close'
import useMediaQuery from "lib/useMediaQuery";

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const { pathname } = useRouter();
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const navOpen = () => {
        setOpen(true)
    }

    const navClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="border-b">
            <nav className="navbar container max-w-[50rem] mx-auto px-4 flex filter bg-white h-[56px] items-center justify-between">
                {!isDesktop && 
                    <div className='hamburger-button'>
                        {open ?
                            <Close iconClass="h-5 w-5 text-gray-500" setOpen={navClose} />
                            :
                            <Menu iconClass="h-5 w-5 text-gray-500" setOpen={navOpen} />
                        }
                    </div>
                }
                <Logo />
                {isDesktop ?
                    <ul className="desktop-menu flex">
                        {
                            NavData.map(({ title, label, href, childrens }, index) => {
                                return (
                                    <DeskTopMenu key={index} title={title} label={label} href={href} childrens={childrens} />
                                )
                            })
                        }
                    </ul> 
                    :
                    <ul className={`mobile-menu z-50 overflow-hidden absolute top-[57px] p-4 left-0 right-0 bg-white transition-transform ease-[cubic-bezier(1, 0.5, 1, 0.25))] ${open ? "h-auto translate-y-0 visible border-b" : "h-0 translate-y-1 invisible"}`}>
                        {open &&
                            NavData.map(({ title, label, href, childrens }, index) => {
                                return (
                                    <MobileMenu key={index} title={title} label={label} href={href} childrens={childrens} />
                                )
                            })
                        }
                    </ul>
                }
                <AuthBtn />
            </nav>
        </header>
    )
}