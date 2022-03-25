<template>
  <div class="container">
    <header>Web System</header>
    <main>
      <div class="login-modal">
        <div>username</div>
        <input type="text" />
        <div>password</div>
        <input type="text" />
        <div class="login-btns">
          <span class="sign-in" @click="login">登录</span>
          <span class="sign-up">注册</span>
        </div>
      </div>
    </main>
    <footer>
      <span>Maded by lee </span>
      <a href="https://github.com/codeoD/create-base-project">
        <svg
          height="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-mark-github v-align-middle"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  setup() {
    function login() {
      console.log(1);
    }
    return {
      login,
    };
  },
});
</script>
<style lang="postcss">
.container {
  display: flex;
  height: inherit;
  flex-direction: column;
  & header {
    margin: 16px 0;
    padding: 8px 30px;
    border-bottom: 1px solid pink;
  }
  & main {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    & .login-modal {
      margin-right: 15%;
      border: 1px solid pink;
      border-radius: 4px;
      padding: 12px;
      & .login-btns {
        display: flex;
        margin: 8px 0;
        gap: 4px;
        & .sign-in {
          display: flex;
          width: 80%;
          height: 24px;
          margin: auto;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #1890ff;
          cursor: pointer;
        }
        & .sign-up {
          display: flex;
          width: 20%;
          margin: auto;
          cursor: pointer;
        }
      }
    }
  }
  & footer {
    text-align: center;
  }
}
</style>
