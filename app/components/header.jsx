import React from "react";
  
export class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <>
        <div className="header-container">
            <div className="menu">
                <a href="">Каталог</a>
                <a href="">О нас</a>
                <a href="">Цены</a>
            </div>
            <span className="header-logo">{this.props.text}</span>
        </div>
        </>;
    }
}
  
