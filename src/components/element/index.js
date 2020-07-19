import Col from '@element/col';
import Row from '@element/row';
import Header from '@element/header';
import Footer from '@element/footer';
import Container from '@element/container';
import Main from '@element/main';

const components = [Row, Col, Container, Footer, Header, Main];
const install = (Vue) => {
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};
export default {
  install,
  Col,
  Row,
  Container,
  Footer,
  Header,
  Main,
};
export {
  install, Row, Col, Container, Footer, Header, Main,
};
