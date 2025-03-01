import React, {useState} from 'react'
import './sideBar.css';
const SideBar=()=>{
    const [active, setActive] = useState("Template store");

    const menuItems = [
      {
        label:'Git',
        slug:'',
        subItems:[
          {
            label:'Introduction',
            slug:'',
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
            slug:'',
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
        {menuItems.map((item) => (
          <li
            key={item}
            className={`menu-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
         

        </aside>
    )
}
export default SideBar;