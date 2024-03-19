<template>
  <v-layout class="rounded rounded-md">
    <!-- 헤더영역 -->
    <v-app-bar id="header-container" flat>
      <v-icon icon="mdi-menu" style="color: #fff; margin-left: 1rem" />
      <router-link to="/">
        <span id="site-name" @click="menuStore.setSideToggle(1)"
          >광안대교 스마트톨링</span
        >
      </router-link>
      <v-spacer />
      <v-icon icon="mdi-exit-to-app" class="exit-icon" @click="onExit" />
    </v-app-bar>

    <!-- 메뉴 네비게이션 영역 -->
    <v-app-bar id="nav-container" height="60" flat>
      <v-btn
        height="60"
        v-for="menu in menuStore.mainMenus"
        :key="menu.name"
        @click="onMainMenu(menu.name)"
        :style="selectedMainMenu(menu.name)"
      >
        {{ menu.name }}
      </v-btn>
    </v-app-bar>

    <!-- 사이드바 토글 버튼 영역 -->
    <div
      :class="menuStore.sideToggle ? 'sidebar-toggle-on' : 'sidebar-toggle-off'"
    >
      <!-- <v-icon v-if="menuStore.sideToggle" icon="mdi-chevron-left" />
        <v-icon v-else icon="mdi-chevron-right" /> -->
      <v-icon
        style="margin-left: 1rem"
        :icon="sidebarIcon"
        @click="toggleSideMenu"
        @mouseover="toggleIcon(true)"
        @mouseleave="toggleIcon(false)"
      />
    </div>

    <!-- 좌측 사이드바 영역-->
    <v-navigation-drawer
      v-model="menuStore.sideToggle"
      app
      :width="sideWidth"
      style="margin-top: -8px"
    >
      <v-list>
        <v-list-item
          height="30"
          v-for="subMenu in subMenus"
          :key="subMenu.name"
          @click="onSubMenu(subMenu.name, subMenu.path)"
          :class="{
            'sub-menu-active': menuStore.getSubMenu === subMenu.name,
          }"
        >
          <v-list-item-title>
            {{ subMenu.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <!-- 버튼 전역 사용 버전 -->
    <!-- <ButtonComponent
      @search-click="handleSearchClick"
      @add-click="handleAddClick"
      @delete-click="handleDeleteClick"
      @save-click="handleSaveClick"
      @excel-click="handleExcelClick"
      @print-click="handlePrintClick"
      @power-off-click="handlePowerOffClick"
    /> -->
    <!-- 버튼전역 사용 버전 -->
    <!-- <v-main class="d-flex align-center justify-center" flat style="min-height: 300px">
      <router-view v-slot:default="slotProps">
        <component :is="slotProps.Component" v-bind="slotProps" :sub-menu="menuStore.subMenu" />
      </router-view>
    </v-main> -->

    <!-- 버튼전역사용x -->

    <!-- 선택한 메뉴탭 영역-스크롤 버전-->
    <v-app-bar flat v-if="menuStore.subMenu != null" class="tabs-container">
      <div class="selected-tab">
        <v-icon
          v-if="isScrolling"
          icon="mdi-close-box-outline"
          @click="closeAllTabs"
          style="margin-top: 0.4rem"
          title="모두 닫기"
        />

        <span
          id="chip-container"
          v-for="tab in menuStore.openTabs"
          :key="tab.name"
          :class="{
            'select-menu-active': menuStore.getSubMenu === tab.name,
          }"
        >
          <v-chip label @click="onTab(tab.name, tab.path)">
            {{ tab.name }}
            <v-icon
              id="close-icon"
              @click.stop="closeTab(tab.name)"
              icon="mdi-close-circle"
              :class="{
                'select-menu-close-active': menuStore.getSubMenu === tab.name,
              }"
            />
          </v-chip>
        </span>
      </div>
    </v-app-bar>

    <!-- 푸터영역 -->
    <v-app-bar id="footer-container" height="50" location="bottom">
      <div style="margin-left: 92%">© 2024 STraffic</div>
    </v-app-bar>
  </v-layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from '@/stores/index';
// import ButtonComponent from '@/components/common/ButtonComponent.vue';

const menuStore = useMenuStore();

