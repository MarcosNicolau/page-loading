const getProducts = (contentPageLimit, searchResults, length) => {
  //Filter products based on the length
  const searchLimit = searchResults.filter((_result, index) => index >= length && index < +length + contentPageLimit);
  //Set products info
  return searchLimit.map((result) => {
    return {
      id: result._id,
      image: result.images[0],
      name: result.name,
      price: result.price,
    };
  });
};

const getPages = (contentPageLimit, searchResults) => {
  //Get the total page
  const totalPages = Math.ceil(searchResults.length / contentPageLimit);

  //Set the start of each page
  const pages = [];
  let pageLength = 0;
  for (let i = 1; i <= totalPages; i++) {
    pages.push(pageLength);
    pageLength += contentPageLimit;
  }

  return pages;
};

module.exports.getProducts = getProducts;
module.exports.getPages = getPages;
