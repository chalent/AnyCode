const createReactiveObject = (target, callback) => {
  const handler = {
    get(object, prop) {
      return object[prop]
    },
    set(object, prop, value) {
      console.log("值改变", prop, object)
      const oldVal = object[prop];
      if (oldVal !== value) {
        callback(prop, oldVal, value)
      }
      object[prop] = value;
      return true;
    }
  }

  return new Proxy(target, handler);
}

const user = {
  name: "Smith"
}

const reactiveUser = createReactiveObject(user, (key, old, newVal) => {
  console.log(`属性${key}的值从${old}变成了${newVal}`)
})

reactiveUser.name = "John";

reactiveUser.name = "Welsion";