/**
 * aside menu
 * @returns vnode
 */
import { usePermissionStore } from '../../../store/permission';
import { useConfigStore } from '../../../store/config';
import { useRouter, useRoute } from 'vue-router';


export default function AsideMenu() {
  const { permission } = usePermissionStore();
  const { layout } = useConfigStore();
  const router = useRouter();
  const route = useRoute();

  const onSelect = (path: string) => {
    router.push(path);
  };

  return (
    <el-menu
      collapse={layout.menuCollapse}
      onSelect={onSelect}
      default-active={route.path}>
      {
        permission.sidebar.map(item => {
          return <AsideMenuItem route={item}></AsideMenuItem>
        })
      }
    </el-menu>
  );
}




function AsideMenuItem({ route }) {
  const children = route.children || [];
  const itemDom = <>
    <Icon name={ route.icon } />
    <span>{ route.name }</span>
  </>;

  if (children.length) {
    return (
      <el-sub-menu v-slots={{ title: itemDom }} index={route.path}>
        { children.map(item => <AsideMenuItem route={ item } />) }
      </el-sub-menu>
    );
  }
  else {
    return <el-menu-item index={route.path}>{itemDom}</el-menu-item>;
  }

}