import Db from './Db'

export default class TodoService {
  db: Db

  constructor({ db }: { db: Db }) {
    this.db = db
  }

  async getTodos() {
    return await this.db.query('select * from todos')  
  }
}
