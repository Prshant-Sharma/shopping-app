import React, { useEffect, useState } from 'react'

function Checkout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCartItems();
    }, []);

    const getCartItems = () => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    }

    return (
        <div>
            <h1>Checkout page</h1>
            {cartItems.map(item => {
                return(
                    <div key={item.id}>
                        <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <img src={item.image} style={{width: '200px', height: '250px'}} alt={item.id}></img>
                            <h2 style={{marginLeft: '100px'}}>x{item.qty}</h2>
                            <h2 style={{marginLeft: '100px'}}>${item.price}</h2>
                        </div>
                    </div>
                )
            })} 
            <br></br>
            <br></br>
            <button style={{padding: '6px', width: '10%', fontSize: '24px'}}>Pay</button>
        </div>
    )
}

export default Checkout
