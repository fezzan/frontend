import {CarryOutOutlined , OrderedListOutlined ,DashboardOutlined,UsergroupAddOutlined , BankOutlined,DollarCircleOutlined,ProfileOutlined,DribbbleOutlined,UnorderedListOutlined,UserOutlined,InteractionOutlined       } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Icon from '@ant-design/icons';
const Consititution = () => (
  <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg"><path d="m431.279 10c0-5.523-4.478-10-10-10h-298.673c-23.093 0-41.882 18.788-41.882 41.882v360.265c0 .039-.003.077-.003.116v36.312c0 22.494 18.301 40.794 40.795 40.794h13.979v22.631c0 4.088 2.488 7.764 6.283 9.284 3.797 1.52 8.133.576 10.954-2.383l23.873-25.039 23.873 25.039c1.925 2.019 4.556 3.1 7.239 3.1 1.249 0 2.51-.234 3.715-.717 3.795-1.52 6.283-5.196 6.283-9.284v-22.631h203.563c5.522 0 10-4.477 10-10v-459.369zm-308.673 10h288.673v340.388h-288.682c-8.011 0-15.502 2.265-21.872 6.183v-324.689c-.001-12.066 9.816-21.882 21.881-21.882zm75.11 457.021-13.873-14.55c-1.887-1.979-4.503-3.099-7.237-3.099s-5.351 1.12-7.237 3.099l-13.873 14.55v-38.539h42.221v30.887 7.652zm20-17.652v-20.887h4.348c5.522 0 10-4.477 10-10s-4.478-10-10-10h-89.916c-5.522 0-10 4.477-10 10s4.478 10 10 10h3.344v20.887h-13.975c-11.467 0-20.795-9.328-20.795-20.794v-36.235c0-.02.003-.038.003-.058 0-12.066 9.816-21.882 21.882-21.882h288.673v19.864h-86.853c-5.522 0-10 4.477-10 10s4.478 10 10 10h86.853v39.104h-193.564z"/><path d="m351.602 267.012h-177.216c-5.522 0-10 4.477-10 10s4.478 10 10 10h177.217c5.522 0 10-4.477 10-10s-4.478-10-10.001-10z"/><path d="m351.602 310.025h-177.216c-5.522 0-10 4.477-10 10s4.478 10 10 10h177.217c5.522 0 10-4.477 10-10s-4.478-10-10.001-10z"/><path d="m288.314 406.44c-1.64-3.938-5.71-6.463-9.971-6.145-4.128.308-7.696 3.205-8.862 7.17-2.481 8.438 6.875 15.79 14.521 11.496 4.339-2.437 6.225-7.929 4.312-12.521z"/><path d="m146.639 154.816 67.229 40.342c1.611.967 3.385 1.427 5.136 1.427 3.396 0 6.71-1.731 8.584-4.856 2.842-4.736 1.307-10.878-3.429-13.72l-1.197-.718 6.544-10.905 78.615 47.173c-2.717 4.608-1.333 10.575 3.209 13.487 1.671 1.072 3.54 1.583 5.388 1.583 3.294 0 6.519-1.625 8.428-4.604l.116-.181 7.796 4.678c4.805 2.883 10.101 4.255 15.334 4.254 10.163 0 20.087-5.176 25.688-14.507 4.108-6.848 5.305-14.886 3.368-22.634s-6.774-14.278-13.622-18.387l-6.481-3.889c1.577-4.303.029-9.273-3.99-11.85-4.192-2.688-9.623-1.843-12.838 1.752l-80.242-48.149 6.055-10.091 1.197.718c1.611.967 3.385 1.427 5.136 1.427 3.396 0 6.71-1.731 8.585-4.856 2.841-4.736 1.306-10.878-3.43-13.72l-67.23-40.342c-4.736-2.842-10.879-1.306-13.721 3.429-2.841 4.736-1.306 10.878 3.43 13.72l1.574.944-43.366 72.269-1.573-.944c-4.736-2.842-10.879-1.306-13.72 3.429-2.844 4.737-1.309 10.88 3.427 13.721zm103.361-22.544 79.595 47.761-10.69 16.672-79.091-47.458zm106.929 75.706c-2.81 4.681-8.903 6.202-13.581 3.395l-7.286-4.372 10.69-16.672 6.781 4.069c2.268 1.36 3.869 3.522 4.51 6.087s.245 5.226-1.114 7.493zm-137.911-131.345 30.161 18.098-43.367 72.269-.862-.517-29.299-17.581z"/></svg>
);
const dashBoardNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "home",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "employee",
    path: `${APP_PREFIX_PATH}/employee`,
    title: "Employee",
    icon: UsergroupAddOutlined ,
    breadcrumb: false,
    submenu: [],
  },


  {
    key: "charity",
    path: `${APP_PREFIX_PATH}/charity`,
    title: "Charity",
    icon: BankOutlined,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "sponsor",
    path: `${APP_PREFIX_PATH}/sponsor`,
    title: "Sponsor",
    icon: DollarCircleOutlined ,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "feed",
    path: `${APP_PREFIX_PATH}/feed`,
    title: "Feed",
    icon: ProfileOutlined  ,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "category",
    path: `${APP_PREFIX_PATH}/category`,
    title: "Category",
    icon: UnorderedListOutlined   ,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "tournament",
    path: `${APP_PREFIX_PATH}/tournament`,
    title: "Tournament",
    icon: DribbbleOutlined   ,
    breadcrumb: false,
    submenu: [],
  },


  
  {
    key: "user",
    path: `${APP_PREFIX_PATH}/user`,
    title: "Users",
    icon: UserOutlined    ,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "activity",
    path: `${APP_PREFIX_PATH}/activity`,
    title: "Acitvity",
    icon: InteractionOutlined    ,
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "rules",
    path: `${APP_PREFIX_PATH}/defined_rules`,
    title: "Rules",
    icon: CarryOutOutlined,
    breadcrumb: false,
    submenu: [],
  },


  {
    key: "levels",
    path: `${APP_PREFIX_PATH}/levels`,
    title: "Levels",
    icon: OrderedListOutlined ,
    breadcrumb: false,
    submenu: [],
  },





];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
