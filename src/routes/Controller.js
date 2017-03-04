import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import React,{Component} from 'react'
import CSSModules from 'react-css-modules';
import Header from '../components/layout/header';
import Menus from '../components/layout/menus';
import Siders from '../components/layout/sider';
import Foot from '../components/layout/foot';
import { Layout } from 'antd';
import Breads from '../components/layout/bread';
import styles from './main.css'
import { connect } from 'dva'

const { Footer, Sider, Content } = Layout;

class Controller extends Component{
  constructor(props){
    super(props)
    this.state={
      collapse: false
    }
  }


  toggle(){
    const { dispatch } = this.props
    dispatch({type:'users/test',payload:1})
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  render() {
    const collapse = this.state.collapse;
    return (
      <Layout>
          <Sider className={styles.sider}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.siderHeader}>
            <h2 style={{color:'white'}}>Mubin博客管理</h2>
          </div>
          <Menus />
        </Sider>
        <Layout >
          <Header onClick={this.toggle.bind(this)} type={this.state.collapsed}/>
          <Breads className={styles.breads}/>
          <Content className={styles.mainConent}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
};

function mapStatuePorps(status) {

  return { '12':3 }
}

export default connect(mapStatuePorps)(Controller)
