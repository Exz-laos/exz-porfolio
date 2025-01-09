import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const [zoomEnabled, setZoomEnabled] = useState(false);
    const canvasRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (canvasRef.current && !canvasRef.current.contains(event.target)) {
                setZoomEnabled(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [canvasRef]);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Exz <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient ">I want to be an Engineer</p>
            </div>

            <div className="w-full h-full absolute inset-0" ref={canvasRef}>
                <Canvas>
                    <ambientLight intensity={Math.PI} />
                    <directionalLight position={[10, 10, 5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>
                            <group scale={0.5} position={[0, -0.5, 0]} rotation={[0, -0.1, 0]}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}
                                    onClick={() => setZoomEnabled(true)}
                                />
                            </group>
                        </Suspense>
                    </Center>

                    {/* Orbit controls */}
                    <OrbitControls 
                        maxPolarAngle={Math.PI / 2} 
                        enableZoom={zoomEnabled} 
                        enablePan={false} 
                        minAzimuthAngle={-Infinity} 
                        maxAzimuthAngle={Infinity} 
                    />
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;