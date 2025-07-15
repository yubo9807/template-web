import { defineStore } from "pinia";

const THEME_KEY = '__theme__';
type State = {
  theme: 'light' | 'dark' | 'OS'
}
export default defineStore("variable", {
  state: (): State => ({
    theme: localStorage.getItem(THEME_KEY) as State['theme'] || 'OS',
  }),

  actions: {
    /**
     * 设置主题
     * @param theme 
     */
    setTheme(theme: State['theme']) {
      this.theme = theme;
      localStorage.setItem(THEME_KEY, theme);
    },

    /**
     * 初始化主题
     */
    init() {
      let theme = this.theme;
      const prefers = matchMedia('(prefers-color-scheme: dark)');
      if (this.theme !== 'OS') {
        theme = prefers.matches ? 'dark' : 'light';
      }
      this.setTheme(theme);

      function followOS() {
        const cacheTheme = localStorage.getItem(THEME_KEY);
        if (cacheTheme !== 'OS') return;
        document.documentElement.dataset.theme = prefers.matches ? 'dark' : 'light';
      }

      prefers.addEventListener('change', followOS);
    }
  }
})