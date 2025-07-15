import { asyncto } from "@/utils/async";
import { stringifyQuery } from "vue-router";

type RequestOption = {
  baseURL?: string
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  params?: Record<string, any>
  data?: Record<string, any>
}
function fetchRequest(option: RequestOption) {
  return new Promise((resolve, reject) => {
    const { baseURL, url, params, data, ...args } = option;
    const query = params ? '?' + stringifyQuery(params): '';
    const newUrl = baseURL ? baseURL : '/mdp' + url + query;
    fetch(newUrl, {
      body: JSON.stringify(data),
      ...args,
      method: (option.method || 'get').toLocaleUpperCase(),
    }).then(async res => {
      const json = await res.json();
      if (res.ok) {
        if (json.code === 200) {
          return resolve(json);
        }
        console.error(json.message);
        reject(json);
      } else {
        reject(json);
      }
    }).catch(err => {
      reject(err);
    })
  })
}

export default function(option) {
  return asyncto(fetchRequest(option));
}