import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'
import Vote from './vote.js'

function Welcome(props) {
    const [component, swapComponent] = useState(true);

    function toggleVote() {
        swapComponent(!component)
    }

return(
    <div id="mainThing">
    <Container fluid>
    <Row>
    <p id="title">
    Will Baby Abbott be a Girl or a Boy?
    </p>
    </Row>
    
    {component ? <Main toggleVote={toggleVote} /> : <Vote /> }
    
    <Row>
    </Row>
    </Container>
    </div>
)}

function Main(props){
    return (
        <div>
        <Row>
     <Col sm={12} md={6}>
    <button className="button" onClick={props.toggleVote}>VOTE</button>
    </Col>

    <Col sm={12} md={6}>
     Results 
     </Col>

    </Row>
    </div>
)}

export default Welcome