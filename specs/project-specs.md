# CieloSur Viajes - Especificaciones

## 0. Idioma y Ortografía
- **Idioma**: Español (Argentina)
- **Ortografía**: Todos los textos visibles deben incluir tildes (á, é, í, ó, ú) y la letra ñ según las reglas ortográficas del español.
- **Excepciones**: Nombres de clases CSS, IDs, data-attributes y valores de formulario (value="") se mantienen sin tildes ni caracteres especiales para compatibilidad técnica.
- **Codificación**: UTF-8 (declarado en meta charset)

## Descripcion
Pagina web para CieloSur Viajes, agencia de viajes argentina. Plataforma intuitiva para explorar destinos y servicios, con enfoque en conversion via WhatsApp.

## Marca (prueba)
- **Nombre**: CieloSur Viajes
- **Slogan**: "Tu aventura comienza aca"
- **Logo**: SVG con icono de avion + brujula estilizada

## Paleta de colores
| Token              | Color   | Uso                        |
|--------------------|---------|----------------------------|
| --color-primary    | #0C4A6E | Azul profundo (confianza)  |
| --color-secondary  | #F97316 | Naranja (energia, CTAs)    |
| --color-accent     | #0EA5E9 | Celeste (cielo, agua)      |
| --color-dark       | #0F172A | Textos oscuros, footer     |
| --color-light      | #F8FAFC | Fondo general              |
| --color-white      | #FFFFFF | Tarjetas, contraste        |
| --color-gray       | #64748B | Texto secundario           |

## Tipografia
- **Titulos**: Poppins (700, 600)
- **Cuerpo**: Open Sans (400, 600)

## Estructura
### Pagina principal (index.html)
1. **Header**: Logo + navegacion sticky + CTA WhatsApp
2. **Hero**: Imagen de fondo (gradiente placeholder), titulo, subtitulo, buscador simple
3. **Destinos**: 6 destinos argentinos en grid de tarjetas
   - Patagonia, Cataratas del Iguazu, Mendoza, Bariloche, Salta y Jujuy, Ushuaia
4. **Servicios**: 6 servicios en grid
   - Paquetes nacionales, Viajes internacionales, Escapadas fin de semana
   - Viajes grupales, Luna de miel, Corporativos
5. **Sobre nosotros**: Historia breve + 3 stats (anos, clientes, destinos)
6. **Testimonios**: 3 testimonios en carrusel simple
7. **Contacto**: Formulario (nombre, email, telefono, destino interes, mensaje) + datos
8. **Footer**: Links, redes sociales, legal

### Paginas legales (legal/)
- terminos.html: Terminos y Condiciones
- privacidad.html: Politica de Privacidad
- aviso-legal.html: Aviso Legal

## Funcionalidades
- WhatsApp flotante (boton fijo esquina inferior derecha)
- Formulario con validacion cliente (telefono argentino)
- Navegacion smooth scroll
- Header sticky con cambio de estilo al hacer scroll
- Animaciones de entrada en scroll (intersection observer)
- SEO basico: meta tags, Open Graph, schema markup, semantica HTML5
- Responsive: mobile-first (768px tablet, 1200px desktop)

## SEO
- Title y meta description optimizados
- Open Graph tags
- Schema.org TravelAgency markup (JSON-LD)
- HTML semantico (header, nav, main, section, footer)
- Alt text en imagenes
- URLs amigables para paginas legales

## Deployment
- **Repositorio**: https://github.com/recursosdigitaleshub-code/cielosur-viajes
- **URL publica**: https://recursosdigitaleshub-code.github.io/cielosur-viajes/
- **Plataforma**: GitHub Pages
- **CI/CD**: GitHub Actions (.github/workflows/deploy.yml)
- **Branch de deploy**: main
- **Trigger**: Push a main o dispatch manual

## Imagenes
- Las imagenes del prototipo se proporcionan en la carpeta `imagenes/` dentro del proyecto
- Al generar el sitio, se optimizan (JPEG 82%, max 1200x800) y copian a `assets/images/`
- La carpeta `imagenes/` es solo referencia; el sitio usa `assets/images/`

### Mapeo de imagenes
| Archivo optimizado | Seccion | Descripcion |
|---|---|---|
| hero-cielosur.jpg | Hero (fondo) | Ilustracion branded CieloSur |
| patagonia.jpg | Tarjeta Patagonia | Glaciar Perito Moreno |
| iguazu.jpg | Tarjeta Iguazu | Cataratas del Iguazu |
| mendoza.jpg | Tarjeta Mendoza | Andes y bodegas |
| bariloche.jpg | Tarjeta Bariloche | Bariloche nevado |
| salta-jujuy.jpg | Tarjeta Salta y Jujuy | Purmamarca, Quebrada de Humahuaca |
| ushuaia.jpg | Tarjeta Ushuaia | Vista aerea de Ushuaia |

## Contacto (datos ficticios)
- Telefono: +54 11 4567-8900
- WhatsApp: +54 9 11 4567-8900
- Email: info@cielosurviajes.com.ar
- Direccion: Av. Corrientes 1234, CABA, Argentina
