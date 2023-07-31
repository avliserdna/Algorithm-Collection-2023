function conflictInfo(meetings) {
  // Write your code here
  // startTime + duration
  // nOfConflicts
  // totalConflicts
  // military time 0000 -2400 range
  // if startTime + duration have the same value, or meet at the same point === conflict

  // if startTime1 > startTime2, add duration until startTime1 === startTime2

  // if startTime1 < startTime2, add duration until then
  // if both are equal, then isConflict
  // if startTime !== BUT duration makes them equal at a certain point,
  // Add, then push into an array, make startTimes check array if it's included. Start with the smallest one, add duration accordingly,
  // push each duration per minute into array. then do the same, and check the other

  // IF neither contraints are followed, return "error"
  let totalConflict = 0;
  let conflictTime = 0;
  let time = "";
  let duration = 0;
  let durationSet = [];
  let hasConflict = false;
  let meetingStorage = {};
  let timeSet = new Set();
  let length = Number(meetings[0]);

  for (let  m = 0; m < length; m++) {
    meetingStorage[m+1] = []
  }
console.log(meetingStorage)

  for (let i =1; i <= length; i++) {
      let convertedMeeting = meetings[i].split(",")
      time = String(convertedMeeting[0])
      duration = Number(convertedMeeting[1])
      durationSet.push(duration)
      for (let j = 0; j <= duration; j++) {
          let hours = time.slice(0,2)
          let minutes = time.slice(2)
          let minutesDuration = Number(minutes) + j;
          if (Number(minutesDuration) >= 60) {
              let minutesDurationHour = Math.floor(minutesDuration / 60)
              let minutesDurationMin = minutesDuration % 60
              minutes = Number(minutes) - minutesDurationMin
              hours = Number(hours) + minutesDurationHour
          }
          else {
            minutes = minutesDuration
          }
          let resultTime = `${hours}${minutes}`
          meetingStorage[i].push(resultTime);


          if (timeSet.has(resultTime)) {
              for (let k = 1; k < length; k++) {
                  if (meetingStorage[k].includes(resultTime)) {
                      conflictTime+= Math.abs(durationSet[k-1] - duration)
                  }
              }
              hasConflict = true
              totalConflict++
          }
          else {
              timeSet.add(resultTime)
          }
      }
  }


  if (hasConflict === true) {
       return `conflict, ${totalConflict}, ${conflictTime}`
  }
  else {
      return "good"
  }

}

console.log(conflictInfo([3, "0800,30", "1130,60", "0815,45"]))

/**
 TEST CASES

 3
0800,30
1130,60
0815,45

RESULT: conflict,1,15

4
0745,30
0930,45
1145,60
1330,45

RESULT: good
*/
