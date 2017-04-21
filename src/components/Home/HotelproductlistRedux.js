const initialState={
   loading:true,
    error:false,
	articlesList:{},
}

const LOAD_ARTICLES="LOAD_ARTICLES_HOTEL";
const LOAD_ARTICLES_SUCCESS="LOAD_ARTICLES_HOTEL_SUCCESS";
const LOAD_ARTICLES_ERROR="LOAD_ARTICLES_HOTEL_ERROR";

export function loadHotelArticles() {
   return {
      types:[LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
		url:'/hotelproductlist.json',
   };
}

function linerproductList( state=initialState,action){
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


export default linerproductList;