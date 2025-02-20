import { useEffect, useState } from "react";
import "./index.css";
import img from '../../../../assets/pexels-pixabay-256455.jpg'
import { FaStar } from "react-icons/fa6";
export default function LadingPageCourses() {

  interface ICourse {
    id : number | string,
    title : string,
    price ? : number,
    desciprition : string,
    type : number,
    stars : number,
    cover : string
  }
  const [ courses , setCourses ] = useState<ICourse[]>([])  
  useEffect(()=>{
    setCourses([
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
      {
        id: 1,
        stars: 5,
        title: "Curso de Algoritmo & Estruturas de Dados",
        cover: img,
        type: 1,
        price: 10000,
        desciprition: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe quidem aut id inventore beatae totam ad cum quaerat ratione. Placeat vitae nobis assumenda officiis repudiandae minima eveniet facilis dolores`,
      },
    ]);
  },[])

  return (
    <section id="LadingPageCourses">
      <h1>Nossos Mais Recentes Cursos</h1>
      <aside>
        {courses.map((course) => (
          <figure key={course.id}>
            <img src={course.cover} />
            <figcaption>
              <strong>{course.title}</strong>
              <div>
                <span>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p>{Number(course.price).toLocaleString("pt")}KZ</p>
              </div>
              <button>Ver Detalhes</button>
            </figcaption>
          </figure>
        ))}
      </aside>
    </section>
  );
}
