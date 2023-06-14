/**
 * user store
 */

import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter();
  const userInfo: any = reactive({
    name: '',
    uid: '',
  });
  const token = ref('');

  function setUserInfo(info: any) {
    userInfo.name = info.name;
    userInfo.uid = info.uid;
  }

  function logout() {
    userInfo.name = '';
    userInfo.uid = '';
    Cookies.remove('eleAdmin');
  }

  function getCookies() {
    const infoStr: string = Cookies.get('eleAdmin') || '';
    let info: any = {};
    try {
      info = JSON.parse(infoStr);
    } catch (error) {}
    userInfo.name = info.name || '';
    userInfo.uid = info.uid || '';
    return userInfo;
  }

  return {
    userInfo,
    token,
    setUserInfo,
    logout,
    getCookies,
  };
});