import React,{Component} from 'react';
import {isMobile, isSmartTV, isTablet, isWearable} from "react-device-detect";
import * as detection from "react-device-detect";
import {Button} from 'semantic-ui-react'
import axios from 'axios';

const publicIp = require('public-ip');
 class DetectButton extends Component{


    axiosCall= async(userIp,resultOs,resultDevice)=>{

        let result = await axios.post('http://devicedetector.test/device-info', {
            user_ip: userIp,
            device: resultDevice,
            operating_system: resultOs,
        })
        console.log(result);
        if (resultOs !== null && resultDevice != null) {
            this.props.deviceDetection(resultDevice, resultOs)
        }
        this.props.loader();

    }

     findIp= async(resultOs,resultDevice)=>{
         let userIp = await publicIp.v4();
         this.axiosCall(userIp,resultOs,resultDevice)
     }


     renderDevice = () => {

        if (isMobile) {
            return <div>Mobile Device</div>
        }
        else if (isTablet) {
            return <div>Tablet Device</div>
        }
        else if (isSmartTV) {
            return <div>Smart Tv Device</div>
        }
        else if (isWearable) {
            return <div>Wearable Device</div>
        }
        return <div>Desktop Device</div>
    }

    renderOs = () => {
        let system = `${detection.osName} ${detection.osVersion}`;
        if (system == null) {
            return "Operating System Not Found"
        }

        return system

    }

    render(){
        return (
            <div className="btn-group-margin-top">
                <Button primary floated='right' onClick={() => {
                    this.props.loader();
                    let resultOs = this.renderOs();
                    let resultDevice = this.renderDevice().props.children;
                    /*if (resultOs !== null && resultDevice != null) {
                        this.props.deviceDetection(resultDevice, resultOs)
                    }*/

                    this.findIp(resultOs,resultDevice);
                }
                }>
                    Scan device
                </Button>
                <Button floated='right' secondary onClick={()=>{this.props.deviceDetection("No information","No information")}}>Clear</Button>
            </div>
        );
    }


};

export default DetectButton;
