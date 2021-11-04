const url1='zen.dev/file1.json'
const url2='zen.dev/file2.json'
const url3='zen.dev/file3.json'

function downloading(url,callback){
    console.log(`กำลังโหลดไฟล์ ${url}`)
    setTimeout(()=>{
        callback(url);
    },3000)
}

downloading(url1,(result)=>{
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
    downloading(url2,(result)=>{
        console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        downloading(url3,(result)=>{
            console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
        })
    })
})