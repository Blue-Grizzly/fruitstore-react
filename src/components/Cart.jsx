import totalItems from "./totalItems";
import totalPrice from "./totalPrice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({cart}){
    try {
        const [products, setProducts] = useState(cart);


        return(
            <div>
                <section id="fruit-grid">
                {products.map((fruit)=>(
                    <section className="fruit" key={fruit.id}>
                        <p>{fruit.name}</p>
                        <p>Qty: {fruit.amount}</p>
                        <p>Price: {fruit.price*fruit.amount}kr</p>
                        <div className="color-dot" style={{backgroundColor:(fruit.color)}}/>
                    </section>
                ))}
            </section>
    
            <section>
                <p>Total {totalPrice(products)}kr</p>
                <p>Items in Cart {totalItems(products)}</p>
                <button onClick={()=>setProducts([])}>Empty cart</button>
                <button>
                     <Link to="../fruits" state={{checkout: products}}>Continue shopping</Link>
                </button>
            </section>
        </div>
        )
    
    } catch (error) {
        return(
            <p>Cart is empty</p>
        )   
    }
}