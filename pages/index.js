import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HeroNext from "@/components/HeroNext";
import LiveList from "@/components/LiveList";
import Products from "@/components/Products";
import SvgBg from "@/components/SvgBg";
import WhyUs from "@/components/WhyUs";
import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Chaindeck</title>
            </Head>

            <Layout>
                <div className="">
                    {" "}
                    {/* bg-[#100828] */}
                    <div
                        className="bg-gradient-to-b from-[#151C38] to-[#083344]"
                        style={{
                            // height: "100%",
                            width: "100%",
                            backgroundImage: `linear-gradient(0deg, #100828 0%, #100828 100%)`,
                            clipPath: `ellipse(100% 55% at 48% 44%)`,
                            overflow: "hidden",
                        }}
                    >
                        {/* <Hero /> */}
                        <HeroNext />
                    </div>
                    {/* <HeroNext /> */}
                    <div
                        className="bg-gradient-to-b from-[#100828] to-[#151C38]"
                        /* style={{
                            backgroundImage: `url('/assets/bg/wave.svg')`,
                            backgroundRepeat: "no-repeat",
                        }} */
                    >
                        <div className="px-4 md:px-0 text-xl space-y-8 text-center max-w-4xl mx-auto py-12">
                            <p>
                                Introducing ChainDeck&apos;s Banyan Bazaar, a
                                user-friendly decentralized data marketplace
                                inspired by the remarkable Banyan trees of
                                India. With the strength and complexity of these
                                trees, Banyan Bazaar simplifies data sharing
                                while maintaining security and resilience.
                            </p>
                            <p>
                                Our platform allows you to access
                                blockchain-indexed data, complete with proofs,
                                for a wide range of applications such as supply
                                chain management, financial transactions, and
                                identity verification. Experience the power of
                                secure, efficient data exchange and unlock
                                endless possibilities with ChainDeck&apos;s
                                Banyan Bazaar.
                            </p>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="rounded-full bg-[#8763DE] my-4 px-6 py-2 font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <a href="#contact">Get Started</a>
                                </button>
                            </div>
                        </div>
                        {/* older one */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-12">
                            <div className="px-4 md:px-0 md:pl-12 lg:pl-20 text-xl space-y-8 text-center">
                                <p>
                                    Introducing ChainDeck&apos;s Banyan Bazaar,
                                    a user-friendly decentralized data
                                    marketplace inspired by the remarkable
                                    Banyan trees of India. With the strength and
                                    complexity of these trees, Banyan Bazaar
                                    simplifies data sharing while maintaining
                                    security and resilience.
                                </p>
                                <p>
                                    Our platform allows you to access
                                    blockchain-indexed data, complete with
                                    proofs, for a wide range of applications
                                    such as supply chain management, financial
                                    transactions, and identity verification.
                                    Experience the power of secure, efficient
                                    data exchange and unlock endless
                                    possibilities with ChainDeck&apos;s Banyan
                                    Bazaar.
                                </p>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="rounded-full bg-[#8763DE] my-4 px-6 py-2 font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <a href="#contact">Get Started</a>
                                    </button>
                                </div>
                            </div>
                            <Image
                                src={"/assets/bg/tree-tr.png"}
                                height={1000}
                                width={1000}
                                alt=""
                            />
                        </div> */}
                    </div>
                    {/* <div className="bg-gradient-to-b from-[#3B123B] to-[#5B2468]">
                        <Features />
                    </div> */}
                    <div className="bg-gradient-to-b from-[#151C38] to-[#5B2468]">
                        <LiveList />
                    </div>
                    {/* <div className="bg-gradient-to-b from-[#151C38] to-[#083344]">
                        <Products />
                    </div> */}
                    {/* <div className="bg-gradient-to-b from-[#083344] to-[#151C38]">
                        <WhyUs />
                    </div> */}
                    <div className="bg-gradient-to-b from-[#5B2468] to-[#083344] pt-8">
                        <ContactUs />
                    </div>
                </div>
            </Layout>
        </div>
    );
}

/* 

style={{
    height: "90vh",
    width: "100%",
    backgroundImage: `linear-gradient(0deg, #151C38 0%, #083344 100%)`,
    clipPath: `ellipse(100% 55% at 48% 44%)`,
    // clipPath: `circle(120vh at 50% -10vh)`,
}}

*/
