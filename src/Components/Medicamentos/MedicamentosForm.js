import React from 'react';
import axios from 'axios';

class MedicamentosForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            nombre:"",
            cantidad:""
        }
    }

    handleNameChange = event => {
        this.setState({
            nombre: event.target.value
        })
    }
    handleCantidadChange = event => {
        this.setState({
            cantidad: event.target.value
        })
    }

    handleSave = event =>{
        event.preventDefault();
        axios.post("http://localhost:3001/medicamentos", {
            name: this.state.nombre,
            cantidad: this.state.cantidad
        }).then(res => {
            console.log(res.data);
        })

        this.props.history.push("/medicamentos");
    }

    render(){

        return(
            <div className="medicamentos-form">
                <form className="ui form">
                    <div className="field">
                        <label>Nombre Medicamento</label>
                        <input type="text" name="first-name" value={this.state.nombre} onChange={this.handleNameChange} placeholder="First Name"></input>
                    </div>
                    <div className="field">
                        <label>Cantidad</label>
                        <input type="number" name="cantidad" value={this.state.cantidad} onChange={this.handleCantidadChange} placeholder="Cantidad"></input>
                    </div>
                    <button className="ui primary button" onClick={this.handleSave}>Guardar</button>
                </form>
            </div>
        )
    }
}

export default MedicamentosForm;