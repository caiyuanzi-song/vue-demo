;(function(){
    const template = ` <tr>
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.age}}</td>
    <td><a href="#" @click="deleteItem">删除</a></td>
  </tr>`
    
    window.Item = {
        template,
        props: {
            emp: {
                type: Object,
                required: true
            },
            deleteEmp: Function,
            index: Number
        },
        methods: {
            deleteItem(){
                if(window.confirm('确定删除'+ this.emp.name +'的记录吗？')){
                    this.deleteEmp(this.index)
                }
            }
        },
    }
})()