import React from 'react';
import B from './B';
import C from './C';
import Container from "./Container"

/* import Button from './Button'; */
function App() {
  return (
       <Container>
            <div>
                <B/>
                <C/>
            </div>
        </Container>
        
  );
}
export default App;


{/* <Button children="abcd" />  
<Button> abcd </Button> */}





 {/*           <Button color="red"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"/></Button>
            <Button color="red">increment  </Button>
            <Button color="red"><i>hi</i>  </Button> */}