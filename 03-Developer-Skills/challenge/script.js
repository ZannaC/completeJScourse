const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data2);

//////////////////////
function nameString(name){
  	return 'Edabit' + name;
} 
console.log(nameString('Zanna')); 
console.log(nameString('Jonas')); 
console.log('\n');

let name2String = function (name2) {
  return 'Edabit' + name2;
}
console.log(name2String('Zanna2'));
console.log(name2String('Jonas2'));
console.log('\n');

const  name3String= (name3) => 'Edabit' + name3;
console.log(name3String('Zanna3'));
console.log(name3String('Jonas3'));