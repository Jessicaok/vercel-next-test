import Hero from "@/app/components/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Performance",
}

export default function PerformancePage() {
    return (
        <Hero imgUrl="/images/02.jpg" imgAlt="Performance" content="Performance"/>
    )
}