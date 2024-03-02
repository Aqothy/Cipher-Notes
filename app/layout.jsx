import "./globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/redux/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersistLogin from "@/components/PersistLogin";
import Redirect from "@/components/Redirect";
import CheckLoading from "@/components/CheckLoading";

export const metadata = {
  title: "Next js auth",
  description: "",
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer />
        <ReduxProvider>
          <PersistLogin>
            <CheckLoading>
              <Redirect>{children}</Redirect>
            </CheckLoading>
          </PersistLogin>
        </ReduxProvider>
      </body>
    </html>
  );
}
