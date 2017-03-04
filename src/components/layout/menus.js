/**
 * Created by zmb on 24/2/17.
 */
import { Menu, Breadcrumb, Icon } from 'antd';
import React,{Component} from 'react'
import styles from '../../routes/main.css'
import CSSModules from 'react-css-modules';
import { Link } from 'dva/router'

class Menus extends Component{

  constructor(props){
    super(props)
    this.state={
      collapse: false
    }
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render(){
    const collapse = this.state.collapse;
    return(
      <div>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
          <Menu.Item key="user">
            <Link to={''}>
            </Link>
            <Icon type="user" />
            {!collapse && <span className="navtext">博文</span>}
          </Menu.Item>
          <Menu.Item key="setting">
            <Icon type="setting" />
            {!collapse && <span className="navtext">简历管理</span>}
          </Menu.Item>
          <Menu.Item key="laptop">
            <Icon type="laptop" />
            {!collapse && <span className="navtext">个人信息</span>}
          </Menu.Item>
          <Menu.Item key="notification">
            <Icon type="notification" />
            {!collapse && <span className="navtext">关于本站</span>}
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default CSSModules(Menus,styles);
