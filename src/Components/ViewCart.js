import React, { useEffect, useState } from 'react';

function ViewCart() {
    let [cartItems, setCartItems] = useState([]);
    let [qty, setQty] = useState(1);

    useEffect(() => {
        getCartItems();
    }, [cartItems]);

    // useEffect(() => {
    //     let cartData = JSON.parse(localStorage.getItem('cartItems')); 
    //     setCartItems(cartData);
    // }, [cartItems]);

    const getCartItems = () => {
        let cart = JSON.parse(localStorage.getItem('cartItems'));
        setCartItems(cart);
    }

    const removeItem = (id) => {
        let cartData = JSON.parse(localStorage.getItem('cartItems'));
        cartData.splice(id, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartData));
    }

    return(
        <div>
            <h2>Cart</h2>
            {cartItems.map((item, index) => {
                return(
                    <div key={item.id} style={{display: 'inline-block', backgroundColor: '#dcdcdc', padding: '30px', margin: '10px', width: '250px', height: '300px'}}>
                        <img src={item.image} style={{width: '200px', height: '250px'}}></img>
                        <div style={{display: 'flex'}}>
                            <span style={{float: 'left', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}} title={item.title}>{item.title}</span>
                            <span style={{marginLeft: 'auto'}}>${item.price}</span>
                        </div>
                        <div style={{display: 'flex'}}>
                            <button id={index} onClick={() => setQty(qty - 1)} disabled={qty === 1}>-</button>
                            <span style={{padding: '0 5px', backgroundColor: '#fff', border: '1px solid #ccc', width: '20px'}}>{qty}</span>
                            <button onClick={() => setQty(qty + 1)}>+</button>
                            <button style={{marginLeft: 'auto'}} onClick={() => removeItem(index)}>Remove</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ViewCart