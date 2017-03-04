/**
 * Created by zmb on 24/2/17.
 */
import React,{Component} from 'react';
import { Breadcrumb } from 'antd';
import styles from './bread.css'
class Breads extends Component{

  render(){
    return(
      <div>
        <Breadcrumb className={styles.breads}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

export default Breads;
