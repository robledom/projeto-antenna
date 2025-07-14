/// <reference types="vite/client" />

// Declaração para o objeto Termly na janela global
interface Termly {
  loadEmbeds: () => void;
}

interface Window {
  Termly?: Termly;
}

// Nova declaração para permitir o atributo 'name' em divs no React/JSX
declare namespace JSX {
  interface IntrinsicElements {
    'div': React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
      name?: string;
    };
  }
}