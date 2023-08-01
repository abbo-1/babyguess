import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import {useState, useEffect} from 'react'
import { Chart } from "react-google-charts";
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

    
  const { boysCount, girlsCount } = actualData.reduce(
    (accumulator, vote) => {
      if (vote.BGVote === "Boy ") {
        return { ...accumulator, boysCount: accumulator.boysCount + 1 };
      } else if (vote.BGVote === "Girl") {
        return { ...accumulator, girlsCount: accumulator.girlsCount + 1 };
      }
      return accumulator;
    },
    { boysCount: 0, girlsCount: 0 }
  );

  // Update the state once with the total counts
  setBoys(boysCount);
  setGirls(girlsCount);
  }

  const dataPie = [
    ["Task", "Hours per Day"],
    ["Boy Votes", boys],
    ["Girl Votes", girls],
  ];
  
  const options = {
    title: "Vote Results",
    is3D: true,
    colors: ['#fffc9b', '#cd9bff'],
    legend : 'top',
    pieSliceTextStyle: {
      color: 'black' // Set the color of the text inside the pie chart slices to black
    },
    titleTextStyle: {
      color: "black",               // color 'red' or '#cc00cc'
      fontName: "Patua One",    // 'Times New Roman'
      fontSize: 25,               // 12, 18
      bold: true,                 // true or false
      italic: true                // true of false
  },
  };
  
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
    <Chart
      chartType="PieChart"
      data={dataPie}
      options={options}
      width={"100%"}
      height={"500px"}
    />
    {/* </div> */}
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