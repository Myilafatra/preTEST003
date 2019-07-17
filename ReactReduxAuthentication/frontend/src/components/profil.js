import React, { Component } from 'react';
import uploadFile from '../components/uploadFile';
import Dashboard from '../components/dashboard'
//import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

class profil extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                     <Dashboard />
                </div>
                <div className="col-md-8">
                    <Switch>
                        <div>
                            <Route path='/dashboard/admin' component={uploadFile} />
                        </div>
                    </Switch>
                </div>
            </div>
               

                
            </div>
        );
    }
}

export default profil;
