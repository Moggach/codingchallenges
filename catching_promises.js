const users = [{ name: 'Sam' }, { name: 'James' }];

function findUserName(name) {
  const userName = users.find((x) => x.name === name);
  if (userName === undefined) {
    return Promise.reject(new Error('user does not exist'));
  } else {
    return Promise.resolve(userName);
  }
}

findUserName('Sam');
//write a catch statement for the below rejected promise that fulfills with undefined
findUserName('Tom');

//----SOLUTION
.catch(error => undefined);