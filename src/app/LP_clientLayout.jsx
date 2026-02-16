"use client";

import GlobalPopups from "./Globalpopups";


export default function ClientLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
      <GlobalPopups />
    </>
  );
}