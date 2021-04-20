import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function ViewCart() {
    let [cartItems, setCartItems] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getCartItems();
    }, [cartItems]);

    const getCartItems = () => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')));
        // let cart = JSON.parse(localStorage.getItem('cartItems'));
        // setCartItems(cart);
    }

    const removeItem = (id) => {
        let cartData = JSON.parse(localStorage.getItem('cartItems'));
        cartData.splice(id, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartData));
    }

    const changeQuantity = (item, id, action) => {
        let cartData = JSON.parse(localStorage.getItem('cartItems'));
        if(action === 'increment') {
            item['qty'] = item.qty + 1;
            item['price'] = (item.unitPrice * item.qty).toFixed(2);
            cartData.splice(id, 1, item);
        } else {
            item['qty'] = item.qty - 1;
            item['price'] = (item.price - item.unitPrice).toFixed(2);
            cartData.splice(id, 1, item);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartData));
    }

    return(
        <div>
            <h2>Cart</h2>
            {cartItems.map((item, index) => {
                return(
                    <div key={item.id} style={{display: 'inline-block', backgroundColor: '#dcdcdc', padding: '30px', margin: '10px', width: '250px', height: '300px'}}>
                        <img src={item.image} style={{width: '200px', height: '250px'}} alt={item.id}></img>
                        <div style={{display: 'flex'}}>
                            <span style={{float: 'left', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}} title={item.title}>{item.title}</span>
                            <span style={{marginLeft: 'auto'}}>${item.price}</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-around', padding: '15px 0'}}>
                            <div>
                                <button disabled={item.qty === 1} onClick={() => changeQuantity(item, index, 'decremenet')}>-</button>
                                <span style={{padding: '0 10px', backgroundColor: '#fff', border: '1px solid #ccc'}}>{item.qty}</span>
                                <button onClick={() => changeQuantity(item, index, 'increment')}>+</button>
                            </div>
                            <button onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    </div>
                )
            })}
            <br></br>
            <br></br>
            <button hidden={!cartItems.length} onClick={() => history.push('/checkout')} style={{padding: '10px', width: '30%', fontSize: '24px'}}>Proceed</button>
        </div>
    )
}

export default ViewCart