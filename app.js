"use strict"

const allCandidates = {
    aboutCandidate: [{
        firstName: "Mark",
        lastName: "Miller",
        weight: 78,
        height: 1.69
    },
    {
        firstName: "John",
        lastName: "Smith",
        weight: 92,
        height: 1.95
    }],

    calcBMI: function (){
        // BMI = mass / height*height

        const eachCandidate = this.aboutCandidate

        for (let candidate = 0; candidate < eachCandidate.length; candidate++) {
            const weight = eachCandidate[candidate]["weight"]
            const height = eachCandidate[candidate]["height"]
            
            eachCandidate[candidate]["BMI"] = (weight / (height**2)).toFixed(2)
        }

        return eachCandidate[0].BMI > eachCandidate[1].BMI ? `${eachCandidate[0].firstName}'s BMI ${eachCandidate[0].BMI} is higher than ${eachCandidate[1].firstName}'s BMI ${eachCandidate[1].BMI}` : `${eachCandidate[1].firstName}'s BMI ${eachCandidate[1].BMI} is higher than ${eachCandidate[0].firstName}'s BMI ${eachCandidate[0].BMI}`
    }


}

console.log(allCandidates.calcBMI())
// console.log(allCandidates.aboutCandidate)

