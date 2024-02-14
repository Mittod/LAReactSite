import ReactDOM from "react-dom";
import React from "react";
import { Header } from "./components/header.jsx";
import {Content} from "./components/content.jsx";
import {About} from "./components/about.jsx";


class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="App">
                <Header text="Legal Aliens"/>
                <Content/>
                <About/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))