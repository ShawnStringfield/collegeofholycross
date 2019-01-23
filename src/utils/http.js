export default (data) => {
  return new Promise((resolve, reject) => {
    fetch(data).then(resp => {
      if (data) resolve(resp.json());
    });
  });
}
