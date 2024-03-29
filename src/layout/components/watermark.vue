<script lang="ts" setup>
// 水印
import { defineProps, withDefaults, onMounted, ref, watchEffect } from 'vue';
import { useConfigStore } from '../../store/config';

const configStore = useConfigStore();

interface Props {
  textAlign: CanvasTextAlign;
  textBaseline: CanvasTextBaseline;
  font: string;
  fillStyle: string;
  rotate: number;
  zIndex: number;
  width: string;
  height: string;
  text: string;
};
const props = withDefaults(
  defineProps<Props>(), 
  {
    text: '请勿外传',
    textAlign: 'center',
    textBaseline: 'middle',
    font: '14px -apple-system, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif',
    fillStyle: '#EDEEF0',
    rotate: -20,
    zIndex: 1000,
    width: '200px',
    height: '100px',
  }
);

const watermarkPic = ref<string>('');

const getWatermarkPic = (text: string, props: Props) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.setAttribute('width', props.width);
  canvas.setAttribute('height', props.height);
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.textAlign = props.textAlign;
  ctx.textBaseline = props.textBaseline;
  ctx.font = props.font;
  ctx.fillStyle = props.fillStyle;
  ctx.rotate((Math.PI / 180) * props.rotate);
  ctx.translate(-parseFloat(props.width) / 4, parseFloat(props.height) / 4);
  ctx.fillText(text || '请勿外传', parseFloat(props.width) / 2, parseFloat(props.height) / 2);
  const base64Url: string = canvas.toDataURL();
  watermarkPic.value = base64Url;
  console.log('base64Url', base64Url);
  return base64Url;
}

watchEffect(() => {
  const fillStyle = configStore.theme.mode === 'white' ? '#EDEEF0' : '#141414';
  getWatermarkPic('adminx', { ...props, fillStyle });
});

</script>

<template>
  <div class="watermark-warp" :style="{backgroundImage: `url(${watermarkPic})`}"></div>
</template>

<style lang="scss" scoped>
.watermark-warp {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
