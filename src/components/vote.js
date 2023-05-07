import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Vote(){
    const theme = createTheme({
        root: {
            textTransform: "uppercase"
        },
        typography: {
          fontFamily: [
            'Patua One'
          ].join(','),
          textTransform: "uppercase"
        //   fontSize: '1rem',
        },
      });

    function testBoy() {
        console.log("boy vote")
    }

    function testGirl() {
        console.log("girl vote")
    }


    return (
        <div>
        <ThemeProvider theme={theme}>
        <Row id="center">

        <TextField helperText="Please enter your name" id="outlined-basic" label="First Name" variant="outlined"/>

        <div id="space" />

        <TextField id="outlined-basic" label="Last Name" variant="outlined"/>

        </Row>
        </ThemeProvider>

        <Row>
     <Col sm={12} md={6}>
    <button id="boyBtn" class="genderBtn" onclick={testBoy()}>BOY</button>
    </Col>

    <Col sm={12} md={6}>
    <button id="girlBtn" class="genderBtn" onclick={testGirl()}>GIRL</button>
     </Col>

    </Row>
    </div>
    )
}

export default Vote