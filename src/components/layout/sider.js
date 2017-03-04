/**
 * Created by zmb on 24/2/17.
 */
import React,{Component} from 'react';
import {Layout} from 'antd';
import Menus from './menus';
const { Sider } = Layout;
import styles from '../../routes/main.css'

class Siders extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <Sider className={styles.sider}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <Menus />
      </Sider>
    )
  }
}

export default Siders;
