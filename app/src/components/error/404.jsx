import React from 'react';
import './404.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-title">PAGE NOT FOUND</div>
      <div className="not-found-text">The link you clicked may be broken or the page may have been removed.</div>
    </div>
  )
};

export default NotFound;