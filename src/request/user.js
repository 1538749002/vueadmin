import $axios from "@/common/http"//导入封装好的http
// 获取菜单
export async function getUser(page=1,size=10) {
    let res = await $axios.get("/userlist",{
        params:{
            size,
            page
        }
    })
    if(res.code==200 && res.list){
        return res.list
    }else{
        return []
    }
    console.log(res) 
}
//添加菜单
export function addUser(data) {
  return $axios.post("/useradd", data)
}
//修改菜单
export function editUser(data) {
   return $axios.post("/useredit",data)
}
//删除菜单
export function delUser(uid) {
   return $axios.post("/userdelete",{uid})  
} 
//获取管理员个数
export async function getTotal() {
   let res = await $axios.get("/usercount")
   return res.list[0].total
}
//管理员登录
export async function Login(data) {
    return $axios.post("/userlogin",data)
 }
 

