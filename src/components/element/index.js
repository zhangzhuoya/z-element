import Col from '@element/col';
import Row from '@element/row';

const components = [Row, Col];
const install = (Vue) => {
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};
export default {
  install,
  Col,
  Row,
};
export {
  install,
  Row,
  Col,
};
