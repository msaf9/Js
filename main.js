function upload() {
  var path = document.getElementById("upload");
  var size = document.getElementById("upload").files.length;
  console.log(size);
  const filename = [];
  var i = 0;
  for (i = 0; i < size; i++) {
    filename[i] = path.files[i].name;

    document.getElementById("result").innerHTML = "File name: " + filename[i];
    console.log(filename[i]);
  }
  document.getElementById("result").innerHTML = JSON.stringify(
    "File name: " + filename
  );
  // var filename = path.files[0].name;
  // var filename1 = path.files[1].name;
  // document.getElementById("result").innerHTML = "File name: " + filename;
  // document.getElementById("result").innerHTML = "File name: " + filename1;
  // console.log(filename);
  // console.log(filename1);
}
