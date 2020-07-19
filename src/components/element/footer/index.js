import Footer from './src/Footer.vue';

console.log(Footer);
console.log(install);
Footer.install((Vue) => {
  Vue.component(Footer.name, Footer);
});
console.log(install);

export default Footer;
