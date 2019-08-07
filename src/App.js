import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import MedicamentosList from './Components/Medicamentos/MedicamentosList';
import MedicamentosForm from './Components/Medicamentos/MedicamentosForm';



class App extends React.Component{

    render(){

        return(
            <div className="ui container">
                <Router>
                    <Menu></Menu>

                    <Route exact path="/" component = {Home}></Route>
                    <Route exact path="/about" component = {About}></Route>
                    <Route exact path="/medicamentos" component = {MedicamentosList}></Route>
                    <Route exact path="/medicamentos/add" component= {MedicamentosForm}></Route>
                </Router>
            </div>
        )
    }
}

export default App