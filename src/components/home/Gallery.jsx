import './Gallery.css';

const galleryImages = [
  { src: '/assets/images/galleryImg1.png', alt: 'XYZ Exports gallery image 1' },
  { src: '/assets/images/galleryImg2.png', alt: 'XYZ Exports gallery image 2' },
  { src: '/assets/images/galleryImg3.png', alt: 'XYZ Exports gallery image 3' },
  { src: '/assets/images/galleryImg4.png', alt: 'XYZ Exports gallery image 4' },
  { src: '/assets/images/galleryImg5.png', alt: 'XYZ Exports gallery image 5' },
  { src: '/assets/images/galleryImg6.png', alt: 'XYZ Exports gallery image 6' },
];

function GalleryColumn({ images, reverse = false }) {
  const repeatedImages = [...images, ...images];

  return (
    <div className={`gallery-section__column ${reverse ? 'gallery-section__column--reverse' : ''}`}>
      <div className="gallery-section__track">
        {repeatedImages.map((image, index) => (
          <div
            className="gallery-section__item"
            key={`${image.src}-${index}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-section__container">

        <div className="gallery-section__heading">
          <div className="gallery-section__eyebrow">
            <span>✦</span>
            Gallery
          </div>

          <h2>Our Gallery</h2>

          <p>
            Explore moments from our products, operations and global export journey.
          </p>
        </div>

        <div className="gallery-section__marquee">
          <GalleryColumn images={galleryImages.slice(0, 3)} />
          <GalleryColumn images={galleryImages.slice(3, 6)} reverse />
          <GalleryColumn images={galleryImages.slice(0, 3)} />
        </div>

      </div>
    </section>
  );
}

export default Gallery;
