<template>
  <ButtonComponent
    :disabledSearch="btnSearch !== 'Y'"
    :disabledAdd="btnAdd !== 'Y'"
    :disabledDelete="btnDelete !== 'Y'"
    :disabledSave="btnSave !== 'Y'"
    :disabledExcel="btnExcel !== 'Y'"
    :disabledPrint="btnPrint !== 'Y'"
    @search-click="handleSearch"
    @add-click="handleAdd"
    @delete-click="handleDelete"
    @save-click="handleSave"
    @excel-click="handleExcel"
    @print-click="handlePrint"
    @power-off-click="handlePowerOff"
  />
  <h3>근무일자</h3>
</template>

<script setup>
import { computed } from 'vue';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import { useMenuStore } from '@/stores/index';
const menuStore = useMenuStore();
// 현재 선택된 서브메뉴에 대한 버튼 속성을 계산
const selectedSubMenu = computed(() => {
  for (const menu of menuStore.mainMenus) {
    for (const subMenu of menu.subMenus) {
      if (subMenu.name === menuStore.selectedSubMenu) {
        return subMenu;
      }
    }
  }
  return {};
});

const btnSearch = computed(() => selectedSubMenu.value.btnSearch);
const btnAdd = computed(() => selectedSubMenu.value.btnAdd);
const btnDelete = computed(() => selectedSubMenu.value.btnDelete);
const btnSave = computed(() => selectedSubMenu.value.btnSave);
const btnExcel = computed(() => selectedSubMenu.value.btnExcel);
const btnPrint = computed(() => selectedSubMenu.value.btnPrint);

const handleSearch = () => {
  alert('근무상태관리 - 조회버튼 클릭');
};
const handleAdd = () => {
  alert('근무상태관리 - 추가버튼 클릭');
};
const handleDelete = () => {
  alert('근무상태관리 - 삭제버튼 클릭');
};
const handleSave = () => {
  alert('근무상태관리 - 저장버튼 클릭');
};
const handleExcel = () => {
  alert('근무상태관리 - 엑셀버튼 클릭');
};
const handlePrint = () => {
  alert('근무상태관리 - 출력버튼 클릭');
};
const handlePowerOff = () => {
  alert('근무상태관리 - 종료버튼 클릭');
};
</script>

<style scoped></style>
