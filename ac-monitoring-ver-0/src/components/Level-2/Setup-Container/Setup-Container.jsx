import React from 'react';
import {SetupSimple} from '../../Level-1';
import OnAC from '../../../images/Icon On AC.png';
import OffAC from '../../../images/Icon Off AC.png';
import OnRelay from '../../../images/Icon Relay On AC.png';
import OffRelay from '../../../images/Icon Relay Off AC.png';

import './Setup-Container.css';

function SetupContainer(){
    
    return(
        <section className="setup-on-ac-container">
            <SetupSimple Title="Power Status" Information={"To Activate Electric grid"} ImageOn={OnRelay} ImageOff={OffRelay} OnText="On" OffText="Off"/>
            <SetupSimple Title="Running Status" Information={"To Set On Air Conditioner"} ImageOn={OnAC} ImageOff={OffAC} OnText="On" OffText="Off"/>
        </section>
    )
}

export default SetupContainer;