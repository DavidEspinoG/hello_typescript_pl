(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string, 
    createdAt: Date, 
    stock: number, 
    size: Sizes
  ){
    return {
      title, 
      createdAt, 
      stock,
      size
    }
  };

  const producto1 = createProductToJson('asdf', new Date(), 12, 'XL');
  console.log(producto1);


  const createProductToJsonV2 = (
    title: string, 
    createdAt: Date, 
    stock: number, 
    size: Sizes
  ) => {
    return {
      title, 
      createdAt, 
      stock,
      size
    }
  };

})();