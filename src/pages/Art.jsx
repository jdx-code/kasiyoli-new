import React from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import galleryDB from '../staticDB/galleryDB';

const Art = () => {
  const { volumeID } = useParams();

  const volumeGallery = galleryDB.filter(
    item => item.volume === volumeID
  );

  return (
    <>
      <Navbar
        links="magazineLinks"
        volumeID={volumeID}
      />

      {volumeGallery.length > 0 ? (
        <Image data={volumeGallery} />
      ) : (
        <div className="container text-center py-10">
          <p className="text-xl">
            No images available for this volume.
          </p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Art;