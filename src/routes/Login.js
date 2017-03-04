import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './Login.less';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import config  from '../utils/config';
const FormItem = Form.Item;


class Login extends React.Component {

  //浏览模式
  _reviewView = () => {

  }


  _handleSubmit = (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //登录
        dispatch({type: 'users/login', payload: values});

        dispatch({type:'users/mub'})
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <h2>Mubin博客管理</h2>
          </div>
            <Form onSubmit={this._handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入账号!' }],
                })(
                  <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>保存密码</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <Button  type="primary" onClick={this._reviewView} style={{marginTop:5}}>
                  游客访问
                </Button>
              </FormItem>
            </Form>
          </div>
    );
  }
}


const from = Form.create()(Login)
export default connect()(from);
