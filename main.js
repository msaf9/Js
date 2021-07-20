function upload() {
  var path = document.getElementById("upload");
  var size = document.getElementById("upload").files.length;
  console.log(size);
  const filename = [];
  const filetype = [];
  const getExtension = (str) => str.slice(str.lastIndexOf("."));
  var i = 0;
  for (i = 0; i < size; i++) {
    filename[i] = path.files[i].name;
    filetype[i] = getExtension(filename[i]);

    document.getElementById("result").innerHTML = "File name: " + filename[i];
    document.getElementById("type").innerHTML = "File type: " + filetype[i];
    console.log(filename[i]);
    console.log(filetype[i]);
  }
  document.getElementById("result").innerHTML = JSON.stringify(
    "File name: " + filename
  );
  document.getElementById("type").innerHTML = JSON.stringify(
    "File type: " + filetype
  );
}
