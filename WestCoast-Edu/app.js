
const javascript = new Course("1234", "JS For Dummies", 35);
console.log(javascript);
javascript.Save();
javascript.AddCourse();
javascript.teacher = 'Sebastian';
console.log(javascript.teacher);
console.log(javascript.hasOwnProperty('teacher'));

const typescript = new Course("4567", "TS For Dummies", 25);

typescript.Save();
typescript.AddCourse();

// const csharp = new course("7891", "CS For Dummies", 45);

// console.log(javascript);
// console.log(typescript);
// console.log(csharp);
