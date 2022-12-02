import { For } from "solid-js";
import { capitalize } from "../utilities/capitalize";

function Schedule(props) {
  return (
    <div class="schedule">
      <div class="h8 r-line"></div>
      <div class="h8-30 r-line"></div>
      <div class="h9 r-line"></div>
      <div class="h9-30 r-line"></div>
      <div class="h10 r-line"></div>
      <div class="h10-30 r-line"></div>
      <div class="h11 r-line"></div>
      <div class="h11-30 r-line"></div>
      <div class="h12 r-line"></div>
      <div class="h12-30 r-line"></div>
      <div class="h13 r-line"></div>
      <div class="h13-30 r-line"></div>
      <div class="h14 r-line"></div>
      <div class="h14-30 r-line"></div>
      <div class="h15 r-line"></div>
      <div class="h15-30 r-line"></div>
      <div class="h16 r-line"></div>
      <div class="h16-30 r-line"></div>
      <div class="h17 r-line"></div>
      <div class="h17-30 r-line"></div>
      <div class="h18 r-line"></div>
      <div class="h18-30 r-line"></div>
      <div class="h19 r-line"></div>
      <div class="h19-30 r-line"></div>
      <div class="h20 r-line"></div>
      <div class="c4 c-line"></div>
      <div class="c6 c-line"></div>
      <div class="c8 c-line"></div>
      <div class="c10 c-line"></div>
      <div class="c12 c-line"></div>
      <div class="c14 c-line"></div>
      <div class="day lundi">Lun</div>
      <div class="day mardi">Mar</div>
      <div class="day mercredi">Mer</div>
      <div class="day jeudi">Jeu</div>
      <div class="day vendredi">Ven</div>
      <div class="time h8">8:00</div>
      <div class="time h9">9:00</div>
      <div class="time h10">10:00</div>
      <div class="time h11">11:00</div>
      <div class="time h12">12:00</div>
      <div class="time h13">13:00</div>
      <div class="time h14">14:00</div>
      <div class="time h15">15:00</div>
      <div class="time h16">16:00</div>
      <div class="time h17">17:00</div>
      <div class="time h18">18:00</div>
      <div class="time h19">19:00</div>
      <div class="time h20">20:00</div>
      <For each={Object.keys(props.scheduleItems)}>
        {(weekDay) => (
          <For each={props.scheduleItems[weekDay]}>
            {(item) => (
              <div 
                class={`schedule-item ${weekDay} ${item.niveau}`} data-state={item.complet} 
                style={`grid-row-start: ${item.rowStart}; grid-row-end: ${item.rowEnd};`} 
                title={`${ capitalize(item.niveau).replace(/u/, "u ") } ${ item.emoji }\nLe ${ weekDay }\nde ${ item.text }.${ item.complet ? " \nCe cours est COMPLET." : ` \nIl reste ${item.spots_remaining} ${item.spots_remaining === 1 ? "place" : "places"}.`}`}>
                <a href={item.link}>
                  <span classList={{ complet: item.complet }}>{`${item.text} ${item.emoji}`}</span>
                  <br />
                  {`${item.spots_remaining ? `${item.spots_remaining} / ${item.max_attendance}` : ""}`}
                </a>
              </div>
            )}
          </For>
        )}
      </For>
    </div>
  );
}

export default Schedule;