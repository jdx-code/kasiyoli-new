// MagazineCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MagazineCards = (props) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2 justify-items-center">
        {props.data ? (
          props.data.map((item) => (
            <div
              key={item._id}
              className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#14a800] hover:-translate-y-1"
            >
              <Link to={`/welcome/${item._id}`} className="block group p-3">
                {/* Fixed height container for image with object-contain */}
                <div className="w-full h-52 sm:h-56 bg-gray-50 flex items-center justify-center rounded overflow-hidden">
                  <img
                    src={item.coverImage}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    alt="e-magazine"
                  />
                </div>

                <div className="text-center pt-3 pb-1">
                  <h5 className="font-bold text-gray-800 text-base group-hover:text-[#14a800]">
                    {item.volumeYear}
                  </h5>
                  <p className="text-gray-600 text-sm font-medium mt-0.5">
                    {item.volumeNum}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.volumeEditor}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          props.loadingData?.map((item, index) => (
            <div
              key={item._id || index}
              className="w-full max-w-xs bg-white shadow-md rounded-lg p-3 animate-pulse"
            >
              <div className="w-full h-52 sm:h-56 bg-slate-200 rounded mb-3"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-1/2 mx-auto mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-2/3 mx-auto"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MagazineCards;



// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const MagazineCards = (props) => {    

//     return (                                                  
//         <>   
//             <div className="container">
//                 <div className="row">
//                     <div className='flex flex-col px-[8px] sm:px-[25px] py-[60px] sm:flex-row sm:justify-center items-center'>
//                         {props.data ? (
//                             props.data.map((item) => (               
                            
//                                 <div className="p-[10px] m-4 w-[75%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-[24%] bg-[#fff] shadow-2xl rounded-md hover:p-2 hover:border-2 hover:border-[#14a800]">
//                                     <Link key={item._id} to={`/welcome/${item._id}`} className='hover:text-[#227418]'>
//                                         <img src={item.coverImage} className="w-full h-64"
//                                             alt="e-magazine" />
//                                         <div className="text-center py-6">
//                                             <h5 className="">{item.volumeYear}</h5>
//                                             <p className="">{item.volumeNum}</p>
//                                             <p className="">{item.volumeEditor}</p>
//                                         </div>
//                                     </Link>
//                                 </div>                                                         
                            
//                             ))
//                         ) : (
//                             props.loadingData.map((item) => (               
                            
//                                 <div className="p-[10px] m-4 w-[75%] sm:w-[45%] md:w-[38%] lg:w-[30%] xl:w-[24%] bg-[#fff] shadow-2xl rounded-md hover:p-2 hover:border-2 hover:border-[#14a800]">
//                                     <div key={item._id} className='hover:text-[#227418]'>
//                                         {/* <img src={item.coverImage} className="w-full h-64" alt="e-magazine" /> */}  
//                                         <div class="border border-blue-300 shadow rounded-md p-1 max-w-sm w-full mx-auto">
//                                             <div class="animate-pulse flex space-x-4">                                                
//                                                 <div class="flex-1 space-y-6 py-1">
//                                                 <div class="h-64 bg-slate-700 rounded"></div>                                                
//                                                 </div>
//                                             </div>
//                                         </div>                                      

//                                         <div className="text-center py-6">
//                                             <h5>
//                                                 <span class="relative flex h-3 w-3">
//                                                     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
//                                                     <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
//                                                 </span>
//                                                 Loading..
//                                             </h5>
//                                             <p>
//                                                 <span class="relative flex h-3 w-3">
//                                                     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
//                                                     <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
//                                                 </span>
//                                                 Loading..
//                                             </p>
//                                             <p>
//                                                 <span class="relative flex h-3 w-3">
//                                                     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
//                                                     <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
//                                                 </span>
//                                             </p>                                            
//                                         </div>
//                                     </div>
//                                 </div>                                                         
                            
//                             ))
//                         )}
                        
//                     </div>
//                 </div>
//             </div>
//         </>      
//     )
// }

// export default MagazineCards