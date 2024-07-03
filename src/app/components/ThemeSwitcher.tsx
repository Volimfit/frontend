// app/components/ThemeSwitcher.tsx
'use client';

import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon } from '../icons/MoonIcon';
import { SunIcon } from '../icons/SunIcon';
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected
        size='lg'
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
        color='success'
        startContent={<SunIcon />}
        endContent={<MoonIcon />}>
        Dark mode
      </Switch>
    </div>
  );
}
