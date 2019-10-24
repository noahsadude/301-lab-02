function ImgData(image_url,title,description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

ImgData.allData = [];

ImgData.prototype.render = functon(){
  
}

ImgData.read = () => {
  $.get('data/page-1.json','json')
    .then(data => {
      data.forEach(item => {
        ImgData.allData.push(new ImgData(item));
      });
    })
    .then()
}