function validateUsr(username) {
  res =  /^[a-z_\d]{4,16}$/.test(username);
  console.log(res);
  return res
}