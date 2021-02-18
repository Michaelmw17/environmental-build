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
// import React from "react";
// import axios from "axios";
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";

// const MyGalleryFirst = () => {
//   const [images, setImages] = React.useState(null);
// const imagesGal = [
            
//         {
//             original: './Images/main.web.png',
//             thumbnail: './Images/main.web.png',
//             },
//             {
//                 original: './Images/floorplan1.jpg',
//                 thumbnail: './Images/floorplan1.jpg',
//             },
//         {
//             original: './Images/image2.jpg',
//             thumbnail: './Images/image2.jpg',
//         },
//         {
//             original: './Images/image21.jpg',
//             thumbnail: './Images/image21.jpg',
//         },
//         {
//             original: './Images/image3.jpg',
//             thumbnail: './Images/image3.jpg',
//         },
//         {
//             original: './Images/image4.jpg',
//             thumbnail: './Images/image4.jpg',
//         },
//         {
//             original: './Images/image7.jpg',
//             thumbnail: './Images/image7.jpg',
//         },
//         {
//             original: './Images/image8.jpg',
//             thumbnail: './Images/image8.jpg',
//         },
//         {
//             original: './Images/image9.jpg',
//             thumbnail: './Images/image9.jpg',
//         },
//         {
//             original: './Images/image10.jpg',
//             thumbnail: './Images/image10.jpg',
//         },
//         {
//             original: './Images/image11.jpg',
//             thumbnail: './Images/image11.jpg',
//         },
//         {
//             original: './Images/image14.jpg',
//             thumbnail: './Images/image14.jpg',
//         },
//         {
//             original: './Images/image15.jpg',
//             thumbnail: './Images/image15.jpg',
//         },
//         {
//             original: './Images/image16.jpg',
//             thumbnail: './Images/image16.jpg',
//         },
//         {
//             original: './Images/image17.jpg',
//             thumbnail: './Images/image17.jpg',
//         },
//         {
//             original: './Images/image18.jpg',
//             thumbnail: './Images/image18.jpg',
//         },
//         {
//             original: './Images/image19.jpg',
//             thumbnail: './Images/image19.jpg',
//         },
//         {
//             original: './Images/image35.jpg',
//             thumbnail: './Images/image35.jpg',
//         },
//         ]
//   React.useEffect(() => {
//     let shouldCancel = false;

//     const call = async () => {
//       const response = await axios.get(
//         `${imagesGal}`
//       );
//       if (!shouldCancel && response.data && response.data.length > 0) {
//         setImages(
//           response.data.map(src => ({
//             original: `${src}=w1024`,
//             thumbnail: `${src}=w100`
//           }))
//         );
//       }
//     };
//     call();
//     return () => (shouldCancel = true);
//   }, []);
//   return (images ? <ImageGallery items={imagesGal} /> : null)
// };
// export default MyGalleryFirst;

