import React,{useContext} from "react";
import {ShopContext} from "../context/shop-context";
import {Products} from "../products/products";
import {Carditem} from "../components/carditem";
import {useNavigate} from "react-router-dom";

export function Card()
{
    const {cartItems,updateCartItemCount,checkout,getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navgate =useNavigate();
    return(
        <>
            <div>
                {Products.map((product)=>{
                    if (cartItems[product.id] !== 0)
                    {
                        return <Carditem data={product}/>
                    }
                })}
            </div>
            {
                totalAmount > 0 ?(
                    <div>
                        <p>Subtotal: $ {totalAmount}</p>
                        <button onClick={()=>{navgate("/")}}>Continue Shopping</button>
                    </div>
                ):(
                    <div>card empty</div>
                )
            }

        </>
    );
}