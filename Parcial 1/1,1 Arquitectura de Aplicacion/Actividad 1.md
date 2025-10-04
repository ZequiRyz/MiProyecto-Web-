# Arquitectura de una aplicacion  
_________________________________________________________________________________________________________________
## Definicion de Arquitectura de una aplicacion 
La **arquitectura de una aplicación web** es el diseño estructural de una aplicación que define cómo interactúan sus componentes, como la interfaz de usuario, los sistemas de middleware y las bases de datos. Este diseño, que sigue un conjunto de patrones y mejores prácticas, determina la escalabilidad, el rendimiento y la seguridad de la aplicación, asegurando que cumpla con los requisitos del usuario y ofrezca una experiencia fluida.  
### Arquitecturas mas comunes  
Las arquitecturas web más comunes se basan en modelos de estructura y funcionalidad, destacando la arquitectura vertical (o de silo), que organiza el contenido en categorías temáticas específicas para reforzar la autoridad, la arquitectura horizontal (o plana), donde todos los contenidos están interconectados sin jerarquías definidas, y arquitecturas de software modernas como la arquitectura monolítica, donde toda la aplicación es una unidad, y la arquitectura de microservicios, que divide la aplicación en servicios pequeños e independientes.  
## Tipos de Arquitectura según la comunicación
### 1. Cliente servidor 
- **Cliente:** Envía solicitudes (request) al servidor, normalmente desde un navegador o aplicación.
- **Servidor:**  Procesa esas solicitudes y devuelve una respuesta (response).
- **Características:** 
-Modelo centralizado.
-El servidor es el núcleo del sistema.
-Común en aplicaciones web tradicionales.

**Ejemplo:** Cuando entras a una página web, tu navegador (cliente) pide la información y el servidor se la entrega.
### 2. Punto a punto (P2P)
- Cada dispositivo (nodo) actúa tanto como cliente y como servidor.
- Los nodos se comunican directamente entre sí sin depender de un servidor central.
- Características:
-Modelo distribuido.
-Mayor tolerancia a fallos.
-Usado en sistemas como torrents, blockchain o videollamadas directas.

## Tipos de Arquitectura según la organización del código

### 1. Monolito

- Todo el código de la aplicación está integrado en un único bloque.
- Fácil de desarrollar al inicio, pero difícil de escalar y mantener a largo plazo.
- Un fallo en una parte puede afectar a toda la aplicación.

### 2. En capas
- La aplicación se organiza en diferentes capas lógicas, por ejemplo:
- **Presentación** (UI): 
-Lo que ve el usuario.
- **Lógica de negocio:** Reglas y procesos principales.
- **Acceso a datos:** Comunicación con la base de datos.
- Permite mayor separación de responsabilidades y mantenimiento más sencillo.
### 3. Microservicios
- La aplicación se divide en pequeños servicios independientes.
- Cada microservicio se encarga de una funcionalidad específica.
- Ventajas: 
-Escalabilidad.
-Despliegue independiente.
-Tolerancia a fallos.
- Usado por empresas con sistemas grandes y complejos (ej. Netflix, Amazon).

### Conclusión
La arquitectura de una aplicación web define cómo se comunican sus partes (Cliente-Servidor o P2P) y cómo se organiza su código (Monolito, Capas o Microservicios).
Elegir la arquitectura adecuada depende del tamaño del proyecto, los recursos y la necesidad de escalabilidad.
