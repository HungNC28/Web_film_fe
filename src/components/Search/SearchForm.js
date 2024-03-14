import React, { useState, useEffect } from "react";
import classes from "./SearchForm.module.css";
import { BASE_URL, token } from "../../utils/const";
import ResultsList from "./ResultList";
import YearSelectForm from "./YearSelectForm";

const SearchForm = () => {
  const [keywords, setKeywords] = useState("");
  const [genre, setGenre] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // xử lý sự kiện khi nhấn nút Enter để submit
  const keyDownHandle = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const resetHandle = () => {
    setKeywords("");
    setGenre("");
    setMediaType("");
    setLanguage("");
    setYear("");
    setSearchResults([]);
  };

  // bắt sự kiện khi kích vào nút Search
  const handleSubmit = async (e) => {
    const url = `${BASE_URL}/search?token=${token}&keyword=${keywords}`;
    if (keywords) {
      const respone = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword: keywords,
          genre: genre,
          language: language,
          mediaType: mediaType,
          year: year,
        }),
      });
      const data = await respone.json();
      if (!data || !data.results) setSearchResults([]);
      else setSearchResults(data.results);
    }

    try {
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <div className={classes.SearchForm}>
        <form className={classes.FormInput}>
          <input
            type="text"
            onChange={(e) => setKeywords(e.target.value)}
            value={keywords}
            autoFocus={true}
            onKeyDown={keyDownHandle}
          />
          <svg
            width="30"
            height="30"
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </form>
        <div className={classes.button}>
          {/* xử lý sự kiện khi kích vào nút reset  */}
          <button className={classes.btnReset} onClick={resetHandle}>
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className={classes.btnSearch}
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <div className={classes.selectForm}>
        <form className={classes.select}>
          <label htmlFor="genre">Tên thể loại:</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            name="genre"
          >
            <option value="28">Phim Hành Động</option>
            <option value="12">Phim Phiêu Lưu</option>
            <option value="16">Phim Hoạt Hình</option>
            <option value="35">Phim Hài Kịch</option>
            <option value="80">Phim Tội Phạm</option>
            <option value="99">Phim Tài Liệu</option>
            <option value="18">Phim Chính Kịch</option>
            <option value="10751">Phim Gia Đình</option>
            <option value="14">Phim Viễn Tưởng</option>
            <option value="36">Phim Lịch Sử</option>
            <option value="27">Phim Kinh Dị</option>
            <option value="10402">Phim Âm Nhạc</option>
            <option value="9648">Phim Bí Ẩn</option>
            <option value="10749">Phim Lãng Mạn</option>
            <option value="878">Phim Khoa Học Viễn Tưởng</option>
            <option value="10770">Phim TV</option>
            <option value="53">Phim Giật Gân</option>
            <option value="10752">Phim Chiến Tranh</option>
            <option value="37">Phim Miền Tây</option>
          </select>
        </form>
        <form className={classes.select}>
          <label htmlFor="mediaType">Thể loại:</label>
          <select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
            name="mediaType"
          >
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="tv">TV</option>
            <option value="person">Person</option>
          </select>
        </form>
        <form className={classes.select}>
          <label htmlFor="language">Ngôn ngữ:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            name="language"
          >
            <option value="en">Tiếng Anh</option>
            <option value="ja">Nhật Bản</option>
            <option value="ko">Hàn Quốc</option>
          </select>
        </form>
        <div className={classes.select}>
          <YearSelectForm year={year} setYear={setYear} />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Filter
        </button>
      </div>
      <div className={classes.listFilm}>
        {/* hiện danh sách phim search */}
        {searchResults.length > 0 && <ResultsList movies={searchResults} />}
      </div>
    </div>
  );
};
export default SearchForm;
