import { Input } from 'antd';
import { Row, Col } from 'antd';
import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Browse.css';
import Editor from '../components/markDownEdit/Editor'


class  Browse extends  Component{
  constructor(props){
    super(props)
    this.state={
      markdownSrc:[
        '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
        '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
        'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
        '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
        '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
        'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
        '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
        '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
        'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
        'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
        '---------------\n\n',
        'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'
      ].join(''),
      htmlMode: 'raw'
    }
  }

  //获取输入的值
  _handleChange(e){
    this.setState({
      markdownValue:e.target.value
    })
  }

  _onMarkdownChange(md){
    this.setState({
      markdownSrc:md
    })
  }

  render(){
    const {htmlMode,markdownSrc} = this.state;
    return(
    <Row  gutter={24} >
      <Col span={12} className={styles.col}>
        <Editor  onChange={this._onMarkdownChange.bind(this)} codeValue={this.state.markdownSrc}/>
      </Col>
      <Col span={12} className={styles.col}>
         <ReactMarkdown source={this.state.markdownSrc}
         skipHtml={true}
           />
      </Col>
    </Row>
    )
  }
}
export default Browse;
