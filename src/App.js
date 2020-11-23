import React from 'react';
import B from './B';
import C from './C';
import Container from "./Container"


function App() {

 

  return (
    //second Step, Wrap your whole appliction in context.provider  you provide value to your appliction
    <Container>

     <div> 
       <B></B>
       <C></C>
     </div>

    </Container>
  );
}

export default App;
