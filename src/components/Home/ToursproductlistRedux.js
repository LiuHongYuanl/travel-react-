const initialState={
  loading:true,
  error:false,
  articlesList:{},
};

const LOAD_ARTICLES='LOAD_ARTICLES_TOUES';
const LOAD_ARTICLES_SUCCESS="LOAD_ARTICLES_TOURS_SUCCESS";
const LOAD_ARTICLES_ERROR="LOAD_ARTICLES_TOURS_ERROR";

export function loadArticles() {
   return {
      types:[LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
	   url:'/homeproductlist.json',
   };
}

function homeproductList( state = initialState, action){
   switch (action.type){
   case LOAD_ARTICLES:{
     return {
	    ...state,
		loading:true,
		error:false
	 };
   }

   case LOAD_ARTICLES_SUCCESS:{
     return {
	    ...state,
		loading:false,
		error:false,
		articlesList:action.payload,
	 };
   }

   case LOAD_ARTICLES_ERROR:{
      return {
	    ...state,
		loading:false,
		error:true,
	  };
   }

   default:
	   return state;
   }
}

export default homeproductList;
