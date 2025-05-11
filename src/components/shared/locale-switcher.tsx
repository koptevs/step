import { routing } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { LocaleSwitcherSelect } from './locale-switcher-select';

export function LocaleSwitcher({ withGlobe }: { withGlobe?: boolean }) {
    const locale = useLocale();

    return (
        <div className="flex items-center gap-2">
            {withGlobe && <Globe className="text-muted-foreground h-4 w-4" />}
            <LocaleSwitcherSelect defaultValue={locale} label="Select a locale">
                {routing.locales.map((cur) => (
                    <option key={cur} value={cur}>
                        {cur}
                    </option>
                ))}
            </LocaleSwitcherSelect>
        </div>
    );
}
