const initialState={
   loading:true,
    error:false,
	articlesList:{},
}

const LOAD_ARTICLES="LOAD_ARTICLES_SCENICSPOT";
const LOAD_ARTICLES_SUCCESS="LOAD_ARTICLES_SCENICSPOT_SUCCESS";
const LOAD_ARTICLES_ERROR="LOAD_ARTICLES_SCENICSPOT_ERROR";

export function loadScenicspotArticles() {
   return {
      types:[LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
		url:'/scenicspotproductlist.json',
   };
}

function scenicspotproductList( state=initialState,action){
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
			error:false,
		 };
	 }
     
	 default:
		 return state;

   }
}


export default scenicspotproductList;