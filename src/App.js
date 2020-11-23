import React,{useState, createContext} from 'react';
import B from './B';
import C from './C';

//implementing context.api:
//1)create Context
export const MyContext=createContext("");
//2)wrap the app with context(YourContext.Provider)
//3)trought the provider pass the context as value: <MyContext.Provider value={{  }}>


function App() {
  const [x,setX]=useState(0)
  const [y,setY]=useState(0)

  return (
    <MyContext.Provider value={{x,setX,y,setY}}>
    <div>
      <B/>
      <C/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
