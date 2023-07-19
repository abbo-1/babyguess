import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import NameGif from '../images/whatname.gif'

function Name({ handleButtonClick, data, setData }){
    const theme = createTheme({
        root: {
            textTransform: "uppercase"
        },
        typography: {
          fontFamily: [
            'Patua One'
          ].join(','),
          textTransform: "uppercase",
        },
      });

      //ESTABLISH STATE TO STORE USER INPUT VALUE
      const initialvalues = {
        firstName: "",
        lastName: ""
      };

      const [nameValues, setNameValues] = useState(initialvalues)

      //FUNCTION TO SET TEXT AS THE NEW STATE 
      const handleChange = e => {
        setNameValues({ ...nameValues, [e.target.name]: e.target.value });
      };

      useEffect(() => {
        console.log('nameDeposit detects first is ' + firstNameField + ' second is ' + lastNameField)
        setData({...data, firstName: firstNameField, lastName: lastNameField})
      })

      //MODAL STATE AND OPEN/CLOSE FUNCTIONS
      const [openModal, setmodalOpen] = useState(false);
      const handleModalOpen = () => setmodalOpen(true);
      const handleModalClose = () => setmodalOpen(false);
    
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '10%',
        p: 4,
      };

      //DEPOSIT FIRST AND LAST NAME
      const firstNameField = nameValues.firstName;
      const lastNameField = nameValues.lastName;

      //CHECK FIELDS TO SEE IF EMPTY
      const firstNameEmpty = nameValues.firstName === ''
      const lastNameEmpty = nameValues.lastName === ''

      const checkFieldsAndSendNames = () => {
        if (firstNameEmpty || lastNameEmpty === true) {
          console.log('empty') 
          handleModalOpen();
        } else {
          // nameDeposit();
          handleButtonClick();
        }
      }

    return(
       <ThemeProvider theme={theme}>
          <Row id="center">
            <div id="enterName">Please Enter Your Name</div>
          </Row>

        <Row>
          <TextField 
            id="outlined-basic" 
            label="First Name"
            name="firstName"
            variant="outlined"
            value={firstNameField}
            onChange={handleChange}
            inputProps={{
            style: {
              height: "13%",
              fontSize: "2.0rem"
          }}}
          fullWidth
          />
        </Row>

        <div id="space"/>

        <Row>
          <TextField 
            id="outlined-basic" 
            label="Last Name"
            name="lastName"
            value={lastNameField}
            onChange={handleChange}
            inputProps={{
            style: {
              height: "13%",
              fontSize: "2.0rem"
            }}}
            fullWidth  
            variant="outlined"
          />
        </Row>

        <Row>
        <button class="btn" onClick={() => {
          checkFieldsAndSendNames();
        }}>
        SUBMIT
        </button>
        </Row>

        <Modal open={openModal} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"> You have to enter both your first and last name before continuing </Typography>
            <img src={NameGif} alt='forgot gif'></img>
            <br/>
            <button id="btn" onClick={handleModalClose}>CLOSE</button>
          </Box>
        </Modal>

        </ThemeProvider> 
    )
}

export default Name