import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Divider from '@mui/material/Divider';
import {useState} from 'react'
import Vote from './vote.js'
import Name from './name.js'
import Welcome from './welcome.js'
import Why from './why.js'
// import getNames from '../database/operations'

function Main() {
    const components = [Welcome, Name, Vote, Why];
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleButtonClick = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
      console.log({...data})
    };
  
    const ActiveComponent = components[activeIndex];

    const [data, setData] = useState({
      firstName:'',
      lastName:'',
      vote:'',
      reason:'',
    })

  //   const fetchData = async () => {
  //     const newData = fetch('/hello', {
  //     method: 'GET',
  //     headers: {
  //       'butter'
  //     }
  //   })
  //   .then(res => res.json())
  //   console.log(newData);
  //   setReturnedData()
  // }

return(
    <div id="mainThing">
    <Container fluid>
    <Row>
    <p id="title">
    Baby Abbott:
    <br/>
    Girl or Boy?
    </p>
    </Row>
    <Divider />
    <button onClick={getNames}>sara i love you</button>
    <Row>
    <Col>
    <ActiveComponent 
      handleButtonClick={handleButtonClick}
      data={data}
      setData={setData}
    />
    </Col>
    </Row>
     </Container>

    </div>
)}

export default Main
