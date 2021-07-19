# Custom IoC Container

Small IoC container

# Installation

Install with `npm`

```
npm install custom-ioc-container
```

NOTE: yet to be published in `npm`

# Usage

Create a new container using:

```
import { createContainer } from 'custom-ioc-container'

const container = new createContainer()
```

Register your components. At this moment this library only supports `object` and classes.

```
container.registerObject('config', {
  flag1: 'example'
})

container.registerClass('todoService', TodoService)
```

And finally access to your instances through the store

```
if (container.store.config.flag1) {
  // do something
}

```

# Testing

To run the tests in development execute

```
npm run test.w
```