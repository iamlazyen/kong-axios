import { axios } from '../src/index'

if ((module as any).hot) {
  (module as any).hot.accept();
}

axios({
  method: 'get',
  url: '/test',
  headers: {
    'content-type': 'application/json;charset=utf-8'
  },
  params: {
    bar: 'baz'
  }
})
