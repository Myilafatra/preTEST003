import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';


const Dashboard = () => {

    return (
        <div>
            <div className="row  mx-auto mt-5">
                <div className="col-md-4  mx-auto mt-5" id="menu">
                    <div className="sidebar-fixed position-fixed">
                        <MDBListGroup className="list-group-flush" id="lien-dasboard-total">
                            <NavLink id="lien-dasboard" exact={true} to="/">
                                <MDBListGroupItem>
                                    {/* <MDBIcon icon="chart-pie" className="mr-3"/> */}
                                    Acceuil
                    </MDBListGroupItem>
                            </NavLink>
                            <NavLink id="lien-dasboard" to="/dashboard/client" >
                                <MDBListGroupItem>
                                    {/* <MDBIcon icon="user" className="mr-3"/> */}
                                    Profil
                    </MDBListGroupItem>
                            </NavLink>
                            <NavLink id="lien-dasboard" to="/dashboard/admin" >
                                <MDBListGroupItem >
                                    Ajout articles
                    </MDBListGroupItem>
                            </NavLink>
                            <NavLink id="lien-dasboard" to="/dashboard/protection">
                                <MDBListGroupItem>
                                    {/* <MDBIcon icon="map" className="mr-3"/> */}
                                    Votre articles
                    </MDBListGroupItem>
                            </NavLink>
                        </MDBListGroup>
                    </div>
                </div>
                <div className="col-md-8">
                </div>

            </div>

        </div>

    );
}

export default Dashboard;