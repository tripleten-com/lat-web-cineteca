# Cineteca

Catálogo de películas con datos de TMDB: busca por título, abre la ficha de cada una y guarda las tuyas en dos listas, "Quiero ver" y "Ya las vi", con tu calificación.

## Requisitos

- Node.js 20.19 o superior.
- MongoDB corriendo en tu computadora.

## Instalación

```bash
npm run install:all
```

## Variables de entorno

Copia los archivos de ejemplo:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

En `server/.env`:

| Variable        | Para qué sirve                                          |
| --------------- | ------------------------------------------------------- |
| `PORT`          | Puerto del servidor, `3001` por defecto                 |
| `CLIENT_ORIGIN` | Dirección del cliente que puede hacer peticiones (CORS) |
| `MONGO_URI`     | Conexión a MongoDB                                      |
| `JWT_SECRET`    | Clave para firmar los tokens de sesión                  |

En `client/.env`, `VITE_API_URL` es la dirección del servidor.

## Cómo levantarlo

Levanta las dos partes, cada una en su terminal:

```bash
npm run dev:server
```

```bash
npm run dev:client
```

El cliente queda en http://localhost:3000 y el servidor en http://localhost:3001.

## Pruebas y revisión del código

```bash
npm test
```

Jest está configurado en el servidor. Dentro de `client/` o `server/` también están `npm run build` y `npm run lint`. Para revisar el formato de todo el proyecto, `npm run format:check` desde la raíz.
