import React, { useEffect, useState } from 'react';

function ViewCart() {
    let [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCartItems();
    }, []);

    const getCartItems = () => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')));
        console.log(cartItems);
    }

    return(
        <div>
            <h2>Cart</h2>
        </div>
    )
}

export default ViewCart