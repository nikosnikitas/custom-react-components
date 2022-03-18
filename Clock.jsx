/*****************************
* A digital Clock Component. *
* Author: Nikos-Nikitas      *
******************************/
import React from 'react';

class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
                date: new Date()
            };
    }

    //if the component mounts it starts the clock ticking, if it unmounts the ticking stops.
    componentDidMount() {
        this.tID = setInterval(
            () => this.moveTime(),
            1000
        );   
    }

    componentWillUnmount() {
        clearInterval(this.tID);
    }
    moveTime() {
        this.setState(
            {
                date: new Date()
            }
        );
    }
    
    //styling using className for css class.

        render() {
            return (
            <div className="the_clock"> 
                <h2 className="the_clock"> <b> {this.state.date.toLocaleTimeString()} </b></h2>    
            </div>
            );
        }
    }
