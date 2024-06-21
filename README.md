<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> master
