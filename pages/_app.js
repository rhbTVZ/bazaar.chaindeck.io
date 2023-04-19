import "@/styles/tailwind.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
