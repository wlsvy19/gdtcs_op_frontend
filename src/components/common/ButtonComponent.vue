<template>
  <!-- 공통 버튼 영역-->
  <v-app-bar color="primary" id="common-container" height="50">
    <v-spacer />
    <div>
      <v-btn
        :disabled="disabledSearch"
        @click="handleButtonClick('search')"
        variant="tonal"
        ><v-icon icon="mdi-magnify" />조회</v-btn
      >
      <v-btn
        :disabled="disabledAdd"
        @click="handleButtonClick('add')"
        variant="tonal"
        rounded="none"
        ><v-icon icon="mdi-plus-circle-outline" />추가</v-btn
      >
      <v-btn
        :disabled="disabledDelete"
        @click="handleButtonClick('delete')"
        variant="tonal"
        ><v-icon icon="mdi-close-circle-outline" />삭제</v-btn
      >
      <v-btn
        :disabled="disabledSave"
        @click="handleButtonClick('save')"
        variant="tonal"
        ><v-icon icon="mdi-download" />저장</v-btn
      >
      <v-btn
        :disabled="disabledExcel"
        @click="handleButtonClick('excel')"
        variant="tonal"
        ><v-icon icon="mdi-file-excel" />엑셀</v-btn
      >
      <v-btn
        :disabled="disabledPrint"
        @click="handleButtonClick('print')"
        variant="tonal"
        ><v-icon icon="mdi-printer" />출력</v-btn
      >
      <v-btn @click="handleButtonClick('power-off')" variant="tonal"
        ><v-icon icon="mdi-power" />종료</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script setup>
defineProps({
  disabledSearch: Boolean,
  disabledAdd: Boolean,
  disabledDelete: Boolean,
  disabledSave: Boolean,
  disabledExcel: Boolean,
  disabledPrint: Boolean,
});
const handleButtonClick = (type) => {
  emit(`${type}-click`);
};
const emit = defineEmits([
  'search-click',
  'add-click',
  'delete-click',
  'save-click',
  'excel-click',
  'print-click',
  'power-off-click',
]);
</script>

<style scoped>
.v-btn {
  margin: 0.2rem;
}
</style>
