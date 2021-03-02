;(function(){
    const template = ` <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        
    <!--右边上半区域-->
    <h1 class="page-header">Dashboard</h1>
        <dashboard :hobbies="hobbies"></dashboard>
    <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <home-list :emp-list="empList" :deleteEmp="deleteEmp"></home-list>
        </div>`
      window.AppHome = {
          template,
          components: {
              Dashboard,
              HomeList
          },
          data() {
              return {
                  hobbies: ['打篮球','跑步','唱歌','跳舞'],
                  empList: [
                      {id:1,name:'张三',age:18},
                      {id:2,name:'李四',age:19},
                      {id:3,name:'王五',age:20},
                      {id:4,name:'赵六',age:21}
                  ]
              }
          },
          methods: {
              deleteEmp(index) {
                  this.empList.splice(index,1)
              }
          },
      }
})()