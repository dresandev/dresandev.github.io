import type { Project } from '~/types'
import { Tag } from './tags'

export const projects: Project[] = [
  {
    name: 'Dreflix',
    description: 'Sitio web dedicado a explorar el mundo cinematográfico, donde descubrirás información sobre una gran variedad de películas. Podrás acceder a detalles como la sinopsis, el tráiler, el reparto principal entre otros. El diseño es una mezcla del diseño de las plataformas de transmisión de video Amazon Prime y Crunchyroll.',
    tags: [
      Tag.nextJS14,
      Tag.cssModules,
      Tag.typescript,
      Tag.theMovieDB,
      Tag.zustand,
    ],
    links: [
      {
        label: 'Visitar sitio',
        url: 'https://dreflix.vercel.app/',
      },
      {
        label: 'Ver código',
        url: 'https://github.com/dresandev/dreflix',
      }
    ],
    imageUrl: 'media/images/projects/dreflix.webp'
  },
  {
    name: 'Vexara',
    description: 'Clon del ecommerce de Bershka implementando las funcionalidades principales como el flujo de autenticación usando auth.js, el flujo de pago de productos usando la pasarela de pagos mercadopago, maquetando la app lo mas similar posible y agregar el responsive sin usar js (que es como se hace originalmente), implementando código 100% funcional en producción.',
    tags: [
      Tag.mercadopago,
      Tag.zustand,
      Tag.prismaORM,
      Tag.nextJS14,
      Tag.authJS,
    ],
    links: [
      {
        label: 'Visitar sitio',
        url: 'https://vexara.vercel.app/',
      },
      {
        label: 'Ver código',
        url: 'https://github.com/dresandev/vexara',
      }
    ],
    imageUrl: 'media/images/projects/vexara.webp'
  },
]
