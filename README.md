# sequential-map

Creates a new array with the results of calling a provided promise yielding projection function on each element in a array.

## usage

```javascript
import sequence from 'sequential-map'

// The following will resolve after 4 seconds
sequence(
  m => new Promise(resolve => setTimeout(resolve.bind(null, m), 1000)),
  [ `they`, `call`, `me`, `Hiphopopotamus` ]
)
.then(console.log.bind(null))
.catch(console.log.bind(null, `there was an error`))
// [ `they`, `call`, `me`, `Hiphopopotamus` ]
```

## api

### `sequence(fn, [values], [Promise])`

- `fn` projection function
- `values` values to run through the projection function
- `Promise` overide the global Promise object
