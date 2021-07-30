import React, { useState } from 'react';
import style from '../Compa/calcul.module.css'

export const Calculator = () => {

    /* 
        this.state = {
            inputValue1: 0
        }
    */

    const [inputValue1, setInputValue1] = useState(1);
    const [inputValue2, setInputValue2] = useState(1);

    const [result, setResult] = useState(0)

    
    

    let inputHandler = (e) => {
        console.log(e.target.value);
        if(e.target.name == "inputValue1") {
            setInputValue1(e.target.value)
        } else {
            setInputValue2(e.target.value)
        }
    }
      
     let onPlus= () => {
           setResult(parseInt(inputValue1)+parseInt(inputValue2))
      }
    
     let onMinus =() =>{
         setResult(parseInt(inputValue1)- parseInt(inputValue2))
     }
    
      let onMult = ()=> {
          setResult(parseInt(inputValue1) * parseInt(inputValue2))
      }

      let onDevide = ()=> {
          setResult(parseInt(inputValue1) / parseInt(inputValue2))
      }


    return (
        <>
            <h3 className={style.h3}>Calculator</h3>
            <hr />
            <input className={style.input1} name="inputValue1" value={inputValue1} onChange={inputHandler} type="number" ></input>
            <button className={style.butn} onClick={onPlus}>+</button>
            <button className={style.butn} onClick={onMinus}>-</button>
            <button className={style.butn} onClick={onDevide}>/</button>
            <button className={style.butn} onClick={onMult}>*</button>
            <input className={style.input2} name="inputValue2" value={inputValue2} onChange={inputHandler} type="number" ></input>
            <hr />
            <div className={style.result}>
                result: {result}
            </div>

           
        </>
    )
}