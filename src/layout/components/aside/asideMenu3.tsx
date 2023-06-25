/**
 * aside menu
 * @returns vnode
 */
import { defineComponent, toRefs } from 'vue';
import { usePermissionStore } from '@/store/permission';
import { useConfigStore } from '@/store/config';
import { useRouter, useRoute } from 'vue-router';
import { Icon } from '@/utils/registerIcons'; 

const AsideMenuItem = defineComponent({
  name: 'AsideMenuItem',
  props: {
    route: {}
  },
  setup(props: { route: any}) {
    const { route } = toRefs(props);
    console.log('route', props, route);
    return {
      route,
    };
  },
  render() {
    if (!this.route) return null;
    const children = this.route?.children || [];
    const itemDom = <>
      <Icon name={ this.route.icon } />
      <span>{ this.route.name }</span>
    </>;

    if (children.length) {
      return (
        <el-sub-menu v-slots={{ title: itemDom }} index={this.route.path}>
          { children.map((item: any) => <AsideMenuItem route={ item } />) }
        </el-sub-menu>
      );
    }
    else {
      return <el-menu-item index={this.route.path}>{itemDom}</el-menu-item>;
    }
  },
});

const AsideMenu = defineComponent({
  name: 'AsideMenu',
  components: {
    AsideMenuItem,
  },
  setup() {
    const { permission } = usePermissionStore();
    const { layout } = useConfigStore();
    const router = useRouter();
    const route = useRoute();
    const onSelect = (path: string) => {
      router.push(path);
    };
    return {
      permission,
      layout,
      onSelect,
      route,
      router,
    };
  },
  render() {
    return <el-menu
      collapse={this.layout.menuCollapse}
      onSelect={this.onSelect}
      default-active={this.route.path}>
      {
        this.permission.sidebar.map(item => {
          return <AsideMenuItem route={item}></AsideMenuItem>
        })
      }
    </el-menu>
  },
});
export default AsideMenu;