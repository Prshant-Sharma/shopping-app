import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function ProductList() {
    let [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    useEffect(() => {
        getProducts();
    });
    
    const getProducts = async () => {
        let productList = await fetch('https://fakestoreapi.com/products');
        productList = await productList.json();
        setProducts(productList);
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || []);
    }

    const addToCart = (product) => {
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    return (
        <div>
            <div style={{display: 'flex', padding: '20px'}}>
                <h2 style={{width: '100%'}}>
                    <span style={{float: 'left', marginLeft: '10px'}}>Products</span>
                    <input onChange={event => setSearchValue(event.target.value)} value={searchValue} type="text" placeholder="Enter product name to search..." style={{width: '50%', height: '40px', fontSize: '16px'}}></input>
                    <div style={{float: 'right', marginRight: '10px'}}>
                        <span>{element} {cartItems.length || ''}</span>
                    </div>
                </h2>
            </div>
            {products.filter(product => {
                if(!searchValue) {return true} else return product.title.toLowerCase().includes(searchValue.toLowerCase())
            }).map(product => {
                return(
                    <div key={product.id} style={{display: 'inline-block', backgroundColor: '#dcdcdc', padding: '30px', margin: '10px', boxShadow: '0px 0px 12px #000', width: '250px', height: '250px'}}>
                        <img src={product.image} style={{width: '200px', height: '200px'}} alt={product.id}></img>
                        <div style={{display: 'flex'}}>
                            <span style={{float: 'left', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}} title={product.title}>{product.title}</span>
                            <span style={{float: 'right'}}>${product.price}</span>
                        </div>
                        <div>
                            <button onClick={() => addToCart(product)}>Add to cart</button>
                            <button>Buy now</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList
