<script lang="ts" setup>
// 水印
import { defineProps, withDefaults, onMounted } from 'vue';

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

const getWatermarkPic = (text: string) => {
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
  return base64Url;
}

const setWatermark = () => {
  const url = getWatermarkPic('github.com/nwjf技术支持');
  const styleStr = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: ${props.zIndex};
    pointer-events: none;
    background-repeat: repeat;
    background-image: url('${url}')`;
  const watermarkDiv = document.createElement('div');
  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('watermark-warp');
  document.body.appendChild(watermarkDiv);

  const MutationObserver = window.MutationObserver;
  if (MutationObserver) {
    const wMParent = new MutationObserver(() => {
      const dom = document.querySelector('.watermark-warp');
      if (!dom || (dom && dom.getAttribute('style') !== styleStr)) {
        wMParent.disconnect();
        setWatermark();
      }
    });
    wMParent.observe(document.body, {
      childList: true,
    });
  }
};


onMounted(() => {
  setWatermark();
});

</script>

<template></template>