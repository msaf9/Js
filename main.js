function upload() {
  var path = document.getElementById("upload");
  var filename = path.files[0].name;
  document.getElementById("result").innerHTML = "File name: " + filename;
  console.log(filename);
}
