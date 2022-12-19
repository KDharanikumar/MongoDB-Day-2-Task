// Users

db.users.insertMany([
  {
    userid: 1,
    name: "Tom",
    email: "tom@gmail.com",
    mentorid: 1,
  },
  {
    userid: 2,
    name: "Jerry",
    email: "jerry@gmail.com",
    mentorid: 2,
  },
  {
    userid: 3,
    name: "Mottu",
    email: "mottu@gmail.com",
    mentorid: 3,
  },
  {
    userid: 4,
    name: "Pathlu",
    email: "pathlu@gmail.com",
    mentorid: 1,
  },
  {
    userid: 5,
    name: "Dorimon",
    email: "dorimon@gmail.com",
    mentorid: 2,
  },
]);

// Codekata

db.codekata.insertMany([
  {
    userid: 1,
    problems: 5,
  },
  {
    userid: 2,
    problems: 10,
  },
  {
    userid: 3,
    problems: 15,
  },
  {
    userid: 4,
    problems: 20,
  },
  {
    userid: 5,
    problems: 25,
  },
]);

// Topics

db.topics.insertMany([
  {
    topicid: 1,
    topic: "html",
    topic_date: new Date("4-oct-2020"),
  },
  {
    topicid: 2,
    topic: "css",
    topic_date: new Date("10-oct-2020"),
  },
  {
    topicid: 3,
    topic: "JS",
    topic_date: new Date("15-oct-2020"),
  },
  {
    topicid: 4,
    topic: "React",
    topic_date: new Date("20-oct-2020"),
  },
  {
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("25-oct-2020"),
  },
]);

// Tasks

db.tasks.insertMany([
  {
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "html task",
    due_date: new Date("5-oct-2020"),
    submitted: true,
  },
  {
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "css task",
    due_date: new Date("10-oct-2020"),
    submitted: true,
  },
  {
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "JS task",
    due_date: new Date("15-oct-2020"),
    submitted: false,
  },
  {
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "React task",
    due_date: new Date("20-oct-2020"),
    submitted: false,
  },
  {
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "Node task",
    due_date: new Date("25-oct-2020"),
    submitted: false,
  },
]);

// Attendence

db.attendance.insertMany([
  {
    userid: 1,
    topicid: 1,
    attended: true,
  },
  {
    userid: 2,
    topicid: 2,
    attended: true,
  },
  {
    userid: 3,
    topicid: 3,
    attended: false,
  },
  {
    userid: 4,
    topicid: 4,
    attended: false,
  },
  {
    userid: 5,
    topicid: 5,
    attended: false,
  },
]);

// Mentors

db.mentors.insertMany([
  {
    mentorid: 1,
    mentorname: "Pokemon",
    mentor_email: "pokemon@gmail.com",
  },
  {
    mentorid: 2,
    mentorname: "Bheem",
    mentor_email: "bheem@gmail.com",
  },
  {
    mentorid: 3,
    mentorname: "Chucki",
    mentor_email: "chucki@gmail.com",
  },
  {
    mentorid: 4,
    mentorname: "Chinchan",
    mentor_email: "chinchan@gmail.com",
  },
  {
    mentorid: 5,
    mentorname: "Attori",
    mentor_email: "attori@gmail.com",
  },
]);

// Company Drive

db.comapnydrives.insertMany([
  {
    userid: 1,
    drive_date: new Date("10-oct-2020"),
    company: "Apple",
  },
  {
    userid: 1,
    drive_date: new Date("15-oct-2020"),
    company: "Google",
  },
  {
    userid: 2,
    drive_date: new Date("20-oct-2020"),
    company: "Zoho",
  },
  {
    userid: 3,
    drive_date: new Date("25-oct-2020"),
    company: "TCS",
  },
  {
    userid: 4,
    drive_date: new Date("27-oct-2020"),
    company: "Wipro",
  },
]);
