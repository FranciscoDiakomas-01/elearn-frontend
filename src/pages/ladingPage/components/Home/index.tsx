import "./index.css";
import img from '../../../../assets/pngegg (1).png'
import { FaBook, FaUser } from "react-icons/fa";
export default function HomeLadingPage() {
  return (
    <section id="homeLadingPage">
      <article>
        <h1>
          <span>Melhor</span> Plataforma De Ensino Online Learn<span>Here</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam repellendus quidem magni quae illo dignissimos est ab vel. Reprehenderit, perspiciatis quibusdam dicta vero accusantium adipisci laborum quae. Placeat, voluptas.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias a culpa doloremque itaque, cupiditate, mollitia, dignissimos asperiores possimus vel aliquid et. Distinctio quibusdam quasi accusantium, debitis et aliquid ab.
        </p>
        <div>
          <div> <FaBook/> + 50 Cursos</div>
          <div> <FaBook/> + 50k Aulas </div>
          <div> <FaUser/> + 50k Alunos </div>
        </div>
        <div>
          <button>Enscrever-se</button>
          <button>Fale Connosco</button>
        </div>
      </article>

      <aside>
        <h1>LEARN</h1>
        <img src={img} />
      </aside>
    </section>
  );
}
