import React from 'react'
import {Button, ControlLabel, Form, FormGroup, FormControl, Navbar} from 'react-bootstrap'
const App = (props) => (
    <div>
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Hextech</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>

        <div className="container">
            <div style={{'text-align': 'center', margin: '10px 0 20px 0'}}>
                <h1>Hextech Champion <strike>Mastery</strike> Matchery Crafting</h1>
                <h2>Put the ME in Meta</h2>
            </div>
            <Form inline>
                <FormGroup controlId="formControlsSelect" bsSize="large">
                    <FormControl componentClass="select" defaultValue="NA" bsSize="large">
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
                <FormGroup controlId="summonerName" bsSize="large">
                    <FormControl type="text" placeholder="Summoner Name"/>
                </FormGroup>
                {' '}
                <Button bsSize="large" bsStyle="primary">Craft</Button>
            </Form>
        </div>
    </div>
);

export default App;