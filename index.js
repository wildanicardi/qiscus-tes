const inventory = {
  inventory1: [
    {
      type: 'Book',
      title: 'Jurrasic Park'
    }, {
      type: 'Car',
      brand: 'Mercedes Benz'
    }, {
      type: 'Smartphone',
      brand: 'Samsung',
      operating_system: 'Android'
    }, {
      type: 'Car',
      brand: 'Ferari'
    }, {
      type: 'Book',
      title: 'Harry Potter and The Chamber of Secret'
    }
  ],
  inventory2: [
    {
      type: 'Car',
      brand: 'Tesla'
    }, {
      type: 'Smartphone',
      brand: 'Apple',
      operating_system: 'iOS'
    }, {
      type: 'Smartphone',
      brand: 'Xiaomi',
      operating_system: 'Android'
    }, {
      type: 'Book',
      title: 'Learning Data Mining with Python'
    }
  ]
}

const result =  () => {

  let inventory1 = inventory.inventory1
  let inventory2 = inventory.inventory2

  const concactInventory = inventory1.concat(inventory2);

  typeProduct = concactInventory.map(function (key) {
      data = key.type
      return data
  });

  const type = [...new Set(typeProduct)];
  let i = 1
  let b = 0

  const filterType = type.map(function (dataKey) {

      let typeResult = i + '. ' + dataKey
      i++
      let filterInventory = [];
      filterInventory = concactInventory.filter((key) => {
          return key.type === dataKey
      });

      let product = filterInventory.map(function (key) {

          if (key.type === "Book") {
              a = "1."
              b += 1
              data = a + "" + b + " " + key.title
          } else if (key.type === "Car") {
              a = "2."
              b += 1
              data = a + "" + b + " " + key.brand
          } else {
              a = "3."
              b += 1
              data = a + "" + b + " " + key.brand + "(" + key.operating_system + ")"
          }
          return data
      });

      product.unshift(typeResult);
      let dataProduct = product.join('\n')
      return dataProduct

  });

  results = filterType.join('\n')
  return results
}
console.log(result())