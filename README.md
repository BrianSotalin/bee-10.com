🌐 Aplicación Web Estática con S3 y CloudFront
Este proyecto describe la configuración para alojar una aplicación web estática de alto rendimiento y bajo costo utilizando Amazon S3 para el almacenamiento y Amazon CloudFront como red de entrega de contenido (CDN).

Esta arquitectura es ideal para sitios web que no requieren una lógica de servidor backend, como blogs, portfolios, landing pages o documentación de proyectos.

🚀 Características Principales
Alojamiento de Alto Rendimiento: Utiliza CloudFront para distribuir tu contenido desde ubicaciones geográficas cercanas a tus usuarios, reduciendo la latencia y mejorando la velocidad de carga.

Seguridad Mejorada: CloudFront permite configurar HTTPS para todas las solicitudes y proteger tu sitio contra ataques DDoS.

Escalabilidad y Durabilidad: Amazon S3 ofrece un almacenamiento de objetos extremadamente duradero y escalable, capaz de manejar grandes cantidades de tráfico sin problemas.

Optimización de Costos: Paga únicamente por el almacenamiento y la transferencia de datos que consumes.

Control de Versiones y Caché: Gestiona las actualizaciones de tu sitio subiendo nuevos archivos a S3 e invalidando el caché de CloudFront para que los cambios se reflejen al instante.

🛠️ Tecnologías Utilizadas
Amazon S3: Servicio de almacenamiento de objetos.

Amazon CloudFront: Red de entrega de contenido (CDN).

AWS CLI: Para la automatización y gestión de los recursos de AWS desde la línea de comandos.

⚙️ Pasos de Configuración y Despliegue
Requisitos Previos
Una cuenta de AWS activa.

Tu aplicación web estática completa (archivos index.html, CSS, JavaScript, imágenes, etc.).

La AWS CLI instalada y configurada (opcional, pero recomendada).

1. Preparar el Bucket S3
Crea un nuevo bucket de S3. El nombre del bucket debería ser único a nivel global.

Sube todos los archivos de tu aplicación web estática a este bucket.

Configura el bucket para alojamiento de sitios web estáticos y establece tu index.html como documento de índice y de error.

2. Configurar la Distribución de CloudFront
Crea una nueva distribución de CloudFront.

En Origen, selecciona tu bucket S3 de la lista desplegable.

Es altamente recomendado crear un Origen Access Control (OAC) para restringir el acceso directo al bucket S3 y obligar a que todo el tráfico pase por CloudFront.

Elige tus opciones de caché y precios.

Configura un certificado SSL/TLS (puedes crearlo con AWS Certificate Manager de forma gratuita) para habilitar HTTPS.

Una vez que la distribución esté desplegada (puede tardar unos minutos), recibirás un nombre de dominio de CloudFront que será la URL de tu sitio.

3. Subida y Actualización del Contenido
Para subir nuevos archivos o actualizar tu aplicación:

Sube los archivos actualizados a tu bucket S3.

Si deseas que los cambios sean visibles de inmediato, debes invalidar el caché de CloudFront.

Invalidar Caché con AWS CLI
La forma más sencilla de invalidar el caché es a través de la línea de comandos. Esto borra los archivos almacenados en los puntos de borde de CloudFront, forzando a CloudFront a buscar la versión más reciente en tu bucket S3.

aws cloudfront create-invalidation --distribution-id TU_ID_DE_DISTRIBUCION_CLOUDFRONT --paths "/*"

Reemplaza TU_ID_DE_DISTRIBUCION_CLOUDFRONT con el ID de tu distribución de CloudFront. Puedes encontrar este ID en la consola de CloudFront.

📚 Recursos Útiles
Guía oficial de alojamiento de sitios web estáticos en S3

Crear una distribución de CloudFront

Documentación de la AWS CLI
