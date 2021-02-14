import React, { lazyLoad } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
            
        {
            original: './Images/main.web.png',
            thumbnail: './Images/main.web.png',
            },
            {
                original: './Images/floorplan1.jpg',
                thumbnail: './Images/floorplan1.jpg',
            },
        {
            original: './Images/image2.jpg',
            thumbnail: './Images/image2.jpg',
        },
        {
            original: './Images/image21.jpg',
            thumbnail: './Images/image21.jpg',
        },
        {
            original: './Images/image3.jpg',
            thumbnail: './Images/image3.jpg',
        },
        {
            original: './Images/image4.jpg',
            thumbnail: './Images/image4.jpg',
        },
        {
            original: './Images/image7.jpg',
            thumbnail: './Images/image7.jpg',
        },
        {
            original: './Images/image8.jpg',
            thumbnail: './Images/image8.jpg',
        },
        {
            original: './Images/image9.jpg',
            thumbnail: './Images/image9.jpg',
        },
        {
            original: './Images/image10.jpg',
            thumbnail: './Images/image10.jpg',
        },
        {
            original: './Images/image11.jpg',
            thumbnail: './Images/image11.jpg',
        },
        {
            original: './Images/image14.jpg',
            thumbnail: './Images/image14.jpg',
        },
        {
            original: './Images/image15.jpg',
            thumbnail: './Images/image15.jpg',
        },
        {
            original: './Images/image16.jpg',
            thumbnail: './Images/image16.jpg',
        },
        {
            original: './Images/image17.jpg',
            thumbnail: './Images/image17.jpg',
        },
        {
            original: './Images/image18.jpg',
            thumbnail: './Images/image18.jpg',
        },
        {
            original: './Images/image19.jpg',
            thumbnail: './Images/image19.jpg',
        },
        {
            original: './Images/image35.jpg',
            thumbnail: './Images/image35.jpg',
        },
        ];
        
        class MyGalleryFirst extends React.Component {
        render() {
            return <ImageGallery alt='Possum Creek Photos' lazyLoad={lazyLoad} items={images} />;
        }
        }
        export default MyGalleryFirst;