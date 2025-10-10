# TIPOS DE DATOS EN JAVASCRIPT
#### En JavaScript existen 8 tipos de datos, los cuales se dividen en *Primitivos y NO Primitivos*

## 1. Primitivos
#### Estos son los mas básicos; no son objetos y se almacenan directamente en la memoria
 |Tipo | Descripcion | Ejemplo|
 |-----|-------------|--------|
 |```String```  |Texto (Entre comillas)|```"Hola"```,```'Mundo'```,```'Hola{nombre}'```|
 |```number```|Numeros enteros o decimales|```10```,```3.14```,```-5```|
 ```bigint```|Números muy grandes (más de 2⁵³)|```123456789012345678901234567890n```|
 |```boolean```|Valor lógico (verdadero o falso)|```true```,```false```|
 |```undefined```|Variable declarada pero sin valor|```let x; // undefined```|
 |```null```|Representa "ausencia intencional o valor"|```let persona = null;```|
 |```symbol```|Identificador único, usado en objetos especiales|```const id = Symbol("id");```|     

 ## 2. No primitivo (u "objeto")
 |Tipo|Descripcion|Ejemplo|
 |----|-----------|-------|
 |```object```|Colección de pares clave-valor es la base de casi todo en JS|```{nombre: "Ezequiel", edad:20}```|


### Dentro de los objetos, también entran:

- #### Funciones: ```function saludar() { console.log("Hola"); }```

- #### Fechas: ```new Date()```

- #### Map / Set / WeakMap / WeakSet: estructuras de datos avanzadas
