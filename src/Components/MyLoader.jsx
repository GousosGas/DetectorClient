import React from 'react';
import {Dimmer,Loader} from 'semantic-ui-react'

const MyLoader = () => {
    return (

            <Dimmer active inline='centered'>
                <Loader inverted>Scanning</Loader>
            </Dimmer>

    );
};

export default MyLoader;


