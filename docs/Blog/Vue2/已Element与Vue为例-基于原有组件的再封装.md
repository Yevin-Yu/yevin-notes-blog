---
title: 以 Element 与 Vue 为例-基于原有组件的再封装
createTime: 2025/01/11 19:05:13
permalink: /article/zp2a6dtv/
tags:
  - Vue
---
# 以 Element 与 Vue 为例-基于原有组件的再封装


## 前言

在 Vue 项目中，我们经常会使用到 Element UI 组件库，但是有时候我们需要对组件进行一些自定义的封装，以满足项目的需求。本文将介绍如何基于 Element UI 组件进行再封装，以实现更灵活的组件使用。

主要内容：

- 使用 Vue 中的 `$attrs` 和 `$listeners` 来传递原有的属性和方法，并使用 `slot` 根据情况来兼容原有的插槽。

- 在 Vue3 中直接使用 `$attrs` 即可传递原有的属性和方法。


##  封装思路

基于原有组件的再封装，主要是对原有组件进行一些属性的扩展和方法的封装，以满足项目的需求。具体来说，我们可以通过以下步骤来实现：

1. 创建一个新的 Vue 组件，并在其中引入需要封装的 Element UI 组件。
2. 兼容原有组件的属性和方法以及插槽
3. 添加新的属性和方法，以满足项目的需求。


## 封装示例

以下拉选择器为例。新增功能：根据传参 `theme` 来改变下拉框的主题颜色。默认为 `primary`，当 `theme` 为 `dark` 时，下拉框的主题颜色为深色。


创建 `MySelect.vue`组件：

```vue
<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    :class="{'dark-theme': theme === 'dark'}"
  >
    <slot></slot>
  </el-select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    theme: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.dark-theme {
 // ... 这里可以添加深色主题的样式
}
</style>
```
如上，我们使用 `props` 来单独接收新增的 `theme` 属性。对于 `el-select` 组件，我们使用 `$attrs` 和 `$listeners` 来传递原有的属性和方法，并使用 `slot` 来兼容原有的插槽。



在父组件中使用 `MySelect` 组件：

```vue
<template>
    <my-select v-model="selected" theme="dark">
      <el-option label="Option 1" value="1"></el-option>
      <el-option label="Option 2" value="2"></el-option>
      <el-option label="Option 3" value="3"></el-option>
    </my-select>
</template>

<script>
import MySelect from './MySelect.vue'

export default {
  components: {
    MySelect
  },
  data() {
    return {
      selected: '1'
    }
  } 
}
</script>
```

我们可以测试一下，当 `theme` 为 `dark` 时，下拉框的主题颜色会变成深色。

并且，可以在封装的组件上使用原有组件的所有属性和方法，例如：

```vue
<template>
    <my-select v-model="selected" theme="dark" size="mini" @change="handleSelectChange">
      <el-option label="Option 1" value="1"></el-option>
      <el-option label="Option 2" value="2"></el-option>
      <el-option label="Option 3" value="3"></el-option>
    </my-select>
</template>

<script>
import MySelect from './components/MySelect.vue';

export default {
  components: {
    MySelect
  },
  data() {
    return {
      selected: '1',
    };
  },
  methods: {
    handleSelectChange(value) {
      console.log('选择的值:', value);
    },
  }
}
</script>
```
如上，我们使用了原有组件的`size` 和 `@change` 事件，并且可以自定义 `handleSelectChange` 方法来处理选择变化。


## slot 兼容

有些时候，我们需要在封装的组件中使用原有的插槽，例如：

```vue
<template>
  <el-dialog
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: 'MyDialog',
}
</script>
```

在父组件中使用 `MyDialog` 组件：

```vue
<template>
    <my-dialog title="Dialog Title" :visible.sync="dialogVisible">
      <p>This is a dialog</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </my-dialog>
</template>

<script>
import MyDialog from './components/MyDialog.vue';

export default {
  components: {
    MyDialog
  },
  data() {
    return {
      dialogVisible: false
    }
  } 
}
</script>
```
如上，我们使用了 Element UI 的 `el-dialog` 组件，并在其中使用了原有的 `footer` 插槽。但是，并没有展示出我们想要的效果。

需要我们单独处理一下：

```vue
<template>
  <el-dialog
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:title>
        <slot name="title"></slot> 
    </template>
    <slot></slot>
    <template v-slot:footer>
        <slot name="footer"></slot> 
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'MyDialog',
}
</script>
```

如上，我们使用了 `v-slot` 来处理原有的插槽，这样就可以在封装的组件中使用原有的插槽了。