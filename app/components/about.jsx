import React from "react";


export class About extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"></link>
            <div class="about-block full-w full-h">
                <div class="about-card">
                    <h2>Почему мы?</h2>
                    <div class="visual-tree">
                        <div class="tree-left">
                            <div class="fast about-cover tree-leaf">
                                <span>Скорость доставки до двух недель</span>
                                <i class="fa-solid fa-truck-fast"></i>
                            </div>
                        </div>
                        <div class="tree-trunk my-1">
                            <div>

                            </div>
                        </div>
                        <div class="tree-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
       
    }
}