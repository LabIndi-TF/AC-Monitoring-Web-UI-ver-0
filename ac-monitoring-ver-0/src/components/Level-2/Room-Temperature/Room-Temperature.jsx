import React from 'react';
import {ValueSimpleContainer} from '../../Level-1';
import './Room-Temperature.css';

function RoomTemperature(){
    return(
        <section className="temperatur-holder">
            <section className="title-pos">
                <h1 className="title">Room Temperature</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Temperature 1" value="20.5" unit="*C" information="under the desk"/>
                <ValueSimpleContainer title="Temperature 2" value="22.5" unit="*C" information="below the AC"/>
                <ValueSimpleContainer title="Temperature 3" value="23.5" unit="*C" information="on the door"/>
                <ValueSimpleContainer title="Temperature 4" value="24.5" unit="*C" information="outside the room"/>
            </section>
        </section>
        
    );
}


export default RoomTemperature;