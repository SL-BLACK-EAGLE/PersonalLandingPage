"use Client"

import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";

const PageWrapper = ({children}: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 50,
            disable: "mobile",
            once: true,
        });
    }, []);
    return <main>{children}</main>
}
export default PageWrapper;