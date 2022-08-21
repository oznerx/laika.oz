# Laika

Administration system for homeless animal adoptions.

Created for the Laika Organization in Culiacán Sinaloa as a social service project.

# Note

Due to memory leaks, the server has to be restarted manually once in a while.

# Stack

- JavaScript
- Node
- MongoDB
- EJS

# Run Locally

Make sure to have Node and Mongodb installed on your computer

```bash
npm install
npm run dev
```

# ToDo

## Pedro

### Complicado

- [x] Search Filters
- [x] Pagination/Infinite Scroll
- [x] Calendar View (como Reminders)
- [x] Protected Routes to Edit and Delete (Prompt)
- [x] Zip Codes JSON data using JS
- [x] Pedir contraseña para editar y para poder acceder a ver los datos (dos veces)
- [x] Filtro calendario desde una fecha hasta otra fecha
- [x] Busqueda para buscar los que NO tengan un evento
- [x] Agregar campo de otro y descripcion en eventos
- [x] Adopcion agregar edad de adopcion
- [x] Adopciones apartado para notas grande al final
- [x] Adopciones editar
- [x] Laika juntar ambas paginas en un dominio
- [x] Migrar de Wix a Laika.org

### Sencillo

- [x] Asterisco para los forms opcionales
- [x] Arreglar editar animal
- [x] Crear animal: (opcionales) Alias, Señas Particulares y Fotos
- [x] Crear animal: añadir color de animal (Blanco, Negro, Café y Otro) (obligatorio)
- [x] Crear animal: meses y años, guardar la fecha de nacimiento estimada (obligatorio)
- [x] Crear campo para PetcoID (opcional) (numero entero)
- [x] Crear rescate: (opcionales) Codigo Postal, Colonia y Calle, Rescatista. (quitar) Notas
- [x] En la cita agregar campo para descripción (obligatoria)
- [x] Adopciones (opcionales) Regreso, Calle
- [x] Adopción quitar calle y solo imprimir en la tabla municipio y colonia
- [x] Dropdowns for knowing which vaccines the animal has
- [x] Add references
- [x] Cambiar tipo a especie
- [x] Parcino, Siamés, atigrado (agg colores)
- [x] Sexo (agg otro)
- [x] Cambiar Adoptado Por (Cuidado por) y Adopciones por (Hogar)
- [x] Laika vs Cuidadano en Otro Rescate
- [x] Telefono en adopciones agregar (obligatorio), perfil de redes o correo (opcional)
- [x] Orden de fotos dejar asi
- [x] Mandar pdf de las screen de la pagina (con los menús)
- [x] Deployment (set server hour to gmt-6)
- [x] Backups ?
- [x] Ordenar animales de más reciente a más antiguo
- [x] Borrar fotos asociadas con animal
- [x] Cambiar de Parcino a Barcino
- [x] Cambiar titulo de "eventos" a "rehabilitacion"
- [x] Agregar "consulta médica/consulta de seguimiento" a eventos
- [x] Poner link a "animal" en todas las páginas

## (Juan, Rogelio, Ozner y JC)

- [x] Cambiar fondo a color aqua y eliminar el background antiguo (y los assets relacionados)
- [x] Arreglar bug en safari que llena toda la pantalla de lila
- [x] Arreglar bug en safari que pone el fondo transparente en lugar de blanco en la ruta (hogares->detalles)
- [x] Quitar "acción" del encabezado de las tablas
- [x] En vez de "borrar" poner una "X" de color rojo
- [x] Cambiar título de "Nuevo Rescate" a "Rescate"
- [x] Quitar "citas" del pdf
- [ ] En el pdf que diga el nombre del animal en lugar de "animal"
- [ ] Cambiar tipografía de pdf a "Comic"
- [x] Corregir en rescate "edad al rescate"
- [x] Crear pdf con datos para imprimir (animal, eventos, rescate, hogares(censurados), citas), que sean opcionales
- [x] Pasar los datos de la base antigua a la nueva manualmente
- [x] Betatesting con Eva
- [x] Logo de Laika al Final de cada página web
- [x] Rediseñar los colores de la página. Solo un diseño #6ea6a5 verde aqua y #8a1b70 Rosa-Morado
- [x] Tablas con headers centrados

# Authors

- Pedro Moreno
- Juan Hernández
- Rogelio Lizárraga
- Juan Bernal
- Ozner

(Credits to Rey Vega and Agustín Quintanar)

# References

[1st version of the app](https://github.com/ReyVega/Laika_WebPage)

[Neighborhoods data](https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/CodigoPostal_Exportar.aspx)

[Municipalities data](https://cuentame.inegi.org.mx/monografias/informacion/sin/territorio/div_municipal.aspx?tema=me&e=25)

[Default images](https://www.freepik.es/fotos/perro-mestizo)
