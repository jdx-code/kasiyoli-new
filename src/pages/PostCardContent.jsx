import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import SidebarCard from '../components/SidebarCard';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import '../App.css';
import Footer from '../components/Footer';
import postsDB from '../staticDB/postsDB';

const PostCardContent = () => {
  const { volumeID } = useParams();

  // Get only the posts belonging to the current volume
  const volumePosts = postsDB.filter(
    item => item.volume === volumeID
  );

  // Maximum posts displayed on one page
  const postsPerPage = 5;

  // Current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(volumePosts.length / postsPerPage);

  // Calculate which posts should be displayed on the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = volumePosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Scroll back to the top of the contents
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar
        links="magazineLinks"
        volumeID={volumeID}
      />

      <div className="container">
        <div className="row">

          {/* Main content */}
          <div className="col-md-8">
            <section>

              {currentPosts.length > 0 ? (
                currentPosts.map(item => (
                  <PostCard
                    key={item._id}
                    id={item._id}
                    title={item.postTitle}
                    author={item.author}
                    authorDetails={item.authorDetails}
                    volume={item.volume}
                  />
                ))
              ) : (
                <div className="border-2 border-[#14a800] rounded-md p-6 my-4 text-center">
                  <p className="text-xl">
                    এই সংখ্যাৰ কোনো তথ্য উপলব্ধ নহয়।
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 my-6 flex-wrap">

                  {/* Previous button */}
                  <button
                    onClick={() =>
                      handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className={`
                      px-4 py-2 rounded-md border-2
                      border-[#14a800]
                      font-semibold
                      ${
                        currentPage === 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-[#14a800] hover:text-white'
                      }
                    `}
                  >
                    &lt;&lt;
                  </button>

                  {/* Page numbers */}
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map(pageNumber => (
                    <button
                      key={pageNumber}
                      onClick={() =>
                        handlePageChange(pageNumber)
                      }
                      className={`
                        px-4 py-2 rounded-md border-2
                        border-[#14a800]
                        font-semibold
                        ${
                          currentPage === pageNumber
                            ? 'bg-[#14a800] text-white'
                            : 'hover:bg-[#14a800] hover:text-white'
                        }
                      `}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {/* Next button */}
                  <button
                    onClick={() =>
                      handlePageChange(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className={`
                      px-4 py-2 rounded-md border-2
                      border-[#14a800]
                      font-semibold
                      ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-[#14a800] hover:text-white'
                      }
                    `}
                  >
                    &gt;&gt;
                  </button>

                </div>
              )}

            </section>
          </div>

          {/* Sidebar */}
          <div className="col-md-4 mt-2">
            {volumePosts.length > 0 && (
              <SidebarCard post={volumePosts} />
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PostCardContent;