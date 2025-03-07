import { useEffect, useState } from "react";

export default function ContactUs() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes("success=true")) {
            setSuccess(true);
        }
    }, []);

    return (
        <div
            className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 space-y-12 pb-12 md:pb-16 lg:pb-24 bg-[#333]"
            id="contact"
        >
            <div className="space-y-8">
                <h3 className="mx-auto text-center text-5xl font-bold">
                    Contact Us
                </h3>
            </div>

            {success && (
                <div>
                    <p className="text-center font-semibold text-green-500">
                        Thanks for your message!
                        <span
                            onClick={() => setSuccess(false)}
                            className="font-semibold text-white ml-4 cursor-pointer"
                        >
                            X
                        </span>
                    </p>
                </div>
            )}

            <form
                className="max-w-lg mx-auto"
                name="contact"
                method="POST"
                action="/?success=true"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <input name="bot-field" />
                </div>

                <div className="max-w-md mx-auto space-y-4">
                    <div className="">
                        <label
                            htmlFor="name"
                            className="block font-medium text-zinc-300"
                        >
                            Name
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="p-4 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Full name"
                                required
                            />
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="email"
                            className="block font-medium text-zinc-300"
                        >
                            Email
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="p-4 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="">
                        <label
                            htmlFor="message"
                            className="block font-medium text-zinc-300"
                        >
                            Message
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <textarea
                                rows={6}
                                type="text"
                                name="message"
                                id="message"
                                className="p-4 block w-full rounded-md bg-zinc-800 focus:bg-slate-800 border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Your message"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="rounded-full bg-[#8763DE] mt-8 px-8 py-3 font-semibold text-xl text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
