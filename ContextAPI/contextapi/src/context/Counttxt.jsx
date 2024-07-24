import React, { createContext , useState} from 'react';

export const CounterContext = React.createContext(null);

export const CouterProvider =(props)=>{
    const [count, setCount] = useState(5);
    return <CounterContext.Provider value={{count}}>{props.childern}</CounterContext.Provider>
}