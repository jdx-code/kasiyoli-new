import React from 'react';
import MagazineCards from '../components/MagazineCard';
import Footer from '../components/Footer';

const Home = () => {
  const data = [
    {
      _id: '64feb45c44ca262782cd917f',
      coverImage: '/img/volume1/cover/1.png',
      volumeYear: '2019-2020',
      volumeNum: '১ম সংখ্যা',
      volumeEditor: 'অসমীয়া বিভাগ'
    },
    {
      _id: '64feb73c44ca262782cd9191',
      coverImage: '/img/volume2/cover/2.jpg',
      volumeYear: '2020-2021',
      volumeNum: '২য় সংখ্যা',
      volumeEditor: 'অসমীয়া বিভাগ'
    }
  ];

  return (
    <>
      <div className="customContainer">
        <div className="mt-8 items-center">
          <div className="col-span-2 text-center">
            <p className="text-6xl italic font-bold text-orange-600">
              কাঁচিয়লি
            </p>

            <p className="text-2xl italic text-orange-600">
              - ই আলোচনী
            </p>
          </div>
        </div>

        <MagazineCards data={data} />

        <Footer />
      </div>
    </>
  );
};

export default Home;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import MagazineCards from '../components/MagazineCard';
// import Footer from '../components/Footer';
// import VisitorCounter from '../components/VisitorCounter';
// import baseUrl from '../apiConfig';

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [data, setData] = useState([]);

//     const loadingData = [
//         {
//             _id: 1,
//             coverImage: 'https://res.cloudinary.com/djt3rjotn/image/upload/v1694413915/vqasop52lpxomrufvvxn.png',            
//         },
//         {
//             _id: 2,
//             coverImage: 'https://res.cloudinary.com/djt3rjotn/image/upload/v1694414651/ezkwbnzjrdddic4qisvj.jpg',
            
//         }
//     ]

//     useEffect(() => {
//         axios.get(`${baseUrl}/admin/volume`)
//             .then((res) => {
//                 setData(res.data)                
//                 setLoading(false)
//             })
//             .catch((error) => {
//                 console.error('Error fetching categories:', error);
//             });
//     }, []);

//     return (
//         <>
//             <div className="customContainer">
//                 <div className="mt-8 items-center">
//                     <div className="col-span-2 text-center">
//                         <p className="text-6xl italic font-bold text-orange-600">কাঁচিয়লি</p>
//                         <p className="text-2xl italic text-orange-600"> - ই আলোচনী</p>
//                     </div>
//                     <div className="text-right">
//                         {loading ? (
//                             <span></span>
//                         ) : ( 
//                             <VisitorCounter />
//                         )}
                        
//                     </div>
//                 </div>
//                 {loading ? (
//                     <div>
//                         {/* <MagazineCards data={loadingData} /> */}

//                     <MagazineCards loadingData = {loadingData}/>

//                     </div>
//                 ) : (
//                     <MagazineCards data={data} />    
//                 )}                

//                 <Footer />
//             </div>
//         </>
//     );
// };

// export default Home;
