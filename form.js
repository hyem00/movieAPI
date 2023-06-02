function sarchMovie() {
  let keyword = document.getElementById("srarch-input").value;

  //소문자로 모두 변환
  //   let titleList = movies.map((item) => {
  //     return item.title.toLowerCase();
  //   });
  let result = [];

  if (keyword != "") {
    for (const movie of movies) {
      if (movie.title.includes(keyword)) {
        result.push(movie);
      }
    }
  }

  //나온걸로 재구성하기
  const cardList = document.querySelector(".card-list");
  //다시 html로 넣어준다
  cardList.innerHTML = "";
  result.forEach((x) => {
    let _id = x["id"];
    let _title = x["title"];
    let _overview = x["overview"];
    let _poster_path = x["poster_path"];
    let _vote_average = x["vote_average"];
    let temp_html = `
      <div class="movie-card" data-id="${_id}">
          <img src="https://image.tmdb.org/t/p/w500${_poster_path}">
          <h3>${_title}</h3>
          <p>${_overview}</p>
          <p>Rating: ${_vote_average}</p>
      </div>`;
    // 가장 마지막 노드에 붙여주라는 말
    cardList.insertAdjacentHTML("beforeend", temp_html);
  });
}
