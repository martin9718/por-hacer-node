## Aplicación de comandos que crear tareas por hacer

Recuerden instalar los paquetes de node ejecutando el siguiente comando:

```
npm install
```

Lista completa de los comando de la aplicación.

Crear tarea
```
node app crear -d "Aqui va la descripcion de la tarea"
```

Listar todas las tareas
```
node app listar -c all 
```

Listar las tareas completadas
```
node app listar -c true 
```

Listar las tareas sin completar
```
node app listar -c false
```

Marcar tarea como completada, por default esta sin completar
```
node app actualizar -c true 
```

Marcar tarea sin completar, por default esta sin completar
```
node app actualizar -c false
```

Borrar tarea
```
node app borrar -d "Aqui va la descripcion de la tarea a borrar"
```