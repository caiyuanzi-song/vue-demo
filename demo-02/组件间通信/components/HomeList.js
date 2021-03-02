;(function(){
    const template = ` <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <Item v-for="(emp,index) in empList" :key="emp.id" :emp="emp" :deleteEmp="deleteEmp" :index="index"/>
      </tbody>
    </table>
  </div>`
   window.HomeList = {
       template,
       data(){
           return{
               name: '菜园子'
           }
       },
       props: {
         empList: Array,
         deleteEmp: Function
       },
       components: {
         Item
       }
   }
})()