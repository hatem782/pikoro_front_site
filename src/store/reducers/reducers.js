import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocal = (state)=>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    }catch (e) {
        console.log(e);
    }
}

function loadFromLocal (){
    try{
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    }catch (e) {
        console.log(e)
        return undefined;
    }
}



const CategArt =(state=[],action)=>{
    switch(action.type){
        case "GetAllCategoriesArticles":
            return action.value;
        default:
            return state;
    }
}

const Articles =(state=[],action)=>{
    switch(action.type){
        case "GetAllArticles":
            return action.value;
        default:
            return state;
    }
}

const OneArticle =(state=null,action)=>{
    switch(action.type){
        case "GetOneArticle":
            return action.value;
        case "CloseArticle":
            return null;
        default:
            return state;
    }
}

const CategProj =(state=[],action)=>{
    switch(action.type){
        case "GetAllCategoriesProjects":
            return action.value;
        default:
            return state;
    }
}



const Project =(state=[],action)=>{
    switch(action.type){
        case "GetAllProjects":
            return action.value;
        default:
            return state;
    }
}

const OneProject=(state=null,action)=>{
    switch(action.type){
        case "GetOneProject":
            return action.value;
        case "CloseProject":
            return null;
        default:
            return state;
    }
}

const Contacts =(state=[],action)=>{
    switch(action.type){
        case "GetAllContacts":
            return action.value;
        default:
            return state;
    }
}





const allReducers = combineReducers({
    CategArt:CategArt,
    Articles:Articles,
    OneArticle:OneArticle,
    CategProj:CategProj,
    Project:Project,
    OneProject:OneProject,
    Contacts:Contacts,
});


//const load = loadFromLocal();
const store = createStore(
    allReducers, //load,
    composeEnhancer((applyMiddleware(thunk))),
)

//store.subscribe(()=>saveToLocal(store.getState()));

export  {store};

