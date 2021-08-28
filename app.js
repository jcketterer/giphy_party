const $gifSpace = $('#gif-space');
const $search = $('#search');

function insertGif(res) {
  let resultList = res.data.length;
  if (resultList) {
    let randomIndex = Math.floor(Math.random() * resultList);
    let $col = $("<div>", { class: 'col-md-4 col-12 mb-4' });
    let $gif = $("<img>", { src: res.data[randomIndex].images.original.url, class: 'w-100 rounded' });
    $col.append($gif);
    $gifSpace.append($col);
  }
};

$('form').on('submit', async function (e) {
  e.preventDefault();

  let searchQuery = $search.val();
  $search.val('');

  const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchQuery,
      api_key: 'YycWNpcc5qcsqXh50hZclnK01mAh8jdL'
    }
  });
  insertGif(res.data);
});

$('#remove').on('click', function () {
  $gifSpace.empty();
});















