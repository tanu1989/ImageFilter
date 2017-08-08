import React from 'react';
import {Image} from 'react-bootstrap';

let imgUrls = [
    'https://source.unsplash.com/3Z70SDuYs5g/600x600',
    'https://source.unsplash.com/01vFmYAOqQ0/600x600',
    'https://source.unsplash.com/2Bjq3A7rGn4/600x600',
    'https://source.unsplash.com/t20pc32VbrU/600x600',
    'https://source.unsplash.com/pHANr-CpbYM/600x600',
    'https://source.unsplash.com/3PmwYw2uErY/600x600',
    'https://source.unsplash.com/uOi3lg8fGl4/600x600',
    'https://source.unsplash.com/CwkiN6_qpDI/600x600',
    'https://source.unsplash.com/9O1oQ9SzQZQ/600x600',
    'https://source.unsplash.com/E4944K_4SvI/600x600',
    'https://source.unsplash.com/-hI5dX2ObAs/600x600',
    'https://source.unsplash.com/vZlTg_McCDo/600x600'
];

class Images extends React.Component {

    renderImageThumbs = () => {
        return imgUrls.map((url) => {
            return <Image src={url} responsive/>

        })
    };

    render() {

        const getImages = this.renderImageThumbs();


        return (
            <div className="images__grid">
                {getImages}
            </div>
        )
    }
}
export default Images;