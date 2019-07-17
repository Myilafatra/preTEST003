import React from 'react';
import { Redirect } from 'react-router-dom'

class UploadFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     article: '',
     description:'',
     prix:'',
     photo1:'',
     redirect: false

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

setRedirect = () => {
  this.setState({
    redirect: true
  })
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/profil' />

  }
}

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('photo1', this.uploadInput.files[0]);
    // data.append('photo2', this.uploadInput.files[0]);
    // data.append('photo3', this.uploadInput.files[0]);
    data.append('article',this.state.article);
    data.append('description',this.state.description);
    data.append('prix',this.state.prix)
console.log(data);

    fetch('http://localhost:8080/profil', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log(body);
        
        this.setState({ photo1: `http://localhost:8080/profil/${body.photo1}` });
        console.log('fil',body.photo1);
        this.setRedirect()
      });
    });
  }
 


  render() {
    return (
      <form onSubmit={this.handleUploadImage} >
       
        <label>Article:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="article" /><br></br>
          <label>Description:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="description" /><br></br>
        <label>Prix:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="prix" /><br></br>  
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo1"/><br></br>
       {/* <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo2"/><br></br>
       <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo3"/><br></br>      */}
       {this.renderRedirect()}
      <button type="submit" className="btn btn-primary">
           Ajouter
      </button>
      </form>
    );
  }
}

export default UploadFile; 