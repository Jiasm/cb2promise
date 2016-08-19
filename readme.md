## 用来将普通的回调函数转换为Promise

* 我们约定最后一个参数为回调函数

```
npm i cb2pro
```

```
var fs = require('fs')
var cb2promise = require('cb2pro')

var newFs = cb2promise(fs, {}, ['readFile', 'writeFile'])

newFs.writeFile('./message.md', 'hello jarvis').then(err => {
  err ? console.error(err) : console.log('success')
})

newFs.readFile('./message.md').then((data) => {
  console.log(data.toString())
})
```
