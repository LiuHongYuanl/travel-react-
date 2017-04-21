import { combineReducers }  from 'redux';


const initialState={
   loading:true,
   error:false,
   product:''
}

const LOAD_PRODUCT="LOAD_PRODUCT";
const LOAD_PRODUCT_SUCCESS="LOAD_PRODUCT_SUCCESS";
const LOAD_PRODUCT_ERROR="LOAD_PRODUCT_ERROR";



function someproduct( state=initialState,action){
   switch (action.type){
     case LOAD_PRODUCT:{
         return {
		     ...state,
			 loading:true,
			 error:false
		 };
     }
     
	 case LOAD_PRODUCT_SUCCESS:{
	    return {
		    ...state,
				loading:false,
				error:false,
				product:action.payload,
		};
	 }

     case LOAD_PRODUCT_ERROR:{
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

 /*function loadArticles(select,priceStart,priceEnd,timeStart, timeEnd,destinationStart,destinationEnd,activePage,url) {
   return {
      types:[LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
		url:'/routertoursproductlist.json',
       params: {
		  activePage, 
          select,
          priceStart,
		  priceEnd,
		  timeStart,
		  timeEnd,
		  destinationStart,
		  destinationEnd
       },
   };
}


return {
	productList,
   loadArticles
};*/






 function loadProduct(url,id) {
   return {
	    url:url,
		params:{
		  id:encodeURI(id),
		},
        types:[LOAD_PRODUCT,LOAD_PRODUCT_SUCCESS,LOAD_PRODUCT_ERROR], 
   };
}




const initialState1={
   loading:true,
   error:false,
   commentproduct:''
}

const LOAD_COMMENT="LOAD_COMMENT";
const LOAD_COMMENT_SUCCESS="LOAD_COMMENT_SUCCESS";
const LOAD_COMMENT_ERROR="LOAD_COMMENT_ERROR";

function comment( state=initialState1,action){
   switch (action.type){
     case LOAD_COMMENT:{
         return {
		     ...state,
			 loading:true,
			 error:false
		 };
     }
     
	 case LOAD_COMMENT_SUCCESS:{
	    return {
		    ...state,
				loading:false,
				error:false,
				commentproduct:action.payload,
		};
	 }

     case LOAD_COMMENT_ERROR:{
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


 function loadComment(url,id,pageCurrent) {
   return {
	    url:url,
		params:{
		  id:encodeURI(id),
		  pageSize:encodeURI(3),
		  pageCurrent:encodeURI(pageCurrent)
		},
        types:[LOAD_COMMENT,LOAD_COMMENT_SUCCESS,LOAD_COMMENT_ERROR], 
   };
}






export default combineReducers({
  someproduct,
  comment
});


export { loadProduct,loadComment } ;




