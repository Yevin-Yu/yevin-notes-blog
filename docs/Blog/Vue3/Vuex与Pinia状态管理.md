---
title: Vuex 与 Pinia 状态管理
author: 耶温
createTime: 2024/10/21 16:39:10
permalink: /article/2lrph8nx/
tags:
  - Vue
---
## Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### Vuex 的核心概念

1. **State**：定义应用的状态，可以理解为全局变量。
2. **Getters**：类似于计算属性，用于从 state 中派生出一些状态。
3. **Mutations**：同步地修改 state 的方法。
4. **Actions**：用于提交 mutations，可以包含任意异步操作。
5. **Modules**：将 store 分割成模块，每个模块拥有自己的 state、mutations、actions、getters。

### Vuex 的使用

安装 Vuex：`npm install vuex@3`，Vue2 使用的是 Vuex 3.x 版本，Vue3 使用的是 Vuex 4.x 版本。  

需要注意的是，Vue3 和 Vue3 中 使用 Vuex的方式有所不同。

以下为 Vue2 中使用 Vuex 的步骤：

1. 创建 store：在 `src` 目录下创建 `store` 文件夹，并在其中创建 `index.js` 文件。

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

export default store
```

2. 在 Vue 应用中使用 store：在 `main.js` 中引入 store 并将其注入到 Vue 实例中。

```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

3. 在组件中使用 store：在组件中通过 `this.$store` 访问 store。

```javascript
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    doubleCount() {
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('increment')
    }
  }
}
```

4. 在组件中使用 mapState、mapGetters、mapMutations、mapActions 等辅助函数：这些辅助函数可以简化 store 的使用。

-   mapState：将 store 的 state 映射到组件的计算属性中。
-   mapGetters：将 store 的 getters 映射到组件的计算属性中。
-   mapMutations：将 store 的 mutations 映射到组件的方法中。
-   mapActions：将 store 的 actions 映射到组件的方法中。

```javascript
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync'])
  }
}
```


以下为 Vue3 中使用 Vuex 的步骤：

1. 创建 store：在 `src` 目录下创建 `store` 文件夹，并在其中创建 `index.js` 文件。

```javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

export default store
```

2. 在 Vue 应用中使用 store：在 `main.js` 中引入 store 并将其注入到 Vue 实例中。

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)
app.mount('#app')
```

3. 在组件中使用 store：在组件中通过 `this.$store` 访问 store。

```javascript
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    doubleCount() {
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementAsync() {
      this.$store.dispatch('increment')
    }
  }
}
```
4. 在组件中使用 mapState、mapGetters、mapMutations、mapActions 等辅助函数：这些辅助函数可以简化 store 的使用。



## Pinia

Pinia 是 Vue 的状态管理库，它提供了更简单、更灵活的状态管理方式。Pinia 是 Vue3 的官方推荐的状态管理库，它比 Vuex 更加轻量级，并且提供了更好的 TypeScript 支持。

### Pinia 的核心概念

1. **State**：定义应用的状态，可以理解为全局变量。
2. **Getters**：类似于计算属性，用于从 state 中派生出一些状态。
3. **Actions**：用于提交 mutations，可以包含任意异步操作。

### Pinia 的使用

安装 Pinia：`npm install pinia`。



在 Vue3 中使用 Pinia 的步骤如下：

1. 创建 store：在 `src` 目录下创建 `store` 文件夹，并在其中创建 `index.js` 文件。

```javascript
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})
```

2. 在 Vue 应用中使用 store：在 `main.js` 中引入 store 并将其注入到 Vue 实例中。

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
```

3. 在组件中使用 store：在组件中通过 `useStore` 函数获取 store 实例。

```javascript
import { useStore } from './store'

export default {
  setup() {
    const store = useStore()
    return {
      count: store.count,
      doubleCount: store.doubleCount,
      increment: store.increment
    }   
  }
}

```
### 组合式 API


在 Vue3 中，可以使用组合式 API 来使用 Pinia。组合式 API 是 Vue3 的一个新特性，它提供了一种更灵活的方式来组织和复用代码。

例如，我们封装一个 登陆状态 和 用户信息 的 store：

```ts
// src/stores/useUserStore.js
import { defineStore, mapActions } from "pinia";
import { ref, onMounted } from "vue";
import api from "@/api/api"; // 导入封装的 API

export const useUserStore = defineStore("user", () => {
    const isLogin = ref(false);
    isLogin.value = localStorage.getItem("token") ? true : false;
    
    const userInfo = ref({
        username: "",
        email: "",
        last_login: "",
    });
    onMounted(() => {
        // 加载用户信息
        updateUserInfo();
    });

    const updateIsLogin = (status: boolean) => {
        isLogin.value = status;
    };

    const updateUserInfo = () => {
        // 加载用户信息
        if (isLogin.value) {
            api.get("/user").then((res) => {
                if (res.code == 200) userInfo.value = res.data;
                else if (res.code == 401) {
                    localStorage.removeItem("token");
                    isLogin.value = false;
                }
            });
        }
    };

    return {
        isLogin,
        userInfo,
        updateIsLogin,
        updateUserInfo,
    };
});

```
如上所示，我们使用 `defineStore` 函数来定义一个 store，并使用 `ref` 函数来定义响应式状态。我们还可以使用 `onMounted` 函数来在组件挂载时执行一些操作。通过 return 返回状态和方法，我们可以在组件中使用这些状态和方法。

我们可以在组件中使用这个 store：

```vue
<script setup lang="ts">
// 引入 store
import { useUserStore } from '@/stores/useAuthStore'
let { updateIsLogin, updateUserInfo } = useUserStore()
let { isLogin, userInfo } = storeToRefs(useUserStore());

// 登陆 登出更新数据
const login = () => {
    updateIsLogin(true)
    updateUserInfo()
}
const logout = () => {
    updateIsLogin(false)
    updateUserInfo()
}
</script>
<template>
    <div>
        <button @click="login">登陆</button>
        <button @click="logout">登出</button>
        <div v-if="isLogin">
            <p>用户名：{{ userInfo.username }}</p>
            <p>邮箱：{{ userInfo.email }}</p>
            <p>最后登陆时间：{{ userInfo.last_login }}</p>
        </div>
    </div>
</template>
```

需要注意的是，如果我们通过解构赋值的方式获取 store 的状态，那么这些状态将不是响应式的。因此，我们需要使用 `storeToRefs` 函数来将 store 的状态转换为响应式状态。

## 总结


如果我们使用的是Vue2，或者 Vue3 的 Options API，那么我仍然推荐使用 Vuex。但是如果我们使用的是 Vue3 的组合式 API，那么强烈推荐使用 Pinia。它提供了更简单、更灵活的方式来管理应用的状态。