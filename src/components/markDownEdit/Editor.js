/**
 * Created by zmb on 27/2/17.
 */

import React,{Component} from 'react';
import { connect } from 'dva';
import { Link} from 'dva/router';

import CodeMirror from 'react-codemirror'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/lib/codemirror.css');


class Editor extends Component{

  render(){
    var options = {
      lineNumbers: true,
      mode:'markdown'
    }

    return(
      <div style={{backgroundColor:"red"}}>
        <CodeMirror onChange={this.props.onChange} options={options} value={this.props.codeValue}/>
      </div>
    )
  }
}

export default Editor;
