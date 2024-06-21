# Sistema de Encuesta con React, Tailwind CSS y Firebase

Este proyecto es un sistema de encuestas desarrollado con React, Tailwind CSS y Firebase. Permite a los usuarios registrarse, iniciar sesión, completar formularios de encuestas y ver reportes detallados. Los administradores pueden gestionar usuarios y visualizar estadísticas a través de un panel de administración.

## Características

- **Autenticación de Usuarios**: Registro e inicio de sesión.
- **Formulario de Encuestas**: Validación en tiempo real y subida de archivos.
- **Reportes de Encuestas**: Filtrado, exportación y visualización de datos.
- **Panel de Administración**: Gestión de usuarios y encuestas.
- **Carga Diferida**: Mejora del rendimiento mediante `React.lazy` y `Suspense`.
- **Notificaciones**: Indicadores de carga y mensajes de error claros.
- **Seguridad**: Reglas de seguridad en Firebase Firestore y Storage.

## Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu-usuario/sistema-encuesta.git
2. Navega al directorio del proyecto:
   ```sh
   cd sistema-encuesta
3. Instala las dependencias:
   ```sh
   npm install
4. Configura Firebase:
Crea un proyecto en Firebase.
Añade la configuración de Firebase a un archivo .env en la raíz del proyecto:
env
   ```sh
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id

5. Inicia la aplicación:
   ```sh
    npm start

## Uso
Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.
- Regístrate e inicia sesión para completar una encuesta.
- Accede a `/reporte` como administrador para ver los reportes y gestionar usuarios.

## Estructura del Proyecto
- `/src`: Código fuente del proyecto.
  - `/components`: Componentes reutilizables.
  - `/layouts`: Vistas y páginas principales.
  - `/contexts`: Contextos para la gestión del estado global.
  - `/firebase.js`: Configuración y funciones de Firebase.
- `/public`: Archivos públicos.

## Tecnologías Utilizadas
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y responsive.
- **Firebase**: Plataforma para el desarrollo de aplicaciones web y móviles.
  - **Firebase Auth**: Autenticación de usuarios.
  - **Firebase Firestore**: Base de datos en tiempo real.
  - **Firebase Storage**: Almacenamiento de archivos.
- **React Router**: Enrutador para aplicaciones de React.
- **ESLint**: Herramienta de análisis de código para asegurar la calidad del código.

## Contribuir
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
