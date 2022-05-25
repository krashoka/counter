import React from "react";
import styles from "./counter.module.css"

const Counter = ({initialValue}) => {
    const [count, setCount] = React.useState(initialValue);
    

    return(
        <div>
            <h1>Counter App: <span className={count%2===0 ? styles.green:styles.red}>{count}</span></h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=>
                {
                    if(count > 1) setCount(count - 1);
                } 
            }>Decrement</button>
            <button onClick={()=> setCount(count * 2)}>Double</button>
        </div>
    );
};

export default Counter;