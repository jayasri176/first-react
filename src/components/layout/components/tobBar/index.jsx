import { useState } from "react"
import "./topbar.css"
const TopBar = (props) => {
    const [selectedTheme, setSelectedTheme] = useState("dark");
    const settings = [
        {
            label: 'Git',
            type: 'external-link',
            link: '#'
        },
        {
            label: 'Theme',
            type:'drop-down',
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
                    JS
                </div>
            </div>

            <div className="settings-container" >
                {
                    settings?.map((n, i)=><div key={i} className="setting-item" >
                        {
                            n?.type === 'external-link'?
                            <button onClick={()=>{window.open("/","_blank")}} className="git-button">
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="GitHub Logo"
                                className="github-logo"
                            />
                        </button>
                    
                           : n?.type === 'drop-down'?
                            <select
                                value={selectedTheme}
                                dataType={selectedTheme}
                                onChange={(e)=>{setSelectedTheme(e?.target?.value)}}
                                className="theme-selector">
                                {n.options.map((option, idx) => (
                                    <option key={idx} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        : null
                    } 
                </div>
            )
        }
    </div>
</header>
    )
}

export default TopBar;