import { Playfair_Display, Montserrat } from "next/font/google";

export const playfair = Playfair_Display({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: "200" });
export const montserratUltraBold = Montserrat({
  subsets: ["latin"],
  weight: "900",
});
