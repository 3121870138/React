// 入口文件
import ReactDom from 'react-dom'
import App from './App.jsx'
// import Header from '@/Header'
// render 渲染
// ReactDom.render(arg1, arg2)
// 最终整个项目的代码会被注入到id为Root的标签里面去
console.log(App, 'App')
// console.log(Header, 'Header')
ReactDom.render(
  <App />,    
  document.getElementById('root'))
