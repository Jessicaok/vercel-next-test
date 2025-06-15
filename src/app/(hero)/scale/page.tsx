import Hero from '@/app/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Scale',
}

export default function ScalePage () {
    return (
        <Hero imgAlt="Scale" imgUrl="/images/01.png" content="Scale" />
    )
}