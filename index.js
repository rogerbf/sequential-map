module.exports = (fn, queue = [], P = Promise) => {
  return new P((resolve, reject) => {
    const run = (rest, results = []) => {
      P.resolve(rest.slice(0, 1))
      .then(next => next.length > 0 ? P.resolve(next.pop()) : P.reject())
      .then(
        next => fn(next).then(data => run(rest.slice(1), [ ...results, data ])),
        resolve.bind(null, results)
      )
      .catch(reject.bind(null))
    }
    run(queue)
  })
}
