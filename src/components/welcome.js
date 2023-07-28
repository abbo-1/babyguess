import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {useState, useEffect} from 'react'
import forgotSomething from '../images/20220526_131656.jpg'

function Welcome({handleButtonClick}) {
  const [data, setData]= useState([]);
  const [boys, setBoys]= useState(0);
  const [girls, setGirls]= useState(0);
  // const [hasReloaded, setHasReloaded] = useState(false);


  useEffect(()=> {
      getReason();
  }, [])

  const getReason = async () => {
    const response = await fetch('http://localhost:4000/api');
    const actualData= await response.json();
    //   method: 'GET',
    //   headers: {
    //     "content-type": "application/json",
    //     'Accept': 'application/json'
    //   },
    // })
    // console.log('data changed is' + JSON.stringify({actualData}));
    
    setData(actualData);

    // const stringifyData =  JSON.stringify({actualData})

   actualData.forEach(vote=> {
      if(vote.BGVote === "Boy ") {
        setBoys(oldBoys => oldBoys + 1)
      } if(vote.BGVote === "Girl") {
        setGirls(oldGirls => oldGirls + 1)
      }
     })
  }

  const girlsDivided = girls/2
  const boysDivided = boys/2

  console.log(girlsDivided)

  const data01 = [
    { name: 'Group A', value: girlsDivided },
    { name: 'Group B', value: boysDivided },
  ];

return(
    <div>
    <Container fluid>
    <Row>
    <Col>
    <Row>
    <div className="module mid">
  <h2>We know the biological sex of the baby - but we're curious what you think we're having!</h2>
</div>
    </Row>
    </Col>
    <Col>
    Results
    {/* <ResponsiveContainer width="100%" height="100%"> */}
    <div id="textBig">
    Boys Votes are {boys/2}
    <br/>
    Girl Votes are {girls/2}
    </div>
    <div id="font">
    If your results don't show properly please refresh the page.
    </div>
    <div id="pie">
    <PieChart width={400} height={400}>
    <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
        </div>
      {/* </ResponsiveContainer> */}
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