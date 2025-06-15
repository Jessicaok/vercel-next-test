"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const linkData = [
        {name: "Performance", path: "/performance"},
        {name: "Reliability", path: "/reliability"},
        {name: "Scale", path: "/scale"}
    ]

    const path = usePathname()

    return (
        <div className="absolute w-full z-10">
            <header className="flex justify-between items-center text-white p-4 container mx-auto">
            <h1 className="font-bold text-3xl">
                <Link href="/">Home</Link>
            </h1>
            <div className="text-xl space-x-4">
                {
                    linkData.map(link => (
                        <Link className={path === link.path? "text-purple-500" : ""} href={link.path} key={link.path}>{link.name}</Link>
                    ))
                }
            </div>
        </header>
        </div>
        
    );
}