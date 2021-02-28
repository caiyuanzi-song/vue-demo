;(function(){
    const template = ` <tr>
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.age}}</td>
  </tr>`
    
    window.Item = {
        template,
        props: {
            emp: {
                type: Object,
                required: true
            }
        }
    }
})()