export interface Person {
  paciente: string;
  medico: string;
  data: string;
  horario: string;
  status: string;
}

export const DATA_PEOPLE: Person[] = [
  { paciente: "MATEUS EDUARDO", medico: "DR MANOEL", data: "01/12/2023", horario: "13:30", status: "ATENDIDA" },
  { paciente: "FELIPE ARRUDA", medico: "DRA CARLA", data: "07/12/2023", horario: "14:30", status: "AGUARDANDO" },
  { paciente: "ROBERTA MOURA", medico: "DRA FLÁVIA OLIVEIRA", data: "06/12/2023", horario: "9:00", status: "ATENDIDA" },
  { paciente: "MARIA SILVA", medico: "DR RICARDO", data: "10/12/2023", horario: "11:00", status: "AGUARDANDO" },
  { paciente: "JOÃO SANTOS", medico: "DRA ANA", data: "15/12/2023", horario: "16:45", status: "AGUARDANDO" },
  { paciente: "CARLOS ALMEIDA", medico: "DR ANDRÉ", data: "02/12/2023", horario: "8:30", status: "ATENDIDA" },
  { paciente: "ANA PAULA", medico: "DRA BEATRIZ", data: "18/12/2023", horario: "10:15", status: "AGUARDANDO" },
  { paciente: "FABIO COSTA", medico: "DR EDUARDO", data: "20/12/2023", horario: "13:00", status: "AGUARDANDO" },
];
