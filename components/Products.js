import Image from "next/image";

export default function Products() {
    return (
        <div
            className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
            id="products"
        >
            <div className="max-w-5xl mx-auto">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h5 className="text-center text-xl">Our Products</h5>
                    <h3 className="mx-auto text-center text-5xl font-bold">
                        Deploy and Run a Better App with Our Products
                    </h3>
                </div>

                <div className="space-y-16">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-32 space-y-12">
                        <div className="w-full max-w-md space-y-4 text-center md:text-left">
                            <h4 className="text-4xl font-semibold">
                                Dedicated Nodes
                            </h4>
                            <p className="text-lg">
                                We provide Exclusive node deployments for
                                Ethereum, BSC and Polygon with low latency and
                                high efficency
                            </p>
                        </div>
                        <div className="w-full">
                            <Image
                                src={"/assets/images/dedicated-nodes.png"}
                                height={500}
                                width={500}
                                alt="dedicated-nodes"
                                className="mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 md:gap-32 space-y-12">
                        <div className="w-full max-w-md space-y-4 text-center md:text-left">
                            <h4 className="text-4xl font-semibold">
                                Monitoring & Alerting
                            </h4>
                            <p className="text-lg">
                                Showing the live metrics of the node such as
                            </p>
                            <ul className="list-disc ml-4 text-left">
                                <li>Transaction Processed</li>
                                <li>Block Size</li>
                                <li>Most Recent Block</li>
                                <li>Connected Peers</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <Image
                                src={"/assets/images/bc-monitor.png"}
                                height={500}
                                width={500}
                                alt="dedicated-nodes"
                                className="mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-32 space-y-12">
                        <div className="w-full max-w-md space-y-4 text-center md:text-left">
                            <h4 className="text-4xl font-semibold">
                                Automated Backup & Restore Nodes
                            </h4>
                            <p className="text-lg">
                                Backed up data in compressed format allow for
                                quicker data download and node sync compared to
                                traditional download
                            </p>
                        </div>
                        <div className="w-full">
                            <Image
                                src={"/assets/images/automated-backup.png"}
                                height={500}
                                width={500}
                                alt="dedicated-nodes"
                                className="mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 md:gap-32 space-y-12">
                        <div className="w-full max-w-md space-y-4 text-center md:text-left">
                            <h4 className="text-4xl font-semibold">
                                Blockchain Indexing (Free)
                            </h4>
                            <p className="text-lg">
                                Coming soon: Access to all blockchain data for
                                free. Convert your AI/ML models into monetized
                                data with us.
                            </p>
                        </div>
                        <div className="w-full">
                            <Image
                                src={"/assets/images/serveless-blockchain.png"}
                                height={500}
                                width={500}
                                alt="dedicated-nodes"
                                className="mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="button"
                        className="rounded-full bg-[#8763DE] mt-8 px-8 py-3 font-semibold text-xl text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Book a Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
