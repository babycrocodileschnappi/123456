// 增加了错误处理和取消请求的方法，whereas没用到
// fetchPokemonByIds使用一个批量请求来获取多个宝可梦的数据，从而减少网络请求次数

// 加个拦截器统一处理所有异常
import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// 定义Pokemon数据的类型
interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
  base_experience: number;
  order: number;
  abilities: string[];
  moves: string[];
  stats: string[];
}

// 创建 Axios 实例
const api = axios.create({
  baseURL: BASE_URL
});

// 请求拦截器
api.interceptors.request.use(
  (config) => (config),
  (error) => (Promise.reject(error))
);

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse<Pokemon>) => (response),
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.error('Error fetching Pokemon:', error);
    }
    return Promise.reject(error);
  }
);

// 根据ID获取Pokemon
export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  const url = `${BASE_URL}${id}`;
  try {
    const response = await api.get<Pokemon>(url);
    return response.data;
  } catch (error) {
    console.log('fetchPokemonById error');
    throw error;
  }
};

export default api;
