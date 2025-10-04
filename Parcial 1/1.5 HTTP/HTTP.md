### ¿QUE ES HTTP?
HTTP, o Protocolo de Transferencia de Hipertexto, es el conjunto de reglas que permite la comunicación entre navegadores web y servidores para transferir datos e información en Internet, usando un modelo de "solicitud-respuesta". Cuando visitas una página web, tu navegador (el cliente) envía una solicitud HTTP al servidor, y este responde enviando la página HTML u otros recursos solicitados

- Cómo funciona:
**1. Cliente (navegador web):** Inicia la comunicación enviando una solicitud HTTP al servidor. 
**2. Servidor web:** Recibe la solicitud del cliente y la atiende enviando una respuesta. 
**3. Respuesta HTTP:** Contiene el contenido solicitado (como el HTML de una página web) o un código de estado que indica si la solicitud fue exitosa o no

### ¿CUAL ES LA ESTRUCTURA DE UNA PETICION EN HTTP?
Una petición HTTP tiene tres partes principales: la línea de solicitud (que incluye el método, el recurso y la versión del protocolo), los encabezados HTTP (que proporcionan metadatos sobre la solicitud, como el tipo de contenido o la información del host) y, opcionalmente, un cuerpo de solicitud (que contiene los datos que se envían al servidor, como en los métodos ```POST``` o ```PUT```). 
**1. Línea de Solicitud (Request Line)**
Esta es la primera línea de la petición y contiene la información esencial para el servidor: 
**Método HTTP:**
Indica la acción que se debe realizar, como ``` GET ``` (solicitar un recurso), ```POST``` (enviar datos) o ```PUT``` (actualizar un recurso).
**Request-URI:**
Es el recurso al que se dirige la petición, como una URL (por ejemplo, ```/index.html```).
**Versión HTTP:**
Especifica la versión del protocolo HTTP que se está utilizando, como ```HTTP/1.1.```
Ejemplo: ```GET /pagina.html HTTP/1.1.``` 
**2. Encabezados HTTP (HTTP Headers)**
Son un conjunto de líneas que contienen información adicional sobre la petición y que se envían antes del cuerpo, si lo hay: 
**Encabezado de Host:**
 Es un encabezado obligatorio que especifica el nombre del servidor o el dominio al que se está realizando la petición. 
**Otros encabezados:**
Pueden incluir información como el tipo de contenido que el cliente acepta (```Accept```), el tamaño del cuerpo (```Content-Length```), la fecha de la petición (```Date```), o detalles sobre el navegador y el sistema operativo del cliente. 
**Ejemplo:**
```http
Host: www.ejemplo.com
User-Agent: MiNavegador/1.0
```
**3. Cuerpo de la Solicitud (Request Body)**
Esta parte es opcional y contiene los datos que se envían al servidor: 
**Datos:**
Se utiliza en métodos como ```POST``` o ```PUT``` para enviar datos de entrada al servidor, por ejemplo, al rellenar un formulario.
**No presente en GET:**
Métodos como ```GET``` no suelen tener un cuerpo de solicitud, ya que su función es solicitar un recurso existente.
**Ejemplo (en un POST):**
```http
nombre=Juan&edad=30
```
### ¿CUÁLES SON LOS MÉTODOS MÁS USADOS EN HTTP?

Los métodos HTTP indican la acción que se quiere realizar sobre un recurso del servidor.
Algunos de los más comunes son:

```GET:```Solicita un recurso sin modificarlo (ej. obtener una página).

```POST:``` Envía datos al servidor (ej. formulario de registro).

```PUT:``` Actualiza un recurso existente o lo crea si no existe.

```DELETE:``` Elimina un recurso especificado en la URL.

```HEAD:``` Igual que ```GET```, pero solo solicita los encabezados, no el cuerpo de la respuesta.

```PATCH```: Aplica cambios parciales a un recurso.

```OPTIONS:``` Pregunta al servidor qué métodos admite para un recurso.

**Ejemplo de una petición con GET:**
```http
GET /index.html HTTP/1.1
Host: www.ejemplo.com
```
### ¿CUÁLES SON LOS CÓDIGOS DE ESTADO EN HTTP?

Los códigos de estado indican el resultado de la petición al servidor. Se agrupan en 5 categorías principales:

**1xx – Informativos**

```100 Continue```: El servidor recibió la petición inicial y el cliente puede continuar.

**2xx – Éxito**

```200 OK```: La solicitud fue exitosa.

```201 Created```: Un recurso fue creado exitosamente.

**3xx – Redirecciones**

```301 Moved Permanently```: El recurso fue movido a otra URL.

```302 Found```: El recurso está temporalmente en otra URL.

```304 Not Modified```: El recurso no ha cambiado desde la última petición.

**4xx – Errores del Cliente**

```400 Bad Request```: La solicitud está mal formada.

```401 Unauthorized```: Se requiere autenticación.

```403 Forbidden```: Acceso denegado.

```404 Not Found```: Recurso no encontrado.

**5xx – Errores del Servidor**

```500 Internal Server Error```: Error interno en el servidor.

``` 502 Bad Gateway```: El servidor actuó como puerta de enlace y recibió una respuesta inválida.

```503 Service Unavailable```: El servidor no está disponible (sobrecarga o mantenimiento).

### ¿QUÉ SON LOS ENCABEZADOS EN HTTP?

Los encabezados (headers) son pares clave-valor que proporcionan información adicional sobre la petición o la respuesta.
Se envían antes del cuerpo y pueden incluir:

- **Generales**: ```Date```, ```Connection```

- **De petición**: ```Host```, ```User-Agent```, ```Accept```

- **De respuesta**: ```Server```, ```Set-Cookie```

- **De entidad (cuerpo)**: ```Content-Type```, ```Content-Length```

**Ejemplo de encabezados en una petición:**
```http
GET /pagina.html HTTP/1.1
Host: www.ejemplo.com
User-Agent: MiNavegador/1.0
Accept: text/html
```
### ¿QUÉ ES Y CUÁL ES LA ESTRUCTURA DE UNA URL?

Una URL (Uniform Resource Locator) es la dirección que se usa para acceder a un recurso en la web.
Está compuesta por varias partes:
```http
protocolo://usuario:contraseña@host:puerto/ruta?query#fragmento
```


Protocolo: Indica cómo se accede al recurso (ej. ```http```, ```https```, ```ftp```).

- **Usuario:** Contraseña (opcional): Información de autenticación.

- **Host:** Nombre de dominio o dirección IP (ej. ```www.ejemplo.com```).

- **Puerto (opcional):** El número de puerto (por defecto 80 para HTTP y 443 para HTTPS).

- **Ruta:** La ubicación del recurso en el servidor (ej.``` /index.html```).

- **Query (parámetros):** Información extra en formato clave=valor (ej. ```?id=25&sort=asc```).

- **Fragmento (hash):** Una referencia interna dentro del recurso (ej. ```#seccion1```).

**Ejemplo de URL completa:**
```http
https://usuario:clave@www.ejemplo.com:443/articulos/buscar?id=25&sort=asc#resultados
```
