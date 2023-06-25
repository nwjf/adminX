/**
 * 全局注册icon
 * 使用方式: <Icon name="name" size="size" color="color" />
 * @exports Icon {component}
 * @exports registerIcons {function(app)}
 */
import { App, resolveComponent, h, defineComponent, Component, toRefs } from 'vue';
import * as elIcons from '@element-plus/icons-vue'

interface IconProps {
  name: string;
  color?: string;
  size?: string | number;
};
// export function Icon(props: IconProps): Component {
//   const size = (props.size || '').toString().replace('px', '') + 'px';
//   return <el-icon size={size} color={props.color}>
//     {h(resolveComponent(props.name))}
//   </el-icon>;
// }

export const Icon = defineComponent({
  name: 'Icon',
  props: ['size', 'name', 'color'],
  setup(props: IconProps) {
    const size = ((props.size || '').toString() || '14').replace('px', '') + 'px';
    const { color, name} = toRefs(props);
    return { size, color, name };
  },
  render() {
    return <el-icon size={this.size} color={this.color}>
      {h(resolveComponent(this.name))}
    </el-icon>;
  },
});

export function registerIcons(app: App) {
  const icons = elIcons as any;
  app.component('Icon', Icon);
  for (const i in icons) {
    // 大写
    app.component(`el-icon-${icons[i].name}`, icons[i]);
    // 小写
    app.component(`el-icon-${icons[i].name.toLowerCase()}`, icons[i]);
  }
}
