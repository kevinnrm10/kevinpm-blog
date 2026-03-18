# OG Image Placeholder

Para generar imágenes Open Graph personalizadas para tus posts, puedes usar:

1. **Canva** (gratis): https://www.canva.com
   - Tamaño: 1200x630 px
   - Template: "Facebook Post" o "LinkedIn Post"

2. **Figma** (gratis): https://www.figma.com
   - Crea un frame de 1200x630 px
   - Diseña con tu estilo

3. **Herramientas automáticas**:
   - https://og-image.vercel.app/
   - https://www.opengraph.xyz/

## Recomendaciones:

- **Tamaño:** 1200x630 px (ratio 1.91:1)
- **Formato:** JPG o PNG
- **Peso:** < 300 KB
- **Elementos:** Logo, título del post, tu foto (opcional)

## Dónde colocar las imágenes:

```
public/
  og-images/
    default.png          # Imagen por defecto
    post-slug-1.png      # Imagen específica por post
    post-slug-2.png
```

## Cómo usarlas en un post:

En el frontmatter del post:

```markdown
---
title: "Mi Post"
description: "..."
pubDate: 2026-03-19
image: "/og-images/mi-post.png"  # 👈 Añade esto
---
```

Coloca este archivo como: `public/og-image-placeholder.md`
