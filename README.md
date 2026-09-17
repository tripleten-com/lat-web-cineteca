# Cineteca

Catálogo de películas: busca por título, abre la ficha de cada una y guarda las tuyas en listas.

## Requisitos

Node.js 20 o superior.

## Instalación

```bash
npm run install:all
```

## Cómo levantarlo

Copia las variables de entorno del servidor:

```bash
cp server/.env.example server/.env
```

Y levanta las dos partes, cada una en su terminal:

```bash
npm run dev:server
```

```bash
npm run dev:client
```

El cliente queda en http://localhost:3000 y el servidor en http://localhost:3001.

## Pruebas

```bash
npm test
```

Jest ya está configurado en el cliente. Por ahora el proyecto no tiene ninguna prueba escrita, así que el comando termina sin ejecutar nada.
