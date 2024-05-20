import type { Project } from "~/types"
import { Tag } from "./tags"

export const projects: Project[] = [
	{
		name: "Dreflix",
		description:
			"Aplicación web para explorar películas, con funcionalidades como infinite scroll, un buscador de películas enfocándose en la navegación por teclado al estilo del buscador de YouTube, un carrusel para promocionar películas con características como autoplay solo cuando esté en el viewport o la pestaña tenga el foco, animaciones al cambiar y mostrar un nuevo ítem, entre otros muchos detalles y funcionalidades. El diseño de la app es una combinación entre el diseño de la aplicación de Amazon Prime Video y Crunchyroll.",
		tags: [
			Tag.nextJS14,
			Tag.cssModules,
			Tag.typescript,
			Tag.theMovieDB,
			Tag.zustand,
			Tag.movieExplorer,
		],
		links: [
			{
				label: "Visitar sitio",
				url: "https://dreflix.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/dreflix",
			},
		],
		imageUrl: "media/images/projects/dreflix.webp",
	},
	{
		name: "Vexara",
		description:
			"Clon del ecommerce de Bershka implementando las funcionalidades principales como el flujo de autenticación usando auth.js, el flujo de pago de productos usando la pasarela de pagos mercadopago, maquetando la app lo mas similar posible, agregando el responsive sin usar js (que es como se hace originalmente), implementando código 100% funcional en producción.",
		tags: [
			Tag.mercadopago,
			Tag.zustand,
			Tag.prismaORM,
			Tag.nextJS14,
			Tag.authJS,
			Tag.typescript,
			Tag.ecommerce,
		],
		links: [
			{
				label: "Visitar sitio",
				url: "https://vexara.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/vexara",
			},
		],
		imageUrl: "media/images/projects/vexara.webp",
	},
	{
		name: "Personal link manager",
		description:
			"Aplicación para gestionar enlaces donde se hace un poco de scraping para obtener datos como el título, la descripción y la imagen usada en OGP. Cuenta con un componente para gestionar las etiquetas al estilo del TagsInput de GitHub. El enfoque principal es del lado del servidor, haciendo que la mayoría de las peticiones se realicen en el servidor.",
		tags: [Tag.nextJS14, Tag.typescript, Tag.prismaORM],
		links: [
			{
				label: "Visitar sitio",
				url: "https://personal-link-manager.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/personal-link-manager",
			},
		],
		imageUrl: "media/images/projects/personal-link-manager.webp",
	},
]
