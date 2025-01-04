import React, { useEffect } from "react";
import "./Landing.css";
import bg from "../assets/bgLanding.webp";
import textbg from "../assets/textbg.webp";
import PageLoader from "../components/PageLoader";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";


function Landing() {
    const [loading, setLoading] = React.useState(true);

    const IMAGES = [
        {
            id: "1",
            url: bg,
        },
        {
            id: "2",
            url: textbg,
        }
    ];

    useEffect(() => {
        const loadImage = (image) => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image();
                loadImg.src = image.url;
                // wait 2 seconds to simulate loading time
                loadImg.onload = () =>
                    setTimeout(() => {
                        resolve(image.url);
                    }, 1500);

                loadImg.onerror = (err) => reject(err);
            });
        };
        Promise.all(IMAGES.map((image) => loadImage(image)))
            .then(() => setLoading(false))
            .catch((err) => console.log("Failed to load images", err));
    }, []);
    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <FadeIn>
                    <div className="main">
                        <div
                            className="land-container"
                        >
                            <div className="main-text">
                                <div className="titles">
                                    Prometeo
                                </div>
                                <div className="sub-title">NORDIC NIGHTS</div>
                            </div>

                            <div className="exp-the w-full flex justify-center  ">
                                <a href="/3d" className="none">
                                    <h1 className="flex justify-center items-center">
                                        EXPLORE THE 3D
                                    </h1>
                                </a>
                            </div>

                        </div>
                    </div>
                </FadeIn >
            )
            }
        </>
    )
}

export default Landing;
