import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {TodoPage} from "./components/pages/TodoPage";
import {AboutPage} from "./components/pages/aboutPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App: React.FC = () => {

    return <BrowserRouter>
        <Navbar/>
        <div className="container">
            <Switch>
                <Route component={TodoPage} path="/" exact />
                <Route component={AboutPage} path="/about" exact />
            </Switch>
        </div>
    </BrowserRouter>
}

export default App;
