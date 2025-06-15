"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, {useState} from'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const linkData = [
        {name: 'About', path: '/dashboard/about'},
        {name: 'Settings', path: '/dashboard/settings'},
    ]
    const path = usePathname()
    const [count, setCount] = useState(0)
  return (
    <div>
        <div className='w-1/2 mx-auto border-2 border-dashed p-4 rounded-lg'>
            <div className='flex gap-4 font-bold text-lg'>
                {
                    linkData.map((link) => {
                        return <Link className={path === link.path? 'text-purple-500' : ''} key={link.path} href={link.path}>{link.name}</Link>
                    })
                }
            </div>
            <h1>我是 Dashboard {count}</h1>
            <button className='bg-black text-white p-2 rounded-lg' onClick={() => setCount(count + 1)}>Increment</button>
            {children}
        </div>
        
    </div>
  );
}
