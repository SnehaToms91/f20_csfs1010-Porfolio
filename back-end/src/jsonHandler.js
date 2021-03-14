
import util from 'util'
import fs from 'fs'
import path from 'path'

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const dbUserPath=path.resolve("data/users.json");






async function readUserItems() {
  const json = await readFile(dbUserPath);
  return JSON.parse(json);
}


async function writeUserItems(items) {
 
  const json = JSON.stringify(items, null, 2);
  return writeFile(dbUserPath, json);
}


async function getUserById(id) {
  const items = await readUserItems(); 
  let matchedItem;
  items.forEach((item) => {
    if (item.id === id) {
      matchedItem = item;
    }
  });

  if (matchedItem) {
    return matchedItem;
  }
  return null;
}


async function createUserItem(newItem) {
  const items = await readUserItems();
  items.push(newItem); 
  return writeUserItems(items);
}

export {
  
  getUserById,
  createUserItem,
  readUserItems
};
