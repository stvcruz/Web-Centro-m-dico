# Portal Empleados – Centro Médico San Agustín

Este repositorio contiene una aplicación estática basada en Bootstrap 5 y herramientas de front‑end. El sitio se desarrolla con **SCSS**, **npm scripts**, **Grunt/Gulp** y puede ser empacado para producción en la carpeta `distri`.

> El contenido de las secciones antiguas se ha eliminado; a continuación se explican los pasos útiles para construir y desplegar el proyecto.

## Instalación y desarrollo

1. Clona el repositorio y abre la carpeta de trabajo.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Compila SCSS manualmente:
   ```bash
   npm run scss
   ```
   También hay un ejemplo de archivo **Less** (`css/styles.less`); puede compilarse con
   ```bash
   npm run less
   ```
4. Para mantener CSS actualizado mientras editas scss usa el watcher:
   ```bash
   npm run watch:scss
   ```
5. Levanta un servidor de desarrollo (también ejecuta el watcher):
   ```bash
   npm run start
   ```
   Esto ejecuta `lite-server` y `onchange` en paralelo.

## Scripts útiles

| Script | Descripción |
|--------|-------------|
| `npm run scss` | Compila todos los `.scss` en `css/` usando Dart Sass. |
| `npm run watch:scss` | Observa cambios en SCSS y recompila automáticamente. |
| `npm run dev` | Arranca `lite-server` para servir el contenido localmente. |
| `npm run start` | Ejecuta `watch:scss` y `dev` en paralelo con **concurrently**. |
| `npm run build` | Borra `distri` y copia HTML, CSS, e imágenes a `distri` (preparación para despliegue). |

También existen tareas con **Gulp** y **Grunt**:
- `gulp` o `gulp default` compila SCSS y construye `distri`.
- `grunt` o `grunt build` hace lo mismo usando Grunt.

> Para utilizar `imagemin-cli` globalmente (optimizar imágenes) se recomienda:
> ```bash
> npm install -g imagemin-cli --unsafe-perm=true --allow-root
> ```

## Preparar salida para servidor

Ejecuta `npm run build` (o `gulp` / `grunt`) y sube el contenido de la carpeta `distri` al servidor web. Esa carpeta contiene los archivos estáticos listos para producción.

---

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).