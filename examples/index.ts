import { createContainer } from '../index'
import Db from './Db'
import Todos from './Todos'

// Create a container
const container = createContainer()

// Register all dependencies
container.registerObject('dbConfig', {
  connString: 'Server=myServerAddress;Database=myDataBase;Uid=myUsername;Pwd=myPassword;'
})
container.registerClass('db', Db)
container.registerClass('todos', Todos)

// Access to the services
container.store.todos.getTodos()
  .then(todos => {
    console.log(todos)
  })
