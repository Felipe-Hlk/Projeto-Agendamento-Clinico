import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import allLocales from '@fullcalendar/core/locales-all';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss', './vars.css']
})
export class AgendamentoComponent implements OnInit {


  calendarVisible = true;
  calendarOptions: CalendarOptions = {};

  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.calendarOptions = {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'timeGridDay',
      initialEvents: INITIAL_EVENTS,
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),
      locale: 'pt-br',
      buttonText: {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Lista'
      }
    };
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    this.calendarOptions = { ...this.calendarOptions, weekends: !this.calendarOptions.weekends };
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('POR FAVOR INSIRA UM NOVO AGENDAMENTO');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`REALMENTE DESEJA DELETAR?'${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges(); // workaround for ExpressionChangedAfterItHasBeenCheckedError
  }
}
