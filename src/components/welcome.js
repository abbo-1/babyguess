import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function Welcome({handleButtonClick}) {

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
      ];

return(
    <div id="mainThing">
    <Container fluid>
    <Row>
    <Col>
    Left
    </Col>
    <Col>
    Results
    <Row id="font">
    {/* <ResponsiveContainer width="100%" height="100%"> */}
    <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      {/* </ResponsiveContainer> */}
      </Row>
    </Col>
    </Row>
    <Row>
    <button className="btn" onClick={handleButtonClick}>VOTE
    </button>
    </Row>
    </Container>
    </div>
)}

export default Welcome