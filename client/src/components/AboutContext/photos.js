import React from "react";
import { LazyImage } from "react-lazy-images";

/* Have you settled on how the actual images render in your application?
 * For instance, you might have a container and a class. You might have
 * tuned some options that match your use case, and just want to pass
 * the src.
 * Then you can easily abstract away to a level that works for you
 * and your team.
*/

/** Component that shows a box as placeholder, fades the image in, and keeps the aspect ratio at 3x2
 * This is probably not what you would name things, but it works for demonstration :)
 */
export const LazyImageWithBox = ({ src, alt }) => (
  <div className="bg-near-white intrinsic intrinsic--3x2">
    <LazyImage
      src={src}
      alt={alt}
      debounceDurationMs={400}
      placeholder={({ ref }) => <div ref={ref} className="intrinsic-item" />}
      actual={({ imageProps }) => (
        <img {...imageProps}  alt={alt} className="intrinsic-item animated fadeIn" />
      )}
    />
  </div>
);

/** Component that shows an image as placeholder, fades the image in, and keeps the aspect ratio at 3x2
 * Note that since we want the image to cross-fade on top of the placeholder one,
 * we have to always show the placeholder.
 * You could just as well toggle the placeholder/actual props to do this; it's mostly preference.
 */
export const LazyImageWithPlaceholder = ({ src, alt, placeholderSrc }) => (
  <div className="bg-near-white intrinsic intrinsic--3x2">
    <img src={placeholderSrc} className="intrinsic-item" alt={alt} />
    <LazyImage
      src={src}
      alt={alt}
      debounceDurationMs={400}
      placeholder={({ ref }) => <div ref={ref} className="intrinsic-item" />}
      actual={({ imageProps }) => (
        <img {...imageProps} alt={alt} className="intrinsic-item animated fadeIn" />
      )}
    />
  </div>
);

// export const photos = [
//   {
//     src: "./Images/image2.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "./Images/image3.jpg",
//     width: 1,
//     height: 1
//   },
//   {
//     src: "./Images/image4.jpg",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "./Images/image7.jpg",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "./Images/image10.jpg",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "./Images/image11.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "./Images/image8.jpg",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "./Images/image9.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "./Images/image12.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//    src: "./Images/image13.jpg",
//     width: 3,
//     height: 4
//   },
//   {
//    src: "./Images/image14.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//      src: "./Images/image15.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//      src: "./Images/image16.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//      src: "./Images/image17.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//      src: "./Images/image18.jpg",
//     width: 4,
//     height: 3
//   },
//   {
//      src: "./Images/image19.jpg",
//     width: 4,
//     height: 3
//   }
// ];
