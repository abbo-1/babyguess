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
  const [hasReloaded, setHasReloaded] = useState(false);


  useEffect(()=> {
      getReason();

      //  data.forEach(vote=> {
      //  if(vote.BGVote === "Boy"){
      //     setBoys(oldBoys=> oldBoys + 1)
      //  } if(vote.BGVote === "Girl"){
      //   setGirls(oldGirls=> oldGirls + 1)
      //  }
      // })
      

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
      if(vote.BGVote === "Boy "){
         setBoys(oldBoys=> oldBoys + 1)
      } if(vote.BGVote === "Girl"){
       setGirls(oldGirls=> oldGirls + 1)
      }
     })
    // data.forEach(vote=> {
    //    if(vote.BGVote === "Boy"){
    //       setBoys(boys + 1)
    //    } if(vote.BGVote === "Girl"){
    //     setGirls(girls + 1)
    //    }
    //   })

    // const alone =  JSON.stringify({actualData})
console.log({actualData})
    // console.log('im gonna live forever' + actualData)
       
    // actualData.forEach((vote) => {
    //   if (vote === "Boy"){
    //       setBoys(boys + 1)
    //   } if(vote === "Girl"){
    //       setGirls(girls + 1)
    //   }
    //   })
    
            

    // console.log({boys, girls});
    // const newData = await response.json();
    // console.log('Received data:', newData);
    // return newData; 
  }

  // const [column, setcolumn] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:4000/api', {
  //         method: 'GET'
  //       });
  //       const result = await response.json();
  //       setcolumn(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // console.log({boys, girls})

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
      ];
      
      const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
      ];

return(
    <div>
    <Container fluid>
    <Row>
    <Col>
    <Row>
    <div class="module mid">
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
    {/* <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart> */}
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