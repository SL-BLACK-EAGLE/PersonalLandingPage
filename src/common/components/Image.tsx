"use client"
import clsx from "clsx";
import NextImage, {ImageProps as NextImageProps} from "next/image";
import {useState} from "react";

type ImageProps = {
    rounded?: string;
} & NextImageProps;

const Image = ({alt, src, classname, rounded, ...rest}:ImageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    return (
        <div
            className={clsx(
                "overflow-hidden",
                isLoading ? "animate-pulse" : "",
                rounded,
            )}
        >
            <NextImage
                className={clsx("duration-700 ease-in-out",
                    isLoading
                        ? "scale-[1.02] blur-xl grayscale"
                        : "scale-100 blur-0 grayscale-0",
                    rounded,
                    classname
                )}
                alt={alt}
                src={src}
                loading="lazy"
                quality={100}
                onLoadingComplete={() => setIsLoading(false)}
                {...rest}
            />
        </div>
    )
}
export default image;