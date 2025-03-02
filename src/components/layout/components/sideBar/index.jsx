import React, {useState} from 'react'
import './sideBar.css';
const SideBar=()=>{
    const [active, setActive] = useState("Template store");

    const menuItems = [
      {
        label:'Git',
        slug:'/git',
        subItems:[
          {
            label:'Introduction',
            slug:'/inroduction',
            subItems:[
              "Git Version Control",
              "How to Installing Git",
              "First Time Git Setup",
              "Git Repository",
              "Recording changes to the repository",
              "Commit History",
              "30 Minutes Self Studies Regarding Git",
              
            ]
          },
          {
            label:'Git Advance',
            slug:'/advance',
            subItems:[
               "Stage & Snapshot",
               "Tracking Path Changes",
               "Ignoring Patterns",
              
            ]
          }
        ]
      }
    ];
    return(
        <aside className='asideWrapper'>
            <ul>
        {menuItems.map((item, i) => (
          <li
            key={i}
            className={`menu-item ${active === item?.slug ? "active" : ""}`}
            onClick={() => setActive(item?.slug)}
          >
            {item?.label}
          </li>
        ))}
      </ul>
         

        </aside>
    )
}
export default SideBar;