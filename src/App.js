import React, {Component} from 'react';
import Footer from './Components/Footer';
import Logo from './Components/Logo';
import MessageContainer from './Components/MessageContainer';
import MyLoader from './Components/MyLoader';
import {Container} from 'semantic-ui-react';
import './App.css';

class App extends Component {
    state = {
        loader: false
    }

    loaderHandler=()=>{
        //this.setState({loader:false});
        this.setState({loader:!this.state.loader})
    }

    render() {
        return (
                <Container>
                    {this.state.loader?<MyLoader/>:null}
                    <div>
                        <Logo logoName="Device Detector"/>
                        <MessageContainer loader={this.loaderHandler}/>
                        <Footer/>
                    </div>
                </Container>
        );
    }
}

export default App;
