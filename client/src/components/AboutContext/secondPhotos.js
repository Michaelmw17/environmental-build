import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
 
        const images = [
            {
                original: './Images/image3.jpg',
                thumbnail: './Images/image3.jpg',
            },
            {
                original: './Images/floorplan1.jpg',
                thumbnail: './Images/floorplan1.jpg',
            },
        {
            original: './Images/image22.jpg',
            thumbnail: './Images/image3.jpg',
        },
        {
            original: './Images/image23.jpg',
            thumbnail: './Images/image23.jpg',
        },
        {
            original: './Images/image24.jpg',
            thumbnail: './Images/image24.jpg',
        },
        {
            original: './Images/image25.jpg',
            thumbnail: './Images/image25.jpg',
        },
        {
            original: './Images/image26.jpg',
            thumbnail: './Images/image26.jpg',
        },
        {
            original: './Images/image27.jpg',
            thumbnail: './Images/image27.jpg',
        },
        {
            original: './Images/image28.jpg',
            thumbnail: './Images/image28.jpg',
        },
        {
            original: './Images/image29.jpg',
            thumbnail: './Images/image29.jpg',
        },
        {
            original: './Images/image30.jpg',
            thumbnail: './Images/image30.jpg',
        },
        {
            original: './Images/image31.jpg',
            thumbnail: './Images/image31.jpg',
        },
        {
            original: './Images/image32.jpg',
            thumbnail: './Images/image32.jpg',
        },
        {
            original: './Images/image33.jpg',
            thumbnail: './Images/image33.jpg',
        },
        {
            original: './Images/image34.jpg',
            thumbnail: './Images/image34.jpg',
        },
        ];
        
        class MyGallery extends React.Component {
        render() {
            return <ImageGallery lazyLoad={true}  items={images} />;
        }
        }
        export default MyGallery;