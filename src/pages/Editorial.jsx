import welcomeDB from "../staticDB/welcomeDB";
import interviewDB from "../staticDB/interviewDB";
import MainLayout from "../components/MainLayout";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Editorial = () => {

  const { volumeID } = useParams();

  // Editorial content
  const filteredContent = welcomeDB.filter(
    item => item.volumeID === volumeID
  );

  // Get the same welcome image used by Welcome.jsx
  const welcomeImage = interviewDB.find(
    item =>
      item.type === "editorial" &&
      item.volumeID === volumeID
  )?.img;

  return (
    <>
      <Navbar
        links="magazineLinks"
        volumeID={volumeID}
      />

      <section>
        {filteredContent.length > 0 ? (
          filteredContent.map(item => (
            <MainLayout
              key={item.id}
              title={item.title}
              content={item.content}
              img={welcomeImage}
            />
          ))
        ) : (
          <div className="container text-center py-10">
            <p className="text-xl">
              No content available for this volume.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Editorial;