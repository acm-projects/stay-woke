import React from 'react';
import { Link } from 'react-router-dom';

function pages() {
  return (
    <div id="links">
      <Link id="links" to="/guncontrol">Gun Control</Link> | <Link id="links" to="/healthcare">Health Care</Link> | <Link id="links" to="/immigration">Immigration</Link>
    </div>
  )
}

export default pages;