
import React, { Component } from 'react';
import axios from 'axios';


export default class Afficher extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/profil')
            .then(response => {
          this.setState({profil:response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <h2>Articles</h2>
                        </tr>
                        <tr>
                            <th>Article</th>
                            <th>Description</th>
                            <th>Prix</th>
                            <th>PHOTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.article}</td>
                            <td>{this.state.description}</td>
                            <td>{this.state.prix}</td>
                            <td><img alt="pdp" width="50px" height="50px" src={'http://localhost:8080/user/' + this.state.photo1} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}