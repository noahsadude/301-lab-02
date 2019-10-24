function ImgData(image_url,title,description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

ImgData.allData = [];

//read data to the constructor function

ImgData.read = () => {
  $.get('data/page-1.json','json')
    .then(dataset => {
      dataset.forEach(item => {
        ImgData.allData.push(new ImgData(item));
      });
    })
}

//TODO:render the data to the page
const render = functon(){

}

//TODO:Initialize the read and render

//TODO:listen for filtering