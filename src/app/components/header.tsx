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

  const menuItems = ['О клубе', 'Секции', 'Контакты'];

  return (
    <Navbar height={'5rem'} isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand className='animated-logo'>
          <Image src={'logo_only.png'} alt='ff' width={100} radius='none' />
          <Image radius='none' src={'logo_text.png'} alt='ff' width={150} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand className='p-4 animated-logo'>
          <Image className='' radius='none' src={'logo_only.png'} alt='ff' width={100} />
          <Image radius='none' src={'logo_text.png'} alt='ff' width={150} />
        </NavbarBrand>
        <NavbarItem>
          <Link color='foreground' href='#'>
            О клубе
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground'>
            Секции
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground'>
            Контакты
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        {/* <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color='success' href='#'>
            Оставить заявку
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full' color={'foreground'} href='#' size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
