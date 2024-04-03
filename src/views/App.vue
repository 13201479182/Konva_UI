<script setup>
import { ref, createApp, h, reactive } from 'vue';
import { ElButton, ElTable, ElTableColumn } from 'element-plus';

// 1. render函数搭配原生dom使用
// const val = ref(`
//   function defineComponent({ h }) {
//     function _loop(len, tag, attr, children=[]) {
//       return Array.from({ length: len }).map(() => {
//         if (Array.isArray(attr) || typeof attr !== 'object') {
//           return h(tag, attr)
//         }else {
//           return h(tag, attr, children)
//         }
//       })
//     }

//     return {
//       render() {
//         return h('table',
//           [
//             h('tr', [
//               _loop(10, 'th', {
//                 style: {
//                   border: '1px solid red'
//                 },
//               }, '表头'),
//             ]),
//             h('tr', [
//               _loop(10, 'th', '表体'),
//             ]),
//             h('tr', [
//               _loop(10, 'th', '表体'),
//             ]),
//             h('tr', [
//               _loop(10, 'th', '表体'),
//             ])
//           ]
//         )
//       }
//     }
//   }
// `);

// 2. render函数搭配原生dom&响应式数据使用
// const val = ref(`
//   function defineComponent({ h, ref, reactive}) {
//     function _loop(len, tag, attr, children=[]) {
//       return Array.from({ length: len }).map(() => {
//         if (Array.isArray(attr) || typeof attr !== 'object') {
//           return h(tag, attr)
//         }else {
//           return h(tag, attr, children)
//         }
//       })
//     }

//     const table = ref([
//       {
//         id: 0,
//         name: '张三',
//         age: 50,
//         sex: '男'
//       },
//       {
//         id: 1,
//         name: '李静',
//         age: 10,
//         sex: '女'
//       },
//       {
//         id: 2,
//         name: '王五',
//         age: 30,
//         sex: '男'
//       }
//     ])
//     // 响应式测试
//     setTimeout(() => {
//       table.value[0].name = '张飞';
//     }, 3000)

//     return {
//       render() {
//         return h('table',
//           [
//             h('tr', [
//               _loop(3, 'th', {
//                 style: {
//                   border: '1px solid red'
//                 },
//               }, '表头'),
//             ]),
//             table.value.map((item, i) => {
//               return h('tr', [h('td', item.name), h('td', item.age), h('td', item.sex)])
//             })
//           ]
//         )
//       }
//     }
//   }
// `);

// 3. render函数搭配Element使用
const val = ref(`
  function defineComponent({ h, ref, reactive}, { ElButton, ElTable, ElTableColumn }) {
    function _cbCreate(data, cb) {
      if (Array.isArray(data)) {
        return data.map((item, index) => {
          return cb(item, index)
        })
      }else {
        return []
      }
    }

    const column = ref([
      {
        id: 0,
        label: '名字',
        width: 150,
        prop: 'name',
        label: 'name'
      },
      {
        id: 1,
        label: '性别',
        width: 150,
        prop: 'sex',
        label: 'sex'
      },
      {
        id: 2,
        label: '年龄',
        prop: 'age',
        label: 'age'
      }
    ])

    const tableData = ref([
      {
        id: 0,
        name: '李1',
        sex: '男',
        age: 100
      },
      {
        id: 0,
        name: '李2',
        sex: '女',
        age: 30
      },
      {
        id: 0,
        name: '李3',
        sex: '男',
        age: 190
      }
    ])

    setTimeout(() => {
      tableData.value[0].name = '刘某'
    }, 3000)

    return {
      render() {
        return h(ElTable, {
          data: tableData.value
        }, {
          default: () => _cbCreate(
            column.value, 
            (item, i) => h(ElTableColumn, item))
        })
      }
    }
  }
`);

// 编译模板代码
function compile() {
    const code = val.value.trim();
    if (code) {
        const compileFunc = new Function('return ' + code.trim()),
            defineComp = compileFunc(),
            defineOpts = defineComp(
                {
                    h,
                    ref,
                    reactive,
                },
                {
                    ElButton,
                    ElTable,
                    ElTableColumn,
                },
            );

        const { render } = defineOpts;
        createApp({
            render: render,
        }).mount('.input-show');
    }
}
</script>

<template>
    <div class="code-example">
        <el-input v-model="val" class="input-area" type="textarea" rows="20" />
        <el-button @click="compile">编译</el-button>
        <div class="input-show" />
    </div>
</template>

<style scoped lang="less">
.code-example {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .input-area,
    .input-show {
        width: 42%;
    }
    .input-show {
        height: 430px;
        border: 1px solid red;
    }
}
</style>
