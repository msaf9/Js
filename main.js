function upload() {
  const set = new Set();
  var path = document.getElementById("upload");
  var size = document.getElementById("upload").files.length;
  const filename = [];
  const filetype = [];
  const filesize = [];
  const getExtension = (str) => str.slice(str.lastIndexOf("."));
  var i = 0;
  for (i = 0; i < size; i++) {
    filename[i] = path.files[i].name;
    filetype[i] = getExtension(filename[i]);
    set.add(filetype[i]);
    filesize[i] = Math.round(path.files[i].size / 1024);

    document.getElementById("result").innerHTML = "File name: " + filename[i];
    document.getElementById("type").innerHTML = "File type: " + [...set];
    document.getElementById("size").innerHTML = "File type: " + filetype[i];
  }

  console.log(set);
  document.getElementById("result").innerHTML = JSON.stringify(
    "File name: " + filename
  );
  document.getElementById("type").innerHTML = JSON.stringify(
    "File type: " + [...set]
  );
  document.getElementById("size").innerHTML = JSON.stringify(
    "File size: " + filesize + " " + "KB"
  );
}
