import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" aria-current="page" href="/Shop">Shop</a>
                            <Link className="nav-link" to="/ToDoList">To Do List</Link>
                            { 
                            
                            this.props.user.apitoken
                            ?
                            <>
                             <Link className="nav-link"  to="/Login" onClick={this.props.logMeOut}>Log Out</Link>
                             <p className='nav-link' >Hello, {this.props.user.username}</p>
                             </>
                            :
                            
                            <>

                            

                            <Link className="nav-link"  to="/Login">Login</Link>
                            <Link className="nav-link"  to="/Signup">Signup</Link>
                            
                            </>

                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};