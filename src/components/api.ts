//增加了错误处理和取消请求的方法，whereas没用到
//fetchPokemonByIds使用一个批量请求来获取多个宝可梦的数据，从而减少网络请求次数
import axios , { AxiosResponse }from 'axios';

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
  
}

// 用于取消请求的控制器
const controller = new AbortController();

// 用于取消请求的方法
export const cancelRequest = () => {
  controller.abort();
};

// 请求函数的通用逻辑
const fetchPokemon = async (url: string): Promise<Pokemon> => {
  try {
    const response: AxiosResponse<Pokemon> = await axios.get(url, {
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.log('Error fetching Pokemon:', error);
    }
    throw error;
  }
};

// 根据ID获取Pokemon
export const fetchPokemonById = async (id: number): Promise<Pokemon> => {
  const url = `${BASE_URL}${id}`;
  return fetchPokemon(url);
};

// 根据IDs获取多个Pokemon
export const fetchPokemonByIds = async (ids: number[]): Promise<Pokemon[]> => {
  const requests = ids.map((id) => {
    const url = `${BASE_URL}${id}`;
    return fetchPokemon(url);
  });

  try {
    const pokemonDataArray = await Promise.all(requests);
    return pokemonDataArray;
  } catch (error) {
    throw error;
  }
};