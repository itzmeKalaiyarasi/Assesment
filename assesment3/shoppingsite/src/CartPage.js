import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css'

function CartPage({ items,onAddOne,onRemoveOne }) {
    const totalItems = items.length
    console.log(items.count)
    if(items.length == 0)
    {
       return (<div className="Cart-empty">
           Your Cart is empty. <br></br> <br></br>Why not add some expensive products to it?
           </div>)
    }
    return (
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <p>{item.count}</p>
                            <button
                                className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}>&ndash;</button>
                            <span className="CartItem-count">{item.count}</span>
                            <button
                                className="CartItem-addOne"
                                onClick={() => onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne:PropTypes.func.isRequired,
    onRemoveOne:PropTypes.func.isRequired

};
export default CartPage;