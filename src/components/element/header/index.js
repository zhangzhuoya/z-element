import Header from './src/Header.vue';

console.log(Header);
Header.install = (Vue) => {
//   console.log(Header);
  Vue.component(Header.name, Header);
};

export default Header;
