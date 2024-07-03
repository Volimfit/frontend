import { Button } from '@nextui-org/react';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import Header from './components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <Button>Click me</Button>
      <ThemeSwitcher />
    </main>
  );
}
