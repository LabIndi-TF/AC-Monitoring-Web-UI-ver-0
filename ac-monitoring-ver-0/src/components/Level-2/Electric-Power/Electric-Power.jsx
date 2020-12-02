import React from 'react';
import {ValueSimpleContainer} from '../../Level-1';


import './Electric-Power.css';

function ElectricPower(){
    return(
        <section className="temperatur-holder">
            <section className="title-pos">
                <h1 className="title">Power Consumption</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Current Peak" value="1.4" unit="A" information="Current peak to peak"/>
                <ValueSimpleContainer title="Current RMS" value="1.0" unit="A" information="Effective Current"/>
                <ValueSimpleContainer title="Power" value="2200" unit="W" information="Power Consumption"/>
                <ValueSimpleContainer title="Energy" value="2000" unit="Wh" information="Energy from from last running start"/>
            </section>
        </section>
    )
}

export default ElectricPower;