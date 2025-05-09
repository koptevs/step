'use client'; // Error boundaries must be Client Components
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

type Props = {
    error: Error;
    reset(): void;
    // reset: () => void;
};

export default function Error({ error, reset }: Props) {
    const t = useTranslations('Error');
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            {t.rich('description', {
                p: (chunks) => <p className="mt-4">{chunks}</p>,
                retry: (chunks) => (
                    <button
                        className="text-white underline underline-offset-2"
                        onClick={reset}
                        type="button"
                    >
                        {chunks}
                    </button>
                ),
            })}
        </div>
        // <div>
        //     <h2>Message from @/app/error.tsx: Something went wrong!</h2>
        //     <button
        //         onClick={
        //             // Attempt to recover by trying to re-render the segment
        //             () => reset()
        //         }
        //     >
        //         Try again
        //     </button>
        // </div>
    );
}
