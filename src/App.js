import { useState } from 'react';
import { Container, Button } from 'react-bootstrap'

function App() {

  const buttonStyle = {
    fontSize: "2em"
  }
  // const count = 0
  const [counter, setcounter] = useState(0)

  // setcounter()
  const increament = () => {
    setcounter(prevState => prevState + 1);
  }

  const decreament = () => {
    setcounter(prevState => prevState - 1);
  }

  const reset = () => {
    setcounter(0);
  }

  const increamentBy10 = () => {
    setcounter(prevState => prevState + 10);
  }

  const decreamentBy10 = () => {
    setcounter(prevState => prevState - 10);
  }
  return (


    <Container className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: "100vh" }}>
      <h1 style={{ fontSize: "4em" }}>{counter}</h1>
      <div className="d-flex p-2 justify-content-around mt-3"  >
        <Button className="m-2" style={buttonStyle} variant='primary' onClick={increament}>Increament</Button>
        <Button className="m-2" style={buttonStyle} variant='primary' onClick={decreament}>Decreament</Button>
        <Button className="m-2" style={buttonStyle} variant='danger' onClick={reset}>Reset</Button>
        <Button className="m-2" style={buttonStyle} variant='primary' onClick={increamentBy10}>Increament By 10</Button>
        <Button className="m-2" style={buttonStyle} variant='primary' onClick={decreamentBy10}>Decreament By 10</Button>
      </div>
    </Container>
  );
}

export default App;
