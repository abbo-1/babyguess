import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import LinearProgress from '@mui/material/LinearProgress';


function Vote({ handleButtonClick, data, setData }){

  //STATE FOR OPENING CONFIRMATION DIALOG AND DISABLING BUTTONS AFTER VOTE
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  //OPEN DIALOG
  const handleClickOpen = () => {
    setOpen(true);
    setDisabled(true);
  };

  //CLOSE DIALOG
  const handleClose = () => {
    setOpen(false);
  };

  //DIALOG TIME OUT MAYBE NOT NEEDED
  const [seconds, setSeconds] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 100);
  }, []);

  //LOG BOY VOTE
  function logVoteBoy() {
    console.log('Boy Vote')
    handleClickOpen()
    setTimeout(() => handleClose(), 4000)
  }

  //LOG GIRL VOTE
  function logVoteGirl() {
    console.log('Girl Vote')
    handleClickOpen()
    setTimeout(() => handleClose(), 4000)
  }

    return (
        <div>
          <Dialog  
            open={open}
            onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
	          <DialogContent>
		          <DialogContentText id="alert-dialog-description"> 
              Thank you! 
              <br /> 
              Your vote has been registered. 
            </DialogContentText>
		        <LinearProgress 
              variant="determinate"
              value={seconds} />
	          </DialogContent>
          </Dialog>


          <Row>
	          <Col sm={12} md={6}>
	            <button id="boyBtn" className="genderBtn" disabled={disabled} onClick={logVoteBoy}>BOY</button>
	          </Col>
	          <Col sm={12} md={6}>
	            <button id="girlBtn" className="genderBtn" disabled={disabled} onClick={logVoteGirl}>GIRL</button>
	          </Col>
	        <Row>
		          <button id="btn" onClick={handleButtonClick}>NEXT </button>
	        </Row>
          </Row>  
        </div> 
        ) 
      }

export default Vote