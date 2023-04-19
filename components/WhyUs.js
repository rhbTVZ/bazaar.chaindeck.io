import {
    CheckBadgeIcon,
    CheckCircleIcon,
    PresentationChartLineIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function WhyUs() {
    return (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div className="space-y-8">
                <h5 className="text-center text-xl">We Deliver Excellence</h5>
                <h3 className="mx-auto text-center text-5xl font-bold">
                    Why Choose Us
                </h3>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-md lg:max-w-5xl mx-auto">
                    <div className="flex flex-col items-center justify-start max-w-[220px] p-8 space-y-2 bg-[#0d1427] rounded-xl">
                        <RocketLaunchIcon
                            className="h-10 w-10"
                            aria-hidden="true"
                        />
                        <h3 className="text-xl font-semibold">Latency</h3>
                        <p className="text-center">
                            Up to 100 times faster RPC calls
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start max-w-[220px] p-8 space-y-2 bg-[#0d1427] rounded-xl">
                        <CheckBadgeIcon
                            className="h-10 w-10"
                            aria-hidden="true"
                        />
                        <h3 className="text-xl font-semibold">Reliable</h3>
                        <p className="text-center">
                            Daily backups make it easy to recover after
                            disasters
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start max-w-[220px] p-8 space-y-2 bg-[#0d1427] rounded-xl">
                        <PresentationChartLineIcon
                            className="h-10 w-10"
                            aria-hidden="true"
                        />
                        <h3 className="text-xl font-semibold">Scale-up</h3>
                        <p className="text-center">
                            Scale up on-premise devices in hours, not weeks
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start max-w-[220px] p-8 space-y-2 bg-[#0d1427] rounded-xl">
                        <ShieldCheckIcon
                            className="h-10 w-10"
                            aria-hidden="true"
                        />
                        <h3 className="text-xl font-semibold">Secure</h3>
                        <p className="text-center">
                            Secure private blockchain node deployment
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto pt-24 space-y-8">
                <h5 className="text-center text-xl">Dedicated Nodes</h5>
                <h3 className="mx-auto text-center text-5xl font-bold">
                    Private Blockchain Nodes <br />
                    <span className="text-transparent py-0.5 md:py-1 lg:py-2 bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                        Built To Boost Up Your Project
                    </span>
                </h3>

                {/* <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 border border-zinc-700 rounded-xl shadow shadow-slate-700">
                    <div className="flex flex-col justify-between space-y-4">
                        <h3 className="text-xl font-semibold">
                            Dedicated Node for BNB Smart Chain (Binance Smart
                            Chain) (BSC)
                        </h3>
                        <p>
                            Reach out to us & learn more about conditions and
                            pricing!
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Get exclusive access to archive data!
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Use various API interfaces: JSON-RPC, WS,
                                GraphQL, etc.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Connect to any network (mainnet, testnet, etc.)
                            </p>
                        </div>
                        <div className="flex">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Integrate with any 3rd-party software to be run
                                by your project
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 border border-zinc-700 rounded-xl shadow shadow-slate-700">
                    <div className="flex flex-col justify-between space-y-4">
                        <h3 className="text-xl font-semibold">
                            Dedicated Node for Polygon (MATIC)
                        </h3>
                        <p>
                            Reach out to us & learn more about conditions and
                            pricing!
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Get exclusive access to archive data!
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Use various API interfaces: JSON-RPC, WS,
                                GraphQL, etc.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Connect to any network (mainnet, testnet, etc.)
                            </p>
                        </div>
                        <div className="flex">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Integrate with any 3rd-party software to be run
                                by your project
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 border border-zinc-700 rounded-xl shadow shadow-slate-700">
                    <div className="flex flex-col justify-between space-y-4">
                        <h3 className="text-xl font-semibold">
                            Dedicated Node for Ethereum (ETH)
                        </h3>
                        <p>
                            Reach out to us & learn more about conditions and
                            pricing!
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Get exclusive access to archive data!
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Use various API interfaces: JSON-RPC, WS,
                                GraphQL, etc.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Connect to any network (mainnet, testnet, etc.)
                            </p>
                        </div>
                        <div className="flex">
                            <div className="mr-2">
                                <CheckCircleIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="">
                                Integrate with any 3rd-party software to be run
                                by your project
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="max-w-2xl mx-auto my-12">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    // className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-[#0d1427] border-2 border-zinc-700 rounded-xl">
                            <div className="flex flex-col justify-between space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Dedicated Node for BNB Smart Chain (Binance
                                    Smart Chain) (BSC)
                                </h3>
                                <p>
                                    Reach out to us & learn more about
                                    conditions and pricing!
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Get exclusive access to archive data!
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Use various API interfaces: JSON-RPC,
                                        WS, GraphQL, etc.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Connect to any network (mainnet,
                                        testnet, etc.)
                                    </p>
                                </div>
                                <div className="flex">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Integrate with any 3rd-party software to
                                        be run by your project
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-[#0d1427] border-2 border-zinc-700 rounded-xl">
                            <div className="flex flex-col justify-between space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Dedicated Node for Polygon (MATIC)
                                </h3>
                                <p>
                                    Reach out to us & learn more about
                                    conditions and pricing!
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Get exclusive access to archive data!
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Use various API interfaces: JSON-RPC,
                                        WS, GraphQL, etc.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Connect to any network (mainnet,
                                        testnet, etc.)
                                    </p>
                                </div>
                                <div className="flex">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Integrate with any 3rd-party software to
                                        be run by your project
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-[#0d1427] border-2 border-zinc-700 rounded-xl">
                            <div className="flex flex-col justify-between space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Dedicated Node for Ethereum (ETH)
                                </h3>
                                <p>
                                    Reach out to us & learn more about
                                    conditions and pricing!
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Get exclusive access to archive data!
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Use various API interfaces: JSON-RPC,
                                        WS, GraphQL, etc.
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Connect to any network (mainnet,
                                        testnet, etc.)
                                    </p>
                                </div>
                                <div className="flex">
                                    <div className="mr-2">
                                        <CheckCircleIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="">
                                        Integrate with any 3rd-party software to
                                        be run by your project
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

/* 

<div className="md:flex items-center justify-center gap-36">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-xl">
                        <div className="flex flex-col items-center justify-start max-w-[220px] p-8 max-w-[200px] space-y-2 bg-[#0d1427] rounded-xl">
                            <ArrowDownTrayIcon
                                className="h-10 w-10"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-semibold">Latency</h3>
                            <p className="text-center">
                                Up to 100 times faster RPC calls
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-8 max-w-[200px] space-y-2 bg-[#0d1427] rounded-xl">
                            <ArrowDownTrayIcon
                                className="h-10 w-10"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-semibold">Latency</h3>
                            <p className="text-center">
                                Up to 100 times faster RPC calls
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-8 max-w-[200px] space-y-2 bg-[#0d1427] rounded-xl">
                            <ArrowDownTrayIcon
                                className="h-10 w-10"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-semibold">Latency</h3>
                            <p className="text-center">
                                Up to 100 times faster RPC calls
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-8 max-w-[200px] space-y-2 bg-[#0d1427] rounded-xl">
                            <ArrowDownTrayIcon
                                className="h-10 w-10"
                                aria-hidden="true"
                            />
                            <h3 className="text-xl font-semibold">Latency</h3>
                            <p className="text-center">
                                Up to 100 times faster RPC calls
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={"/assets/images/chaindeck-img01.svg"}
                            height={400}
                            width={400}
                            alt="img-01"
                        />
                    </div>
                </div>

*/
