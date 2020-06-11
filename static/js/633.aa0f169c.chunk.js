(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[633],{1957:function(n,e,t){"use strict";t.r(e),e.default='Loader \u52a0\u8f7d\u5668\n===\n\n\u7528\u4e8e\u9875\u9762\u548c\u533a\u5757\u7684\u52a0\u8f7d\u4e2d\u72b6\u6001\u3002\n\n```jsx\nimport { Loader } from \'uiw\';\n```\n\n### \u57fa\u7840\u5b9e\u4f8b\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Loader size="small" />\n    <Loader />\n    <Loader size="large" />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n\n### \u8b66\u544a\u63d0\u793a\u4e2d\u52a0\u8f7d\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Row, Col, Message, Icon } from \'uiw\';\n\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading:true\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Row gutter={10}>\n          <Col>\n            <Button\n              style={{ marginBottom: 10 }}\n              size="small"\n              onClick={()=>{\n                this.setState({\n                  loading: !this.state.loading,\n                });\n              }}\n            >\u70b9\u51fb\u5207\u6362\u52a0\u8f7d\u72b6\u6001</Button>\n          </Col>\n        </Row>\n        <Row gutter={10}>\n          <Col fixed>\n            <Loader loading={this.state.loading}>\n              <Message\n                type="success"\n                title="\u6210\u529f\u63d0\u793a\u6807\u9898"\n                description={\n                  <span>\n                    <Icon type="uiw" verticalAlign="baseline" style={{ fill: \'#009688\' }} />\n                    \u8fd9\u91cc\u662f\u6210\u529f\u63d0\u793a\u8be6\u60c5\u63cf\u8ff0\u3002\n                  </span>\n                } />\n            </Loader>\n          </Col>\n          <Col fixed>\n            <Loader loading={this.state.loading}>\n              <Message type="warning" title="\u6210\u529f\u63d0\u793a\u6807\u9898" description="\u8fd9\u91cc\u662f\u6210\u529f\u63d0\u793a\u8be6\u60c5\u63cf\u8ff0\u3002" />\n            </Loader>\n          </Col>\n        </Row>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5361\u7247\u52a0\u8f7d\u4e2d\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Card, Col, Row } from \'uiw\';\n\nReactDOM.render(\n  <Row gutter={10}>\n    <Col fixed>\n      <Card title="\u56fe\u6807\u4e0e\u6587\u5b57\u4e00\u884c\u663e\u793a" extra={<a href="#">\u66f4\u591a</a>} style={{ minWidth: 230 }}>\n        <Loader color="red" tip="\u52a0\u8f7d\u4e2d..." style={{ width: \'100%\' }}>\n          <div>\n            \u5361\u7247\u5185\u5bb9<br/>\n            \u5361\u7247\u5185\u5bb9<br/>\n            \u5361\u7247\u5185\u5bb9<br/>\n          </div>\n        </Loader>\n      </Card>\n    </Col>\n    <Col fixed>\n      <Card title="\u56fe\u6807\u4e0e\u6587\u5b57\u5782\u76f4\u663e\u793a" extra={<a href="#">\u66f4\u591a</a>} style={{ minWidth: 230 }}>\n        <Loader tip="loading..." vertical style={{ width: \'100%\' }}>\n          <div>\n            \u5361\u7247\u5185\u5bb9<br/>\n            \u5361\u7247\u5185\u5bb9<br/>\n            \u5361\u7247\u5185\u5bb9<br/>\n          </div>\n        </Loader>\n      </Card>\n    </Col>\n    <Col fixed>\n      <Card title="\u81ea\u5b9a\u4e49\u80cc\u666f\u989c\u8272" extra={<a href="#">\u66f4\u591a</a>} style={{ minWidth: 230 }}>\n        <Loader bgColor="rgba(0, 0, 0, 0.4)" color="#fff" tip="loading..." vertical style={{ width: \'100%\' }}>\n          <div>\n            \u5361\u7247\u5185\u5bb9<br/>\n            \u5361\u7247\u5185\u5bb9<br/>\n            \u5361\u7247\u5185\u5bb9<br/>\n          </div>\n        </Loader>\n      </Card>\n    </Col>\n  </Row>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u52a0\u8f7d\u56fe\u6807\u52a8\u753b\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Card, Icon } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Card title="Card\u6807\u9898" extra={<a href="#">\u66f4\u591a</a>} style={{ width: 300 }}>\n      <Loader\n        tip="\u52a0\u8f7d\u4e2d..."\n        color="red"\n        indicator={<Icon type="loading" spin={true} style={{ verticalAlign: \'text-top\' }} />}\n        style={{ width: \'100%\' }}\n      >\n        <div>\n          \u5361\u7247\u5185\u5bb9<br/>\n          \u5361\u7247\u5185\u5bb9<br/>\n          \u5361\u7247\u5185\u5bb9<br/>\n        </div>\n      </Loader>\n    </Card>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u6574\u9875\u52a0\u8f7d\n\n\u9875\u9762\u6570\u636e\u52a0\u8f7d\u65f6\u663e\u793a\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Loader, Icon, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      fullscreen: false,\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Button\n          style={{ marginBottom: 10 }}\n          type="primary"\n          onClick={()=>{\n            this.setState({\n              fullscreen: !this.state.fullscreen,\n            }, () => {\n              setTimeout(() => {\n                this.setState({\n                  fullscreen: !this.state.fullscreen,\n                })\n              }, 3000);\n            });\n          }}\n        >\n          \u663e\u793a\u6574\u9875\u52a0\u8f7d\uff0c3 \u79d2\u540e\u6d88\u5931\n        </Button>\n        {this.state.fullscreen && (\n          <Loader\n            tip="\u52a0\u8f7d\u4e2d..."\n            size="large"\n            bgColor="rgba(255, 255, 255, 0.9)"\n            fullscreen={this.state.fullscreen}\n          />\n        )}\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| size | \u5c3a\u5bf8 | Enum{`small`, `default`, `large`} | `default` |\n| loading | \u662f\u5426\u65cb\u8f6c | Boolean | `true` |\n| indicator | \u52a0\u8f7d\u6307\u793a\u7b26\uff0c\u53ef\u4ee5\u52a0\u8f7d\u4e00\u4e2a Icon \u52a8\u753b | ReactNode | - |\n| tip | \u5f53\u4f5c\u4e3a\u5305\u88f9\u5143\u7d20\u65f6\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848 | String | - |\n| color | \u8bbe\u7f6e\u56fe\u6807\u4e0e\u6587\u5b57\u7684\u989c\u8272 | String | - |\n| bgColor | \u81ea\u5b9a\u4e49\u80cc\u666f\u989c\u8272 | String | - |\n| vertical | \u56fe\u6807\u4e0e\u6587\u5b57\u5782\u76f4\u663e\u793a | Boolean | - |\n| fullscreen | \u662f\u5426\u5168\u5c4f\u663e\u793a | Boolean | `false` |\n\n'}}]);