import React, { useState, useEffect } from 'react';
import MenuItem_78 from './MenuItem_78';
import axios from 'axios';
import '../components/Directory_78.scss';
//import items from './menu-item-data';

const Directory2_78 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown-78.herokuapp.com/api_78/category_78';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api/category_78', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div className="directory-menu">
      {menuItems.map((item) => {
        const { id, name, remote_url, size } = item;
        return (
          <MenuItem_78
            key={id}
            name={name}
            remote_url={remote_url}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default Directory2_78;
