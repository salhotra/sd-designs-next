import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import HomeContent from "./components/HomeContent";
import Overlay from "./components/Overlay";
import FixedNavBar from "./components/FixedNavbar";

config.autoAddCss = false;

export default function Home(): JSX.Element {
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col z-10">
        <FixedNavBar />
        <ToastContainer />
        <main>
          <div className="fixed h-screen w-screen md:block hidden">
            <Overlay intensity="20">
              <Image
                priority
                fill
                src="/hero-1.webp"
                quality={50}
                alt="Background"
                className="object-cover"
              />
            </Overlay>
          </div>
          <HomeContent />
        </main>
      </div>
    </div>
  );
}
