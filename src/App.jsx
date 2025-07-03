import { useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Counter } from "./components/Counter/Counter";
import { Job } from "./components/Job";
import { TaskList } from "./components/TaskList";
import { ThemeSwitch } from "./components/ThemeSwitch/ThemeSwitch";

const tasks = [
  {
    id: 1,
    title: "Покормить кота",
    deadline: "23:59",
    completed: true,
  },
  {
    id: 2,
    deadline: "01-01-2026",
    title: "Поспать 10 часов",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const incCount = () => setCount((x) => x + 1);

  return (
    <>
      <Counter count={count} onIncrement={incCount} />
      <ThemeSwitch />
      <About />
      <Job
        title="Банк Африки"
        post="Главный консультант"
        description="Давал советы"
      />
      <Job title="Бар Чайка" post="Главная чайка" description="Орал чайкой" />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
