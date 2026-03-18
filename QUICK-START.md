# 🚀 Quick Start - Kevin PM Blog

## ✅ Checklist de Setup (15 minutos)

### 1️⃣ Crear repositorio en GitHub (2 min)

1. Ve a: https://github.com/new
2. Repository name: `kevinpm-blog`
3. Visibility: **Public**
4. ❌ NO marques "Add README"
5. Click "Create repository"

### 2️⃣ Subir el código (3 min)

Abre terminal en la carpeta `kevinpm-blog` y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit: Blog Kevin PM"
git remote add origin https://github.com/kevinnrm10/kevinpm-blog.git
git branch -M main
git push -u origin main
```

### 3️⃣ Activar GitHub Pages (2 min)

1. Ve a tu repo: https://github.com/kevinnrm10/kevinpm-blog
2. Click en **Settings** (arriba)
3. En el menú lateral: **Pages**
4. Espera 2-3 minutos → el primer deploy creará la branch `gh-pages`
5. Refresca la página
6. Source: Selecciona `gh-pages` branch
7. Click **Save**

✅ Tu blog estará en: `https://kevinnrm10.github.io/kevinpm-blog`

### 4️⃣ Conectar kevinpm.com (5 min)

**En Cloudflare:**

1. Ve a: https://dash.cloudflare.com
2. Selecciona tu dominio: `kevinpm.com`
3. DNS → **Add record**:
   - Type: `CNAME`
   - Name: `@` (para root domain)
   - Target: `kevinnrm10.github.io`
   - Proxy status: **DNS only** (nube gris ☁️)
4. Click **Save**

**En GitHub:**

1. Vuelve a Settings → Pages
2. Custom domain: escribe `kevinpm.com`
3. Click **Save**
4. Espera 5-10 minutos → debería aparecer ✅ "DNS check successful"
5. Marca **Enforce HTTPS**

⏳ **Espera 10-15 minutos** para propagación DNS

✅ Tu blog estará en: `https://kevinpm.com`

---

## 📝 Cómo publicar un nuevo post

### Opción 1: Localmente (si tienes el proyecto en tu PC)

1. Crea archivo en `src/content/blog/mi-nuevo-post.md`
2. Copia esta estructura:

```markdown
---
title: "Título del post"
description: "Descripción corta"
pubDate: 2026-03-26
readingTime: "7 min"
tags: ["Product Management", "IA"]
---

Tu contenido en Markdown aquí...
```

3. Escribe tu contenido
4. Ejecuta en terminal:

```bash
git add .
git commit -m "Nuevo post: Título"
git push
```

5. Espera 2-3 minutos → automáticamente se publica

### Opción 2: Directamente en GitHub (más rápido)

1. Ve a: https://github.com/kevinnrm10/kevinpm-blog/tree/main/src/content/blog
2. Click **Add file** → **Create new file**
3. Nombre: `mi-post.md`
4. Pega el frontmatter y escribe
5. Scroll abajo → **Commit changes**
6. Espera 2-3 minutos → se publica automáticamente

---

## 🎯 Calendario de Contenido

Tienes **15 posts** planeados en `linkedin_content_calendar_Q2_2026.md`

**Workflow recomendado:**

- **Martes:** Escribe el artículo completo en el blog
- **Miércoles:** Revisa y publica en GitHub
- **Jueves 9-11h:** Publica el post corto en LinkedIn con link al blog

**Próximos posts:**

1. ✅ **19 Marzo:** IA - Cuándo sí y cuándo no (LISTO)
2. 📝 **26 Marzo:** PMs ejecutores vs descubridores
3. 📝 **2 Abril:** ROI real de automatización
4. 📝 **9 Abril:** Métricas vanidosas vs accionables

---

## 🛠️ Comandos útiles

```bash
# Ver el blog localmente (http://localhost:4321)
npm install  # Solo primera vez
npm run dev

# Build de prueba
npm run build

# Publicar cambios
git add .
git commit -m "Descripción del cambio"
git push
```

---

## ❓ Troubleshooting rápido

**❌ El sitio no se actualiza después de hacer push**

1. Ve a: https://github.com/kevinnrm10/kevinpm-blog/actions
2. Verifica que el último workflow esté ✅ verde
3. Si está ❌ rojo, click para ver el error

**❌ El dominio kevinpm.com no funciona**

1. Verifica DNS en Cloudflare (CNAME debe apuntar a `kevinnrm10.github.io`)
2. Espera 15-20 minutos más
3. Prueba en modo incógnito

**❌ Los cambios no se ven**

1. Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac) para hard refresh
2. Prueba en modo incógnito
3. Verifica que el push llegó a GitHub

---

## 📞 Si tienes dudas

- LinkedIn: https://www.linkedin.com/in/kevinnrm10/
- GitHub Issues: https://github.com/kevinnrm10/kevinpm-blog/issues

---

**🎉 ¡Listo! Tu blog está configurado y listo para publicar.**

Próximo paso: Escribir el post del 26 de marzo 📝
