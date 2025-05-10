import { TopNavbar } from '@/components/top-navbar';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
    return (
        <main>
            <TopNavbar />
            <div className="container mx-auto px-2">{children}</div>
        </main>
    );
}
