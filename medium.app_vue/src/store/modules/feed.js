import feeedApi from '@/api/feed.js';

const state = {
    data:null,
    isLoading:false,
    error:null
}

export const mutationTypes = {
    getFeedStart: '[feed] Get feed start',
    getFeedSuccess: '[feed] Get feed success',
    getFeedFailure: '[feed] Get feed failure',
}

export const actionTypes = {
    getFeed:'[feed] Get feed'
}

const mutations = {
    [mutationTypes.getFeedStart](state){
        state.isLoading = true;
        state.data = null;
    },
    [mutationTypes.getFeedSuccess](state,payload){
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getFeedFailure](state){
        state.isLoading = true;
       
    }

}


const actions = {
    [actionTypes.getFeed]({commit},apiUrl){
        return new Promise(resolve => {
            commit(mutationTypes.getFeedStart);
            feeedApi.getFeed(apiUrl)
            .then( response => {
                commit(mutationTypes.getFeedSuccess, response.data);
                resolve(response.data);
            })
            .catch(err => {
                console.log(err);
                commit(mutationTypes.getFeedFailure);
            })

        })
    }
}



export default{
    state,
    mutations,
    actions,
    
}