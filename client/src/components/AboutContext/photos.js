import React, { Suspense, lazyLoad } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import Spinner from 'react-bootstrap/Spinner';

const images = [
            
        {
            original: './Images/main.web.png',
            thumbnail: './Images/main.web.png',
            },
            {
                original: './Images/floorplan1.webp',
                thumbnail: './Images/floorplan1.webp',
            },
        {
            original: './Images/image2.webp',
            thumbnail: './Images/image2.webp',
        },
        {
            original: './Images/image21.webp',
            thumbnail: './Images/image21.webp',
        },
        {
            original: './Images/image3.webp',
            thumbnail: './Images/image3.webp',
        },
        {
            original: './Images/image4.webp',
            thumbnail: './Images/image4.webp',
        },
        {
            original: './Images/image7.webp',
            thumbnail: './Images/image7.webp',
        },
        {
            original: './Images/image8.webp',
            thumbnail: './Images/image8.webp',
        },
        {
            original: './Images/image9.webp',
            thumbnail: './Images/image9.webp',
        },
        {
            original: './Images/image10.webp',
            thumbnail: './Images/image10.webp',
        },
        {
            original: './Images/image11.webp',
            thumbnail: './Images/image11.webp',
        },
        {
            original: './Images/image14.webp',
            thumbnail: './Images/image14.webp',
        },
        {
            original: './Images/image15.webp',
            thumbnail: './Images/image15.webp',
        },
        {
            original: './Images/image16.webp',
            thumbnail: './Images/image16.webp',
        },
        {
            original: './Images/image17.webp',
            thumbnail: './Images/image17.webp',
        },
        {
            original: './Images/image18.webp',
            thumbnail: './Images/image18.webp',
        },
        {
            original: './Images/image19.webp',
            thumbnail: './Images/image19.webp',
        },
        {
            original: './Images/image35.webp',
            thumbnail: './Images/image35.webp',
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
        class MyGalleryFirst extends React.Component  {
        render() {
            return  <Suspense fallback={
                            <Spinner animation="border" />
                            }><ImageGallery alt='Possum Creek Photos'
                                    lazyLoad={lazyLoad}
                                    items={images}
                                    renderCustomControls={renderCustomControls}
                            />
            </Suspense>;
        }
        }
        export default MyGalleryFirst;