// Thu March 29 2018 1PM PST
// Interview kfuruya:Cameron Alsbrook

// Given a classroom of N students, X of whom are infected, find patient zero.
// students know who they infected but not who infected them

// multiple types of diseases, new input [infection objects]
// sample input: N = 6, X = 5
infection1 = 
{ 1: [],
  2: [5],
  3: [],
  4: [],
  5: [],
  6: [2,3,4]
}
let infections = [infection1, infection2];
// students.forEach(function(student) {
infections.forEach(function(infection) {
    let infected = [];
    let patientZeroes = [];
    infection.forEach(function(student) {
        infection[student].forEach(function(infectedStudent) {
            infected.push(infectedStudent);
        });
    });
    infection.forEach(function(student) {
    if (!infected.indexOf(student) && infection[student].length) {
        patientZeroes.push(student);
    }
    return patientZeroes;
    });
});
// patientZero(students) => student id of patient zero


