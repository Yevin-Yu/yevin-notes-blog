---
title: Vue 组件通信 - 深入了解 Vue2 与 Vue3 的组件交互方式
author: 耶温
createTime: 2024/10/21 16:36:21
permalink: /article/rika2469/
tags:
  - Vue
---

Vue2 和 Vue3 的组件通信方式有很多种，下面是一些常用的方式：

## Vue2 组件通信


### props

父组件通过 `props` 向子组件传递数据，子组件通过 `props` 接收数据。

```vue
<!-- 父组件给子组件传值 -->
<ChildComponent :message="message" />
```

```js
// 子组件接受使用  ChildComponent.vue
export default {
  props: {
    message: {
      type: String, //  表示该属性的类型是字符串
      required: true, // 表示该属性是必需的
    }
  }
  // 或者 
  // props: ['message']
};
```
特别注意：由于在 JavaScript 中，对象和数组是通过引用传递的，所以如果父组件传递的是一个对象或数组，子组件对它的修改会影响到父组件的状态。我们可以灵活运用这个特性，实现一些高级的组件通信方式。


但是如果开启了 ESlint，会导致报错。不能再灵活使用该特性。
```vue
<!-- 父组件 -->
<!--data中定义： form:{name:"",age:""} -->
<ChildComponent :form="form" />

<!-- 子组件 -->
<template>
  <div>
    <input v-model="form.name" />
    <input v-model="form.age" />
  </div>
</template>

<script>
export default {
  props:['form'],
};
</script>
```
如上，我们可以在子组件中修改父组件传递的对象，从而实现父子组件之间的双向绑定。而不在单独需要使用 `this.$emit` 来触发事件实现子组件向父组件传递数据。

但是如果我们要避免子组件直接修改父组件传递的对象，从而避免影响父组件的状态。可以这样写：
```vue 
<!-- 父组件 -->
<ChildComponent :form="formCopy" />
<script>
export default {
  data(){
    return {
        form:{
            name:"",
            age:""
        }
    }
  },
  computed:{
    formCopy(){
        // 或者 return {...this.form}
        return JSON.parse(JSON.stringify(this.form))
    }
  }
};
</script>
```
我们通过 `computed` 计算属性，将父组件传递的对象深拷贝一份，然后传递给子组件。这样子组件对 `formCopy` 的修改就不会影响到父组件的 `form` 对象了。

### $emit

子组件通过 `$emit` 向父组件发送事件，父组件通过监听事件来接收数据。

```vue
<!--  父组件 -->
<ChildComponent @message-sent="handleMessage" />

<script>
export default {
  methods: {
    handleMessage(data) {
        console.log(data) // 接收到的数据
    }
  }
};
</script>
```
```vue
<!-- 子组件 -->
<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('message-sent', 'Hello from child component');
    }
  }
};
</script>
```

### provide 和 inject

父组件通过 `provide` 向子组件提供数据，所有子孙组件通过 `inject` 接收数据。

```vue
<!-- 父组件 -->
<template>
  <ChildComponent />
</template>

<script>
export default {
  // 传递数据
  provide() {
    return {
      message: this.message
    }
  },
  data() {
    return {
      message: 'Hello from parent component'
    }
  }
};
</script>
```


```vue
<!-- 子组件  ChildComponent-->
<template> 
    <!-- 可以直接使用 -->
    {{ message }} 
    <GrandChildComponent />
</template>

<script>
export default {
  // 接收数据
  inject: ['message'],
  mounted() {
    console.log(this.message); // 'Hello from parent component'
  }
};
</script>
```
```vue
<!-- 孙子组件  GrandChildComponent-->
<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  inject: ['message'],
  mounted() {
    console.log(this.message); // 'Hello from parent component'
  }
};
</script>
```
如上，父组件通过 `provide` 向子组件提供数据，子孙组件通过 `inject` 接收数据。这样每一个子孙组件都可以直接使用父组件提供的数据了。

### Event Bus

Event Bus 是一种在 Vue 2 中常用的组件通信方式，它通过创建一个空的 Vue 实例作为事件总线，来实现组件之间的通信。

```vue
<!-- 其中一个组件 -->
<template>
  <div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>
<script>
import { EventBus } from './eventBus.js'; // 引入 eventBus.js 文件
export default {
  methods: {
    sendMessage() {
      EventBus.$emit('message-sent', 'Hello from EventBus');
    }
  }
}
</script>
```
```vue
<!-- 另一个组件 -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import { EventBus } from './eventBus.js'; // 引入 eventBus.js 文件
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    EventBus.$on('message-sent', (data) => {
      this.message = data;
    });
  }
}
</script>
```
```js
// eventBus.js 文件
import Vue from 'vue';
export const EventBus = new Vue();
```
另外，我们可以直接把 Event Bus 加载到 Vue 实例中，这样就可以在任何组件中使用 `this.$bus` 来访问 Event Bus 了。

```js
// main.js 文件
import Vue from 'vue';
import App from './App.vue';
import { EventBus } from './eventBus.js'; // 引入 eventBus.js 文件

Vue.prototype.$bus = EventBus; // 将 Event Bus 加载到 Vue 实例中

new Vue({
  render: h => h(App),
}).$mount('#app');
```
使用的时候，我们就可以在任何组件中使用 `this.$bus` 来访问 Event Bus 了。
```js
//  发送
this.$bus.$emit('message-sent', 'Hello from EventBus');
// 接收
this.$bus.$on('message-sent', (data) => {
  this.message = data;
});
```
### Vuex

Vuex 是 Vue.js 的状态管理模式，它通过集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 可以用于组件之间的通信，但是它更适合用于大型应用的状态管理。


需注意，如果当前项目为Vue2，请不要下载最新版本Vuex。可以使用3.0版本。
```shell
npm install vuex@3 --save
```

```js

// store.js 文件
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'Hello from Vuex'
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('updateMessage', newMessage);
    }
  }
});
```
```vue
<!-- 父组件 -->
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['message'])
  },
  methods: {
    ...mapActions(['updateMessage'])
  }
}
</script>
```
```vue
<!-- 子组件 -->
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['message'])
  } 
}
</script>
```


## Vue3 组件通信

