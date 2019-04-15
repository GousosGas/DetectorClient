import React from 'react';
import {Divider, Icon} from "semantic-ui-react"

const Footer = () => {
    return (
        <footer>
            <Divider section/>
            <p>Created by Gousopoulo Konstantino</p>
            <a href="https://www.linkedin.com/in/konstantinos-gousopoulos/" ><Icon className="social-icon" size="big" name="linkedin"/></a>
            <a href="https://github.com/GousosGas"><Icon className="social-icon" size="big" name="github square"/></a>
        </footer>
    );
};

export default Footer;
