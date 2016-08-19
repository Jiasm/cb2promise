'use strict'

module.exports = (source, target, methods) => {
  for (let key of methods) {
    target[key] = build(source, key)
  }

  return target
}

function build (ctx, method) {
  if (typeof ctx[method] !== 'function') throw new Error('method must be a function')
  return (...arg) => new Promise((resolve, reject) => {
    if (arg.length) {
      ctx[method]['call'](ctx, ...arg, cb)
    } else {
      ctx[method]['call'](ctx, cb)
    }

    function cb (err, ...data) {
      err ? reject(err) : resolve(...data)
    }
  })
}
