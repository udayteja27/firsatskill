'use client';
import Link from 'next/link';
import { useState } from 'react';


export default function Header() {
const [open, setOpen] = useState(false);
return (
<header className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<Link href="/" className="text-white font-bold text-xl">Streamly</Link>
<nav className="hidden md:flex gap-4 items-center text-sm text-gray-200">
<Link href="#">Home</Link>
<Link href="#">Popular</Link>
<Link href="#">Top Rated</Link>
</nav>
<button
aria-label="menu"
className="md:hidden text-white"
onClick={() => setOpen(v => !v)}
>
☰
</button>
</div>
{open && (
<div className="md:hidden px-4 pb-4">
<Link href="/">Home</Link>
</div>
)}
</header>
);
}