//闭包隐藏数据，只提供API
function createCache() {
  let data = {};//闭包中的数据被隐藏不被外界访问
  return {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
  };
}

const c=createCache()
c.set('a',100)
console.log(c.get('a'))
