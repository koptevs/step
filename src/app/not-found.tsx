import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Page Not Found',
};

export default function NotFound() {
    return (
        <div className="flex h-dvh flex-col items-center justify-center">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className="text-indigo-700 hover:underline" href="/">
                Return Home
            </Link>
        </div>
    );
}
