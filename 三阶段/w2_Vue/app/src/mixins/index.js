export const userMixin = {
    minxins:[],
    data(){
        return {
            userInfo:{
                username:'laoxie',
                role:'admin'
            }
        }
    },
    methods:{
        login(data){
            this.userInfo = data
        },
        logout(){
            this.userInfo = {}
        }
    }
}
