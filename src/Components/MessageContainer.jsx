import React, {Component} from 'react'
import {Divider, Grid, Header, Icon, Segment} from 'semantic-ui-react'
import Result from './Result';
import DetectButton from "./DetectButton";




class MessageContainer extends Component {

    state = {
        device: null,
        os: null
    }

    detectHandler = (device, os) => {
            this.setState({device, os})

    }


    render() {

        return (
                <Segment raised padded='very' textAlign="center">
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column textAlign="left" verticalAlign="middle">
                                <Header>Welcome</Header>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Grid.Column>
                            <Divider />
                            <Grid.Column verticalAlign="middle" className="column">
                                <Result device={this.state.device} os={this.state.os}/>
                                <DetectButton loader={this.props.loader} deviceDetection={this.detectHandler}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider vertical>
                        <Icon  name="chevron right" />
                    </Divider>

                </Segment>
        );
    }
}


export default MessageContainer;
