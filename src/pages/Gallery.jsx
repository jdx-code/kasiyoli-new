import React from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import photoDB from '../staticDB/photoDB';

function Gallery() {
  const { volumeID } = useParams();

  // Get photos for the current volume
  const volumePhotos = photoDB.filter(
    item => item.volume === volumeID
  );

  // Category names
  const categoryNames = {
    'V1-1': 'মহাবিদ্যালয় সপ্তাহৰ কিছু স্মৃতি',
    'V1-2': 'নবাগত আদৰণী সভাৰ কিছু চিত্ৰ',
    'V1-3': 'জয়পুৰ যাত্ৰাৰ কিছু ছবি',    
    'V1-4': 'তেজপুৰ যাত্ৰাৰ কিছু স্মৃতি', 
    'V1-5': 'মহাবিদ্যালয়ৰ দৃশ্য',     
    'V1-7': 'ছাত্ৰ-ছাত্ৰী',
    'V2-1': 'সাংস্কৃতিক শোভাযাত্ৰা',
    'V2-2': 'প্ৰাচীৰ পত্ৰিকাৰ প্ৰস্তুতি',
    'V2-3': 'কলাক্ষেত্ৰত এদিন',
    'V2-4': 'তেজপুৰ ভ্ৰমণৰ কিছু মূহুৰ্ত',
    'V2-5': 'মহাবিদ্যালয়ৰ কিছু ক্ষণ',
    'V2-6': 'মহাবিদ্যালয়ৰ পৰা পবিতৰা',
    'V2-7a': 'বিভাগৰ অধ্যাপক অধ্যাপিকা সকল',
    'V2-7': 'ছাত্ৰ-ছাত্ৰী'
  };

  // Get unique photo categories
  const categories = [
    ...new Set(volumePhotos.map(item => item.photoType))
  ];

  return (
    <div>
      <Navbar
        links="magazineLinks"
        volumeID={volumeID}
      />

      {volumePhotos.length > 0 ? (
        <div className="container mx-auto">

          {categories.map(category => {

            // Photos belonging to this category
            const categoryPhotos = volumePhotos.filter(
              item => item.photoType === category
            );

            return (
              <section
                key={category}
                className="mb-10"
              >
                {/* Category heading */}
                <h2 className="
                  text-center
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#14a800]
                  mt-4
                  mb-3                  
                  px-3
                ">
                  {categoryNames[category] || `Category ${category}`}
                </h2>

                {/* Category photos */}
                <Image data={categoryPhotos} />

              </section>
            );
          })}

        </div>
      ) : (
        <div className="container text-center py-10">
          <p className="text-xl">
            No photos available for this volume.
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Gallery;