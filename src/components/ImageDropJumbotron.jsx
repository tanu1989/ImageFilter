import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class ImageDropJumbotron extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            img: null
        }
    }

    fileSelected =(e) => {
        this.setState({
            img: e.currentTarget.files[0]
        })
    };


    render() {

        return (
            <Jumbotron className="file-jumbotron">
                <h2>Pick an image</h2>
                <input type="file" onChange={this.fileSelected}/>
            </Jumbotron>
        )
    }
}

export default ImageDropJumbotron;