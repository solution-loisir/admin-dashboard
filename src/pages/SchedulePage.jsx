import { useContext, createSignal, createComputed, createEffect, on } from "solid-js";
import { Title } from "@solidjs/meta";
import { SelectedData } from "../App";
import Schedule from "../components/Schedule";
import AgeLegend from "../components/AgeLegend";
import ActivitiesTable from "../components/ActivitiesTable";

function removeAllActiveClass() {
  const buttons = document.querySelectorAll('[data-class="filter-button"]');
  buttons.forEach(btn => btn.classList.remove("active-button"));
}

function SchedulePage() {
  const state = useContext(SelectedData);
  const [schedule, setSchedule] = createSignal();
  createComputed(() => setSchedule(state().ScheduleData));
  createEffect(on(state, removeAllActiveClass, { defer: true }));
  const totalCourses = () => state().Activities.length;
  const availableCourses = () => state().Activities.filter((activity) => activity.SpotsRemaining !== 0).length;
  const fullCourses = () => state().Activities.filter((activity) => activity.SpotsRemaining === 0).length;

  const clickHandler = (filter) => {
    const filtered = Object.keys(state().ScheduleData).reduce((obj, sourceKey) => {
      obj[sourceKey] = state().ScheduleData[sourceKey].filter(filter);
      return obj;
    }, {});
    setSchedule(filtered);
  }

  const delegateHandler = (e) => {
    if(e.target.dataset.class !== "filter-button") return;
    removeAllActiveClass();
    e.target.classList.add("active-button");
  }

  return (
    <>
      <Title>Bulle | 🧮 Horaire</Title>
      <AgeLegend />
      <ActivitiesTable full={fullCourses()} available={availableCourses()} total={totalCourses()} />
      <nav class="flex-nav" onClick={delegateHandler}>
        <ul role="list">
          <button 
            onClick={() => clickHandler((item) => item.complet)} 
            data-class="filter-button"
            type="button">
            Complet
          </button>
          <button 
            onClick={() => clickHandler((item) => !item.complet)} 
            data-class="filter-button"
            type="button">
            Disponibles
          </button>
          <button 
            onClick={() => setSchedule(state().ScheduleData)} 
            data-class="filter-button"
            type="button">
            Tout
          </button>
        </ul>
      </nav>
      <Schedule scheduleItems={schedule()} />
    </>
  );
}

export default SchedulePage;