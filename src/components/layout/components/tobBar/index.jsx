import { useState } from "react"
import "./topbar.css"
import { GitHubIcon, Logo, SettingIcon } from "../../../comman/icons/comman";
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
            isPartSetting:true,
            icon: <SettingIcon />,
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
                <div className="model-wrapper">
                     <div className="mode-container" >
                          <div className="model-top-container" >
                              <h2 className="model-heading" >Settings</h2>
                              <button className="model-close" onClick={()=>setOpenRightDrawer(!openRightDrawer)} >X</button>
                          </div>
                          <hr/>
                          <div  className="model-body" >
                               {
                                settings?.map((n, i)=> n?.isPartSetting && <div className="model-theme" key={i} >
                                      {
                                        n?.options?.map((item, j)=><button onClick={()=>{setSelectedTheme(item?.value)}} key={j} className="theme-button" >{item?.label}</button>)
                                      }
                                </div>)
                               }
                          </div>
                     </div>
                </div>
                :null
            }
        </header>
    )
}

export default TopBar;