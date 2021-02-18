import React, {lazyLoad} from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
 
        const images = [
            {
                original: './Images/image3.webp',
                thumbnail: './Images/image3.webp',
            },
            {
                original: './Images/floorplan1.webp',
                thumbnail: './Images/floorplan1.webp',
            },
        {
            original: './Images/image22.webp',
            thumbnail: './Images/image3.webp',
        },
        {
            original: './Images/image23.webp',
            thumbnail: './Images/image23.webp',
        },
        {
            original: './Images/image24.webp',
            thumbnail: './Images/image24.webp',
        },
        {
            original: './Images/image25.webp',
            thumbnail: './Images/image25.webp',
        },
        {
            original: './Images/image26.webp',
            thumbnail: './Images/image26.webp',
        },
        {
            original: './Images/image27.webp',
            thumbnail: './Images/image27.webp',
        },
        {
            original: './Images/image28.webp',
            thumbnail: './Images/image28.webp',
        },
        {
            original: './Images/image29.webp',
            thumbnail: './Images/image29.webp',
        },
        {
            original: './Images/image30.webp',
            thumbnail: './Images/image30.webp',
        },
        {
            original: './Images/image31.webp',
            thumbnail: './Images/image31.webp',
        },
        {
            original: './Images/image32.webp',
            thumbnail: './Images/image32.webp',
        },
        {
            original: './Images/image33.webp',
            thumbnail: './Images/image33.webp',
        },
        {
            original: './Images/image34.webp',
            thumbnail: './Images/image34.webp',
        },
        ];
        const renderCustomControls = () => {

    const slideToIndex = (index) => null

    return <div className="custom-control">
            <div className="slider">
                <div className="bullet-left" onClick={slideToIndex(1)}></div>
            <div className="bullet" onClick={slideToIndex(5)}></div>
            <div className="bullet" onClick={slideToIndex(6)}></div>
            <div className="bullet" onClick={slideToIndex(7)}></div>
            <div className="bullet" onClick={slideToIndex(8)}></div>
            <div className="bullet-right" onClick={slideToIndex(10)}></div>
            </div>
        </div>
}
        
        class MyGallery extends React.Component {
        render() {
            return <ImageGallery
                lazyLoad={lazyLoad}
                                    items={images}
                                    renderCustomControls={renderCustomControls}/>;
        }
        }
        export default MyGallery;