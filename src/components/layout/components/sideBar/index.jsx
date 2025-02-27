import React, {useState} from 'react'
import './sideBar.css';
const SideBar=()=>{
    const [active, setActive] = useState("Template store");

    const menuItems = [
        "Git",
        "React",
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