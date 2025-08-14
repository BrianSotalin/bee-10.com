# 🚀 Despliegue de Aplicación Web Estática en AWS

Este proyecto es una guía detallada para desplegar una **aplicación web estática** de forma eficiente y segura utilizando los servicios de Amazon Web Services (AWS) **S3** , **CloudFront** y **Github Actions**.

Ideal para proyectos como portfolios, blogs, páginas de aterrizaje o cualquier sitio que no requiera un backend dinámico.

## ✨ Características de la Arquitectura

  * **Velocidad Global:** CloudFront actúa como una CDN (Content Delivery Network), distribuyendo tu contenido a través de una red de servidores de borde para ofrecerlo a tus usuarios con la menor latencia posible. 🌍

  * **Almacenamiento Confiable:** S3 es un servicio de almacenamiento de objetos con alta durabilidad y disponibilidad, garantizando que tus archivos estén siempre accesibles. 🛡️

  * **Seguridad y Cifrado:** CloudFront permite la configuración de HTTPS, protegiendo la comunicación entre tus usuarios y tu sitio. 🔒

  * **Costo-Efectividad:** La arquitectura de "pago por uso" de AWS significa que solo pagas por el almacenamiento y el ancho de banda que realmente utilizas. 💰
    
  * **CI/CD Automatizado:** GitHub Actions se encarga de subir automáticamente los archivos de tu proyecto a S3 cada vez que haces un push a una rama específica, eliminando el proceso de subida manual. 🤖

  * **Control Total:** Podrás gestionar las actualizaciones de tu sitio subiendo nuevos archivos y controlando el caché de CloudFront con facilidad. 🔄

## 🛠️ Tecnologías Utilizadas

  * **Amazon S3:** El bucket que almacena todos tus archivos estáticos.

  * **Amazon CloudFront:** La CDN que sirve tu sitio web a nivel global.

  * **GitHub Actions:** El motor de CI/CD para la automatización del despliegue.

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

### 3\. Actualiza tu Contenido con Github Action

**Configuracion GitHub Actions:**
La clave de este proyecto es la automatización. Para que GitHub Actions pueda desplegar tu código, necesitas proporcionarle las credenciales de AWS.

Crea un usuario IAM en AWS: Otorga a este usuario permisos mínimos para acceder al bucket S3 (por ejemplo, s3:PutObject, s3:DeleteObject, s3:ListBucket).

Guarda las credenciales en GitHub Secrets: En tu repositorio de GitHub, ve a Settings > Secrets and variables > Actions. Añade dos nuevos secretos:

AWS_ACCESS_KEY_ID (con la clave de acceso de tu usuario IAM)

AWS_SECRET_ACCESS_KEY (con la clave secreta)

Crea el archivo del workflow: En la raíz de tu proyecto, crea la carpeta .github/workflows/ y dentro, un archivo deploy.yml. Este archivo contendrá el script que se ejecuta en cada push a la rama principal.

Ejemplo de deploy.yml:

```
name: Deploy Static Website to S3

on:
  push:
    branches:
      - main  # o la rama que uses para producción

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1  # Reemplaza con tu región

    - name: Deploy to S3
      run: aws s3 sync . s3://TU_NOMBRE_DE_BUCKET --delete



```
Para publicar nuevos cambios, simplemente haz push a la rama configurada en tu workflow (main). GitHub Actions se encargará del resto, sincronizando automáticamente tu repositorio con tu bucket S3.
```

aws cloudfront create-invalidation --distribution-id TU_ID_DE_DISTRIBUCION_CLOUDFRONT --paths "/*"


```
Reemplaza `TU_ID_DE_DISTRIBUCION_CLOUDFRONT` con el ID de tu distribución.

## 📚 Enlaces de Interés

  * [Guía para alojar un sitio estático en S3](https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/WebsiteHosting.html)

  * [Crear una distribución de CloudFront](https://docs.aws.amazon.com/es_es/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

  * [Documentación de AWS CLI](https://aws.amazon.com/cli/)
