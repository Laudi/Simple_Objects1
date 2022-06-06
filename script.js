const meInfo = {
    name: 'Alex',
    gender: 'Male',
    birthday: '24 December'
};
console.log(meInfo.birthday);

const user = {
    firstName: 'John',
    lastName: 'Smith',
    birthDate: '1960-05-14',
    department: 'management',
    isActive: true
}
user.age = 25;
delete user.birthDate;
console.log(user);

const stockItem = {
    id: 285867,
    place: 34,
    weight: 23
};

console.log(stockItem);

const shopItem = {
    ...stockItem,
    price: 34
};
delete shopItem.place;
//shopItem.price = 34;
console.log(shopItem);
