import React from "react";

export default function About(): React.ReactElement {
    return (
        <section className="container mx-auto md:flex md:justify-between md:items-center my-16 text-2xl">
            <div className="w-full md:w-1/2 px-8 md:px-12">
                <h3 className="text-blue-600 text-5xl md:text-5xl lg:text-7xl mb-12">Our Hardware</h3>
                <p className="text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus non delectus repellendus
                    aliquid illo accusamus doloremque necessitatibus, ab, tenetur officiis. Rerum repellat nostrum
                    voluptas, itaque provident exercitationem quo eveniet,{" "}
                    <a href="#" className="text-blue-700 font-semibold">
                        Link
                    </a>
                    .
                </p>
            </div>
            <img
                src="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?fit=crop&w=800&q=80"
                alt="Our computing servers facility"
                className="w-full h-[500px] mt-8 md:mt-0 md:w-1/2 object-cover"
            />
        </section>
    );
}
