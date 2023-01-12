import axios from "axios";

export const baseURL ='https://frontend-test-assignment-api.abz.agency/api/v1'


export const moyskladHttp = axios.create({
  baseURL,
  headers:{
    'Content-Type':'application/json',
  },
  validateStatus: () => true
})

const getToken = async () => {
  const {data} = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
  return data.token;
}


moyskladHttp.interceptors.request.use(async (config:any) => {
  const token = await getToken()
  return {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${token}` }
  }
})