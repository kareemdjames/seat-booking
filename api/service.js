import firebase from './firebase';

export function getSeats() {
  let seatArr = [];
  let rowArr = [];
  const noOfSeatsInARow = 5;

  return new Promise((resolve, reject) => {
    // Iterate through seat array and create row groups/array
    const seatsRef = firebase.database().ref('seats/').orderByChild("number");
    seatsRef.once('value', function(snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        seatArr.push({
          number: childData.number,
          price: childData.price,
          status: childData.status,
          rowNo: childData.rowNo
        });
      });
      let groups = [], i;
      for (i = 0; i < seatArr.length; i+=noOfSeatsInARow) {
        groups = seatArr.slice(i, i + noOfSeatsInARow);
        console.log(groups);
        rowArr.push({
          id: i,
          seats: groups
        })
      }
      console.log(rowArr)
      resolve(rowArr);
    }).catch(err => {
      reject(err)
    });
  })  
}

export function bookSelSeats(seats) {
  console.log("book seats", seats);
  return new Promise((resolve, reject) => {
    // Logic for payments
    seats.forEach(obj => {
      firebase.database().ref('seats/').child("seat-" + obj.number)
      .update({
        status: "booked"
      }).then(resolve(true)
    ).catch(err => {
        reject(err)
      });
    })
  })
}


