# Introducción al protocolo HTTP

## Integrantes

Kevin Eliezer García Peña - alu0101045788@ull.edu.es

Noah Sanchez Geurts - alu0101134956@ull.edu.es

Adrián Melián Fernandez - alu0100974652@ull.edu.es


## Práctica

Entra en las páginas: 

1) http://www.gobiernodecanarias.org/istac/api/ 

2) http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html


y utiliza los navegadores Chrome y Firefox para resolver las siguientes cuestiones:

Realiza un informe en el que indiques:

Qué peticiones desencadena la consulta.
¿Qué tipo de petición estás realizando?
Qué código de estatus devuelve.
Qué DNS tiene el servidor
Qué IP tiene tiene el servidor
¿La página tiene alguna cookie?, ¿Cuáles?.
¿Qué idioma acepta?.
Alguna línea de código JavaScript
Alguna línea de código CSS que se aplique
Alguna línea de código HTML que se aplique.

### Informe de http://www.gobiernodecanarias.org/istac/api/ 

**Qué peticiones desencadena la consulta.**

Se realiza una petición HTTP de tipo GET a la ruta /istac/api. Esta retorna una página estática que, según se va cargando, se trae del servidor más recursos necesarios para representar la página web mediante peticiones GET: istac.css, logo_edatos.jpg, logo_stac.jpg.

**¿Qué tipo de petición estás realizando?**

Solicitud de tipo GET: se solicita un recurso del servidor específico.

**Qué código de estatus devuelve.**

200 (Todo correcto)


**Qué DNS tiene el servidor**

www.gobiernodecanarias.org

**Qué IP tiene tiene el servidor**

93.188.136.129

**¿La página tiene alguna cookie?, ¿Cuáles?*.**

Sí, cuatro cookies.

Cookies: 
_ga=GA1.2.214507326.1568331378; 
__unam=75a5776-16ea56cd49f-6d52fc83-4; 
_gid=GA1.2.1795778172.1582237915
JSESSIONID=2A0C6E26637A73EF476721FCE94F9FE5.ajp13_sara3_appsrv1

Nombre de las cookies: _ga, __unam, _gid, JSESSIONID

**¿Qué idioma acepta?.**

En el paquete HTTP recibe:
Accept-Language: es-ES,es;q=0.9,en;q=0.8

Por tanto, acepta inglés con un peso de 0.8 y español con un peso de 0.9 (mayor preferencia por el español).

**Alguna línea de código JavaScript**

No hay código javascript en esta página.

**Alguna línea de código CSS que se aplique**

```css
.contenido ol{padding-left:1.2em;line-height:1.6}
.contenido ul li{margin:0 0}
.contenido p{margin-right:10px}
```

**Alguna línea de código HTML que se aplique.**

```html
<head>
    <title>ISTAC | API | eDatos</title>
    <link href="/istac/resources/css/istac.css" media='screen' rel='stylesheet' type='text/css' />
</head>
```

### Informe de http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html

**Qué peticiones desencadena la consulta.**

Se hace una petición de tipo GET al PATH sanidad/scs/gc/18/Cita_Previa/index.html y, tras traerse ese recurso, se traen otros más mediante GET,
como jquery, bootstrap, el fichero de estilos styles.css y algunas imágenes, unas encontradas y traídas correctamente (estado 200) y otras que se piden y no se encuentran (estado 404)

**¿Qué tipo de petición estás realizando?**

Petición de tipo GET (se pide un determinado recurso al servidor)

**Qué código de estatus devuelve.**

200 o 304. 200 si es la primera vez, 304 si tiene el pc cliente tiene la página guardada en caché y en el servidor
no ha sido modificada.

**Qué DNS tiene el servidor**

www3.gobiernodecanarias.org

**Qué IP tiene tiene el servidor**

93.188.137.126

**¿La página tiene alguna cookie?, ¿Cuáles?*.**

Sí, tres cookies:

_ga=GA1.2.214507326.1568331378; 
__unam=75a5776-16ea56cd49f-6d52fc83-4; 
_gid=GA1.2.1795778172.1582237915

**¿Qué idioma acepta?.**

Accept-Language: es-ES,es;q=0.9,en;q=0.8

Español con un peso de 0.9 e inglés con un peso de 0.8.

**Alguna línea de código JavaScript**

```javascript
if("undefined"==typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");

function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");

...

```

Todo el javascript que hay en la página es el código de Bootstrap y Jquery.

**Alguna línea de código CSS que se aplique**

```css
.footer {
    padding-top: 19px;
    color: #777;
    border-top: 1px solid #e5e5e5;
}
```

**Alguna línea de código HTML que se aplique.**

```html
<div class="col-lg-3">
    <p>© Gobierno de Canarias</p>
</div>
```
