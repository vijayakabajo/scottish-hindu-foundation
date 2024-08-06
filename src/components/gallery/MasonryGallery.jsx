import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

const MasonryGallery = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [columns, setColumns] = useState(3); // default to 3 columns

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

  const fetchColumnsConfig = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/masonryconfig");
      setColumns(response.data.columns);
    } catch (error) {
      console.error("Error fetching columns configuration:", error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchColumnsConfig();
  }, []);

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
  };

  const allImagesLoaded = images.length <= visibleImages;

  return (
    <>
      <Box className="masonry-gallery ml-2 mb-8" sx={{ width: "100%", minHeight: 829 }}>
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
            <Masonry columns={{ xs: 1, sm: 2, md: columns }} spacing={2}>
              {images.slice(0, visibleImages).map((image) => (
                <Box key={image._id}>
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    style={{ width: "100%", display: "block", borderRadius: "10px" }}
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
                  sx={{ backgroundColor: '#F4911F', color: '#fff', '&:hover': { backgroundColor: '#483081' }, borderRadius: '50px' }}
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
