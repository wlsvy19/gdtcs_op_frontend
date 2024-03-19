<template>
  <div>
    <h3>도로공사 송수신 내역 조회</h3>
    <!-- <v-spacer />
    <ButtonComponent
      @search-click="handleSearch"
      @add-click="handleAdd"
      @delete-click="handleDelete"
      @save-click="handleSave"
      @excel-click="handleExcel"
      @print-click="handlePrint"
      @power-off-click="handlePowerOff" 
    />
    -->
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useMenuStore } from '@/stores/index';

const menuStore = useMenuStore();

const searchHandler = () => {
  alert('도로공사 송수신 내역 조회 - 조회버튼 클릭');
};
const addHandler = () => {
  alert('도로공사 송수신 내역 조회 - 추가버튼 클릭');
};
const deleteHandler = () => {
  alert('도로공사 송수신 내역 조회 - 삭제버튼 클릭');
};
const saveHandler = () => {
  alert('도로공사 송수신 내역 조회 - 저장버튼 클릭');
};
const excelHandler = () => {
  alert('도로공사 송수신 내역 조회 - 엑셀버튼 클릭');
};
const printHandler = () => {
  alert('도로공사 송수신 내역 조회 - 출력버튼 클릭');
};
const powerOffHandler = () => {
  alert('도로공사 송수신 내역 조회 - 종료버튼 클릭');
};
onMounted(() => {
  menuStore.setCurrentSearchHandler(searchHandler);
  menuStore.setCurrentAddHandler(addHandler);
  menuStore.setCurrentDeleteHandler(deleteHandler);
  menuStore.setCurrentSaveHandler(saveHandler);
  menuStore.setCurrentExcelHandler(excelHandler);
  menuStore.setCurrentPrintHandler(printHandler);
  menuStore.setCurrentPowerOffHandler(powerOffHandler);
});

onUnmounted(() => {
  // 컴포넌트가 비활성화될 때 핸들러 제거
  menuStore.setCurrentSearchHandler(null);
  menuStore.setCurrentAddHandler(null);
  menuStore.setCurrentDeleteHandler(null);
  menuStore.setCurrentSaveHandler(null);
  menuStore.setCurrentExcelHandler(null);
  menuStore.setCurrentPrintHandler(null);
  menuStore.setCurrentPowerOffHandler(null);
});
</script>

<style scoped></style>
