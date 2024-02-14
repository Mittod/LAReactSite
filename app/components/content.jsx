import React from "react";

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
                            Always<br/>strive <br/>and prosper!
                        </h1>
                        <span className="image-text">
                            The best wear shop since 1899
                        </span>
                    </div>
                    <div class="first-block">
                        <div class="about"></div>
                    </div>
                </div>
            </div>
        </>
    }
}