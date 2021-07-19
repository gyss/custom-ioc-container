

/** Creates an IoC container */
export function createContainer() {
  return new Container()
}

class Container {
  constructor() {
    this.store = {}
  }

  /**
   * Registers an Object in the container.
   * @constructor
   * @param {string} name - Unique key used to register into the container
   * @param {Object} obj - Object to be stored
   */
  registerObject(name, obj) {
    if (this.store[name]) {
      throw new Error(`'${name}' is already registered`)
    }
    this.store[name] = obj 
  }

  /**
   * Registers a Class in the container. This will create a singleton that will
   * be returned everytime this key is accessed
   * @constructor
   * @param {string} name - Unique key used to register into the container
   * @param {Object} Class - The author of the book.
   */
  registerClass(name, Cls) {
    if (this.store[name]) {
      throw new Error(`'${name}' is already registered`)
    }
    
    const clsHandler = {
      get: (target, prop) => {
        if (!target.instance) {
          target.instance = new Cls(this.store)
        }
        return target.instance[prop]
      },
      set: (target, prop, receiver) => {
        if (!target.instance) {
          target.instance = new Cls(this.store)
        }

        target.instance[prop] = receiver
        return true
      },
    };

    this.store[name] = new Proxy({}, clsHandler)
  }
}