import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Chart } from 'react-google-charts';

function Welcome({ handleButtonClick }) {
  const [data, setData] = useState([]);
  const [boys, setBoys] = useState(0);
  const [girls, setGirls] = useState(0);

  useEffect(() => {
    getReason();
  }, []);

  const getReason = async () => {
    const response = await fetch('http://localhost:4000/api');
    // const response = await fetch('https://babyguess.kevinjabbott.com:4000/api');
    const actualData = await response.json();
    setData(actualData);

    const { boysCount, girlsCount } = actualData.reduce(
      (accumulator, vote) => {
        if (vote.BGVote === 'Boy ') {
          return { ...accumulator, boysCount: accumulator.boysCount + 1 };
        } else if (vote.BGVote === 'Girl') {
          return { ...accumulator, girlsCount: accumulator.girlsCount + 1 };
        }
        return accumulator;
      },
      { boysCount: 0, girlsCount: 0 }
    );

    setBoys(boysCount);
    setGirls(girlsCount);
  };

  const dataPie = [
    ['Task', 'Hours per Day'],
    ['Boy Votes', boys],
    ['Girl Votes', girls],
  ];

  const options = {
    is3D: true,
    colors: ['#fffc9b', '#cd9bff'],
    pieSliceTextStyle: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    legend: { position: 'none' },
    chartArea: {
      left: 0, // Set left to 0 for centering
      top: 20,
      width: '100%', // Use percentage for dynamic width
      height: '200px',
      bottom: 25,
    }
  };

  return (
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
            <div id="titleChart">Vote Results</div>
            <Row>
              {/* <div id="legend" className="chart-legend">
                <Col className="legend-item text-right" id='girlTotal'>
                <div id="girlVoteSquare" className="vote-square" />
                <span className="legend-text">Girl Votes</span>
                </Col>
                <Col className="legend-item text-left" id='boyTotal'>
                <div id="boyVoteSquare" className="vote-square" />
                <span className="legend-text">Boy Votes</span>
                </Col>
              </div> */}
              <div id="legend" className="chart-legend">
    <Col className="legend-item" id='girlTotal'>
      <div id="girlVoteSquare" className="vote-square" />
      <span className="legend-text">Girl Votes</span>
    </Col>
    <Col className="legend-item" id='boyTotal'>
      <div id="boyVoteSquare" className="vote-square" />
      <span className="legend-text">Boy Votes</span>
    </Col>
  </div>
            </Row>
            <Chart
              chartType="PieChart"
              data={dataPie}
              options={options}
              width={'100%'}
              height={'350px'}
            />
          </Col>
        </Row>
        <Row>
          <button className="btn" onClick={handleButtonClick}>
            VOTE
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;