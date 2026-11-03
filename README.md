# Barra El Principe – Video del menú digital

Video vertical (1080×1920) que explica cómo funciona el menú digital de **Barra El Principe**: primero la parte del cliente (ver el menú, pedir y enviar por WhatsApp) y luego la del dueño (modo admin). Sitio estático (HTML + CSS + JavaScript), sin build.

El video se reproduce en vivo dentro de la página, usando el menú real cargado en un `iframe`, con narración y subtítulos. El botón **Exportar .mp4** lo graba desde el navegador.

## Estructura

```
├── index.html          # Escenas del video, controles y audio
├── css/styles.css      # Estilos del video
├── js/app.js           # Guion, subtítulos, acciones sobre el menú, sonidos y exportación
├── assets/
│   ├── audio/narracion.mp3
│   └── img/logo.jpg
├── menu/               # Menú digital real que se muestra dentro del video
│   ├── index.html
│   ├── css/styles.css
│   ├── js/images.js    # Mapa de imágenes (clave → ruta en menu/assets/img)
│   ├── js/app.js       # Lógica del menú, carrito y panel admin
│   └── assets/img/     # Logo y fotos de los productos
└── .nojekyll           # Evita procesamiento de Jekyll en GitHub Pages
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio.
2. En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
3. Tu sitio quedará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

## Probar en local

El video controla el menú del `iframe`, y el navegador solo lo permite si ambos se sirven desde el mismo servidor. Por eso **no funciona abriendo `index.html` con doble clic**; levanta un servidor:

```bash
python3 -m http.server 8000
```

y abre `http://localhost:8000`.

## Exportar el video

Usa Chrome de escritorio, abre el sitio en su propia pestaña (en pantalla completa, F11) y pulsa **Exportar .mp4**. Elige «Esta pestaña» en el aviso del navegador.
