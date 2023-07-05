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


function Vote({handleButtonClick}){

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function close() {
    handleClickOpen()
    setTimeout(() => handleClose(), 4000)
  }

    // function testBoy() {
    //     console.log("boy vote")
    //     setOpen(true)
    // }

    // function testGirl() {
    //     console.log("girl vote")
    //     setOpen(true);
    // }

    // const voteResponse = (gender) => {
    //   if (gender === "boy") {
    //     console.log("boy vote")
    //     setOpen(true);
    //   } else if (gender === "girl") {
    //     console.log("girl vote")
    //     setOpen(true);
    //   }

    // }

    const handleClickOpen = () => {
      setOpen(true);
      setDisabled(true);
      console.log("boy vote")
    };

      const [seconds, setSeconds] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 100);
      }, []);
  

    return (
        <div>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you!
            <br/>
            Your vote has been registered.
          </DialogContentText>
          <LinearProgress variant="determinate" value={seconds} />
        </DialogContent>
      </Dialog>

    <Row>
    
     <Col sm={12} md={6}>
      <button id="boyBtn" className="genderBtn" disabled={disabled} onClick={close}>BOY</button>
    </Col>

    <Col sm={12} md={6}>
      <button id="girlBtn" className="genderBtn" disabled={disabled} onClick={close}>GIRL</button>
     </Col>
     <Row>
    <button id="btn" onClick={handleButtonClick}>NEXT
    </button>
    </Row>
    </Row>
    </div>
    )
}


export default Vote