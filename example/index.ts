import { axios } from '../src/index'

if ((module as any).hot) {
  (module as any).hot.accept();
}

axios({
  method: 'get',
  url: '/base/get?foo=bar',
  params: {
    bar: 'baz'
  }
})
