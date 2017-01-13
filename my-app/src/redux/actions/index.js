export const Tick =  () =>{
    // console.log("called tick");
    return{
        type : 'Tick',
        payload : true
    }
}


export const UnTick =  () =>{
    // console.log("called untick");
    return{
        type : 'UnTick',
        payload : true
    }
}


export const RadioON =  () =>{
    // console.log("called tick");
    return{
        type : 'RadioON',
        payload : true
    }
}


export const RadioOFF =  () =>{
    // console.log("called untick");
    return{
        type : 'RadioOFF',
        payload : true
    }
}




export const ToggleON =  () =>{
    // console.log("called Toggle ON");
    return{
        type : 'ON',
        payload : true
    }
}


export const ToggleOFF =  () =>{
    console.log("called Toggle OFF");
    return{
        type : 'OFF',
        payload : true
    }
}
