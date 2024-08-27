// fonts.js
import { Allerta_Stencil, Anek_Devanagari, Arya } from 'next/font/google';

// Define the fonts with specific configurations
export const allertaStencil = Allerta_Stencil({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-allerta-stencil',
});

export const anekDevanagari = Anek_Devanagari({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anek-devanagari',
});

export const arya = Arya({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-arya',
});
