# 🚀 Despliegue de Aplicación Web Estática en AWS

Este proyecto es una guía detallada para desplegar una **aplicación web estática** de forma eficiente y segura utilizando los servicios de Amazon Web Services (AWS) **S3** y **CloudFront**.

Ideal para proyectos como portfolios, blogs, páginas de aterrizaje o cualquier sitio que no requiera un backend dinámico.

## ✨ Características de la Arquitectura

  * **Velocidad Global:** CloudFront actúa como una CDN (Content Delivery Network), distribuyendo tu contenido a través de una red de servidores de borde para ofrecerlo a tus usuarios con la menor latencia posible. 🌍

  * **Almacenamiento Confiable:** S3 es un servicio de almacenamiento de objetos con alta durabilidad y disponibilidad, garantizando que tus archivos estén siempre accesibles. 🛡️

  * **Seguridad y Cifrado:** CloudFront permite la configuración de HTTPS, protegiendo la comunicación entre tus usuarios y tu sitio. 🔒

  * **Costo-Efectividad:** La arquitectura de "pago por uso" de AWS significa que solo pagas por el almacenamiento y el ancho de banda que realmente utilizas. 💰

  * **Control Total:** Podrás gestionar las actualizaciones de tu sitio subiendo nuevos archivos y controlando el caché de CloudFront con facilidad. 🔄

## 🛠️ Tecnologías Utilizadas

  * **Amazon S3:** El bucket que almacena todos tus archivos estáticos.

  * **Amazon CloudFront:** La CDN que sirve tu sitio web a nivel global.

  * **AWS CLI:** La herramienta de línea de comandos para automatizar y gestionar el despliegue.

## ⚙️ Guía de Despliegue

Sigue estos pasos para poner tu aplicación en línea:

### 1\. Prepara tu Bucket S3

1.  Crea un nuevo bucket de S3 con un nombre único.

2.  Sube todos los archivos de tu proyecto (HTML, CSS, JS, imágenes, etc.) a la raíz del bucket.

3.  Habilita el **alojamiento de sitios web estáticos** en la configuración del bucket y especifica tu `index.html` como documento principal.

### 2\. Configura CloudFront

1.  Crea una nueva distribución de CloudFront.

2.  Selecciona tu bucket de S3 como el **Origen**.

3.  Crea un **Origen Access Control (OAC)** para asegurarte de que el tráfico solo llegue a tu bucket a través de CloudFront.

4.  Asocia un certificado SSL/TLS (creado en AWS Certificate Manager) para activar HTTPS.

5.  Una vez desplegada la distribución, utiliza el **nombre de dominio de CloudFront** para acceder a tu sitio.

### 3\. Actualiza tu Contenido

Para publicar nuevos cambios, sube los archivos actualizados a tu bucket S3. Luego, crea una invalidación de caché para que CloudFront sirva la nueva versión:

```
aws cloudfront create-invalidation --distribution-id TU_ID_DE_DISTRIBUCION_CLOUDFRONT --paths "/*"

```

Reemplaza `TU_ID_DE_DISTRIBUCION_CLOUDFRONT` con el ID de tu distribución.

## 📚 Enlaces de Interés

  * [Guía para alojar un sitio estático en S3](https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/WebsiteHosting.html)

  * [Crear una distribución de CloudFront](https://docs.aws.amazon.com/es_es/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

  * [Documentación de AWS CLI](https://aws.amazon.com/cli/)
