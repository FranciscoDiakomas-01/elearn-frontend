import "./index.css";
import { Swiper , SwiperSlide}  from 'swiper/react'
import {Navigation , Pagination , Autoplay } from 'swiper/modules'
import img from '../../../../assets/pexels-anastasiya-gepp-654466-1462630.jpg'
export default function AboutLadingPage() { 

  interface IBanner {
    id : number,
    pictures : string,
    text : string
  }

  const Banners: IBanner[] = [
    {
      id: 1,
      pictures: img,
      text: "Benvindos ao meu",
    },
    {
      id: 1,
      pictures: img,
      text: "Benvindos ao meu",
    },
  ];
  return <section id="aboutladingpage">
    <aside>
      <Swiper navigation slidesPerView={1} pagination={{clickable : true}}>
        {
          Banners.map(banner => (
            <SwiperSlide>
              <div>
                <img src={banner.pictures} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </aside>
    <article>
      <h1>SOMOS UMA ESCOLA COM O OBJECTIVO DE FORMAR PROFISSIONAIS DE ALTO VALOR EM DIFERENTES ÁREAS DE TECNOLOGIA</h1>
    </article>
  </section>;
}
