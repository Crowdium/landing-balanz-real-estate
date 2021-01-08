# Landing Page Balanz Real Estate

El proyecto fue desarrollado en [Angular 11.0.5](https://angular.io/docs).

# Instalación:

## Requisitos
- [GIT](https://git-scm.com/)
- [NodeJS](https://nodejs.org/es/)
- [Yarn](https://yarnpkg.com/) opcional

### Clonar el proyecto

Una vez instalado git, el siguiente paso es clonar nuestro proyecto. Para eso introduciremos el siguiente comando en nuestra terminal. 

`git clone https://github.com/newlinkcapital/landing-balanz-real-estate.git`

### Instalación de paquetes

Una vez finalizado la clonación del proyecto, pasaremos a instalar los paquetes que por cuestiones de peso no están agregados en el repositorio. Para eso introduciremos el siguiente comando.

`yarn install` o `npm install`

### Configuración
En la carpeta `src/app/constants` agregar `config.ts` y agregar el siguente script con los datos de `api_key` y `endpoint` proporcionados por crowdium.

```typescript
export enum config {
    API_KEY = "TU_APIKEY",
    ENDPOINT = "TU_ENDPOINT",
    GMAPS = "TU_APIKEY_GOOGLE_MAPS",
}
```

# Modo Desarrollador

### `yarn start` o `npm run start` o `ng serve`

Ejecuta la aplicación en modo de desarrollo. \
Abra [http://localhost:4200](http://localhost:4200) para verlo en el navegador.

La página se volverá a cargar si realiza modificaciones. \
También verá errores de pelusa en la consola.

### `yarn test` o `npm run test` o `ng test`

Inicia el corredor de pruebas en el modo de reloj interactivo. \
Consulte la sección sobre [ng test](https://angular.io/cli/test) para obtener más información.

### `ng generate component|directive|pipe|service|class|guard|interface|enum|module {{name}}` o `ng g component|directive|pipe|service|class|guard|interface|enum|module {{name}}`

Esto permitira crear un componenetes para el proyecto en `name` se debe espeficiar la ruta y el nombre del componente. \
Ej: `ng g component containers/about-ci`


# Modo Producción

## Build

### `yarn build:prod` o `npm run build:prod` o `ng build --prod`

Construye la aplicación para producción en la carpeta `dist`. \
Agrupa correctamente Angular en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. \
¡Su aplicación está lista para implementarse!

Consulte la sección sobre [implementación](https://angular.io/guide/deployment) para obtener más información.

