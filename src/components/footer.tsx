import React from "react";

export default function Footer(): React.ReactElement {
    return (
        <footer className="bg-gray-800 text-white px-4 py-12">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="md:text-center space-y-6 flex flex-col justify-between items-center">
                    <p className="text-xl">Social</p>
                    <a href="#" className="text-gray-300 hover:text-gray-50 underline">
                        Instagram
                    </a>

                    <a href="#" className="text-gray-300 hover:text-gray-50 underline">
                        Twitter
                    </a>
                </div>
                <div className="md:text-center space-y-6 flex flex-col justify-between items-center">
                    <p className="text-xl">Information</p>
                    <a href="#" className="text-gray-300 hover:text-gray-50 underline">
                        About Us
                    </a>

                    <a href="#" className="text-gray-300 hover:text-gray-50 underline">
                        Terms of use
                    </a>
                </div>
                <div className="md:text-center space-y-6 flex flex-col justify-between items-center">
                    <p className="text-xl">Support</p>

                    <a href="#" className="text-gray-300 hover:text-gray-50 underline">
                        Read FAQ
                    </a>
                    <a href="#" className="text-gray-300 hover:text-gray-50 underline">
                        Contact Support
                    </a>
                </div>
                <div className="text-xl md:text-center md:pt-0">
                    <span>Brand &copy; 2021</span>
                </div>
            </div>
        </footer>
    );
}
