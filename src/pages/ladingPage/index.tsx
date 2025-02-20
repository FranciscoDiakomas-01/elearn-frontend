import "./index.css";
import LadingPageHeader from "./components/Header";
import HomeLadingPage from "./components/Home";
import LadingPageCourses from "./components/Courses";
import AboutLadingPage from "./components/About";
export default function LadigPage() {
  return (
    <main>
      <LadingPageHeader />
      <HomeLadingPage/>
      <LadingPageCourses/>
      <AboutLadingPage/>
    </main>
  );
}
