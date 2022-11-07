export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //To be removed after finshed developing..
      //token:"BQBcKMUvHKKlj8rV8ofYnDvkoRjPNVy0Ou61lNhh-ZGdbEHHDJ3cj_-cQMdTkCOPGEAMOb-L2IK3uCRTo0I__vU57XfAp-1agRnML7WV1ZUIohpNHXwj74yEOJI7hqkOAI6ZhNPFYAaBI08c0yq7wrXUf3OCOWBV0kOujPiGobdcap6sJf-YrbPq7PpfDqcuoItaeXUYGqA3IwO7Jdec"

};
const reducer=(state,action)=>{
console.log(action)
switch(action.type){
    case "SET_USER":
        return{
            ...state,
            user:action.user,
        };
        case "SET_TOKEN":
            return {
                ...state,
                user:action.user,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                token:action.playlists,
            } 
         case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                playlists:action.discover_weekly
            }      
        default:
            return state;
}

}
export default reducer