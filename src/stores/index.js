import { defineStore } from 'pinia';
import { request } from '@/utils/common';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    mainMenu: null,
    subMenu: null,
    selectedSubMenu: null, // 선택한 서브메뉴를 탭으로 보여주는 변수
    openTabs: [], // 선택된 서브메뉴를 저장하는 배열
    sideWidth: 250, // 사이드바 넓이
    sideToggle: false,
    mainMenus: [],
    currentSearchHandler: null, // 현재 활성화된 뷰의 '조회' 클릭 이벤트 핸들러
    currentAddHandler: null,
    currentDeleteHandler: null,
    currentSaveHandler: null,
    currentExcelHandler: null,
    currentPrintHandler: null,
    currentPowerOffHandler: null,
  }),
  actions: {
    setMainMenu(menuName) {
      this.mainMenu = menuName;
    },
    setSubMenu(menuName) {
      this.subMenu = menuName;
    },
    setSelectedSubMenu(menuName) {
      this.selectedSubMenu = menuName;
    },
    addTab(subMenu) {
      // 선택한 탭이 이미 존재하는 탭인지 확인
      const existingTab = this.openTabs.find(
        (tab) => tab.name === subMenu.name,
      );
      if (!existingTab) {
        this.openTabs.push(subMenu);
      }
    },
    removeTab(subMenuName) {
      this.openTabs = this.openTabs.filter((tab) => tab.name !== subMenuName);
    },
    setSideToggle(path) {
      // 메인을 눌렀을 경우
      if (path === 1) {
        this.mainMenu = null;
        this.subMenu = null;
        this.sideToggle = false;
        this.openTabs = [];
      } else if (path === 2) {
        if (this.mainMenu !== null) {
          this.sideToggle = !this.sideToggle;
        } else {
          this.sideToggle = false;
        }
      }
    },
    async onDbConMenu() {
      const data = await request('post', 'api/baseInfo/selectMenuInfo');
      const mainMenus = data
        .filter((mainmenu) => mainmenu.MENU_DPH === 1)
        .map((mainmenu) => ({
          name: mainmenu.PRG_NM,
          path: `/${mainmenu.PRG_CODE}`,
        }));
      // 상위 메뉴 별로 하위 메뉴 항목을 찾아 매핑
      mainMenus.forEach((mainMenu) => {
        const subMenus = data
          .filter(
            (subMenu) =>
              subMenu.MENU_DPH === 2 &&
              subMenu.HIGH_PRG_CODE === mainMenu.path.substring(1),
          )
          .map((subMenu) => ({
            name: subMenu.PRG_NM,
            path: `/${subMenu.PRG_CODE}`,
            btnSearch: subMenu.BTN_SEARCH,
            btnAdd: subMenu.BTN_ADD,
            btnDelete: subMenu.BTN_DELET,
            btnSave: subMenu.BTN_STRG,
            btnExcel: subMenu.BTN_EXCEL,
            btnPrint: subMenu.BTN_PRT,
          }));
        mainMenu.subMenus = subMenus;
      });
      this.mainMenus = mainMenus;
    },
    closeAllTabs() {
      this.openTabs = [];
    },
    setCurrentSearchHandler(handler) {
      this.currentSearchHandler = handler;
    },
    setCurrentAddHandler(handler) {
      this.currentAddHandler = handler;
    },
    setCurrentDeleteHandler(handler) {
      this.currentDeleteHandler = handler;
    },
    setCurrentSaveHandler(handler) {
      this.currentSaveHandler = handler;
    },
    setCurrentExcelHandler(handler) {
      this.currentExcelHandler = handler;
    },
    setCurrentPrintHandler(handler) {
      this.currentPrintHandler = handler;
    },
    setCurrentPowerOffHandler(handler) {
      this.currentPowerOffHandler = handler;
    },
  },
  getters: {
    getMainMenu() {
      return this.mainMenu;
    },
    getSubMenu() {
      return this.subMenu;
    },
    getSelectedSubMenu() {
      return this.selectedSubMenu;
    },
    getSideWidth() {
      return this.sideWidth;
    },
  },
});
