import Hero from "@/app/components/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Reliability",
}

export default function ReliabilityPage() {
    return (
        <Hero imgUrl="/images/03.jpg" imgAlt="Reliability" content="Reliability"/>
    )
}