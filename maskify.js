// return masked string except for the last 4 digits
function maskify(cc) {
    arr = cc.split('');
    for (let i = 0; i < arr.length-4; i++){
      arr[i] = '#';
    }
    return arr.join('')
  }
  
  maskify('4556364607935616');