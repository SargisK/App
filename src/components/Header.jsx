import React from 'react';
import { NavLink } from 'react-router-dom';

export default () =>
  <div style={{ display: 'flex' }}>
    <h4 style={{ flexGrow: 5 }}><NavLink to='/'> Header</NavLink></h4>
    <ul style={{ flexGrow: 1, justifyContent: 'space-around' }}>
      <li><NavLink to='./cars'> cars </NavLink></li>
    </ul>
  </div>  