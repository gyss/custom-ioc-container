export default class Db {
  constructor({ dbConfig }) {
    console.log('DB connecting to = ', dbConfig.connString)
  }

  query(sql) {
    console.log('DB running query = ', sql)
    return Promise.resolve({
      'todo0': { title: 'Todo 0', status: 'pending'},
      'todo1': { title: 'Todo 1', status: 'done'}
    })
  }
}
