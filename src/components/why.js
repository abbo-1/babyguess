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
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    width: 'auto',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10%',
    p: 4,
  };

  //CHECK IF BUTTON WAS PUSHED
  function didTheyMakeASelection() {
    if (wasSelected === true) {
      createEntry()
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
  }

  //SENT VOTE TO DATABASE
  const createEntry = async () => {
    const newData = await fetch('http://localhost:4000/hello', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify( data )
    })
    .then(res => res.json())
    console.log('looking for me' + JSON.stringify({newData}));
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
        label="Something the parents said, did, or bought" 
    />
    <FormControlLabel 
        value="other" 
        control={<Radio />} 
        onChange= {() => logReasonVote(5)}
        label="Other" 
    />
    </RadioGroup>

    <Row>
    <div className="numbers">
        3 of 3
    </div>
    <button 
        className="btn" 
        onClick={didTheyMakeASelection}>
        FINISH
    </button>
    </Row>
    <Modal open={openModal} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
          <div className="centerMe">
            <Typography id="modal-modal-title" variant="h6" component="h2"> You didn't vote! </Typography>
            <img src={forgotSomething} className='modalGif' alt='forgot gif'></img>
            <br/>
            <button className="modalbtn" onClick={handleModalClose}>CLOSE</button>
            </div>
          </Box>
        </Modal>

    </div>
    )
}


export default Why