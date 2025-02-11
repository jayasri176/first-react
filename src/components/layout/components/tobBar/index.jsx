import { useState } from "react"
import "./topbar.css"
import { GitHubIcon, Logo } from "../../../comman/icons/comman";
const TopBar = () => {
    const [selectedTheme, setSelectedTheme] = useState("dark");
    const [openRightDrawer, setOpenRightDrawer] = useState(false)
    const settings = [
        {
            label: 'Git',
            type: 'external-link',
            icon: <GitHubIcon />,
            link: 'https://github.com/jayasri176/first-react'
        },
        {
            label: 'Theme',
            type: 'right-drawer',
            icon: <GitHubIcon />,
            onClick:()=>{setOpenRightDrawer(!openRightDrawer)},
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
        <header className="container-fluid header-wrapper">
            <div className="brand-container">
                {/* //brand */}
                <div className="brandIcon">
                    <Logo />
                </div>
            </div>

            <div className="settings-container" >
                {
                    settings?.map((n, i) => <div key={i} className="setting-item">
                        {
                            n?.type === 'external-link' ?
                                <a target="_blank" href={n?.link} rel="noreferrer" className="git-button">
                                    {n?.icon}
                                </a>

                                : n?.type === 'right-drawer' ?
                                    <button className="git-button" onClick={()=>{n?.onClick()}}>
                                        {n?.icon}
                                    </button>
                                    : null
                        }
                    </div>
                    )
                }
            </div>


            {
                openRightDrawer?
                <div className="w-full p-4" style={{border:'solid red 1px',position:'fixed', top:0, left:0, width:'100%', height:'100%'}}></div>
                :null
            }
        </header>
    )
}

export default TopBar;