import { useState } from "react";
import "./index.css";

export default function LadingPageHeader() {
  const [active, setAtive] = useState(1);
  return (
    <header id="ladingPageHeader">
      <nav>
        <div>
          <h1>Learn</h1>
          <h1>Here</h1>
        </div>
        <ul>
          <li
            onClick={() => {
              setAtive(1);
            }}
          >
            <a
              href="#homeLadingPage"
              style={{
                color: active == 1 ? "var(--violet)" : "",
              }}
            >
              Inicial
            </a>
          </li>
          <li
            onClick={() => {
              setAtive(2);
            }}
          >
            <a
              href="#LadingPageCourses"
              style={{
                color: active == 2 ? "var(--violet)" : "",
              }}
            >
              Cursos
            </a>
          </li>
          <li
            onClick={() => {
              setAtive(3);
            }}
          >
            <a
              href="#home"
              style={{
                color: active == 3 ? "var(--violet)" : "",
              }}
            >
              Sobre
            </a>
          </li>
          <li
            onClick={() => {
              setAtive(4);
            }}
          >
            <a
              href="#home"
              style={{
                color: active == 4 ? "var(--violet)" : "",
              }}
            >
              Contacto
            </a>
          </li>
          <li
            onClick={() => {
              setAtive(5);
            }}
          >
            <a
              href="#home"
              style={{
                color: active == 5 ? "var(--violet)" : "",
              }}
            >
              Blog
            </a>
          </li>
        </ul>
        <button>Entrar</button>
      </nav>
    </header>
  );
}
