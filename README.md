# sequential-map

Resolves to a new array with the result of calling a provided promise-returning function with every element in a provided array sequentially.

## usage

```javascript
const sequence = require(`sequential-map`)

// Will resolve after ~4 seconds
sequence(
  message => new Promise(
    resolve => setTimeout(
      resolve.bind(null, message),
      1000
    )
  ),
  [ `they`, `call`, `me`, `Hiphopopotamus` ]
)
.then(console.log)
.catch(console.error)
// [ `they`, `call`, `me`, `Hiphopopotamus` ]
```

## api

### `sequence(fn[,values][,PromiseImplementation])`

- `fn` map function
- `values` &lt;Array&gt; values to map over
- `PromiseImplementation` override the global Promise object
