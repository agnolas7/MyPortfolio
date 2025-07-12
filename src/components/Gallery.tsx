import React from "react";
import "../assets/styles/Gallery.scss";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";

const photos = [
  { src: img1, alt: "Photo 1" },
  { src: img2, alt: "Photo 2" },
  { src: img3, alt: "Photo 3" },
  { src: img4, alt: "Photo 4" },
  { src: img5, alt: "Photo 5" },
];

function Gallery() {
  return (
    <div className="gallery-container" id="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {photos.map((photo, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
