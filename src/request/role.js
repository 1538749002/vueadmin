import $axios from "@/common/http"//导入封装好的http
// 角色菜单
export async function getRole() {
    let res = await $axios.get("/rolelist")
    if(res.code==200 && res.list){
        return res.list
    }else{
        return []
    }
 
}
//添加角色
export function addRole(data) {
  return $axios.post("/roleadd", data)
}
//修改角色
export function editRole(data) {
   return $axios.post("/roleedit",data)
}
//删除角色
export function delRole(id) {
   return $axios.post("/roledelete",{id})  
} 