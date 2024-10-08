'use client';
import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: 'О клубе',
      href: '#about',
    },
    {
      title: 'Концепция',
      href: '#section',
    },
    {
      title: 'Тренеры',
      href: '#trainers',
    },
    {
      title: 'Контакты',
      href: '#contact',
    },
  ];

  return (
    <Navbar height={'5rem'} isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <Image
            className='animated-logo'
            src={'/logo_only.png'}
            alt='ff'
            width={100}
            radius='none'
          />
          <Image radius='none' src={'/logo_text.png'} alt='ff' width={150} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
      <Link color='foreground' href='/'>
        <NavbarBrand className='p-4 '>
          <Image
            className=' animated-logo'
            radius='none'
            src={'/logo_only.png'}
            alt='ff'
            width={100}
          />
          <Image radius='none' src={'/logo_text.png'} alt='ff' width={150} />
        </NavbarBrand>
        </Link>
        <NavbarItem>
          <Link color='foreground' href='/#about'>
            О клубе
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/#section' color='foreground'>
            Концепция
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/#trainers'>
            Тренеры
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/#contact' color='foreground'>
            Контакты
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        {/* <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} variant='ghost' color='success' href='#form'>
            Оставить заявку
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className='mt-10' key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={'foreground'}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              href={`/${item.href}`}
              size='lg'>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
