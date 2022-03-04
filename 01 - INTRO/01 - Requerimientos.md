# Caso: Abogabot

* Despacho de abogados con el objetivo de automatizar el registro de las demandas de sus clientes, esto se hará por medio de un formulario. 

* Al momento de llenar el formulario se redireccionará a un proceso de pago para poder finalizar con el registro de la demanda.

* El cliente tendrá que crear una cuenta (perfil) en la plataforma, con la cual se verá el seguimiento de cada actualización del proceso legal.

* El administrador del sitio recibirá la notificación de nueva demanda, con los datos pedidos por el formulario en un archivo Word para comenzar con el proceso legal.

* El administrador del sitio recibirá la notificación del pago siendo capaz de corroborarlo por medio de un dashboard. 

* El administrador actualizara el proceso de la demanda y agregara comentarios(observaciones) en cada paso del proceso.

* Al usuario le llegaran correos notificando las actualizaciones del avance del proceso.

* La página debe ser responsiva para poder visualizarla desde cualquier dispositivo.

* La preferencia de los colores del cliente es azul marino y blanco, pero acepta propuestas

## Actividades de la App

### Usuario (Cliente)
El usuario deberá loguearse en la plataforma, en caso de no tener cuenta deberá crear una. Dentro de su perfil tendrá tres opciones: editar sus datos personales ("Editar datos"), registrar una nueva solicitud ("Nueva solicitud") y ver el estado de una solicitud previa ("Ver estado").

>> ("Editar datos")
1. Podra modificar los datos personales ingresados en caso de error, ya que al solicitar una demanda quedaría invalida por error en el nombre de quien haga la solicitud. 

>> ("Nueva solicitud")
2. Para crear una nueva solicitud deberá llenar un formulario con los datos necesarios para la demanda. Posteriormente deberá realizar el pago por el recibimiento de la demanda.

>> ("Ver estado")
3. En este apartado podrá ver el estado de la demanda, así como las actualizaciones del proceso, esto incluye los comentarios(observaciones) que es abogado vaya anexando en el transcurso del proceso.

### Usuario (Administrador - Abogado)
El abogado deberá loguearse con una cuenta asignada por el administrador del sistema para poder realizar una de las siguientes funciones.

1. Podrá ver las demandas terminadas ("Ver solicitudes terminadas").

2. Podrá ver las solicitudes de demanda nuevas ("Ver nuevas solicitudes").

3. Podrá ingresar actualizaciones a solicitudes en curso ("Ver solicitudes en proceso"). Por medio de este apartado le permitirá visualizar y seleccionar una demanda por medio de una lista.
Posteriormente deberá ingresar los datos a un formulario para realizar la actualización con éxito.

## Requerimientos

### Usuario (Cliente)
1. Sistema de logueo para usuarios
2. Crear un formulario de nueva solicitud de demanda
3. Crear un apartado para validacion de pago
4. Crear un apartado de visualizacion de actualizaciones

### Usuario (Administrador - Abogado)
5. Sistema de logueo para administradores
6. Elaborar dashboard con la informacion de pagos registrados
7. Apartado de consulta de solicitudes terminadas
8. Apartado de consulta de solicitudes nuevas
9. Apartado de consulta de solicitudes pendientes
10. Crear formulario realizar modificaciones, agregar comentarios
12. Crear documento legal en .docx automáticamente