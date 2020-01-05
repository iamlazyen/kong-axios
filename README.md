# kong-axios
基于promise的HTTP库.

## Getting Started

* 执行get请求

```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Prerequisites

node > 8.0

### Installing

`yarn isntall`

## Running the tests

`yarn test`

## Built With

[iamlazyen](https://github.com/iamlazyen)



## TODO

- [ ] 掌握TypeScript
- [ ] 编写md文件
- [ ] travel ci流程
- [ ] git 相关操作
- [ ] Makefile操作
- [ ] linux常用命令及sh脚本
- [ ] webstrom快捷键及系统快捷键

## License

[MIT](LICENSE)

# kong-axios
基于promise的HTTP库.

## Getting Started

* 执行get请求

```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Prerequisites

node > 8.0

### Installing

`yarn isntall`

## Running the tests

`yarn test`

## Built With

[iamlazyen](https://github.com/iamlazyen)



## TODO

- [ ] 掌握TypeScript
- [ ] 编写md文件
- [ ] travel ci流程
- [ ] git 相关操作
- [ ] Makefile操作
- [ ] linux常用命令及sh脚本
- [ ] webstrom快捷键及系统快捷键

## License

[MIT](LICENSE)

