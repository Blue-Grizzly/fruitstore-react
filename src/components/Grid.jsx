import { useState } from "react";
import { Link } from "react-router-dom";
import totalItems from "./totalItems";
import totalPrice from "./totalPrice";

/* eslint-disable react/prop-types */
export default function Grid({fruits, checkout}){ 
    const [cart, setCart] = useState(checkout);


    function addToCart(fruit){
        if(cart.includes(fruit)){
        cart[cart.indexOf(fruit)].amount = cart[cart.indexOf(fruit)].amount +1;
        setCart([...cart])
    }else{
        fruit.amount = 1;
        setCart([...cart, fruit])
    }
}
    try {
    
        return (
        <div>
            <h3>Fruits</h3>
            <section id="fruit-grid">
                {fruits.map((fruit)=>(
                    <section className="fruit" key={fruit.id}>
                        <p>{fruit.name}</p>
                        <p>{fruit.price}kr</p>
                        <p>{fruit.weight}kg</p>
                        <div className="color-dot" style={{backgroundColor:(fruit.color)}}/>
                        <button onClick={()=> addToCart(fruit)}>
                        🛒
                        </button>
                    </section>
                ))}
            </section>
            
            <section>
                    <section className="cart">
                        <p>Items in cart: {totalItems(cart)}</p>
                        <p>Total {totalPrice(cart)}kr</p>
                        <button onClick={()=>setCart([])}>Empty cart</button>
                        <br/>
                        <Link to="../checkout" state={{cart: cart}}>Go to Checkout</Link>
                </section>
            </section>
        </div>
        )
    
    } catch (error) {
        return (
            <div>
                <h3>Fruits</h3>
                <section id="fruit-grid">
                    {fruits.map((fruit)=>(
                        <section className="fruit" key={fruit.id}>
                            <p>{fruit.name}</p>
                            <p>{fruit.price}kr</p>
                            <p>{fruit.weight}kg</p>
                            <div className="color-dot" style={{backgroundColor:(fruit.color)}}/>
                            <button onClick={()=> addToCart(fruit)}>
                            🛒
                            </button>
                        </section>
                    ))}
                </section>
                
                <section>
                        <section className="cart">
                            <p>Items in cart: {totalItems(cart)}</p>
                            <p>Total {totalPrice(cart)}kr</p>
                            <button onClick={()=>setCart([])}>Empty cart</button>
                            <br/>
                            <Link to="../checkout" state={{cart: cart}}>Go to Checkout</Link>
                    </section>
                </section>
            </div>
            )   
    }
}

