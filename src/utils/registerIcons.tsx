/**
 * 全局注册icon
 * 使用方式: <Icon name="name" size="size" color="color" />
 * @exports Icon {component}
 * @exports registerIcons {function(app)}
 */
import { App, resolveComponent, h } from 'vue';
import * as elIcons from '@element-plus/icons-vue'

interface IconProps {
  name: string;
  color?: string;
  size?: string | number;
};
export function Icon(props: IconProps) {
  const size = (props.size || '').toString().replace('px', '') + 'px';
  return <el-icon size={size} color={props.color}>
    {h(resolveComponent(props.name))}
  </el-icon>;
}

export function registerIcons(app: App) {
  const icons = elIcons as any;
  for (const i in icons) {
    app.component(`${icons[i].name}`, icons[i]);
  }
  app.component('Icon', Icon);
}
