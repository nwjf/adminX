<script lang="ts">
import { defineComponent, ref } from 'vue';

const _icons = [
  'el-icon-Plus',
  'el-icon-Minus',
  'el-icon-CirclePlus',
  'el-icon-Search',
  'el-icon-Female',
  'el-icon-Male',
  'el-icon-Aim',
  'el-icon-House',
  'el-icon-FullScreen',
  'el-icon-Loading',
  'el-icon-Link',
  'el-icon-Service',
  'el-icon-Pointer',
  'el-icon-Star',
  'el-icon-Notification',
  'el-icon-Connection',
  'el-icon-ChatDotRound',
  'el-icon-Setting',
  'el-icon-Clock',
  'el-icon-Position',
  'el-icon-Discount',
  'el-icon-Odometer',
  'el-icon-ChatSquare',
  'el-icon-ChatRound',
  'el-icon-ChatLineRound',
  'el-icon-ChatLineSquare',
  'el-icon-ChatDotSquare',
  'el-icon-View',
  'el-icon-Hide',
  'el-icon-Unlock',
  'el-icon-Lock',
  'el-icon-RefreshRight',
  'el-icon-RefreshLeft',
  'el-icon-Refresh',
  'el-icon-Bell',
  'el-icon-MuteNotification',
  'el-icon-User',
  'el-icon-Check',
  'el-icon-CircleCheck',
  'el-icon-Warning',
  'el-icon-CircleClose',
  'el-icon-Close',
  'el-icon-PieChart',
  'el-icon-More',
  'el-icon-Compass',
  'el-icon-Filter',
  'el-icon-Switch',
  'el-icon-Select',
  'el-icon-SemiSelect',
  'el-icon-CloseBold',
  'el-icon-EditPen',
  'el-icon-Edit',
  'el-icon-Message',
  'el-icon-MessageBox',
  'el-icon-TurnOff',
  'el-icon-Finished',
  'el-icon-Delete',
  'el-icon-Crop',
  'el-icon-SwitchButton',
  'el-icon-Operation',
  'el-icon-Open',
  'el-icon-Remove',
  'el-icon-ZoomOut',
  'el-icon-ZoomIn',
  'el-icon-InfoFilled',
  'el-icon-CircleCheckFilled',
  'el-icon-SuccessFilled',
  'el-icon-WarningFilled',
  'el-icon-CircleCloseFilled',
  'el-icon-QuestionFilled',
  'el-icon-WarnTriangleFilled',
  'el-icon-UserFilled',
  'el-icon-MoreFilled',
  'el-icon-Tools',
  'el-icon-HomeFilled',
  'el-icon-Menu',
  'el-icon-UploadFilled',
  'el-icon-Avatar',
  'el-icon-HelpFilled',
  'el-icon-Share',
  'el-icon-StarFilled',
  'el-icon-Comment',
  'el-icon-Histogram',
  'el-icon-Grid',
  'el-icon-Promotion',
  'el-icon-DeleteFilled',
  'el-icon-RemoveFilled',
  'el-icon-CirclePlusFilled',
];

export default defineComponent({
  name: 'IconWarp',
  setup() {
    const icons = ref(_icons);
    return {
      icons,
    };
  },
})
</script>

<template>
  <div class="icon-warp">
    <h1>icon 图标</h1>

    <h2>使用图标</h2>
    <ul>
      <li>项目集成了 @element-plus/icons-vue, 支持element-plus写法</li>
      <li v-text="'项目再element-pluse基础上修改, 写法为<icon name=\'el-icon-[element icon]\' />'">
      </li>
      <li>
        更多参考 <a href="https://element-plus.gitee.io/zh-CN/component/icon.html">element plus icon document</a>
      </li>
    </ul>

    <br>

    <div class="icon-list">
      <div class="icon-item" v-for="(item, index) in icons" :key="index">
        <br>
        <icon :name="item" size="20"/>
        <br>
        <span style="color: #999;">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-warp {
  max-width: 1000px;
  margin: auto;
  h1, h2 {
    padding: 20px 0;
  }
  .icon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .icon-item {
    width: 140px;
    height: 90px;
    border: 1px solid #ccc;
    text-align: center;
    margin-right: -1px;
    margin-bottom: -1px;
  }
}
</style>
