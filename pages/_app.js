import Link from "next/link";
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import '../styles/globals.css'
import "../styles/pix.css";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps, company, foods }) {
  return (
    <div className="items-center">
      <nav className="bg-white py-2 md:py-4 mb-2" style={{ "border-bottom": "1px solid rgba(0, 0, 0, .1)", }}>
        <div className="container px-4 mx-auto md:flex md:items-center">

          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-center text-yellow-500">Pix Simples</a>
          </div>

          <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" >
          </div>
        </div>
      </nav>
      <ToastProvider autoDismiss={true} autoDismissTimeout="4000">
        <Component {...pageProps} foods={foods} company={company} />
      </ToastProvider>
    </div>
  )
}

export default MyApp;
