import { Component, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import 'moment/locale/pt-br';
import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

@Component({
  selector: 'app-root',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss', './vars.css']
})
export class AgendamentoComponent implements OnInit {

  @ViewChild('fullcalendar') fullcalendar: any;
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
      initialView: 'timeGridWeek',
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

  ngAfterViewInit() {
    const calendar = new Calendar(this.fullcalendar.nativeElement, {
      plugins: [ bootstrap5Plugin ],
      themeSystem: 'bootstrap5'
    });

    calendar.render();
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    this.calendarOptions = { ...this.calendarOptions, weekends: !this.calendarOptions.weekends };
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    // Código para lidar com a seleção de data
  }

  handleEventClick(clickInfo: EventClickArg) {
    // Código para lidar com o clique em um evento
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}
