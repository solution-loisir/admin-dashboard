import { createContext, createSignal, useContext, createComputed, Suspense, Show } from "solid-js";
import { A, Outlet, useRouteData } from "@solidjs/router";
import { SelectedData } from "../App";
import DaySelector from "../components/DaySelector";
import RegistrationSkeleton from "../components/RegistrationSkeleton";
import { filterByDay } from "../utilities/filterByDay";

export const RegistrationsContext = createContext({});
export const AccountsContext = createContext([]);

function RegistrationsLayout() {
  const state = useContext(SelectedData);
  const accounts = useRouteData();
  const [registrations, setRegistrations] = createSignal();
  createComputed(() => setRegistrations(state().ActivitiesModel));
  return (
    <Suspense fallback={<RegistrationSkeleton />}>
      <RegistrationsContext.Provider value={registrations}>
        <Show when={accounts()}>
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
            <Outlet />
          </AccountsContext.Provider>
        </Show>
      </RegistrationsContext.Provider>
    </Suspense>
  );
};

export default RegistrationsLayout;