let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]

          let names = [];
for (let index = 0; index < studentRecords.length; index++){
     names.push(studentRecords[index].name.toUpperCase());
}

 let names1 = studentRecords.filter(stu => stu.marks > 50);
 console.log(names1);


 let names2 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
    console.log(names2);

   let totalMarks = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
 console.log(totalMarks);

 let names3 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names3);

 let totalMarks1 = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks1);

let studentRecords2 = [ {name: 'John', id: 123, marks : 98 },
                  {name: 'Baba', id: 101, marks : 23 },
                  {name: 'John', id: 200, marks : 45 },
                  {name: 'Wick', id: 115, marks : 75 }, ]
                   let totalMarks3 = studentRecords2.map(function(stu){ 
             if(stu.marks < 50){
                 stu.marks += 15;}
             return stu;
        }).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
 console.log(totalMarks3);