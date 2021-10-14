import React, { useState } from 'react';
import './Directory_78.scss';
import items from './menu-item-data';
import MenuItem_78 from '../components/MenuItem_78';


const Directory_78 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div className="directory-menu">
            {menuItems.map((item) => {
                const { id, name, remoteUrl, size } = item;
                return (
                    <MenuItem_78
                        key={id}
                        name={name}
                        remoteUrl={remoteUrl}
                        size={size}
                    />
                );
            })}
        </div>
    );
};

export default Directory_78;