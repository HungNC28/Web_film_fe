export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
export const token = "RYoOcWM4JW";
export const BASE_URL = "https://web-film-be.onrender.com/api/movies";

export const MOVIE_INFO = [
    { label: "", url: `/trending?token=${token}` },
    {
        label: "Xu hướng",
        url: `/trending?token=${token}`,
    },
    {
        label: "Xếp hạng cao",
        url: `/top-rate?token=${token}`,
    },
    {
        label: "Hành động",
        url: `/discover?token=${token}&genre=28`,
    },
    {
        label: "Hài",
        url: `/discover?token=${token}&genre=35`,
    },
    {
        label: "Kinh dị",
        url: `/discover?token=${token}&genre=27`,
    },
    {
        label: "Lãng mạn",
        url: `/discover?token=${token}&genre=10749`,
    },
    {
        label: "Tài liệu",
        url: `/discover?token=${token}&genre=99`,
    },
];
