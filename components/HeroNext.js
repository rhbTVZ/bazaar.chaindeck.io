import Image from "next/image";

export default function HeroNext() {
    return (
        <div className="">
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 items-center">
                <div className="max-w-lg mx-auto order-2 md:order-1">
                    <h3 className="text-center md:text-left text-4xl font-bold leading-tight">
                        We{" "}
                        <span className="text-transparent py-0.5 md:py-1 lg:py-2 bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            Deploy, <br /> Monitor, Backup
                        </span>{" "}
                        Blockchain Nodes
                    </h3>

                    <div className="text-center md:text-left">
                        <button
                            type="button"
                            className="rounded-full bg-[#8763DE] mt-8 px-8 py-3 font-semibold text-xl text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="mx-auto order-1 md:order-2 md:col-span-2">
                    <Image
                        src={"/assets/bg/tree-bg.png"}
                        height={1200}
                        width={1200}
                        alt="Tree"
                    />
                </div>
            </div> */}

            <div>
                <Image
                    src={"/assets/bg/tree-cut.png"}
                    height={2000}
                    width={2000}
                    className=""
                    alt="Tree"
                />

                {/* <div className="absolute flex flex-col items-center justify-center md:mt-36 lg:mt-48 xl:mt-60 md:items-start md:pl-12 lg:pl-16 h-full w-full top-0">
                    <h3 className="text-center md:text-left text-2xl font-bold leading-tight max-w-xs">
                        We{" "}
                        <span className="text-transparent py-0.5 md:py-1 lg:py-2 bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            Deploy, Monitor, Backup
                        </span>{" "}
                        Blockchain Nodes
                    </h3>
                    <div className="text-center md:text-left">
                        <button
                            type="button"
                            className="rounded-full bg-[#8763DE] mt-4 px-6 py-2 font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get Started
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
