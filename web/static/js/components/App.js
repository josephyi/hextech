import React from 'react'
import {Button, ControlLabel, Form, FormGroup, FormControl, Navbar} from 'react-bootstrap'
const App = (props) => (
<Navbar inverse>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#">Hextech</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Navbar.Form pullLeft>
            <FormGroup controlId="formControlsSelect">
                            <FormControl componentClass="select" defaultValue="NA">
                                <option value="BR">BR</option>
                                <option value="EUNE">EUNE</option>
                                <option value="EUW">EUW</option>
                                <option value="KR">KR</option>
                                <option value="LAN">LAN</option>
                                <option value="LAS">LAS</option>
                                <option value="NA">NA</option>
                                <option value="OCE">OCE</option>
                                <option value="RU">RU</option>
                                <option value="TR">TR</option>
                                <option value="PBE">PBE</option>
                            </FormControl>
                        </FormGroup>
            {' '}
            <FormGroup controlId="summonerName">
                <FormControl type="text" placeholder="Summoner Name" />
            </FormGroup>
            {' '}
            <Button type="submit">Craft</Button>
        </Navbar.Form>
    </Navbar.Collapse>
</Navbar>

    // <div>
    //     <Form inline>
    //
    //         {' '}
    //         <FormGroup controlId="summonerName">
    //             <FormControl type="text" placeholder="Summoner Name" />
    //         </FormGroup>
    //         {' '}
    //         <Button>
    //             Craft!
    //         </Button>
    //     </Form>
    // </div>
);

export default App;