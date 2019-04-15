import React from 'react';
import {Segment,Icon} from 'semantic-ui-react'

const Result = (props) => {
    return (
        <div>
            <Segment.Group>
                <Segment textAlign="center" size="big" color="teal" inverted padded><h3>Detection Results</h3></Segment>
                <Segment.Group horizontal size="large">
                    <Segment padded><Icon name="microchip"/> {props.device==null?'No information':props.device}</Segment>
                    <Segment padded><Icon name="hdd"/> {props.os==null?'No information':props.os}</Segment>
                </Segment.Group>
            </Segment.Group>
        </div>

    );
};

export default Result;
