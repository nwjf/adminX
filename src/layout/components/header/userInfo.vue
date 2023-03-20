<script lang="ts">
// header user info
</script>

<template>
  <el-popover
    placement="top-start"
    :width="200"
    trigger="hover"
  >
    <template #reference>
      <div class="userinfo-pop-h">
        <el-avatar :size="25" fit="fill">
          <img src="adminInfo.avatar" alt="" />
        </el-avatar>
        <div class="userinfo-name">nickname</div>
      </div>
    </template>

    <div class="userinfo-pop-b">
      <div class="userinfo-base">
        <el-avatar :size="70" fit="fill">
          <img src="adminInfo.avatar" alt="" />
        </el-avatar>
        <div class="userinfo-other">
          <div class="userinfo-name">user name</div>
          <div class="userinfo-lasttime">2022-12-23 23:24</div>
        </div>
      </div>
      <div class="userinfo-footer">
        <el-button @click="onAdminInfo" type="primary" plain>个人资料</el-button>
        <el-button @click="onLogout" type="danger" plain>注销</el-button>
      </div>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped>
.userinfo-pop-h {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  .userinfo-name {
    padding-left: 6px;
    white-space: nowrap;
  }
}
.userinfo-pop-b {
  .userinfo-base {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 10px;
  }
  .userinfo-other {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    .userinfo-name {
      font-size: 18px;
    }
    .userinfo-lasttime {
      font-size: 14px;
    }
  }
}
</style>