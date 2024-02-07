console.log("Hash Table");

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

function itemsInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) return true;
  }
  return false;
}
let arr1 = [1, 3, 5];
let arr2 = [9, 6, 5];

let myHashTable = new HashTable();
myHashTable.set("surya", 100);
myHashTable.set("sathya", 101);
myHashTable.set("uma", 200);
myHashTable.set("jothi", 210);
myHashTable.set("john", 21);
myHashTable.set("doe", 121);

console.table(myHashTable.dataMap);
console.log(myHashTable.get("jothi"));
console.log(myHashTable.keys());
console.log(itemsInCommon(arr1, arr2));
