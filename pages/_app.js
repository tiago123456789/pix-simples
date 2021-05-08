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
      <ToastProvider autoDismiss={true} autoDismissTimeout="4000">
        <Component {...pageProps} foods={foods} company={company} />
      </ToastProvider>
  )
}

export default MyApp;
