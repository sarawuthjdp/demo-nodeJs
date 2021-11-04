function calculate(x,y,callback){
    console.log('กำลังคำนวน...')
    setTimeout(()=>{
        callback(x+y) 
    },3000)
}

calculate(10,5, (result)=>console.log('ผลบวก = ',result))
