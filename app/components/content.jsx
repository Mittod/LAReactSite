import React from "react";
import "../css/style.css";

export class Content extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
            <div class="main-content">
                <div class="main-container">
                    <div class="image-full-size">
                        <h1 class="image-text large">
                            <span>Always</span><br/>strive &<br/>prosper!
                        </h1>
                        <span className="image-text m-1">
                            The best wear shop since 1899
                        </span>
                    </div>
                    <div class="first-block">
                        <div class="brands">

                        </div>
                    </div>
                </div>
            </div>
        </>
        
    }
}