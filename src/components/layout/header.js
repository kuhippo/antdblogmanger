import React from 'react';
import { Menu, Icon, Popover,Button } from 'antd';
import CSSModules from 'react-css-modules';
import styles from '../../routes/main.css';

const SubMenu = Menu.SubMenu;

function Header({type,onClick}){


  const handleClickMenu = ()=>{
    console.log('123')
  }

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  return(
    <div className ={styles.header} style={{backgroundColor:'white'}}>
      <Popover content={content} className={styles.headerHorBt} >
        <Button type="primary">登出</Button>
      </Popover>
      <Icon
        className={styles.trigger}
        type={type?'menu-unfold':'menu-fold'}
        onClick={onClick}
      />
    </div>
  )
}


// export  default CSSModules(Header,styles);
export default Header;
