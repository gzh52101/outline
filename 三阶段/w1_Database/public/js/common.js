const userInfo = JSON.parse(localStorage.getItem('userInfo'))

const e_userInfo = document.querySelector('.userInfo');

if(userInfo){
    e_userInfo.innerHTML = `<li class="layui-nav-item">${userInfo.username} <button type="button" class="layui-btn layui-btn-primary layui-btn-xs btnLogout" >退出</button></li>`;

}
e_userInfo.onclick = (e)=>{
    if(e.target.classList.contains('btnLogout')){
        localStorage.removeItem('userInfo');
        location.reload();
    }
}