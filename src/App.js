import React, {createContext, useState} from 'react';
import B from './B';
import C from './C';

//First Step
//create Context
export const MyContext = createContext(null)


function App() {

    const [x,setX]=useState(0)
    const [y,setY]= useState(0)

  return (
    //Second Step, wrap your whole application in Context.Provider, through provider you provide value to your application
    <MyContext.Provider value={{ x,y,setX,setY }} > 
        <div>
            <B/>
            <C/>
        </div>
    </MyContext.Provider>
  );
}

export default App;
