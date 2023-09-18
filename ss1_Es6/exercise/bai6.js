const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}
const sv2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}
const getInfo = ({firstName = 'Quân', degree = 'N/A'}) => {
    console.log(firstName);
    console.log(degree);
}
getInfo(sv2);