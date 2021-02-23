<template>
  <div id="example">
    <p>This is TypeScripts : "{{ returnBook }}"</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

// 外部から型定義する
import Book from '~/types/book'

// 内部で型定義する
interface BooksResponse {
  // 配列で宣言する
  books: Book[]
}
export default Vue.extend({
  computed: {
    // 関数に型定義する
    returnBook(): BooksResponse {
      // 型定義を宣言する
      const book1: Book = {
        id: 1,
        code: 0,
        name: 'test',
        category: null,
        status: 3,
      }
      const book2: Book = {
        id: 2,
        code: 1,
        name: 'testtest',
        category: null,
        status: 1,
      }
      const books: BooksResponse = {
        books: [book1, book2],
      }
      return books
    },
  },
})
</script>

<style lang="scss" scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
