import { api_login } from "@/api/login"
import useStoreUser from "@/store/user"
import { useRouter } from "vue-router";

export default () => {

  const storeUser = useStoreUser();
  const router = useRouter();

  async function hundleLogin() {
    const [err, res] = await api_login({
      username: "admin",
      password: "123456",
    })
    if (err) return;
    storeUser.signIn(res.data.token);
    router.push('/');
  }

  return {
    hundleLogin,
  }
}