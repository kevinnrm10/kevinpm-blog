---
title: "IA: Cuándo SÍ y cuándo NO aplicarla en tu producto"
description: "Soy fan de la IA y creo que es el futuro. Precisamente por eso me preocupa cómo se está vendiendo. Una guía práctica para implementarla con criterio."
pubDate: 2026-03-19
readingTime: "8 min"
tags: ["IA", "Product Management", "Automatización"]
---

Abro LinkedIn y en los primeros tres posts ya encuentro: "La IA va a reemplazar a todos los PMs", "Implementa un agente de IA en 5 pasos" y alguien mostrando un workflow que hace 40 cosas a la vez como si eso fuera un producto.

Entiendo el entusiasmo. De verdad. Yo soy el primero en experimentar con IA, llevo tres años trabajando con ella y el último año implementando soluciones reales. Creo que es la tecnología más transformadora que he visto en mis seis años haciendo producto digital.

Y precisamente por eso me preocupa cómo se está vendiendo.

**Porque cuando todo es IA, nada es IA.** Y las implementaciones que nacen del hype en lugar del problema acaban siendo teatro corporativo: caras, difíciles de mantener, y con un impacto que nadie sabe cómo medir.

Este artículo no es una crítica a la IA. Es una guía para implementarla bien.

## Cuándo SÍ tiene sentido aplicar IA

Después de analizar docenas de proyectos, hay cuatro situaciones donde la IA no solo tiene sentido — es la mejor herramienta disponible.

### 1. Volumen masivo de tareas repetitivas

Si procesas **más de 1.000 solicitudes al día** con lógica similar, la IA tiene sentido económico claro. Ejemplos:

- Clasificación de emails de atención al cliente
- Moderación de contenido generado por usuarios
- Transcripción de llamadas comerciales
- Extracción de datos de documentos estandarizados

El coste marginal de cada predicción es ínfimo. Con volumen alto, el ROI se justifica solo.

Un buen ejemplo de esto es lo que el equipo de Operaciones, Producto y Tech de mi empresa construyó para la agendación de visitas inmobiliarias. El resultado: absorbieron aproximadamente **1 FTE** de trabajo repetitivo. La IA gestiona el flujo estándar, y el equipo humano se enfoca en los casos que realmente necesitan criterio — clientes complejos, situaciones excepcionales, casos de alto valor.

No reemplazó el trabajo humano. Lo complementó donde tenía sentido hacerlo.

### 2. Patrones que un humano tardaría semanas en encontrar

La IA brilla cuando necesitas procesar datasets masivos para encontrar señales que no son visibles a simple vista:

- Detección de fraude en transacciones
- Segmentación avanzada de comportamiento de usuario
- Predicción de churn basada en múltiples variables
- Análisis de sentiment a escala

Un humano podría llegar a los mismos insights. Pero en semanas, no en horas. Esa velocidad tiene un valor enorme.

### 3. El coste de error es bajo y la velocidad importa más que la perfección

Hay contextos donde no necesitas un 99,9% de accuracy. Con un 85-90% ya generas valor, y el usuario tolera errores ocasionales:

- Recomendaciones de productos
- Sugerencias de búsqueda
- Autocomplete inteligente
- Chatbots de primera línea con escalado a humano

La clave está en entender qué coste tiene equivocarse. Si es bajo, la velocidad de la IA lo compensa con creces.

### 4. Tienes datos limpios, estructurados y suficientes

Este es el requisito que más se ignora. La IA necesita combustible de calidad:

- Datos consistentemente etiquetados
- Volumen suficiente (mínimo cientos de ejemplos, idealmente miles)
- Distribución representativa de casos reales
- Un pipeline de datos confiable

*Garbage in, garbage out.* Sin buenos datos, hasta el mejor modelo falla. Antes de pensar en el modelo, piensa en tus datos.

## Cuándo NO es la mejor solución

Aquí es donde se separa implementar IA de implementarla bien.

### 1. Tu proceso tiene demasiados casos edge

Si tu workflow tiene muchas excepciones que necesitan juicio contextual, la IA va a tener dificultades constantes.

Un caso clásico: automatizar la aprobación de créditos con muchos matices únicos — ingresos irregulares, situaciones familiares complejas, garantías no estándar. La IA puede ayudar con el scoring básico, pero el criterio humano sigue siendo crítico en los casos que más importan.

