;(function(){
    const template = `<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active"><a href="#">{{menu}} 
        <span v-show="defNum">({{defNum}})</span></a>
      </li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item</a></li>
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      <li><a href="">More navigation</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
    </ul>
  </div>`
  window.LeftLeaf = {
      template,
      data: function(){
        return{
          menu: '菜园子管理',
          defNum: 0
        }
      },
      created() {
        // 箭头函数
        PubSub.subscribe('changeNum',(event,num) => {
          this.defNum = this.defNum + num
        })
      },
  }
})()