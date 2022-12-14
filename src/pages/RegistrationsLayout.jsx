import { createContext, createSignal, useContext, createComputed, Suspense, Show, createMemo } from "solid-js";
import { A, Outlet, useRouteData } from "@solidjs/router";
import { SelectedData } from "../App";
import DaySelector from "../components/DaySelector";
import RegistrationSkeleton from "../components/RegistrationSkeleton";
import RegistrationsCard from "../components/RegistrationsCard";
import { filterByDay } from "../utilities/filterByDay";

export const RegistrationsContext = createContext({});
export const AccountsContext = createContext([]);

function RegistrationsLayout() {
  const state = useContext(SelectedData);
  const accounts = useRouteData();
  const [registrations, setRegistrations] = createSignal();
  createComputed(() => setRegistrations(state().ActivitiesModel));
  const registrationsFullList = createMemo(() => state().Activities.map(activity => activity.Registrations).flat().sort((a, b) => new Date(b.DateCreated) - new Date(a.DateCreated)));
  return (
    <Suspense fallback={<RegistrationSkeleton />}>
      <Show when={registrations() && accounts()}>
        <RegistrationsContext.Provider value={registrations}>
          <AccountsContext.Provider value={accounts()}>
            <DaySelector handler={(e) => {
              const target = e.target;
              const selectedValue = target.options[target.selectedIndex].value;
              setRegistrations(filterByDay(selectedValue, state().ActivitiesModel));
            }} />
            <nav class="flex-nav">
              <ul role="list">
                <A href="/inscriptions/" noScroll={true} end={true}>Liste des clients</A>
                <A href="/inscriptions/courriels/" noScroll={true} end={true}>Liste des courriels</A>
              </ul>
            </nav>
            <details class="width-sm">
              <summary class="button summary-btn">Dernière inscription</summary>
              <RegistrationsCard regList={registrationsFullList()} index={0} />
            </details>
            <Outlet />
          </AccountsContext.Provider>
        </RegistrationsContext.Provider>
      </Show>
    </Suspense>
  );
};

export default RegistrationsLayout;