Cuando el juicio contextual es el núcleo del proceso, no intentes reemplazarlo. Potéñcialo con herramientas.

### 2. No tienes forma de medir si la IA lo hace mejor

Si no puedes responder "¿cómo sabremos si funciona?" antes de empezar, no empieces.

He visto proyectos de IA lanzarse sin baseline, sin métrica objetivo, sin forma de comparar el antes y el después. El resultado inevitable: "tenemos IA en producción" como vanity metric, sin saber si generó valor real.

**La pregunta crítica es anterior al modelo:** ¿Qué medimos hoy? ¿Qué queremos mejorar? ¿Cuánto?

### 3. El ROI no tiene sentido

El análisis de rentabilidad más ignorado del mundo tech.

Un ejemplo real que se repite constantemente:

- Coste de desarrollo: 50.000€
- Coste de mantenimiento anual: 10.000€
- Ahorro generado: 2 horas/mes × 12 = 24 horas/año
- A 50€/hora → 1.200€/año

**Break-even: 42 años.**

Antes de implementar, haz el cálculo. Si el break-even supera los dos años, probablemente hay una solución más simple y más barata.

### 4. Tus datos son un caos

Más común de lo que parece:

- Eventos mal trackeados desde hace años
- Campos inconsistentes en base de datos
- Datos duplicados sin proceso de deduplicación
- Sin etiquetado de ground truth

Si tus datos son un desastre, la IA los va a amplificar. La solución no es un modelo más potente — es arreglar primero la base.

## El problema sistémico

Lo que veo una y otra vez es tecnología en busca de un problema, no al revés.

Las empresas invierten en IA para "ser innovadoras" sin preguntarse si resuelve algo concreto. Y eso genera tres patrones conocidos:

- **Sunk cost fallacy:** "Ya invertimos seis meses, tenemos que lanzarlo."
- **Vanity metrics:** "Tenemos IA en producción." (Aunque nadie la use con impacto medible.)
- **Complejidad innecesaria:** Sistemas que requieren un equipo dedicado a mantener algo que un script de Python haría igual de bien.

## El checklist que uso para decidir

Cuando alguien propone usar IA para algo, hago cinco preguntas en este orden:

**1. ¿El problema existe de verdad?**
¿Cuántas veces ocurre? ¿Qué coste tiene no resolverlo? ¿Los usuarios realmente lo sufren?

**2. ¿IA es la mejor solución disponible?**
¿Una regla de negocio simple lo resolvería? ¿Un mejor UX eliminaría el problema? ¿Una automatización sin ML sería suficiente?

**3. ¿Tenemos los recursos para hacerlo bien?**
¿Datos de calidad suficientes? ¿Capacidad de mantenerlo en el tiempo? ¿Expertise técnico en el equipo?

**4. ¿Podemos medir el éxito?**
¿Qué métrica mejorará? ¿Cuál es el baseline actual? ¿Cómo sabremos si funciona mejor que antes?

**5. ¿El ROI tiene sentido en menos de dos años?**
Coste de desarrollo + mantenimiento anual, versus valor generado en tiempo, ingresos o mejora de experiencia.

Si tres o más respuestas son "no" o "no sé", el momento de implementar IA aún no ha llegado. No porque la IA no funcione — sino porque el problema no está suficientemente definido todavía.

## La IA es el futuro. Implementarla bien, también.

No tengo dudas de que la IA va a transformar cómo se hace producto. Ya lo está haciendo.

Pero hay una diferencia enorme entre implementar IA y hacerlo con criterio. La primera está al alcance de cualquiera con una tarjeta de crédito y acceso a una API. La segunda requiere entender el problema, los datos, el coste y el impacto antes de escribir una sola línea de código.

El hype va a seguir. Los posts de LinkedIn también.

La pregunta relevante no es "¿estamos usando IA?". Es **"¿estamos resolviendo el problema correcto, de la forma correcta, para las personas correctas?"**

A veces eso es IA. A veces es una regla de negocio. A veces es mejor UX. Y a veces es simplemente tomarse el tiempo de entender bien el problema antes de buscar la solución.

---

*¿Estás evaluando si aplicar IA en algún proyecto ahora mismo? Cuéntame en [LinkedIn](https://www.linkedin.com/in/kevinriosmerino/) — me interesa el contexto.*
