import React from 'react'
import CartPage from './CartPage'

const Nav = ({activeTab,onTabChange}) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item  ${activeTab === 0 && 'selected'}`}>
                <a onClick={() => onTabChange(0)}>Item</a></li>
            <li className={`App-nav-item  ${activeTab ===   1 && 'selected'}`}>
                <a onClick={() => onTabChange(1)}>Cart</a></li>
        </ul>
      
    </nav>
   

);
export default Nav  