import React from 'react'
import {Textfield} from 'react-mdl'
import 'mdl-ext'

const App = (props) => (
    <div>
        <div className="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label is-dirty">
            <select id="region" className="mdl-selectfield__select" defaultValue="NA">
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
            </select>
            <label className="mdl-selectfield__label" htmlFor="region">Region</label>
        </div>
        <Textfield
            onChange={() => {}}
            label="Summoner Name..."
            floatingLabel
            style={{width: '300px'}}
        />
    </div>
);

export default App;