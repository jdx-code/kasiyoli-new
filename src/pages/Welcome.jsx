import React from 'react';
import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import interviewDB from '../staticDB/interviewDB';

const Welcome = () => {

    const { volumeID } = useParams();

    // Get editorial/welcome content for the current volume
    const filteredContent = interviewDB.filter(
        item =>
            item.type === 'editorial' &&
            item.volumeID === volumeID
    );

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
                            content={item.content}
                            img={item.img}
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

export default Welcome;