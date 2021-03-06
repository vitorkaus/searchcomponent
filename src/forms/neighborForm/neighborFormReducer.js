const INITIAL_STATE = {bairrosList: []}

export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case "BAIRROS_LIST_FETCHED":{          
            const list = []

            if(action.payload.data.features){
                for(var i in action.payload.data.features){
                    list.push(action.payload.data.features[i].properties.NOME)
                }
            }
        
            return {...state, bairrosList: list}
        }
        default:
            return state
    }
}
