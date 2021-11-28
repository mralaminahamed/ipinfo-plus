/**
 * IP Info Plus
 * Developer: Al-Amin Ahamed
 * Website: https://www.mishusoft.com
 * Home: https://mishusoft.com/browser/addons/ipinfoplus/
 * license : GPL-3.0-only
 * */

document.addEventListener('load',function (e) {
    console.log(e)
})

fetch('https://www.mishusoft.com/api/tools/query').then(function(res){
    console.log(res);
    
}).catch(function(err){
    console.log(err);
    
})

fetch('https://www.mishusoft.com/api/tools/query')
  .then(response => response.json())
  .then(data => console.log(data));

console.log('page ready')