import './globals.css';
import Header from '@/components/Header';


export const metadata = {
title: 'Streaming Dashboard',
description: 'A small streaming dashboard clone built with Next.js 14',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-neutral-900 text-white min-h-screen">
<Header />
<main className="pt-16">{/* padding to offset fixed header */}
{children}
</main>
</body>
</html>
);
}