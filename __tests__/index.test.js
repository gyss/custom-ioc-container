import { createContainer } from "..";

describe('container', () => {

  describe('registerObject()', () => {
    it('should register an object', () => {
      const container = createContainer()
      const obj = {
        test: 1,
        example: 2
      }
      container.registerObject('example', obj)
  
      expect(container.store.example).toEqual(obj)
    })

    it('should throw an exception when a key is registered twice', () => {
      expect.assertions(1);
  
      const container = createContainer()
      container.registerObject('example', {})
  
      try {
        container.registerObject('example', {})
      } catch(err) {
        expect(err.message).toBe(`'example' is already registered`)
      }
    })
  })


  describe('registerClass()', () => {
    class Service {
      constructor({ config }) {
        this.count = 0
        this.max = config?.max ?? 50
      }

      f1() {
        return 'f1'
      }
    }

    it('should access correctly to a registered service prop', () => {
      const container = createContainer()
      container.registerClass('service', Service)
  
      expect(container.store.service.count).toBe(0)
      container.store.service.count = 1
      expect(container.store.service.count).toBe(1)
    })

    it('should access correctly to a registered service function', () => {
      const container = createContainer()
      container.registerClass('service', Service)
  
      expect(container.store.service.f1()).toBe('f1')
    })

    it('should inject a configuration object into Service even if the config registered after the service', () => {
      const container = createContainer()
      container.registerClass('service', Service)
      container.registerObject('config', { max: 10 })
  
      expect(container.store.service.max).toBe(10)
    })

  })
})
