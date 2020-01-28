import { AxiosInstance } from '..'
import Axios from '../helpers/axios'
import { extend } from '../helpers/utils'

function createInstance(): AxiosInstance {
  const axios = new Axios()
  const instance = Axios.prototype.request.bind(axios)
  return extend(instance, axios)
}

const axios = createInstance()

export default axios
