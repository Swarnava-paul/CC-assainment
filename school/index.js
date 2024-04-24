document.getElementById('studentsandteacherscount').addEventListener('click',countCalculation)


let infodiv= document.getElementById('informationholder');
const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],

    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  

//const{departments:{english:{students}}}=school


function countCalculation(){
  infodiv.innerHTML=''
let {departments:{math:{teachers:mathTeachersCount,students:mathSTudentsCount}}}=school
let {departments:{history:{teachers:historyTeachersCount,students:historyStudentsCounts}}}=school;

let info={
  mathTeachersCount,
  historyTeachersCount,
  mathSTudentsCount,
  historyStudentsCounts
}

infodiv.innerHTML= `
<p>MathTeachersCount:${info.mathTeachersCount}</p>
<p>MathStudentsCOunt:${info.mathSTudentsCount}</p>
<p>HistoryTeachersCount:${info.historyTeachersCount}</p>
<p>HistoryStudentsCount:${info.historyStudentsCounts}</p>

`
 
}


function findTopStudent(school,course){

let{students}=school;

let filter1= students.map(i=>(
  i.scores[course]
))

let maxnumber= Math.max(...filter1)
let index= filter1.indexOf(maxnumber)

return students[index]
}

console.log(findTopStudent(school,"history"));

function highestStudentCountDepartment(school){
let{departments}=school
let arr=[]

for(let i in departments){
  arr.push(departments[i].students)
}
let maxStudentsCount = Math.max(...arr)

for(let i in departments){
 
  if(maxStudentsCount==departments[i].students){
    return i;    
  }
}

}

console.log(highestStudentCountDepartment(school))

function addNewDept(department,students,teachers){
  let{departments}=school;
  
  let newDepartment={
    ...departments,
    [department]:{teachers,students}
  }
  department=newDepartment;

return department;
}

console.log(addNewDept('It',2,45));