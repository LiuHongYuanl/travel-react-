export default function generateReduxr(prefix,state){

const initialState={
   loading:true,
   error:false,
   articlesList:{}
}

const LOAD_ARTICLES=prefix+"_LOAD_ARTICLES_ROUTER";
const LOAD_ARTICLES_SUCCESS=prefix+"_LOAD_ARTICLES_ROUTER_SUCCESS";
const LOAD_ARTICLES_ERROR=prefix+"_LOAD_ARTICLES_ROUTER_ERROR";



return function productList( state=initialState,action){
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

}



export function actionCreate(prefix){

   const LOAD_ARTICLES=prefix+"_LOAD_ARTICLES_ROUTER";
   const LOAD_ARTICLES_SUCCESS=prefix+"_LOAD_ARTICLES_ROUTER_SUCCESS";
   const LOAD_ARTICLES_ERROR=prefix+"_LOAD_ARTICLES_ROUTER_ERROR";

  return function loadArticles(url,activePage,select,priceStart,priceEnd,timeStart, timeEnd,destinationStart,destinationEnd) {
   return {
	    url:url,
		params:{
		  activePage:encodeURI(activePage),
			  select:encodeURI(select),
			  priceEnd:encodeURI(priceEnd),
			  timeStart:encodeURI(timeStart),
			  timeEnd:encodeURI(timeEnd),
			  destinationStart:encodeURI(destinationStart),
			  destinationEnd:encodeURI(destinationEnd)
		},
        types:[LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
		/*url:`${url}?
		activePage=${activePage}
		&select=${select}
		&priceStart=${priceStart}
		&priceEnd=${priceEnd}
		&timeStart=${timeStart}
		&timeEnd=${timeEnd}
		&destinationStart=${destinationStart}
		&destinationEnd=${destinationEnd}
		`,	*/   
   };
}
}



