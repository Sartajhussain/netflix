import React from "react";
import banner from "../assets/bg-banner.jpg";

function HomeBanner() {
    return (
        <div className="relative w-full h-screen">
            <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-cover absolute ]"
            />
            <div className="absolute top-[-100px] inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Unlimited movies, <br />TV shows, and more
                </h1>
                <p className="text-lg md:text-xl mb-6">Starts at ₹149. Cancel at any time.</p>
                <p className="text-lg md:text-xl mb-6 font-semibold">Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className="w-full max-w-xl flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full md:flex-1 px-4 py-3 rounded text-white text-lg outline-none bg-gray-600"
                    />
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-lg font-semibold transition w-full md:w-auto">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
}

export default HomeBanner;
