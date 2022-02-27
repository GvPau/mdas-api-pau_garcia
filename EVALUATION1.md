# Evaluación reto 1

## Hace todos los puntos pedidos (40%)

#### Dado un nombre vía argumento, devolver sus tipos

OK

#### Dado un nombre vía endpoint, devolver sus tipos

- OK, aunque se pedía un JSON de respuesta

#### Si no existe el pokemon, ¿se lanza una excepción de dominio?

OK

#### Si la api da timeout, ¿se lanza una excepción de dominio?

- OK. Pero el nombre de la excepción de dominio tiene que ser lo suficientemente clara para que no necesitéis indicar
  cuál ha sido el error real a través del constructor.

#### Si se lanza una excepción desde el dominio, ¿se traduce en infraestructura a un código HTTP/un error legible en consola?

- OK. Cuando se hace una búsqueda el código de respuesta debería ser un 200, no un 304 :S

**Puntuación final: 38/40**

## Se aplican conceptos explicados (40%)

#### Separación correcta de capas (application, domain, infrastructure + BC/module/layer)

OK

#### Aggregates + VOs

- Existe un VO `PokemonName` que no está en el agregado. Únicamente se está utilizando para hacer la búsqueda en el
  repositorio pero no pertenece a ningún agregado, ¿cómo es posible buscar por un VO que no pertenece a ningún agregado?

- Tal y como planteáis el reto, si algún pokemon no tiene tipo, estaríais diciendo que un pokemon no existe. Aquí
  tendríais dos opciones, o bien, mediante una cláusula de guarda verificar si existe el pokemon antes de buscarlo, o
  bien, que la excepción de que no existe el pokemon la lance infraestructura.

#### No se trabajan con tipos primitivos en dominio

OK

#### Hay servicios de dominio

- OK, aunque sería un searcher en vez de un finder, ya que está buscando los objetos que contengan o cumplan las
  condiciones 😉.

#### Hay use cases en aplicación reutilizables

OK

#### Se aplica el patrón repositorio

OK

**Error principal: Se utilizan VOs que no están en el agregado**

**Puntuación final: 30/40**

## Facilidad setup + README (20%)

#### El README contiene al menos los apartados "cómo ejecutar la aplicación", "cómo usar la aplicación"

OK

#### Es sencillo seguir el apartado "cómo ejecutar la aplicación"

OK

**Puntuación final: 20/20**

## Extra

- Swagger
- Tests

**Puntuación: +8**

## Observaciones

- Habéis creado un shared cuando únicamente tenéis un módulo y un BC 🤔
- Usad
  el [estándar](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice)
  de escritura de URLs (kebab case). Ej: `/pokemon-type` o `/type` pasándole el `name` como un query param

**PUNTUACIÓN FINAL: 96/100**
