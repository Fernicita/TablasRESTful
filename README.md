# TablasRESTful
#Elaborado por: Miriam Fernanda Arellanes Perez <b>353256</b> <br>
#Materia: Web plataforms<br>
#Profesor: Luis Antonio Ramirez Martinez <br>
<b>Las instrucciones de la tarea fueron las siguientes<br></b>
Crear API REST utilizando la siguiente tabla RESTFull:<br>
    GET /results/:n1/:n2 -> Sumar n1 + n2<br>
    POST /results/ -> Multiplicar n1 * n2<br>
    PUT /results/ -> Dividir n1 / n2<br>
    PATCH /results/ -> Potencia n1 ^ n2<br>
    DELETE /results/:n1/:n2 -> restar n1 - n2<br>
Para poder ejecutar este código tenemos que descargarlo en una carpeta, en la carpeta ingresaremos los siguientes
comandos: <br>
npm init -y<br>
npm install express<br>
y luego para ejecutar el código es de esta manera:<br>
node tablasrest.js<b>
Nos va a decir en que puerto se esta corriendo pero en caso de ser necesario en las últimas lineas del código de tablasrest.js podemos cambiarle el puerto<br>
Ahora en postman el cual para instalarlo es <A HREF="https://www.postman.com/downloads/"> aquí </A> el cual también se puede utilizar en el navegador pero por términos de explicarlo será en basé a la aplicación de escritorio.<br>
En postman ingresaremos el link http://localhost:4000/results/5/5 el cual nos va a regresar el resultado de una suma si este esta en la opción de <b>GET</b>. <br>
Para los demás entonces tendremos que usar el siguiente link http://localhost:4000/results y en la sección de abajo que se llama body seleccionaremos la opción raw y en la parte que se despliega como para escribir código pondremos lo siguiente:<br>
{
    "n1": 5,
    "n2": 3
}<br>
Con <b>POST</b> nos aparece la multiplicación de los números que ingresamos<br>
Con <b>PUT</b> nos aparece la división de los numeros que fueron ingresados<br>
Con <b>PATCH</b> nos aparece la potencia de los numeros que fueron ingresados<br>
Para <b>DELETE</b> será parecido al de GET, en el link tenemos que poner los números que queremos que se resten ejemplo http://localhost:4000/results/10/5




