import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

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

    render() {
        return (
            <div>
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

                {/* <div className="container mx-auto mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="block col-xs-6">
                            <div className="card">
                                <img className="card-img img-responsive" src="http://images.nike.com/is/image/emea/PDP_HERO/Nike-Roshe-Run-Print-Womens-Shoe-599432_674_A_PREM.jpg" alt="Cardimage" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title">Nike Roshe One Print</h4>
                                    <p className="card-text"><small class="text-muted"> Chaussure pour femme</small></p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#!" className="btn btn-primary-outline">Ajouter au panier</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block col-xs-6">
                            <div className="card">
                                <img className="card-img img-responsive" src="http://images.nike.com/is/image/emea/PDP_HERO/Nike-Roshe-Run-Print-Womens-Shoe-599432_674_A_PREM.jpg" alt="Cardimage" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title">Nike Roshe One Print</h4>
                                    <p className="card-text"><small class="text-muted"> Chaussure pour femme</small></p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#!" className="btn btn-primary-outline">Ajouter au panier</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block col-xs-6">
                            <div className="card">
                                <img className="card-img img-responsive" src="http://images.nike.com/is/image/emea/PDP_HERO/Nike-Roshe-Run-Print-Womens-Shoe-599432_674_A_PREM.jpg" alt="Cardimage" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title">Nike Roshe One Print</h4>
                                    <p className="card-text"><small class="text-muted"> Chaussure pour femme</small></p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#!" className="btn btn-primary-outline">Ajouter au panier</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                </div> */}
            </div>
        );
    }
}