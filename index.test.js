const sequence = require(`./index`)

test(`sequence`, () => {
  const fn = jest.fn(message => Promise.resolve(message))
  sequence(fn, [ `beam`, `me`, `up` ])
  .then(results => {
    expect(results).toEqual([ `beam`, `me`, `up` ])
    expect(fn).toHaveBeenCalledTimes(3)
  })
  .catch(error => expect(error).toBeUndefined())
})

test(`calling sequence without a queue`, () => {
  const fn = jest.fn()
  sequence(fn)
  .then(result => {
    expect(result).toEqual([])
    expect(fn).toHaveBeenCalledTimes(0)
  })
  .catch(error => expect(error).toBeUndefined())
})
