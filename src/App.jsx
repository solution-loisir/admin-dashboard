import { createSignal, createContext, lazy, createResource, Suspense, Show, createComputed } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import ProgName from './components/ProgName';
import ProgTitle from "./components/ProgTitle";
const EmailList = lazy(() => import("./components/EmailList"));
const RegistrationsList = lazy(() => import("./components/RegistrationsList"));
import ClipboardCopyFeedback from "./components/ClipboardCopyFeedback";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import SchedulePage from "./pages/SchedulePage";
const RegistrationsLayout = lazy(() => import("./pages/RegistrationsLayout"));
const Error404 = lazy(() => import("./pages/Error404"));
import { fetchData } from "./utilities/fetch";
import ConfettiExplosion from "solid-confetti-explosion";


export const FullData = createContext([]);
export const SelectedData = createContext({});

const dataFetcher = async () => await fetchData("/.netlify/functions/Amilia");
const fetchAccounts = () => {
  const [accounts] = createResource(async () => await fetchData("/.netlify/functions/Amilia-accounts"));
  return accounts;
}

function App() {
  const [data, { refetch }] = createResource(dataFetcher);
  const [stateIndex, setStateIndex] = createSignal(0);
  const [state, setState] = createSignal();
  createComputed(() => {
    if(data()) setState(data()[stateIndex()]);
  });
  return (
    <Suspense fallback={<Loader />}>
      <Show when={data()}>
        <FullData.Provider value={data()}>
          <SelectedData.Provider value={state}>
            <ClipboardCopyFeedback />
            <button onClick={() => refetch()}>Actualiser les données</button>
            <br />
            <div style="margin: -16px;">
              <Show when={state().SpotsStats.TotalSpotsRemaining === 0}>
                <ConfettiExplosion class="hide" duration={2000} />
              </Show>
            </div>
            <nav class="flex-nav">
              <ul role="list">
                <A href="/" noScroll={true} end={true}>Tableaux</A>
                <A href="/horaire/" noScroll={true} end={true}>Horaire</A>
                <A href="/inscriptions/" noScroll={true}>Inscriptions</A>
              </ul>
            </nav>
            <ProgTitle />
            <ProgName handler={(e) => setStateIndex(e.target.selectedIndex)} />
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/horaire/" component={SchedulePage} />
              <Route path="/inscriptions/" component={RegistrationsLayout} data={fetchAccounts}>
                <Route path="/" component={RegistrationsList} />
                <Route path="/courriels/" component={EmailList} />
              </Route>
              <Route path="*" component={Error404} />
            </Routes>
          </SelectedData.Provider>
        </FullData.Provider>
      </Show>
    </Suspense>
  );
}

export default App;