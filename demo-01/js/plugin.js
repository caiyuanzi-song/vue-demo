(function(){
    const MyPlugin = {}

    MyPlugin.install = function(Vue,options){
        // 1、添加全局方法
        Vue.myGlobalMethod = function(){
            alert('MyPlugin插件：全局方法生效')
        }

        // 2、添加全局指令
        Vue.directive('my-directive',{
            inserted:function(el,binding){
                el.innerHTML = "MyPlugin插件my-directive:" + binding.value
            }
        })

        // 3、添加实例方法
        Vue.prototype.$myMethod = function(methodOption){
            alert('Vue实例方法生效：' + methodOption)
        }
    }

    // 将插件添加到window对象中
    window.MyPlugin = MyPlugin
})()//不要少了小括号，让它立即生效