const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: 'Pedro Barão',
    avatar:
      'https://avatars2.githubusercontent.com/u/62365336?s=460&u=77f3d8aeebff51881efffaa2a4c0d48537538e09&v=4',
    whatsapp: '89972341232',
    bio:
      'Entusiasta das melhores tecnologias de produção musical. <br><br> Apaixonado por música',
  };

  classValue = {
    subject: 1,
    cost: '20',
    // o proffy_id virá pelo banco de dados
  };

  classScheduleValues = [
    // class_id virá pelo db depois de cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Consultar todos os proffys inseridos
  const selectedProffys = await db.all('SELECT * FROM proffys');
  // console.log(selectedProffys);

  // consultar as classes e os dados de um determinado proffy
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `);
  // console.log(selectClassesAndProffys);

  //ex: pessoa que trabalha das 8h até as 18h
  // time_from deve ser anterior ou igual ao horário solicitado e o time_to deve ser superior
  const selectClassSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
  `);
  // console.log(selectClassSchedules);
});
