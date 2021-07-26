

/** Creates an IoC container */
export function createContainer() {
  return new Container()
}

type StoreObject = Record<any, any>

type StoreClass = {
  instance: any
}

class Container {
  store: Record<string, StoreObject | StoreClass>

  constructor() {
    this.store = {}
  }

  /**
   * Registers an Object in the container.
   * @constructor
   * @param {string} name - Unique key used to register into the container
   * @param {Object} obj - Object to be stored
   */
  registerObject(name: string, obj: StoreObject) {
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
   * @param {Object} Class - Class that will be instantiated as a Singleton.
   */
  registerClass(name: string, Cls: typeof Type) {
    if (this.store[name]) {
      throw new Error(`'${name}' is already registered`)
    }
    
    const clsHandler: ProxyHandler<any> = {
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

    this.store[name] = new Proxy<{ instance?: T }>({}, clsHandler)
  }
}


function getX() {
  return Mek
}

class Mek {
  constructor() {
    //
  }
}