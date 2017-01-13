export default (state = null,action) => {

   switch(action.type){
       case 'Tick':
       return true

       case 'UnTick':
       return false

       default:
       return false
   }



}
