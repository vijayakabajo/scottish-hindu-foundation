
import './MasonryGallery.css';
import { useState } from 'react';

const allImages = [
  // Add more image URLs here for the "Load More" functionality
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/400x300',
  'https://via.placeholder.com/300x500',
  'https://via.placeholder.com/500x300',
  'https://via.placeholder.com/300x450',
  'https://via.placeholder.com/450x300',
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/400x300',
  'https://via.placeholder.com/500x400',
  'https://via.placeholder.com/400x500',
  'https://via.placeholder.com/450x350',
  'https://via.placeholder.com/350x450',
];

const MasonryGallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };

  const allImagesLoaded = visibleImages >= allImages.length;

  return (
    <div className="masonry-gallery">
      <div className="masonry-grid">
        {allImages.slice(0, visibleImages).map((src, index) => (
          <div key={index} className="masonry-item">
            <img src={src} alt={`Gallery ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {allImagesLoaded ? (
          <p className="text-gray-500">No more images to load</p>
        ) : (
          <button
            onClick={loadMoreImages}
            className="bg-shfPurple text-white py-2 px-5 rounded hover:bg-shfOrange transition duration-200"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default MasonryGallery;
