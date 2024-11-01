const Marks = [];
let AddedMarks = 0;
function GenerateRandomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);

  return num;
}
const Subj_Credit = [3.0, 2.0, 2.0, 2.0, 1.0, 3.0, 1.5, 1.0, 1.0, 1.5];

function TotalMarks() {
  for (let i = 0; i < 10; i++) {
    AddedMarks = Subj_Credit[i] * Marks[i] + AddedMarks;
  }
  console.log(AddedMarks);
  return AddedMarks;
}
for (let i = 0; i < 6; i++) {
  Marks[i] = GenerateRandomNumber(8, 11);
}
for (let i = 6; i < 10; i++) {
  Marks[i] = GenerateRandomNumber(9, 11);
}

TotalMarks();
export { GenerateRandomNumber, Marks, AddedMarks };
