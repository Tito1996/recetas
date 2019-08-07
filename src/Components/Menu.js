import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active:""
        }
    }

    handleLinkClick = event => {
        //event.preventDefault();
        console.log(event.target.id);
        this.setState({
            active: event.target.id
        })
        
    }

    render(){
        return(
            <>
                <div className="ui secondary pointing menu">
                    <Link id="home" onClick={this.handleLinkClick} className={"ui item" + (this.state.active === "home" ? "active":"")} to="/">Home</Link>
                    <Link id="about" onClick={this.handleLinkClick} className={"ui item" + (this.state.active === "about" ? "active":"")} to="/about">About</Link>
                    <Link id="medicamentos" onClick={this.handleLinkClick} className={"ui item" + (this.state.active === "medicamentos" ? "active":"")} to="/medicamentos">Medicamentos</Link>
                    <div className="right menu">
                        <a className="ui item">Salir</a>
                    </div>
                </div>
                <div className="ui segment">
                    <p></p>
                </div>
            </>
        )
    } 
}

export default Menu;