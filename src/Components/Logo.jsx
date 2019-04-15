import React from 'react';
import {Header,Segment} from 'semantic-ui-react';

const Logo = (props) => {
    return (
        <Segment basic textAlign="center" className="logo">
            <Header inverted as='h1'>{props.logoName}</Header>
        </Segment>

    );
};

export default Logo;
