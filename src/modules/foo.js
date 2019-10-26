module.exports = function (cb) {
  // some instructions
  let i = 1;
  for(;i<10;) i=i + i*(i-1);
  cb(i);
}