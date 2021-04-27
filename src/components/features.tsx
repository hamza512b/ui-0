import { CheckCircleIcon, CurrencyDollarIcon, FastForwardIcon, SparklesIcon } from "@heroicons/react/outline";
import React from "react";

const features: { name: string; description: string; Icon: React.ElementType }[] = [
    {
        name: "quick",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque nemo quisquam dol!",
        Icon: FastForwardIcon,
    },
    {
        name: "effictive",
        description:
            "Quasi rem aliquam pariatur quas numquam. Rerum dolorem, nemo quisquam dolore dignissimos ipsum id ill.",
        Icon: CheckCircleIcon,
    },
    {
        name: "peforment",
        description:
            "Aperiam neque laborum sit nsectetur adipisic animi necessitatibus quasi rem aliquam pariatur quas!",
        Icon: SparklesIcon,
    },
    {
        name: "generous",
        description:
            "Aperiam neque laborum sit nsectetur adipisic animi necessitatibus quasi rem aliquam pariatur quas!",
        Icon: CurrencyDollarIcon,
    },
];

export default function Features(): React.ReactElement {
    return (
        <section className="container mx-auto space-y-12 md:space-y-0 my-12 md:grid md:grid-cols-2 gap-y-8 gap-4 px-4">
            {features.map(({ description, Icon, name }) => (
                <div key={name} className="flex justify-between space-x-4 md:space-x-12">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-gray-50" />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-2xl capitalize flex items-center text-gray-900 font-semibold opacity-80 space-x-2 mb-2">
                            {name}
                        </h2>
                        <p className="text-gray-500">{description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
