import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import NameGif from '../images/whatname.gif'
import NoGif from '../images/no.gif'
import Background from '../images/sketch.png'

function Name({ handleButtonClick, data, setData }) {
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

  const initialvalues = {
    firstName: "",
    lastName: ""
  };

  const [nameValues, setNameValues] = useState(initialvalues);

  const handleChange = (e) => {
    setNameValues({ ...nameValues, [e.target.name]: e.target.value });
  };

  const [openModal, setmodalOpen] = useState(false);
  const handleModalOpen = () => setmodalOpen(true);
  const handleModalClose = () => setmodalOpen(false);

  const [openNoModal, setNoModalOpen] = useState(false);
  const handleNoModalOpen = () => setNoModalOpen(true);
  const handleNoModalClose = () => setNoModalOpen(false);

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    width: 'auto',
    maxHeight: '90vh',
    background: `url(${Background})`,
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '5%',
    p: 4
  };

  const firstNameField = nameValues.firstName;
  const lastNameField = nameValues.lastName;

  const firstNameEmpty = nameValues.firstName === '';
  const lastNameEmpty = nameValues.lastName === '';

    const checkNameExists = async(firstName, lastName) => {
      const response = await fetch('http://localhost:4000/api/checkName');
      const actualData= await response.json();
      console.log(actualData)
      
      // Trim the input values
      const trimmedFirstName = firstName.trim();
      const trimmedLastName = lastName.trim();

      // Make them lowercase
      const lowercaseLastNameFromInput = trimmedLastName.toLowerCase();
      const lowercaseFirstNameFromInput = trimmedFirstName.toLowerCase();
      
      // Check if the input matches any of the data from the server response
      const exists = actualData.some((data) => {
      const lowercaseFirstNameFromDatabase = data.FirstName.trim().toLowerCase();
      const lowercaseLastNameFromDatabase = data.LastName.trim().toLowerCase();
      console.log('kia ' + lowercaseFirstNameFromDatabase, lowercaseLastNameFromDatabase)
      console.log('sia ' + lowercaseFirstNameFromInput, lowercaseLastNameFromInput)
      return lowercaseFirstNameFromDatabase === lowercaseFirstNameFromInput && lowercaseLastNameFromDatabase === lowercaseLastNameFromInput;
    });
      console.log('Name exists:', exists);
      return exists;
}

  const checkFieldsAndSendNames = async () => {
    if (firstNameEmpty || lastNameEmpty) {
      console.log('empty');
      handleModalOpen();
    } else {
      // Check if the name already exists in the database
      const exists = await checkNameExists(firstNameField, lastNameField);

      if (exists) {
        console.log('Name already exists in the database.');
        handleNoModalOpen();
        // Handle the case here (e.g., show an error message, prevent voting, etc.)
      } else {
        // The name does not exist in the database, proceed with voting or any other action
        handleButtonClick();
      }
    }
  };

  useEffect(() => {
    console.log('nameDeposit detects first is ' + firstNameField + ' second is ' + lastNameField);
    setData({ ...data, firstName: firstNameField, lastName: lastNameField });
  }, [firstNameField, lastNameField, setData]);


  return (
        <ThemeProvider theme={theme}>
           <Row className="centerMe">
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
      <div className="numbers">
        1 of 3
        </div>
        <button className="btn" onClick={() => {
          checkFieldsAndSendNames();
        }}>
          SUBMIT
        </button>
      </Row>

      <Modal open={openModal} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" className="modalOpenAnimation">
        <Box sx={style}>
          <div className="centerMe">
            <Typography id="modal-modal-title" className='modalTitle' variant="h6">You have to enter both your first and last name before continuing</Typography>
            <img src={NameGif} className='modalGif' alt='forgot gif' />
            <br />
            <button className="modalbtn" onClick={handleModalClose}>CLOSE</button>
          </div>
        </Box>
      </Modal>
      
      <Modal open={openNoModal} onClose={handleNoModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="centerMe">
            <Typography id="modal-modal-title" className='modalTitle' variant="h6">You already voted!<br/>Nice try.</Typography>
            <img src={NoGif} className='modalGif' alt='no gif' />
            <br />
            <button className="modalbtn" onClick={handleNoModalClose}>CLOSE</button>
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default Name;