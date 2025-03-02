import React, { useState } from 'react'
import './sideBar.css';
import { GoChevronRight } from 'react-icons/go';
const SideBar = () => {
  const [active, setActive] = useState("");

  const menuItems = [
    {
      label: 'Git',
      key: 'git',
      subItems: [
        {
          label: 'Introduction',
          key: 'git-introduction',
          subItems: []
        },
        {
          label: 'Installation of Git',
          key: 'intallation-of-git',
          subItems: [

          ]
        }
      ]
    },
  ];
  return (
    <aside className='asideWrapper'>
      <MapNavItems list={menuItems} active={active} setActive={setActive} />
    </aside>
  )
}
export default SideBar;

const MapNavItems = ({ className = '', isChild=false, list, active, setActive }) => {
  return (
    <ul className={`navigationContainer ${className}`}>
      {list.map((item, i) => (
        <li
          key={i}
          className={`${isChild?`childIems`:""}  ${active === item?.key ? "activeClass" : ""}`}
          onClick={() => setActive(item?.key === active?'':item?.key)}
        >
          <div className='listWrapper'>
            {item?.icon ? <div className='iconClass'></div> : null}
            <label className='labelClass'>{item?.label}</label>
            {
              item?.subItems?.length ?
                <GoChevronRight className={`arrowClass  ${active === item?.key ? `rotateIcon` : ""}`} />
                : null
            }
          </div>
          {
            active === item?.key && item?.subItems?.length ?
              <MapNavItems className="chilNavitems" isChild={true} list={item?.subItems} active={active} setActive={setActive} />
              : null
          }
        </li>
      ))}
    </ul>
  )
}