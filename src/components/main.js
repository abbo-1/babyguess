import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Divider from '@mui/material/Divider';
import {useState} from 'react'
import Vote from './vote.js'
import Name from './name.js'
import Welcome from './welcome.js'
import Why from './why.js'


function Main() {
    const components = [Welcome, Name, Vote, Why];
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleButtonClick = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
      console.log({...data})
      // console.log('Data is currently ' + data.firstName + ' ' + data.lastName + ' who is voting that baby is a ' + data.vote + ' for reason number ' + data.reason)
    };
  
    const ActiveComponent = components[activeIndex];

    const [data, setData] = useState({
      firstName:'',
      lastName:'',
      vote:'',
      reason:'',
    })

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