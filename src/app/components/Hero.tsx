

import Image, { StaticImageData } from 'next/image';

interface HeroProps {
    imgUrl: string | StaticImageData;
    content: string;
    imgAlt: string
}

export default function Hero(props: HeroProps){
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Image  src={props.imgUrl} fill style={{objectFit: 'cover'}} alt={props.imgAlt}/>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
            </div>
            <div className="pt-48 flex justify-center">
            <h1 className="text-white text-6xl">{props.content}</h1>
            </div>
        </div>
    )
}