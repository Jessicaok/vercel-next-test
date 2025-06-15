"use client"
import React, {useState} from'react';

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [count, setCount] = useState(0)
  return (
    <div>
        <div className=' mx-auto border-2 border-dashed p-4 rounded-lg my-4'>
            <h1>我是 DashboardTemplate {count}</h1>
            <button className='bg-black text-white p-2 rounded-lg' onClick={() => setCount(count + 1)}>Increment</button>
            {children}
        </div>
        
    </div>
  );
}
