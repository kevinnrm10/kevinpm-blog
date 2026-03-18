# Kevin PM - Blog Personal

Blog personal sobre Product Management, IA y automatización. Construido con Astro y desplegado en GitHub Pages.

🌐 **Live:** [kevinpm.com](https://kevinpm.com)

## 🚀 Setup Inicial

### 1. Crear el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `kevinpm-blog` (o el que prefieras)
3. Visibilidad: **Public** (necesario para GitHub Pages gratis)
4. **NO** marques "Add a README file"
5. Click "Create repository"

### 2. Subir el código

```bash
# Navega a la carpeta del proyecto
cd kevinpm-blog

# Inicializa git
git init
git add .
git commit -m "Initial commit: Blog setup"

# Conecta con tu repositorio (reemplaza con tu username)
git remote add origin https://github.com/kevinnrm10/kevinpm-blog.git
git branch -M main
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages (menú lateral izquierdo)
3. **Source:** Deploy from a branch → selecciona `gh-pages` (se creará automáticamente con el primer deploy)
4. Click "Save"

**Nota:** La primera vez el workflow creará la branch `gh-pages` automáticamente. Esto puede tardar 2-3 minutos.

### 4. Conectar tu dominio personalizado (kevinpm.com)

#### En Cloudflare:

1. Ve a tu dominio en Cloudflare Dashboard
2. DNS → Add record:
   - **Type:** CNAME
   - **Name:** @ (o www para www.kevinpm.com)
   - **Target:** `kevinnrm10.github.io`
   - **Proxy status:** DNS only (nube gris)
3. Guarda

#### En GitHub:

1. Settings → Pages
2. **Custom domain:** escribe `kevinpm.com`
3. Click "Save"
4. Espera a que aparezca ✅ "DNS check successful"
5. Marca "Enforce HTTPS" (espera 5-10 min si aparece error)

**Importante:** La propagación DNS puede tardar hasta 24 horas, pero usualmente funciona en 10-15 minutos.

### 5. Verificar que funciona

- Tu blog estará live en `https://kevinnrm10.github.io/kevinpm-blog` inmediatamente
- Y en `https://kevinpm.com` una vez el DNS propague

## ✍️ Cómo publicar un nuevo post

### Método 1: Crear archivo localmente

1. Crea un nuevo archivo en `src/content/blog/`:
   ```bash
   # Nombre del archivo: usa kebab-case (palabras-separadas-por-guiones)
   # Ejemplo: producto-vs-soluciones.md
   ```

2. Copia esta estructura (frontmatter):
   ```markdown
   ---
   title: "Tu título aquí"
   description: "Descripción breve del artículo (aparece en preview)"
   pubDate: 2026-03-26
   readingTime: "5 min"
   tags: ["Product Management", "IA"]
   ---

   Tu contenido aquí en Markdown...
   ```

3. Escribe tu contenido en Markdown

4. Push a GitHub:
   ```bash
   git add .
   git commit -m "Post: Título del artículo"
   git push
   ```

5. El deploy es automático. En 2-3 minutos está live.

### Método 2: Crear directamente en GitHub

1. Ve a tu repo → `src/content/blog/`
2. Click "Add file" → "Create new file"
3. Nombre: `mi-nuevo-post.md`
4. Pega el frontmatter y escribe el contenido
5. Commit changes
6. Deploy automático en 2-3 minutos

## 🎨 Personalización

### Cambiar colores

Edita `tailwind.config.mjs`:

```js
colors: {
  primary: '#0f172a',    // Color principal
  accent: '#3b82f6',     // Color de acentos/links
  subtle: '#64748b',     // Color secundario
},
```

### Añadir Google Analytics

1. Edita `src/layouts/Layout.astro`
2. Añade antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Cambiar foto/bio en "Sobre mí"

Edita `src/pages/about.astro`

## 📁 Estructura del proyecto

```
kevinpm-blog/
├── src/
│   ├── content/
│   │   ├── blog/          # ✍️ TUS POSTS AQUÍ
│   │   │   └── ejemplo.md
│   │   └── config.ts
│   ├── layouts/
│   │   ├── Layout.astro        # Layout principal
│   │   └── BlogPost.astro      # Layout de posts
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # Sobre mí
│   │   └── blog/
│   │       └── [...slug].astro # Ruta dinámica posts
│   └── styles/
│       └── global.css          # Estilos globales
├── public/                      # Assets estáticos
├── astro.config.mjs            # Config de Astro
└── package.json
```

## 🛠️ Comandos útiles

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Desarrollo local (preview en http://localhost:4321)
npm run dev

# Build de producción (genera carpeta dist/)
npm run build

# Preview del build
npm run preview
```

## 📝 Tips de contenido

### Markdown básico

```markdown
# Título H1
## Título H2
### Título H3

**Negrita**
*Cursiva*

- Lista
- Con items

1. Lista numerada
2. Otro item

[Link](https://ejemplo.com)

`código inline`

```javascript
// Bloque de código
console.log('Hola');
```

> Cita o blockquote
```

### Optimización SEO

- **Título:** 50-60 caracteres
- **Description:** 150-160 caracteres
- Usa palabras clave naturalmente en el contenido
- Links internos entre posts relacionados
- Añade alt text a imágenes

### Calendario de publicación

- 📅 Publica cada **jueves**
- ⏰ Mejor horario: 9-11h (mayor engagement)
- 📝 Redacta el **miércoles tarde**
- ✅ Revisa el **jueves mañana**

## 🔧 Troubleshooting

### El sitio no se ve después de push

1. Ve a Actions en GitHub
2. Revisa que el workflow "Deploy to GitHub Pages" termine en verde ✅
3. Si hay error rojo ❌, click para ver detalles

### El dominio personalizado no funciona

1. Verifica DNS en Cloudflare (CNAME apuntando a `kevinnrm10.github.io`)
2. Espera 10-15 minutos para propagación
3. En GitHub Pages, verifica que aparezca ✅ "DNS check successful"

### Cambios no se ven en el blog

1. Limpia caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
2. Verifica que el push llegó a GitHub
3. Revisa que el workflow de Actions terminó exitosamente

## 🎯 Próximos pasos

- [ ] Activar Cloudflare Analytics (gratis, mejor que GA)
- [ ] Añadir Open Graph images personalizadas por post
- [ ] Implementar sistema de comentarios (Giscus con GitHub Discussions)
- [ ] Añadir RSS feed (ya está configurado en `/rss.xml`)
- [ ] Newsletter con Substack o ConvertKit (cuando tengas audiencia)

## 📧 Contacto

- LinkedIn: [kevinnrm10](https://www.linkedin.com/in/kevinnrm10/)
- GitHub: [kevinnrm10](https://github.com/kevinnrm10)

---

**Hecho con ❤️ usando [Astro](https://astro.build)**
