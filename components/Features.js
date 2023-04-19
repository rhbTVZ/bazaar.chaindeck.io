import Image from "next/image";

export default function Features() {
    return (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div className="max-w-4xl mx-auto space-y-8 pb-16">
                <h5 className="text-center text-xl">Powerful Features</h5>
                <h3 className="mx-auto text-center text-5xl font-bold">
                    Be Part of the Open Economy of the Future
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2 flex">
                    <div className="bg-[#171717] rounded-3xl p-8 flex flex-col justify-between space-y-16">
                        <h5 className="uppercase font-semibold text-zinc-500">
                            Interchain Accounts
                        </h5>
                        <Image
                            src={"/assets/img/svgexport-1.svg"}
                            width={240}
                            height={120}
                            alt="logo"
                        />
                        <h2 className="text-4xl font-bold">
                            One secure account for all your digital assets.
                        </h2>
                        <h5 className="text-zinc-500">Coming soon</h5>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-[#171717] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-end items-center">
                            <div className="space-y-16">
                                <h5 className="uppercase font-semibold text-zinc-500">
                                    Interchain Accounts
                                </h5>
                                <h2 className="text-4xl font-bold">
                                    Swap tokens & collectibles.
                                </h2>
                                <h5 className="text-zinc-500">Coming soon</h5>
                            </div>
                            <Image
                                src={"/assets/img/svgexport-1.svg"}
                                width={180}
                                height={100}
                                className="hidden md:block"
                                alt="logo"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 w-full">
                            <div className="bg-[#171717] rounded-3xl p-8 space-y-16 w-full md:w-1/2 flex flex-col justify-between">
                                <h5 className="uppercase font-semibold text-zinc-500">
                                    Interchain Accounts
                                </h5>
                                <h2 className="text-4xl font-bold">
                                    Provide liquidity. Earn rewards.
                                </h2>
                                <h5 className="text-zinc-500">Coming soon</h5>
                            </div>
                            <div className="bg-[#171717] rounded-3xl p-8 space-y-16 w-full md:w-1/2 flex flex-col justify-between">
                                <h5 className="uppercase font-semibold text-zinc-500">
                                    Interchain Accounts
                                </h5>
                                <h2 className="text-4xl font-bold">
                                    + Ethereum.
                                    <br />+ Bitcoin.
                                </h2>
                                <h5 className="text-zinc-500">Coming soon</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
