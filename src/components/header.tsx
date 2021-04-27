import React from "react";

import Pattern from "../assets/pattern.svg";
import Hologram from "../assets/hologram.svg";

export default function Header(): React.ReactElement {
    return (
        <header className="container mx-auto  bg-blue-100 relative my-12 h-auto overflow-hidden">
            <Pattern className="w-full h-full text-blue-200 absolute top-0 left-0" />
            <Hologram className="h-full absolute right-0 top-0 hidden md:block transform translate-x-2/3 lg:scale-110 xl:translate-x-1/2 -translate-y-6" />

            <div className="w-100 md:w-[70%] h-full relative px-4 md:px-16 py-32 space-y-12 md:space-y-16">
                <h1 className="text-6xl md:text-7xl font-bold capitalize text-gray-900">The Future Is Here</h1>
                <p className="text-gray-700 font-semibold text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil autem rerum dolorem eos
                    exercitationem quas perspiciatis iusto, quia architecto ea placeat provident illo voluptatibus magni
                    modi, vero consectetur. Impedit.
                </p>
                <div className="sm:flex sm:space-x-12 space-y-4 sm:space-y-0">
                    <button className="block w-full sm:w-auto px-8 lg:px-16 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 ring-gray-700 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                    <button
                        className="block w-full sm:w-auto px-8 lg:px-16 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 ring-gray-700 bg-gray-50 hover:bg-gray-100
                         transition-colors"
                    >
                        Start Demo
                    </button>
                </div>
            </div>
        </header>
    );
}
