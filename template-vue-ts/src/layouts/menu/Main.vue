<script lang="tsx">
import { defineComponent, reactive, ref } from "vue";
import { RouteRecordRaw } from "vue-router";
import { routes } from "../../routes";
import MenuItem from "./MenuItem.vue";
export default defineComponent({
  name: "Menu",
  props: {
    data: Array,
  },
  setup() {
    return {
      activedItem: ref("menu2-2-1"),
    };
  },
  render() {
    function generateMenu(data: Array<RouteRecordRaw>, key = 0, that) {
      const liList: any = [];
      for (let i = 0; i < data.length; i++) {
        const keyData = `${key}-${i}`;
        if (data[i]?.meta?.type === "menu") {
          liList.push(
            <li key={keyData}>
              <div
                class="menu-title"
                style={{ paddingLeft: `${(key + 1) * 24}px` }}
              >
                {data[i]?.meta?.text}
              </div>
              {generateMenu(
                data[i]?.children as Array<RouteRecordRaw>,
                key + 1,
                that
              )}
            </li>
          );
        } else {
          liList.push(
            <MenuItem
              class={{
                "menu-item--active": that.activedItem === data[i]?.meta?.text,
              }}
              style={{ paddingLeft: `${(key + 1) * 24}px` }}
              key={keyData}
              text={data[i]?.meta?.text as string}
              onClick={() => {
                console.log(that);
                that.activedItem = data[i]?.meta?.text;
              }}
            ></MenuItem>
          );
        }
      }
      return <ul class="menu">{liList}</ul>;
    }
    return generateMenu(routes, 0, this);
  },
});
</script>
<style lang="postcss" scoped>
.menu {
  /* padding-left: 48px; */
  width: 208px;
  & .active-menu,
  & .menu-title:hover {
    color: #1890ff;
  }
  & .menu-item--active {
    color: #1890ff;
    background: #e6f7ff;
  }
}
</style>
