(()=>{
    const e_userInfo = document.querySelector('.userInfo');
    
    // 从本地获取用户信息
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    
    if(userInfo){
        e_userInfo.innerHTML = `<li class="layui-nav-item">${userInfo.username} <button type="button" class="layui-btn layui-btn-primary layui-btn-xs btnLogout" >退出</button></li>`;
        
        // 发送token到后端校验
        request('/user/verify',{
            headers:{
                Authorization:userInfo.authorization
            }
        }).then((result)=>{
            if(result.code === 401){
                logout();
            }
        })
    
    }
    
    // 退出登录
    e_userInfo.onclick = (e)=>{
        if(e.target.classList.contains('btnLogout')){
            logout();
        }
    }
    
    
    function logout(){
        localStorage.removeItem('userInfo');
        location.reload();
    }

})();