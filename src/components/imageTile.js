import React from 'react';

const ImageTile = props => {
    return (
        <img className={"image-tile" + (props.main ? "-main":"")} src={props.image} alt={props.name}/>
    );
};

export default ImageTile;