
import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://angel-e-bonifacio.github.io',

    avatar: {
        src: avatar,
        alt: 'Ángel Elí Bonifacio Gálvez'
    },

    title: 'Ángel Elí Bonifacio Gálvez',

    subtitle: 'Estudiante de Ingeniería en Desarrollo y Gestión de Software',

    description: 'Portafolio personal de Ángel Elí Bonifacio Gálvez, estudiante de Ingeniería en Desarrollo y Gestión de Software. Proyectos, tecnologías y experiencia en desarrollo de software.',

    image: {
        src: '/dante-preview.jpg',
        alt: 'Portafolio personal de Ángel Elí Bonifacio Gálvez'
    },

    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/proyects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Etiquetas',
            href: '/tags'
        }
    ],

    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contactar'
        },
        {
            text: 'Proyectos',
            href: '/proyects'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/angel-e-bonifacio'
        }
    ],

    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/angel-e-bonifacio'
        },
        {
            text: 'Correo Electrónico',
            href: '4n63l222@gmail.com'
        }
    ],

    hero: {
        title: '¡Hola! Soy Ángel Elí',

        text: `Soy estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica Fidel Velázquez, interesado en el desarrollo de aplicaciones y la creación de soluciones tecnológicas.

        Durante mi formación he adquirido conocimientos en desarrollo web, programación y gestión de bases de datos, trabajando con tecnologías como HTML, CSS, JavaScript, PHP, Java, MySQL y Oracle.

        Me gusta aprender nuevas tecnologías, enfrentar retos de programación y llevar las ideas a proyectos funcionales. He participado en el desarrollo de diferentes proyectos académicos y personales, en los que he podido poner en práctica mis conocimientos y seguir fortaleciendo mis habilidades.

        Te invito a conocer algunos de mis proyectos y explorar mi trabajo en [GitHub](https://github.com/angel-e-bonifacio).`,

        image: {
            src: hero,
            alt: 'Espacio de trabajo relacionado con el desarrollo de software'
        },

        actions: [
            {
                text: 'Conoce mis proyectos',
                href: '/proyects'
            },
            {
                text: 'Contactarme',
                href: '/contactar'
            }
        ]
    },

    subscribe: {
        enabled: false,
        title: 'Suscríbete a mi boletín',
        text: 'Próximamente.',
        form: {
            action: '#'
        }
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
