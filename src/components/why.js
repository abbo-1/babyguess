import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Why({ handleButtonClick, data, setData }){



    function logReasonVote(voteNum) {
        console.log('logReasonVote function found you selected option ' + voteNum)
        setData({...data, reason: voteNum})
        console.log('and the data is ' + {...data})
    }

return (
    <div>
    Why?
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
    >
    <FormControlLabel 
        value="guess" 
        control={<Radio />} 
        onChange= {() => logReasonVote(1)}
        label="Just a Guess" 
    />
    <FormControlLabel 
        value="intuition" 
        control={<Radio />}
        onChange= {() => logReasonVote(2)}
        label="Intuition" 
    />
    <FormControlLabel 
        value="manifesting" 
        control={<Radio />} 
        onChange= {() => logReasonVote(3)}
        label="Manifesting" 
    />
    <FormControlLabel 
        value="did" 
        control={<Radio />} 
        onChange= {() => logReasonVote(4)}
        label="Something Kevin/Sara said, did, or bought" 
    />
    <FormControlLabel 
        value="other" 
        control={<Radio />} 
        onChange= {() => logReasonVote(5)}
        label="Other" 
    />
    </RadioGroup>

    <Row>
    <button 
        id="btn" 
        onClick={handleButtonClick}>
        FINISH
    </button>
    </Row>
    </div>
    )
}


export default Why