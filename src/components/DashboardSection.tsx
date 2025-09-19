import React from "react";
import Squares from "./Squares";
const DashboardSection = () => {
    return (
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background with grid */}
            <div className="absolute inset-0 -z-20">
                <Squares
                        speed={0.5}
                        squareSize={40}
                        direction='diagonal' // up, down, left, right, diagonal
                        borderColor='#fff'
                        hoverFillColor='#222'

                    />
               
            </div>

            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                    Your <span className="text-purple-600 bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">all-in-one</span>{" "}
                    <span className="text-black">dashboard</span>
                </h2>

                {/* Subtext */}
                <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-12">
                    See live calls, transcripts, transactions, and outcomes in one place. Update
                    business info, track payments, monitor earnings, and identify peak call times —
                    so you can staff smarter and grow revenue effortlessly.
                </p>

                {/* Mockup */}
                <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden ">
                    <img
                        src="/mac-dash.png" // Add your dashboard screenshot in /public
                        alt="Dashboard Preview"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default DashboardSection;