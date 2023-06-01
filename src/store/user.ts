/**
 * user store
 */

import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const userInfo = reactive({
    name: 'admin',
    uid: '',
  });
  const token = ref('');

  function setUserInfo() {
    userInfo.name = 'admin';
    userInfo.uid = '123';
  }

  function logout() {
    userInfo.name = '';
    userInfo.uid = '';
  }

  return {
    userInfo,
    token,
    setUserInfo,
    logout,
  };
});