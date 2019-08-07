import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MedicamentosList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            medicamentos: [],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/medicamentos").then(
            res => {
                console.log(res.data);
                this.setState({
                    medicamentos: res.data,
                })
            }
        )
    }

    delete = id => {
        axios.delete(`http://localhost:3001/medicamentos/${id}`).then(
            res => {
                const nuevosElementos = this.state.medicamentos.filter( i => (i.id !== id));
                console.log(nuevosElementos);
                this.setState({
                    medicamentos: nuevosElementos,
                })
            }
        )
    }

    render(){
        return (
            <div className="mediccamentos-list">

                <Link id="medicamentoa" className="ui primary button" to="/medicamentos/add">
                    <i className="icon plus"></i> Añadir
                </Link>
                
                <table className="ui orange table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.medicamentos.map(
                            item => {
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.cantidad}</td>
                                        <td>
                                            <button className="ui primary button">Ver</button>
                                            <button className="ui red button" onClick={event => this.delete(item.id)}>Borrar</button>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MedicamentosList;