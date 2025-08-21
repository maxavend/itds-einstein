
# POC MCP Server (sin @it-ds/ui)

> Prueba de concepto (POC) para generar interfaces usando el MCP Server y el agente IA del IDE junto a Figma, sin depender de `@it-ds/ui`. Este proyecto sirve como boilerplate base para experimentar y construir interfaces rápidamente.

## ¿Qué es esto?

Un proyecto base con React 18, Vite, TypeScript y TailwindCSS 3, pensado para integrarse con el flujo de trabajo de Figma y el Agente MCP. Permite seleccionar componentes en Figma y generar interfaces automáticamente, sin incluir la librería de componentes `@it-ds/ui`.

## Características principales

- **React 18.2** y **ReactDOM 18.2**
- **Vite** para desarrollo rápido y build optimizado
- **TypeScript**
- **TailwindCSS 3** para estilos utilitarios
- **ESLint** configurado
- Listo para conectar con el MCP de Figma con el Agente del IDE

## ¿Cómo funciona?

1. **Base lista para usar:** Incluye todo lo necesario para empezar a crear interfaces, sin dependencias de UI propietarias.
2. **Integración con Figma:** Selecciona elementos en Figma y usa el Agente MCP para generar el código de la interfaz en este proyecto.
3. **Personalización total:** Puedes modificar estilos, estructura y lógica según tus necesidades.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run preview`: Previsualiza el build de producción.
- `npm run lint`: Linting del código.

## Estructura del proyecto

- `src/`: Código fuente principal.
- `public/`: Archivos estáticos.
- `vite.config.ts`, `tsconfig.json`: Configuración de build y TypeScript.

## ¿Para qué sirve?

Este POC es ideal para equipos que quieren experimentar con generación automática de interfaces desde Figma usando el MCP de Figma y el Agente de IA, sin acoplarse a librerías de UI específicas. Es un punto de partida flexible y moderno.