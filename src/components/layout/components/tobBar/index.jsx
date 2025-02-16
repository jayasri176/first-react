import React, { useState } from "react"
import styles from "./topbar.module.css"
import menuStyles from "./menu.module.scss"
import { GitHubIcon, Logo, SettingIcon } from "../../../comman/icons/comman";
import { FiMenu, FiX } from "react-icons/fi";
const TopBar = () => {
    const [selectedTheme, setSelectedTheme] = useState("dark");
    const [openRightDrawer, setOpenRightDrawer] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const settings = [
        {
            label: 'Git',
            type: 'external-link',
            icon: <GitHubIcon />,
            link: 'https://github.com/jayasri176/first-react'
        },
        {
            label: 'Menu',
            isMenu: true,
            items: [
                {
                    label: 'Home',
                    link: '/',
                    isExternal: false,
                },
                {
                    label: 'About Us',
                    link: '/about-us',
                    isExternal: false,
                },
                {
                    label: 'Protfolio',
                    link: '/protfolio',
                    isExternal: false,
                },
                {
                    label: 'Contact Us',
                    link: '/contact-us',
                    isExternal: false,
                }
            ]
        },
        {
            label: 'Theme',
            type: 'right-drawer',
            isPartSetting: true,
            icon: <SettingIcon />,
            onClick: () => { setOpenRightDrawer(!openRightDrawer) },
            options: [
                {
                    label: 'Dark',
                    value: 'dark'
                },
                {
                    label: 'Light',
                    value: 'light'
                },
                {
                    label: 'Pink',
                    value: 'pink'
                }
            ]
        }
    ]

    return (
        <header className={`container-fluid ${styles['header-wrapper']}`}>
            <div className={styles['brand-container']}>
                {/* //brand */}
                <button onClick={()=>setMenuOpen(!menuOpen)}  className={`${styles['git-button']} ${menuStyles['mobile-menu-icon']}`}>
                <FiMenu />
                </button>
                <div className={styles.brandIcon}>
                    <Logo />
                </div>
            </div>
            <div className={`${menuStyles['menu-wrapper']} ${menuOpen?menuStyles['menu-wrapper-active']:``}`}>

                {
                    settings?.map((n, i) => n?.isMenu && <ul key={i} className={menuStyles['menu-container']}>
                        <li className={`${menuStyles['mobile-header-container']}`}>
                        
                            <div className={menuStyles.brandIcon}>
                                <Logo />
                            </div>
                            <hr/>
                            <button onClick={()=>setMenuOpen(!menuOpen)} className={menuStyles['close-button']}><FiX /></button>
                        </li>
                        {
                            n?.items?.map((link, j) => <li key={j} className={menuStyles['menu-item']}>{link?.label}</li>)
                        }
                    </ul>)
                }
            </div>
            <div className={styles['settings-container']} >
                {
                    settings?.map((n, i) => !n?.isMenu && <div key={i} className="setting-item">
                        {
                            n?.type === 'external-link' ?
                                <a target="_blank" href={n?.link} rel="noreferrer" className={styles['git-button']}>
                                    {n?.icon}
                                </a>

                                : n?.type === 'right-drawer' ?
                                    <button className={styles['git-button']} onClick={() => { n?.onClick() }}>
                                        {n?.icon}
                                    </button>
                                    : null
                        }
                    </div>
                    )
                }
            </div>


            {
                openRightDrawer ?
                    <div className={styles['model-wrapper']}>
                        <div className={styles['model-container']} >
                            <div className={styles['model-top-container']} >
                                <h2 className={styles['model-heading']} >Settings</h2>
                                <button className={styles['model-close']} onClick={() => setOpenRightDrawer(!openRightDrawer)} >
                                    <FiX />
                                </button>
                            </div>
                            <hr />
                            <div className={styles['model-body']} >
                                {
                                    settings?.map((n, i) => n?.isPartSetting && <div className={styles['model-theme']} key={i} >
                                        {
                                            n?.options?.map((item, j) => <button onClick={() => { setSelectedTheme(item?.value) }} key={j} className={`${styles['theme-button']} ${selectedTheme === item?.value ? styles['active-button'] : ``}`} >{item?.label}</button>)
                                        }
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    : null
            }
        </header>
    )
}

export default TopBar;