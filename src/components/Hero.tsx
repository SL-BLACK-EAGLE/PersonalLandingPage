"use client"
import Image from "next/image";
import VerifiedIcon from "@/common/components/VerifiedIcon";

const Hero = () => {
    return (
        <header>
            <div>
                <Image
                    src=""
                    alt=""
                />
            </div>
            <div>
                <h1>Chathuranga Lakmal</h1>
                <VerifiedIcon />
                <p>Skilled Software Engineer with a knack for
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                transforming designs into dynamic and user-friendly software's</p>

            </div>
        </header>
    );
}
export default Hero;