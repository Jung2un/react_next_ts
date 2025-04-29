import "./globals.css";
import layout from "./page.module.css";
import { ToastContainer } from "react-toastify";
import Header from "@/app/components/common/Header";
import LeftMenu from "@/app/components/common/LeftMenu";
import DarkModeProvider from "@/app/components/DarkModeProvider";

export const metadata = {
    title: "dev Archive",
    description: "프로젝트 기록",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body className={layout.pretend}>
        <DarkModeProvider>
            <Header />
            <div className={layout.mainLayout} id="__next">
                <div>
                    <LeftMenu isMenuOpen={false} />
                </div>
                <div className={layout.flex}>
                    {children}
                </div>
                <ToastContainer position="top-right" hideProgressBar autoClose={1000} />
            </div>
        </DarkModeProvider>
        </body>
        </html>
    );
}
