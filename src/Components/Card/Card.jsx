import React,{useState} from 'react'
import "./Card.css";
import Button from "../Button/Button";
function Card({plant,onAdd,onRemove,}) {
const  [count,setCount] = useState(0);
const {title, Image, price, id } = plant;

const handleIncrement = ()=>{
    setCount(count+1)
    onAdd(plant)
}

const handleDecrement = ()=>{
    setCount(count-1)
    onRemove(plant)
}

return (
  <div className="card">
    <span
      className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
    >
      {count}
    </span>
   
    
    
    <div className="image__container">
      <img src={Image} alt={title} className="image-border" />
    </div>  
    <h4 className="card__title" >
    { title } <br/> MRP. <span className="card__price"> ₹ {price}.00</span>
    </h4>

    <div className="btn-container">
      <Button title={"+"} type={"add"} onClick={handleIncrement} />
      {count !== 0 ? (
        <Button title={"-"} type={"remove"} onClick={handleDecrement} />
      ) : (
        ""
      )}
    </div>
  </div>
);
}

export default Card;