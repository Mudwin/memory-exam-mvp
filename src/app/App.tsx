import { useState } from "react";
import NavButton from "@/components/NavButton";
import gridIcon from "@/assets/icons/grid-icon.svg";
import quizletIcon from "@/assets/icons/quizlet-icon.svg";
import testIcon from "@/assets/icons/question-icon.svg";

type Page = "view" | "card" | "test";

function App() {
  const [page, setPage] = useState<Page>("view");

  // const handleNavButtonClick = () => {};

  return (
    <div className="app-container">
      <div className="nav-buttons">
        <NavButton
          iconSrc={gridIcon}
          state={page === "view" ? "open" : "closed"}
          page={"view"}
          onClick={() => setPage("view")}
        >
          Просмотр
        </NavButton>
        <NavButton
          iconSrc={quizletIcon}
          state={page === "card" ? "open" : "closed"}
          page={"card"}
          onClick={() => setPage("card")}
        >
          Карточки
        </NavButton>
        <NavButton
          iconSrc={testIcon}
          state={page === "test" ? "open" : "closed"}
          page={"test"}
          onClick={() => setPage("test")}
        >
          Тест
        </NavButton>
      </div>
      <div className="content">
        {page === "view" && <div>Страница просмотра всех картин</div>}
        {page === "card" && <div>Страница просмотра карточек</div>}
        {page === "test" && <div>Страница теста</div>}
      </div>
    </div>
  );
}

export default App;