onMounted(async () => {
  await menuStore.onDbConMenu();
});

const sideWidth = computed(() => `${menuStore.getSideWidth}`);

const subMenus = computed(() => {
  const mainMenu = menuStore.mainMenus.find(
    (menu) => menu.name === menuStore.mainMenu,
  );
  return mainMenu ? mainMenu.subMenus : [];
});

const onMainMenu = (mainMenuName) => {
  menuStore.setMainMenu(mainMenuName);
  menuStore.sideToggle = menuStore.mainMenu !== null;
};

const selectedMainMenu = (mainMenuName) => {
  return {
    backgroundColor:
      menuStore.getMainMenu === mainMenuName ? '#03c9f6' : '#059be1',
  };
};

const router = useRouter();
const onSubMenu = (subMenuName, path) => {
  const mainMenu = menuStore.mainMenus.find((menu) =>
    menu.subMenus.some((subMenu) => subMenu.name === subMenuName),
  );
  if (mainMenu) {
    menuStore.addTab({
      name: subMenuName,
      path: path,
      mainMenu: mainMenu.name,
    });
    menuStore.setSubMenu(subMenuName);
    menuStore.setSelectedSubMenu(subMenuName);
    router.push(path);
  }
};

const onTab = (tabMenuName, path) => {
  const tab = menuStore.openTabs.find((tab) => tab.name === tabMenuName);
  if (tab) {
    menuStore.setMainMenu(tab.mainMenu);
    menuStore.setSubMenu(tabMenuName);
  }
  router.push(path);
};

const closeTab = (tabName) => {
  menuStore.removeTab(tabName);
};

// 사이드바 토글 버튼 관련 로직
const isHovering = ref(false);
const toggleIcon = (hovering) => {
  // mainMenu이 null이 아닐 때만 아이콘 변경
  if (menuStore.mainMenu !== null) {
    isHovering.value = hovering;
  }
};

const toggleSideMenu = () => {
  menuStore.setSideToggle(2);
};

const sidebarIcon = computed(() => {
  if (!menuStore.sideToggle) {
    return 'mdi-chevron-right';
  } else if (isHovering.value) {
    return 'mdi-chevron-left';
  } else {
    return 'mdi-drag-vertical';
  }
});

const isScrolling = computed(() => {
  return menuStore.openTabs.length > 10;
});

const closeAllTabs = () => {
  menuStore.closeAllTabs();
};

const onExit = () => {
  alert('logout');
};
/*
const handleSearchClick = () => {
  if (menuStore.currentSearchHandler) {
    menuStore.currentSearchHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Search 처리');
  }
};

const handleAddClick = () => {
  if (menuStore.currentAddHandler) {
    menuStore.currentAddHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Add 처리');
  }
};

const handleDeleteClick = () => {
  if (menuStore.currentDeleteHandler) {
    menuStore.currentDeleteHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Delete 처리');
  }
};

const handleSaveClick = () => {
  if (menuStore.currentSaveHandler) {
    menuStore.currentSaveHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Save 처리');
  }
};

const handleExcelClick = () => {
  if (menuStore.currentExcelHandler) {
    menuStore.currentExcelHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Excel 처리');
  }
};

const handlePrintClick = () => {
  if (menuStore.currentPrintHandler) {
    menuStore.currentPrintHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Print 처리');
  }
};
const handlePowerOffClick = () => {
  if (menuStore.currentPowerOffHandler) {
    menuStore.currentPowerOffHandler();
  } else {
    // 기본 '조회' 클릭 핸들러 로직
    console.log('기본 Power Off 처리');
  }
};
 */
</script>

<style scoped>
.sub-menu-active {
  background-color: #03c9f6;
  color: #fff;
}
.tabs-container {
  border-bottom: 1px solid #e0e0e0;
}
.selected-tab {
  display: flex;
  overflow-x: auto;
  margin-bottom: 5px;
}
#chip-container .v-chip {
  /* --v-chip-height: 2.5rem; */

  margin: 0.1rem;
  font-size: 0.8rem;
}
.select-menu-active {
  color: #fff;
}
.select-menu-close-active {
  color: black;
}
.select-menu-active .v-chip {
  background-color: #03c9f6;
}
</style>
