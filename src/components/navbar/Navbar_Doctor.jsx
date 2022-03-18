import React, { Component } from 'react';
import { MenuItems } from "./MenuItems_Admin";
import './Navbar.scss';
import Axios from "axios";

const logout = () => {
    Axios.get("http://localhost:3005/logout").then((response)=>{
        window.location.href = "/";
    });
};

class Navbar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className="navbar-logo">Doctor</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <li><a className="nav-links" href="" onClick={logout}>Logout</a></li>
                </ul>
            </nav>
        )
    }
}
export default Navbar