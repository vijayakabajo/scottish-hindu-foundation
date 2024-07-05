import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

const MasonryGallery = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/images");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };

  const allImagesLoaded = images.length <= visibleImages;

  return (
    <>
      <div className="textpart my-10">
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-md font-semibold">Sneak Peek Into</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto" />
        </div>
        <h2 className="text-3xl font-bold">Our Gallery</h2>
      </div>

      <Box className="masonry-gallery" sx={{ width: "100%", minHeight: 829 }}>
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
              {images.slice(0, visibleImages).map((image) => (
                <Box key={image._id}>
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    style={{ width: "100%", display: "block" }}
                  />
                </Box>
              ))}
            </Masonry>
            <Box display="flex" justifyContent="center" mt={4}>
              {allImagesLoaded ? (
                <Typography color="textSecondary">
                  No more images to load
                </Typography>
              ) : (
                <Button
                  onClick={loadMoreImages}
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                >
                  Load More
                </Button>
              )}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default MasonryGallery;
