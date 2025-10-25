# 🐳 Proyecto Fullstack con Docker: Node.js + React + MySQL

Este proyecto implementa una aplicación Fullstack conformada por un **frontend en React**, un **backend en Node.js (Express)** y una **base de datos MySQL**, todos orquestados mediante **Docker Compose**.

---

## ⚙️ Servicios incluidos

El entorno cuenta con tres servicios principales:

1. **Frontend**  
   Es una aplicación desarrollada en React que proporciona la interfaz visual con la cual interactúa el usuario. Este servicio se comunica con el backend para obtener o enviar información y se ejecuta en el puerto 3000.

2. **Backend**  
   Es una API construida en Node.js con Express que gestiona la lógica de negocio, maneja las peticiones del frontend y realiza las operaciones necesarias sobre la base de datos. Se ejecuta en el puerto 5000.

3. **Base de datos MySQL**  
   Es el sistema de almacenamiento de la aplicación, donde se guardan todos los datos de manera persistente. Se ejecuta en el puerto 3306 y mantiene los datos mediante el uso de volúmenes Docker, por lo que no se pierden al reiniciar los contenedores.

---

## Comunicación entre servicios

Los tres servicios están conectados dentro de una red interna creada por Docker Compose.  
Esta red permite que los contenedores se comuniquen entre sí mediante sus nombres de servicio.  
El frontend se comunica con el backend utilizando el nombre `backend` como host, y el backend se conecta a la base de datos utilizando el nombre `mysql`.

---

## Estructura del proyecto

El proyecto se organiza en tres carpetas principales:

- **frontend/**: contiene el código fuente de la interfaz de usuario desarrollada en React.  
- **backend/**: contiene la lógica del servidor y los controladores de la API en Node.js.  
- **mysql/**: contiene la configuración de la base de datos, gestionada automáticamente por Docker.

Además, existe un archivo principal `docker-compose.yml` que define y coordina los tres servicios.

---

## Levantar el entorno

Para ejecutar el entorno completo, se debe contar con Docker y Docker Compose instalados.  
Luego, basta con ejecutar el comando para construir e iniciar los servicios definidos:
- docker compose up --build -d

Esto descargará las imágenes necesarias, instalará dependencias, creará la red interna y levantará los contenedores del frontend, backend y base de datos:

Una vez en ejecución:
- El frontend estará disponible en el puerto 3000.  
- El backend responderá en el puerto 5000.  
- La base de datos MySQL estará disponible en el puerto 3306.

---

## Comunicación general

- El **frontend** realiza peticiones HTTP al **backend** para consultar o enviar información.  
- El **backend** procesa las solicitudes y realiza las operaciones necesarias sobre la **base de datos**.  
- Todos los servicios se comunican internamente en la red de Docker mediante sus nombres asignados en el archivo `docker-compose.yml`.

---

## Persistencia de datos

La base de datos utiliza un volumen Docker para asegurar que los datos no se pierdan al detener o reiniciar los contenedores.  
Esto permite que la información almacenada permanezca disponible incluso después de reconstruir el entorno.

---

## Variables de entorno

Cada servicio utiliza variables de entorno definidas en el archivo `docker-compose.yml`, tales como contraseñas, nombre de base de datos y credenciales.  
Estas variables son leídas por los contenedores al iniciarse, garantizando una configuración coherente y automatizada.

---

## Tecnologías utilizadas

- **Node.js y Express** para el backend.  
- **React y Vite** para el frontend.  
- **MySQL 8** como sistema gestor de base de datos.  
- **Docker y Docker Compose** para la orquestación de contenedores.

---

## Flujo general de funcionamiento

1. El usuario accede al frontend desde su navegador.  
2. El frontend envía peticiones HTTP al backend para obtener o registrar datos.  
3. El backend procesa las solicitudes, interactúa con la base de datos y responde al frontend.  
4. La base de datos almacena la información de manera persistente dentro del volumen asignado.  
5. Todo el flujo ocurre dentro de la red interna gestionada por Docker.

---

