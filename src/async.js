function fetchData () {
  return Promise.resolve('better');
};

function failData() {
  return Promise.reject('error')
}

module.exports = {fetchData, failData};
// export default fetchData;