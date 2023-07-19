import Row from 'react-bootstrap/Row';
import {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import forgotSomething from '../images/forgotsomething.gif'

function Why({ handleButtonClick, data, setData }){

    //MODAL STATE AND OPEN/CLOSE FUNCTIONS
  const [openModal, setmodalOpen] = useState(false);
  const handleModalClose = () => setmodalOpen(false);
  const [wasSelected, setWasSelected] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10%',
    p: 4,
  };

  //CHECK IF BUTTON WAS PUSHED
  function didTheyMakeASelection() {
    if (wasSelected === true) {
      handleButtonClick()
    } else {
      console.log(wasSelected)
      console.log('hi')
      setmodalOpen(true)
    }
  }
  
    function logReasonVote(voteNum) {
        console.log('logReasonVote function found you selected option ' + voteNum)
        setWasSelected(true)
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
        class="btn" 
        onClick={didTheyMakeASelection}>
        FINISH
    </button>
    </Row>
    <Modal open={openModal} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"> You didn't vote! </Typography>
            <img src={forgotSomething} alt='forgot gif'></img>
            <br/>
            <button id="btn" onClick={handleModalClose}>CLOSE</button>
          </Box>
        </Modal>

    </div>
    )
}


export default Why