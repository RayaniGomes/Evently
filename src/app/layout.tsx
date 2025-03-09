"use client";
import { Bounce, ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/(components)/navbar";
import Footer from "@/(components)/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Evently</title>
      </head>
      <body>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <StyledComponentsRegistry>
          <SessionProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SessionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
