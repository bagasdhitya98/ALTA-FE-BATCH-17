import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModeContext } from "../../context/modeContext";

import axios from "axios";
import Cookies from "js-cookie";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Swal from "sweetalert2";

const News = () => {
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const { handleToggle, toggle } = useModeContext();

  const [news, setNews] = useState<[]>([]);
  const [category, setCategory] = useState<string>("");

  const getNews = (category: string) => {
    axios
      .get(
        `top-headlines?country=us&category=${
          category ? category : "business"
        }&apiKey=${apiKey}`
      )
      .then((response) => {
        setNews(response?.data?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clickDetail = (item: any) => {
    const username = Cookies.get("username");
    if (username) {
      navigate("/news/detail", {
        state: {
          item: item,
        },
      });
    } else {
      Swal.fire({
        title: "Cannot access this page",
        text: "You`re not logged in",
        icon: "error",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/auth/login");
        }
      });
    }
  };

  useEffect(() => {
    getNews(category);
  }, [category]);

  return (
    <section
      className={`w-screen h-full ${
        toggle ? "bg-slate-700" : "bg-white"
      } flex flex-col justify-center items-center`}
    >
      <div className="my-10">
        <Button id="mode" title="Switch Mode" onClick={() => handleToggle()} />
      </div>
      <div className="mt-10 flex space-x-5 w-96">
        <Button
          id="sports"
          title="Sports"
          onClick={() => setCategory("sports")}
        />
        <Button
          id="health"
          title="Health"
          onClick={() => setCategory("health")}
        />
        <Button
          id="business"
          title="Business"
          onClick={() => setCategory("business")}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 my-40">
        {news ? (
          news?.map((item: any, index: any) => {
            return (
              <Card id="news" key={index}>
                <img
                  src={
                    item?.urlToImage
                      ? item?.urlToImage
                      : "https://via.placeholder.com/300x200/CCCCCC/000000?text=ImageNotFound"
                  }
                  className="w-full h-40"
                />
                <div className="p-3 flex flex-col gap-y-2">
                  <p className="font-semibold">{item?.title}</p>
                  <p className="font-medium">{item?.comtent}</p>
                  <div className="w-40">
                    <Button
                      id="details"
                      title="See Detail"
                      onClick={() => clickDetail(item)}
                    />
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default News;
