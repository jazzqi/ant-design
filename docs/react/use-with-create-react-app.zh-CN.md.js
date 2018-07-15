webpackJsonp([101],{1882:function(n,t){n.exports={content:["article",{},["h2","\u5b89\u88c5\u548c\u521d\u59cb\u5316"],["p","\u6211\u4eec\u9700\u8981\u5728\u547d\u4ee4\u884c\u4e2d\u5b89\u88c5 create-react-app \u5de5\u5177\uff0c\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u5b89\u88c5 ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"],"\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app yarn'},["code","$ npm install -g create-react-app yarn"]],["p","\u7136\u540e\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\u3002"],["pre",{lang:"bash",highlighted:"$ create-react-app antd-demo"},["code","$ create-react-app antd-demo"]],["p","\u5de5\u5177\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4e00\u4e2a\u811a\u624b\u67b6\u5e76\u5b89\u88c5 React \u9879\u76ee\u7684\u5404\u79cd\u5fc5\u8981\u4f9d\u8d56\uff0c\u5982\u679c\u5728\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u914d\u7f6e\u4ee3\u7406\u6216\u4f7f\u7528\u5176\u4ed6 npm registry\u3002"],["p","\u7136\u540e\u6211\u4eec\u8fdb\u5165\u9879\u76ee\u5e76\u542f\u52a8\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo\n$ yarn start'},["code","$ cd antd-demo\n$ yarn start"]],["p","\u6b64\u65f6\u6d4f\u89c8\u5668\u4f1a\u8bbf\u95ee ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," \uff0c\u770b\u5230 ",["code","Welcome to React"]," \u7684\u754c\u9762\u5c31\u7b97\u6210\u529f\u4e86\u3002"],["h2","\u5f15\u5165 antd"],["p","\u8fd9\u662f create-react-app \u751f\u6210\u7684\u9ed8\u8ba4\u76ee\u5f55\u7ed3\u6784\u3002"],["pre",{lang:null,highlighted:'\u251c\u2500\u2500 README<span class="token punctuation">.</span>md\n\u251c\u2500\u2500 package<span class="token punctuation">.</span>json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon<span class="token punctuation">.</span>ico\n\u2502   \u2514\u2500\u2500 index<span class="token punctuation">.</span>html\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 App<span class="token punctuation">.</span>css\n\u2502   \u251c\u2500\u2500 App<span class="token punctuation">.</span>js\n\u2502   \u251c\u2500\u2500 App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js\n\u2502   \u251c\u2500\u2500 index<span class="token punctuation">.</span>css\n\u2502   \u251c\u2500\u2500 index<span class="token punctuation">.</span>js\n\u2502   \u2514\u2500\u2500 logo<span class="token punctuation">.</span>svg\n\u2514\u2500\u2500 yarn<span class="token punctuation">.</span>lock'},["code","\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.test.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.svg\n\u2514\u2500\u2500 yarn.lock"]],["p","\u73b0\u5728\u4ece yarn \u6216 npm \u5b89\u88c5\u5e76\u5f15\u5165 antd\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","\u4fee\u6539 ",["code","src/App.js"],"\uff0c\u5f15\u5165 antd \u7684\u6309\u94ae\u7ec4\u4ef6\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport Button from 'antd/lib/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","\u4fee\u6539 ",["code","src/App.css"],"\uff0c\u5728\u6587\u4ef6\u9876\u90e8\u5f15\u5165 ",["code","antd/dist/antd.css"],"\u3002"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","\u597d\u4e86\uff0c\u73b0\u5728\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u9875\u9762\u4e0a\u5df2\u7ecf\u6709\u4e86 antd \u7684\u84dd\u8272\u6309\u94ae\u7ec4\u4ef6\uff0c\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u7ee7\u7eed\u9009\u7528\u5176\u4ed6\u7ec4\u4ef6\u5f00\u53d1\u5e94\u7528\u4e86\u3002\u5176\u4ed6\u5f00\u53d1\u6d41\u7a0b\u4f60\u53ef\u4ee5\u53c2\u8003 create-react-app \u7684",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"\u5b98\u65b9\u6587\u6863"],"\u3002"],["h2","\u9ad8\u7ea7\u914d\u7f6e"],["p","\u6211\u4eec\u73b0\u5728\u5df2\u7ecf\u628a\u7ec4\u4ef6\u6210\u529f\u8fd0\u884c\u8d77\u6765\u4e86\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u8fd8\u6709\u5f88\u591a\u95ee\u9898\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\u5b9e\u9645\u4e0a\u52a0\u8f7d\u4e86\u5168\u90e8\u7684 antd \u7ec4\u4ef6\u7684\u6837\u5f0f\uff08\u5bf9\u524d\u7aef\u6027\u80fd\u662f\u4e2a\u9690\u60a3\uff09\u3002"],["p","\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5bf9 create-react-app \u7684\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u81ea\u5b9a\u4e49\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," \uff08\u4e00\u4e2a\u5bf9 create-react-app \u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u793e\u533a\u89e3\u51b3\u65b9\u6848\uff09\u3002"],["p","\u5f15\u5165 react-app-rewired \u5e76\u4fee\u6539 package.json \u91cc\u7684\u542f\u52a8\u914d\u7f6e\u3002"],["pre",{lang:null,highlighted:'$ yarn add react<span class="token operator">-</span>app<span class="token operator">-</span>rewired <span class="token operator">-</span><span class="token operator">-</span>dev'},["code","$ yarn add react-app-rewired --dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom",\n}']],["p","\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",["code","config-overrides.js"]," \u7528\u4e8e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["h3","\u4f7f\u7528 babel-plugin-import"],["p",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u662f\u4e00\u4e2a\u7528\u4e8e\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6\u4ee3\u7801\u548c\u6837\u5f0f\u7684 babel \u63d2\u4ef6\uff08",["a",{title:null,href:"/docs/react/getting-started#\u6309\u9700\u52a0\u8f7d"},"\u539f\u7406"],"\uff09\uff0c\u73b0\u5728\u6211\u4eec\u5c1d\u8bd5\u5b89\u88c5\u5b83\u5e76\u4fee\u6539 ",["code","config-overrides.js"]," \u6587\u4ef6\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add babel-plugin-import --dev"},["code","$ yarn add babel-plugin-import --dev"]],["pre",{lang:"diff",highlighted:"<span class=\"token inserted\">+ const { injectBabelPlugin } = require('react-app-rewired');</span>\n\n  module.exports = function override(config, env) {\n<span class=\"token inserted\">+   config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);</span>\n    return config;\n  };"},["code","+ const { injectBabelPlugin } = require('react-app-rewired');\n\n  module.exports = function override(config, env) {\n+   config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);\n    return config;\n  };"]],["p","\u7136\u540e\u79fb\u9664\u524d\u9762\u5728 ",["code","src/App.css"]," \u91cc\u5168\u91cf\u6dfb\u52a0\u7684 ",["code","@import '~antd/dist/antd.css';"]," \u6837\u5f0f\u4ee3\u7801\uff0c\u5e76\u4e14\u6309\u4e0b\u9762\u7684\u683c\u5f0f\u5f15\u5165\u6a21\u5757\u3002"],["pre",{lang:"diff",highlighted:"  // src/App.js\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'antd/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"},["code","  // src/App.js\n  import React, { Component } from 'react';\n- import Button from 'antd/lib/button';\n+ import { Button } from 'antd';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"]],["p","\u6700\u540e\u91cd\u542f ",["code","yarn start"]," \u8bbf\u95ee\u9875\u9762\uff0cantd \u7ec4\u4ef6\u7684 js \u548c css \u4ee3\u7801\u90fd\u4f1a\u6309\u9700\u52a0\u8f7d\uff0c\u4f60\u5728\u63a7\u5236\u53f0\u4e5f\u4e0d\u4f1a\u770b\u5230\u8fd9\u6837\u7684",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"\u8b66\u544a\u4fe1\u606f"],"\u3002\u5173\u4e8e\u6309\u9700\u52a0\u8f7d\u7684\u539f\u7406\u548c\u5176\u4ed6\u65b9\u5f0f\u53ef\u4ee5\u9605\u8bfb",["a",{title:null,href:"/docs/react/getting-started#\u6309\u9700\u52a0\u8f7d"},"\u8fd9\u91cc"],"\u3002"],["h3","\u81ea\u5b9a\u4e49\u4e3b\u9898"],["p","\u6309\u7167 ",["a",{title:null,href:"/docs/react/customize-theme"},"\u914d\u7f6e\u4e3b\u9898"]," \u7684\u8981\u6c42\uff0c\u81ea\u5b9a\u4e49\u4e3b\u9898\u9700\u8981\u7528\u5230 less \u53d8\u91cf\u8986\u76d6\u529f\u80fd\u3002\u6211\u4eec\u53ef\u4ee5\u5f15\u5165 react-app-rewire \u7684 less \u63d2\u4ef6 ",["a",{title:null,href:"http://npmjs.com/react-app-rewire-less"},"react-app-rewire-less"]," \u6765\u5e2e\u52a9\u52a0\u8f7d less \u6837\u5f0f\uff0c\u540c\u65f6\u4fee\u6539 ",["code","config-overrides.js"]," \u6587\u4ef6\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add react-app-rewire-less --dev"},["code","$ yarn add react-app-rewire-less --dev"]],["pre",{lang:"diff",highlighted:'  const { injectBabelPlugin } = require(\'react-app-rewired\');\n<span class="token inserted">+ const rewireLess = require(\'react-app-rewire-less\');</span>\n\n  module.exports = function override(config, env) {\n<span class="token deleted">-   config = injectBabelPlugin([\'import\', { libraryName: \'antd\', style: \'css\' }], config);</span>\n<span class="token inserted">+   config = injectBabelPlugin([\'import\', { libraryName: \'antd\', style: true }], config);</span>\n<span class="token inserted">+   config = rewireLess.withLoaderOptions({</span>\n<span class="token inserted">+     javascriptEnabled: true,</span>\n<span class="token inserted">+     modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+   })(config, env);</span>\n    return config;\n  };'},["code","  const { injectBabelPlugin } = require('react-app-rewired');\n+ const rewireLess = require('react-app-rewire-less');\n\n  module.exports = function override(config, env) {\n-   config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);\n+   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);\n+   config = rewireLess.withLoaderOptions({\n+     javascriptEnabled: true,\n+     modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+   })(config, env);\n    return config;\n  };"]],["p","\u8fd9\u91cc\u5229\u7528\u4e86 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," \u7684 ",["code","modifyVars"]," \u6765\u8fdb\u884c\u4e3b\u9898\u914d\u7f6e\uff0c\n\u53d8\u91cf\u548c\u5176\u4ed6\u914d\u7f6e\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"/docs/react/customize-theme"},"\u914d\u7f6e\u4e3b\u9898"]," \u6587\u6863\u3002"],["p","\u4fee\u6539\u540e\u91cd\u542f ",["code","yarn start"],"\uff0c\u5982\u679c\u770b\u5230\u4e00\u4e2a\u7eff\u8272\u7684\u6309\u94ae\u5c31\u8bf4\u660e\u914d\u7f6e\u6210\u529f\u4e86\u3002"],["h2","eject"],["p","\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 create-react-app \u63d0\u4f9b\u7684 ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup"},"yarn run eject"]," \u547d\u4ee4\u5c06\u6240\u6709\u5185\u5efa\u7684\u914d\u7f6e\u66b4\u9732\u51fa\u6765\u3002\u4e0d\u8fc7\u8fd9\u79cd\u914d\u7f6e\u65b9\u5f0f\u9700\u8981\u4f60\u81ea\u884c\u63a2\u7d22\uff0c\u4e0d\u5728\u672c\u6587\u8ba8\u8bba\u8303\u56f4\u5185\u3002"],["h2","\u6e90\u7801\u548c\u5176\u4ed6\u811a\u624b\u67b6"],["p","\u4ee5\u4e0a\u662f\u5728 create-react-app \u4e2d\u4f7f\u7528 antd \u7684\u76f8\u5173\u5b9e\u8df5\uff0c\u4f60\u4e5f\u53ef\u4ee5\u501f\u9274\u6b64\u6587\u7684\u505a\u6cd5\u5728\u81ea\u5df1\u7684 webpack \u5de5\u4f5c\u6d41\u4e2d\u4f7f\u7528 antd\uff0c\u66f4\u591a webpack \u914d\u7f6e\u53ef\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"atool-build"],"\u3002\uff08\u4f8b\u5982\u52a0\u5165 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L90"},"moment noParse"]," \u907f\u514d\u52a0\u8f7d\u6240\u6709\u8bed\u8a00\u6587\u4ef6\uff09"],["p","React \u751f\u6001\u5708\u4e2d\u8fd8\u6709\u5f88\u591a\u4f18\u79c0\u7684\u811a\u624b\u67b6\uff0c\u4f7f\u7528\u5b83\u4eec\u5e76\u5f15\u5165 antd \u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u95ee\u9898\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b\u8457\u540d\u811a\u624b\u67b6\u4f7f\u7528 antd \u7684\u8303\u4f8b\uff0c\u5305\u62ec\u672c\u6587\u7684 create-react-app\u3002"],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/react-boilerplate"},"react-boilerplate/react-boilerplate"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/react-starter-kit"},"kriasoft/react-starter-kit"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"create-react-app-antd"]]],["li",["p",["a",{title:null,href:"https://github.com/comerc/cra-ts-antd"},"cra-ts-antd"]]],["li",["p",["a",{title:null,href:"https://github.com/zeit/next.js/tree/master/examples/with-ant-design"},"next.js"]]],["li",["p",["a",{title:null,href:"https://github.com/insin/nwb-examples/tree/master/react-app-antd"},"nwb"]]]]],meta:{order:4,title:"\u5728 create-react-app \u4e2d\u4f7f\u7528",filename:"docs/react/use-with-create-react-app.zh-CN.md"},description:["section",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," \u662f\u4e1a\u754c\u6700\u4f18\u79c0\u7684 React \u5e94\u7528\u5f00\u53d1\u5de5\u5177\u4e4b\u4e00\uff0c\u672c\u6587\u4f1a\u5c1d\u8bd5\u5728 create-react-app \u521b\u5efa\u7684\u5de5\u7a0b\u4e2d\u4f7f\u7528 antd \u7ec4\u4ef6\uff0c\u5e76\u81ea\u5b9a\u4e49 webpack \u7684\u914d\u7f6e\u4ee5\u6ee1\u8db3\u5404\u7c7b\u5de5\u7a0b\u5316\u9700\u6c42\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316",title:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},"\u5b89\u88c5\u548c\u521d\u59cb\u5316"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5f15\u5165-antd",title:"\u5f15\u5165 antd"},"\u5f15\u5165 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u9ad8\u7ea7\u914d\u7f6e",title:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"]],["li",["a",{className:"bisheng-toc-h2",href:"#eject",title:"eject"},"eject"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6e90\u7801\u548c\u5176\u4ed6\u811a\u624b\u67b6",title:"\u6e90\u7801\u548c\u5176\u4ed6\u811a\u624b\u67b6"},"\u6e90\u7801\u548c\u5176\u4ed6\u811a\u624b\u67b6"]]]}}});