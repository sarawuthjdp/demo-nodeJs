const url1 = "zen.dev/file1.json";
const url2 = "zen.dev/file2.json";
const url3 = "zen.dev/file3.json";

const connect = true;
function downloading(url) {
  return new Promise((resovle, reject) => {
    console.log(`กำลังดาวน์โหลด...`);
    setTimeout(() => {
      if (connect) {
        resovle(`โหลด ${url} เรียบร้อย`);
      } else {
        reject(`เกิดข้อผิดพลาด`);
      }
    }, 1000);
  });
}

async function start() {
  console.log(await downloading(url1));
  console.log(await downloading(url2));
  console.log(await downloading(url3));
}

start();
//PromiseHell
// downloading(url1).then((result)=>{
//     console.log(result)
//     downloading(url2).then((result)=>{
//         console.log(result)
//         downloading(url3).then((result)=>{
//             console.log(result)
//         })
//     })
// })

// downloading(url1)
//   .then((result) => {
//     console.log(result);
//     return downloading(url2);
//   })
//   .then((result) => {
//     console.log(result);
//     return downloading(url3);
//   })
//   .then((result) => {
//     console.log(result);
//   });
