var user = {
    Name:'Giorgi',
    Age: 20,
    StudentStatus:'Active;'
}

if (user['Age']<18 && user ['StudentStatus'] =='Active') {
    console.log('Hello') 
}
 else if (user['Name']== 'Levan') {
    console.log('Hello Giorgi')
}
else if (user['StudentStatus' ]== 'Active' || user['Age'] < 25) {

    console.log('Hello World') 
}

else { 
    console.log('Error')
}