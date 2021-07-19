export default class TodoService {
  constructor({ db }) {
    this.db = db
  }

  async getTodos() {
    return await this.db.query('select * from todos')  
  }
}
