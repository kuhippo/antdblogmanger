/**
 * Created by zmb on 25/2/17.
 */
import React,{Component} from 'react';
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import styles from './ShowContent.css'
import CodeBlock from '../components/markDownEdit/code-block'
import assign from 'lodash.assign'
import Demo from '../components/markDownEdit/reactMarkdown'

class ShowContent extends Component{

  constructor(props){
    super(props)
    this.state={
      article:"#1312312312312",
      isFetching:false
    }

    const article = this.props.location.query.article || ''
    const { dispatch } = this.props
    //获取文章
    dispatch({type:'show/getarticle',payload: article})
  }

  componentWillReceiveProps(nextProps){
      const {article,isFetching} = nextProps
      this.setState({
        isFetching,
        article
      })
  }



  render(){
    const { article } = this.state
    return(
      <div className={styles.content}>
        <Demo/>
      </div>
    )
  }
}


function mapStateProps(state){
  const {show} = state
  const {article} = show

  return{
    isFetching:article.isFetching,
    article:article.article
  }
}

export default connect(mapStateProps)(ShowContent);
