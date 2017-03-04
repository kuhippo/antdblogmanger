import React,{Component} from 'react';
import { connect } from 'dva';
import { Table, Icon ,Popconfirm, message } from 'antd';
import { Link} from 'dva/router';

class List extends Component{

  componentWillReceiveProps(nextProps){
    const {dataSource,isFetching} = nextProps
    this.setState({
      dataSource:dataSource,
      isFetching:isFetching
    })
  }

  constructor(props){
    super(props)
    const {dispatch} = this.props
    this.state={
      dataSource:[],
      isFetching:false,
    }

    dispatch({type:'list/getarticles',payload: {page:1}})


  }

  clickTitle(){
    const {histroy} = this.props;
    console.log(histroy)
    const pushValue = {'show':'ha'}
    histroy.push({pathname:'show',state:pushValue});
    // const nextLocation =
    // histroy.push(nextLocation)
  }

  confirm(e) {
    const {dispatch} = this.props;
    dispatch({type:'list/deletearticle',payload: {page:1}});
    message.success('Click on Yes');
  }

  cancel(e) {
    console.log(e);
    message.error('Click on No');
  }


  render(){
    const columns = [{
      title: '文章',
      dataIndex: 'title',
      key: 'title',
      render: (text,hashId) => <Link to={{ pathname: 'show', query: { article: 1231 } }}>{text}</Link>
      ,

    }, {
      title: '发表时间',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
      <a href="#edit">编辑 </a>
      <span className="ant-divider" />
          <Popconfirm title="Are you sure" onConfirm={this.confirm.bind(this)} onCancel={this.cancel.bind(this)} okText="Yes" cancelText="No" placement="bottom" >
      <a href="#">删除</a>
      </Popconfirm>
    </span>
      ),
    }];
    return(
      <div >
        <Table columns={columns} dataSource={this.state.dataSource} />
      </div>
    )
  }
}

function mapStateProps(state) {
  const {list} = state;
  const {dataSource ,isFetching} = list
  return {
    dataSource,
    isFetching
  }
}

export default connect(mapStateProps)(List)
