// Home.jsx
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
      coverImage: '/img/volume2/cover/2new.jpg',
      volumeYear: '2021-2022',
      volumeNum: '২য় সংখ্যা',
      volumeEditor: 'অসমীয়া বিভাগ'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Homepage */}
      <main className="flex-1">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-2
          sm:pt-4
          lg:pt-6
          pb-8
          sm:pb-10
        ">

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.5fr]
            gap-10
            lg:gap-14
            items-stretch
          ">

            {/* Magazine Information (Full height with Top, Middle, Bottom distribution) */}
            <section className="
              flex
              flex-col
              justify-between
              h-full
              text-center
              border-2
              border-amber-500
              p-6
              rounded-lg
            ">

              {/* Top Content: Name & Subtitle */}
              <div className="text-center w-full">
                <h1 className="
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  font-bold
                  italic
                  text-orange-600
                  leading-none
                ">
                  কাঁচিয়লি
                </h1>

                <p className="
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  italic
                  text-orange-600
                  mt-2
                ">
                  - ই-আলোচনী
                </p>
              </div>

              {/* Middle Content: Logo, Department & College (Centered) */}
              <div className="text-center w-full my-6 flex flex-col items-center justify-center">
                
                {/* College Logo */}
                <img 
                  src="/img/college-logo.png" /* আপনার লোগো ইমেজের সঠিক পাথ দিন */
                  alt="College Logo" 
                  className="w-20 h-20 sm:w-20 sm:h-20 lg:w-32 lg:h-32 object-contain mb-3"
                />

                <p className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-[#14a800]
                ">
                  অসমীয়া বিভাগ
                </p>

                <p className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  text-gray-800
                  mt-1
                  leading-relaxed
                ">
                  কৰ্মশ্ৰী হিতেশ্বৰ শইকীয়া মহাবিদ্যালয়
                </p>
              </div>

              {/* Bottom Content: Supervisor / Editor */}
              <div className="text-center w-full">
                <p className="
                  text-base
                  sm:text-lg
                  text-gray-600
                ">
                  ত্বাৱধায়ক/সম্পাদক
                </p>

                <p className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  text-gray-800
                  mt-1
                ">
                  - ড° মৌচুমী বৰদলৈ হাজৰিকা
                </p>
              </div>              

            </section>

            {/* Magazine Volumes */}
            <section className="
              border-2
              border-[#D4AF37]
              p-6
              rounded-lg
              h-full
            ">

              <h2 className="
                text-center
                text-2xl
                sm:text-3xl
                font-bold
                text-[#14a800]
                mb-5
              ">
                আলোচনীৰ সংখ্যা
              </h2>

              <div className="
                max-w-4xl
                mx-auto
              ">
                <MagazineCards data={data} />
              </div>

            </section>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default Home;



// import React from 'react';
// import MagazineCards from '../components/MagazineCard';
// import Footer from '../components/Footer';

// const Home = () => {
//   const data = [
//     {
//       _id: '64feb45c44ca262782cd917f',
//       coverImage: '/img/volume1/cover/1.png',
//       volumeYear: '2019-2020',
//       volumeNum: '১ম সংখ্যা',
//       volumeEditor: 'অসমীয়া বিভাগ'
//     },
//     {
//       _id: '64feb73c44ca262782cd9191',
//       coverImage: '/img/volume2/cover/2.jpg',
//       volumeYear: '2020-2021',
//       volumeNum: '২য় সংখ্যা',
//       volumeEditor: 'অসমীয়া বিভাগ'
//     }
//   ];

//   return (
//     <>
//       <div className="customContainer">
//         <div className="mt-8 items-center">
//           <div className="col-span-2 text-center">
//             <p className="text-6xl italic font-bold text-orange-600">
//               কাঁচিয়লি
//             </p>

//             <p className="text-2xl italic text-orange-600">
//               - ই আলোচনী
//             </p>
//           </div>
//         </div>

//         <MagazineCards data={data} />

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;