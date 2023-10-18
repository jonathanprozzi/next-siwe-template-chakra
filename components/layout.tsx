import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// this is the main page layout for the app

export default function Layou({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex min-h-screen flex-col items-center pb-4 px-0 ${inter.className} bg-slate-50 text-slate-800`}
    >
      {/* Header */}
      <header className="shadow-md w-full p-4">
        <div className="mx-auto">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-4xl font-semibold">Next.js SIWE Template</h1>
            <ConnectButton />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="mx-auto p-4 mt-6">{children}</main>
    </div>
  );
}
