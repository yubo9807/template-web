import { defineStore } from "pinia";
import { AnyObj } from "@/utils/type";
import { delToken, getToken, setToken } from "@/utils/auth";
import { api_getUserInfo } from "@/api/login";
import env from "~/env";

export const DEBUGING = false;  // 在后端接口不通的情况下，开启它跳转相应的路有进行开发

// 角色分类
export enum ROLE_CONFIG {
  admin = 1,
  user  = 2,
}

type State = {
  login: 0 |  // 未登录
         1 |  // 已登陆
         2    // 已退出
  role: string | number  // 角色
  token: string
  info: AnyObj  // 用户信息
}

export default defineStore('user', {
  state: (): State => ({
    login: 0,
    role: null,
    token: getToken() || '',
    info: {},
  }),

  actions: {

    /**
     * 设置用户信息
     * @note 有些后端喜欢把信息返回在登录接口内
     */
    setInfo(info: AnyObj) {
      this.info = info;
    },

    /**
     * 登录
     * @param token 
     */
    signIn(token: string) {
      this.token = token;
      setToken(token);
    },

    /**
     * 获取用户信息
     */
    async getUserInfo() {
      if (DEBUGING && env.NODE_ENV === 'development') {
        this.login = 1;
        this.role = ROLE_CONFIG.admin;
        return true;
      }

      if (!getToken()) return false;

      const [err, res] = await api_getUserInfo();
      if (err) return false;

      this.info = res.data;
      this.role = res.data.role;
      this.login = 1;
      return true;
    },

    /**
     * 退出登录
     */
    signOut() {
      this.info = {};
      this.token = '';
      delToken();
      this.login = 2;
    },
  }
})
