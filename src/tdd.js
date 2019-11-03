function format2Date (time) {

  const _d = new Date(time);

  const seconds = _d.getSeconds();
  const minutes = _d.getMinutes();
  const hours = _d.getHours();
  
  return {
    hours,
    minutes,
    seconds,
  }
};

module.exports = format2Date;