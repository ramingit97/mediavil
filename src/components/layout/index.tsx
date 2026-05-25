import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="  w-full min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
