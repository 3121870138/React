import React from 'react'

class App extends React.Component {
  // 声明周期函数 (渲染)
  render () {
    return (
      <h3>App 组件</h3>
    )
  }
}

/**
 * react中写{}代表你打算要写js，假如你打算在jsx中插入html代码，那么外层要写()
*/

export default App;