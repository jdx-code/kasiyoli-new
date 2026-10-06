import React from 'react';
import "../App.css";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SidebarCard from '../components/SidebarCard';
import DOMPurify from "dompurify";
import postsDB from '../staticDB/postsDB';

const ReadMore = () => {
  const { postID, volumeID } = useParams();

  const post = postsDB.find(
    item => item._id === postID && item.volume === volumeID
  );

  const volumePosts = postsDB.filter(
    item => item.volume === volumeID
  );

  const boxStyle = {
    border: "2px solid #14a800",
    padding: "15px",
    overflowY: "auto",
    height: "90vh"
  };

  return (
    <div>
      <Navbar links="magazineLinks" volumeID={volumeID} />

      <div className="container">
        <div className="row">
          <div className="col-md-8 my-2">
            {post ? (
              <div
                style={boxStyle}
                className="backdrop-blur-sm bg-white/30 rounded-lg"
              >
                <h1 className="text-center text-4xl mb-3">
                  {post.postTitle}
                </h1>

                {post.author && (
                  <p className="text-center text-lg font-semibold">
                    ✍️ {post.author}
                  </p>
                )}

                {post.authorDetails && (
                  <p className="text-center text-md text-gray-600 mb-5 whitespace-pre-line">
                    {post.authorDetails}
                  </p>
                )}

                <div
                  className="text-xl leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.postContent)
                  }}
                />
              </div>
            ) : (
              <div
                style={boxStyle}
                className="backdrop-blur-sm bg-white/30 rounded-lg flex items-center justify-center"
              >
                <p className="text-xl text-center">Post not found.</p>
              </div>
            )}
          </div>

          <div className="col-md-4 my-2">
            <SidebarCard post={volumePosts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;