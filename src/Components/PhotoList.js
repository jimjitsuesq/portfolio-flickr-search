import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
    const results = props.data
    let photos;
    if (props.data.length) {
        photos = results.map(photo => <Photo url1={`https://flickr.com/photos/${photo.owner}`} url2={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} key={`${photo.id}`}/>);
    } else {
        photos = <NotFound />
    }

    return(
        <ul>
            {photos}
        </ul>
    )
}

export default PhotoList;