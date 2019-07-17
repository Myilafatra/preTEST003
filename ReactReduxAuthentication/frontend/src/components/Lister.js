
import React, { Component } from 'react';
import axios from 'axios';


export default class Lister extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/profil')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>
            <div className="container mx-auto mt-5" >
                <div className="row" >
                    {
                        (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                            return <div className="col-md-4" key={obj._id}>
                                <div className="card">
                                    <img className="card-img img-responsive" src={'http://localhost:8080/user/' + obj.photo1} alt="" />
                                    <div className="card-img-overlay">
                                        <h4 className="card-text">{obj.article}</h4>
                                        <p className="card-text"><small class="text-muted">{obj.description}</small></p>
                                        <h6 className="card-text">{obj.prix}</h6>
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href="#!" className="btn btn-primary-outline">Ajouter au panier</a>
                                    </div>
                                </div>
                            </div>
                        })) : ('')
                    }

                    <br /> <br />

                </div>
            </div>
            {/* <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Article</th>
                            <th>Description</th>
                            <th>Prix</th>
                            <th>PHOTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    <td>{obj.article}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.prix}</td>
                                    <td><img width="150px" height="50px" src={'http://localhost:8080/user/'+obj.photo1} alt="pdp" />
                                    </td>
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </tbody>
                </table>
            </div> */}
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}