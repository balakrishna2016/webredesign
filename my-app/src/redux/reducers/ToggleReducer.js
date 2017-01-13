export default (state = null,action) => {

   switch(action.type){
       case 'ON':
       return true

       case 'OFF':
       return false

       default:
       return false
   }



}
