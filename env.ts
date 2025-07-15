declare const process: any;

// 生产环境
let env = {

  NODE_ENV: process.env.NODE_ENV as 'development' | 'production',

  BASE_ROUTE_URL: process.env.VUE_APP_PUBLICPATH,

  BASE_URL: '/web-template'

};

// 开发环境
if (env.NODE_ENV === 'development') {
  Object.assign(env, {
    
  })
}

export default Object.freeze(env);
