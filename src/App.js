import { useState,useEffect } from "react";
import "./App.css";
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
const { getData } = require('./db/db');

const plants = getData();

const tele = window.Telegram.WebApp

function App() {
  const [cartItems, setcartItems ] = useState([])


  useEffect(()=>{
    tele.ready();
  });

  const onAdd = (plant)=>{
      const exist = cartItems.find(x=>x.id === plant.id);
      if(exist){
        setcartItems(
          cartItems.map((x)=>
            x.id === plant.id ? {...exist, quantity: exist.quantity + 1} :x
          )
        );
      } else{
        setcartItems([...cartItems,{...plant, quantity:1}])
      }
      tele.MainButton.text = "Checkout"
      tele.MainButton.show();
  };

  const onRemove = (plant)=>{
    const exist = cartItems.find((x) => x.id === plant.id);
    if(exist.quantity === 1){
      setcartItems(cartItems.filter(x=>x.id !== plant.id))
    }else{
      setcartItems(cartItems.map((x) => x.id === plant.id ? {...exist,quantity: exist.quantity -1}: x
      )
     );
    }
  };


  const onCheckout = ()=>{
    tele.MainButton.text = " (: Pay :)"
    tele.MainButton.show();
  }

  return (
   <>
   <h1 className="heading">Order Indoor Plants</h1><br/>
   <Cart cartItems={cartItems} onCheckout={onCheckout} />
   <div className="card_container">
   {plants.map(plant=>{
    return  (
    <Card plant={plant} key={plant.id} onAdd={onAdd} onRemove={onRemove} />
    );
   })}
   </div>
   <h3 className="footer">To proceed to Pay, Press view Order </h3>
  </>

  );
}
export default App;
