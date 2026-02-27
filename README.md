# 🎓 Curso de Pasantías - Landing Page

Una landing page moderna y responsive construida con React, TypeScript, Vite y Tailwind CSS para promocionar un curso de pasantías estudiantiles.

## ✨ Características

- **🚀 Tecnologías Modernas**: React 18, TypeScript, Vite, Tailwind CSS
- **📱 Totalmente Responsive**: Optimizado para todos los dispositivos
- **🎨 Animaciones Fluidas**: Implementadas con Framer Motion
- **♿ Accesible**: Siguiendo las mejores prácticas de accesibilidad
- **⚡ Alto Rendimiento**: Optimizado para velocidad de carga
- **🎯 SEO Optimizado**: Meta tags y estructura semántica
- **🧩 Componentes Reutilizables**: Arquitectura modular y escalable
- **🎨 Sistema de Diseño**: Consistente y profesional

## 📁 Estructura del Proyecto

```
curso-pasantias-landing/
├── public/                 # Archivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes UI base
│   │   ├── layout/        # Componentes de layout
│   │   └── sections/      # Secciones de la landing
│   ├── hooks/             # Hooks personalizados
│   ├── utils/             # Funciones utilitarias
│   ├── types/             # Definiciones TypeScript
│   ├── constants/         # Constantes y configuración
│   ├── assets/            # Imágenes, iconos, etc.
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── package.json
├── vite.config.ts         # Configuración Vite
├── tailwind.config.js     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 16.0 o superior
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd curso-pasantias-landing
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run type-check` - Verifica los tipos de TypeScript

## 🧩 Componentes Principales

### Secciones de la Landing

- **Hero**: Sección principal con llamada a la acción
- **Features**: Características del programa
- **About**: Información sobre el programa y estadísticas
- **Testimonials**: Testimonios de estudiantes
- **CTA**: Llamada a la acción final

### Componentes UI

- **Button**: Botón reutilizable con variantes
- **Container**: Contenedor con márgenes consistentes
- **Section**: Wrapper para secciones con animaciones

### Layout

- **Header**: Navegación principal
- **Footer**: Pie de página con enlaces y contacto

## 🎨 Personalización

### Colores y Temas

Los colores se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... más variaciones
    950: '#172554',
  },
  // ... más colores
}
```

### Contenido

El contenido principal se configura en `src/constants/index.ts`:

- `SITE_CONFIG`: Información general del sitio
- `NAVIGATION_ITEMS`: Elementos del menú de navegación
- `FEATURES`: Lista de características
- `TESTIMONIALS`: Testimonios de estudiantes
- `CTA_CONFIG`: Configuración de llamadas a la acción

### Animaciones

Las animaciones se configuran usando `framer-motion` y están disponibles en `src/constants/index.ts` bajo `ANIMATION_VARIANTS`.

## 📱 Responsive Design

El diseño es totalmente responsive con breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔧 Herramientas de Desarrollo

- **Vite**: Build tool ultra-rápido
- **TypeScript**: Tipado estático
- **ESLint**: Linter para mantener código consistente
- **Prettier**: Formateo automático de código
- **Tailwind CSS**: Framework CSS utilitario
- **Framer Motion**: Biblioteca de animaciones
- **Lucide React**: Iconos SVG

## 🚀 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

### Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura el comando de build: `npm run build`
3. Configura el directorio de salida: `dist`

### Despliegue en Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🤝 Contribuciones

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- 📧 Email: info@curso-pasantias.com
- 📱 Teléfono: +1 (555) 123-4567
- 🌐 Website: https://curso-pasantias.com

---

**¡Hecho con ❤️ para estudiantes que buscan transformar su futuro profesional!**