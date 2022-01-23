export default{
    namespaced:true,
    state:{
        isAdd:"true",
        addList:[]
    },
    mutations:{
        addInList(state,data){
            console.log("state",state);
            console.log("data",data);
        }
    }
}