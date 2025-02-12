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
                     <div className="mode-container" style={{padding:'15px',background:'#0f1214', borderRadius:'15px 0px 0px 15px', boxShadow:'red', height:'100%',width:'350px', border:'solid rgba(61, 71, 81, 0.3) 1px',display:'flex',justifyContent:'flex-start', alignItems:'center', flexDirection:'column', gap:'15px'}}>
                          <div className="model-top-container" style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                              <h2 className="model-heading" style={{color:'#FFF', textAlign:'left',width:'100%',margin:'0px'}}>Settings</h2>
                              <button className="model-close" onClick={()=>setOpenRightDrawer(!openRightDrawer)} style={{border:'none',background:'none',width:'35px',height:'35px',display:'flex',justifyContent:'center',alignItems:'center', fontSize:'18px',fontWeight:'600',color:'#FFF'}}>X</button>
                          </div>
                          <hr/>
                          <div  className="model-body" style={{width:'100%'}}>
                               {
                                settings?.map((n, i)=> n?.isPartSetting && <div className="model-theme" key={i} style={{display:'flex',justifyContent:'space-between', alignItems:'center', gap:'0px', border:'solid rgba(61, 71, 81, 0.3) 1px'}}>
                                      {
                                        n?.options?.map((item, j)=><button onClick={()=>{setSelectedTheme(item?.value)}} key={j} className="theme-button" style={{width:'100%', padding:'15px',borderRadius:'5px', fontSize:'16px',fontWeight:'600', textAlign:'center', background:selectedTheme === item?.value?'#FFF':'transparent',color:selectedTheme === item?.value?'#000':'#FFFF',border:'none', borderRight:'solid rgba(61, 71, 81, 0.3) 1px'}}>{item?.label}</button>)
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