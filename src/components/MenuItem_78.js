import React from 'react';
import '../components/MenuItem_78.scss';

const MenuItem_78 = ({ name, remoteUrl, size }) => {
  return (
    <div className={`${size}menu-item `}>
      <img className="background-image" src={remoteUrl} alt="" />
      <a href="./hats.html" className="content">
        <h1 className="title">{name}</h1>
        <span className="subtitle">SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_78;
