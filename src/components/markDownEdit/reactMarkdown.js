'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var assign = require('lodash.assign');
var CodeBlock = require('./code-block');
var ReactMarkdown = require('react-markdown');
var h = React.createElement;

var Demo = module.exports = React.createClass({
    displayName: 'Demo',

    getInitialState: function() {
        return {
            markdownSrc: [
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
        };
    },

    onMarkdownChange: function(md) {
        this.setState({
            markdownSrc: md
        });
    },

    onControlsChange: function(mode) {
        this.setState({ htmlMode: mode });
    },

    render: function() {
      return (
        h('div', {className: 'result-pane'},
          h(ReactMarkdown, {
            className: 'result',
            source: this.state.markdownSrc,
            skipHtml: 'row',
            escapeHtml: 'escape',
            renderers: assign({}, ReactMarkdown.renderers, {
              CodeBlock: CodeBlock
              })
            })
          )
        );
    }
});

export default Demo
