import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

function Welcome({handleButtonClick}) {

return(
    <div id="mainThing">
    <Container fluid>
    <Row>
    <Col>
    Left
    </Col>
    <Col>
    Results
    </Col>
    </Row>
    <Row>
    <button id="btn" onClick={handleButtonClick}>VOTE
    </button>
    </Row>
    </Container>
    </div>
)}

export default Welcome