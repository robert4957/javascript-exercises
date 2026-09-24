const findTheOldest = function(people) {
  const year = new Date().getFullYear();
  const oldest = people.reduce((old, person) => {
    let deathYear = "yearOfDeath" in person ? person.yearOfDeath : year;
    let deathYearOld = "yearOfDeath" in old ? old.yearOfDeath : year;
    let birthYear = person.yearOfBirth;
    let birthYearOld = old.yearOfBirth;
    const age = deathYear - birthYear;
    const ageOld = deathYearOld - birthYearOld;
    return age > ageOld ? person : old;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;