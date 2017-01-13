export default (state = null,action) => {

   switch(action.type){
       case 'RadioON':
       return true

       case 'RadioOFF':
       return false

       default:
       return false
   }



}
