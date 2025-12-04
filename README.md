<div align="center">

# 🍣 Invitación Omakase Privada  
**Una experiencia digital romántica, minimalista y cuidadosamente diseñada.**

[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://omakase-love.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-ee43ad?logo=framer)

</div>

---

## 📸 Vista previa

> Reemplazá estas imágenes con las tuyas  
> (podés usar capturas del deploy en Vercel).



---

## ✨ Sobre el proyecto

Esta aplicación es una **invitación interactiva** para una cena Omakase privada.  
Fue creada con el objetivo de transmitir intimidad y elegancia mediante:

- Animaciones sutiles
- Estética japonesa moderna
- Fondos 3D con pétalos de sakura
- Tipografías serif refinadas
- UI limpia y minimalista

El sitio está actualmente desplegado en Vercel:  
🔗 **https://omakase-love.vercel.app**

---

## 🧠 Tecnologías principales

| Categoría | Tecnologías |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Estilos** | Tailwind CSS, OKLCH color system, diseño custom japonés |
| **Animaciones** | Framer Motion |
| **3D / Canvas** | Three.js (pétalos de sakura en tiempo real) |
| **UI Components** | Shadcn/UI + Radix UI |
| **Tipografías** | Geist, Playfair Display |
| **Deploy** | Vercel |

---

## 📁 Estructura del proyecto

```txt
.
├─ app/
│  ├─ layout.tsx          # Metadata global + fuentes + layout
│  ├─ globals.css         # Tema OKLCH y estilos base
│  └─ page.tsx            # Landing principal
│
├─ components/
│  ├─ ui/button.tsx        # Botón accesible (shadcn)
│  ├─ sakura-petals.tsx    # Renderizado 3D con Three.js
│  └─ invitation-content.tsx # Texto + animaciones de la invitación
│
├─ public/                 # Iconografía y assets
│
├─ next.config.ts          # Configuración para Vercel
└─ tailwind.config.ts      # Tailwind y tokens del design system
```
## 🚀 Cómo ejecutarlo localmente

```
git clone https://github.com/fedevaltrui/Omakase-love
cd Omakase-love
npm install
npm run dev

```

## 🎨 Personalización

### 🌸 Ajustar cantidad de pétalos


```
components/sakura-petals.tsx:
:root {
  --primary: oklch(0.55 0.12 25);
}
```
### 🎭 Cambiar la paleta de colores OKLCH

app/globals.css:

```
:root {
  --primary: oklch(0.55 0.12 25);
}
```


---

## 🤝 Contribuciones

Este proyecto es personal, pero si querés crear tu propia versión o forquearlo, ¡adelante!
PRs son bienvenidos para mejoras visuales o de accesibilidad.


## 🧑‍🍳 Autor

> Creado con amor y detalle por Fede.

