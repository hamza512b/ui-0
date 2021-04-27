import React from "react";

export default function NewsleterSection(): React.ReactElement {
    return (
        <section className="container mx-auto my-32 text-center px-4">
            <p className="text-4xl">Do you want to stay in touch?</p>
            <p className="text-blue-600 text-4xl mb-12">Subscribe to our newsletter!</p>

            <div className="md:flex md:items-center justify-center md:space-x-4">
                <label htmlFor="email" className="sr-only">
                    Subsribe to the newsletter email list
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full md:px-8 md:py-4 px-4 py-2 bg-gray-200 placeholder-gray-60 md:w-96 text-lg rounded-lg focus:outline-none focus:ring-2 ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-600 mb-4 md:mb-0"
                />
                <button className="md:px-8 md:py-4 px-4 py-2 text-lg bg-blue-600 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-600 ring-gray-700 text-white hover:bg-blue-700 transition-colors">
                    Submit
                </button>
            </div>
        </section>
    );
}
