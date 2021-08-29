
button_c = () => {

    var nam = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;

    console.log(nam, gender, age);
    

}





function Patient(patient_id , first_name , last_name , address , contact_no , gender , age , date_admitted , date_discharged , bill_id , room_id) {
        
        this.patient_id = patient_id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.address = address,
        this.contact_no = contact_no,
        this.gender = gender,
        this.age = age,
        this.date_admitted = date_admitted,
        this.date_discharged = date_discharged,
        this.bill_id = bill_id,
        this.room_id = room_id


}


const patient2 = new Patient("2","anwer","ali","karachi","232", "female", "21", "" , "2021-August-8" , "" , "");
const patient3 = new Patient("3","yasir","mustafa","karachi","232", "male", "21", "" , "2021-August-8" , "" , "");
const patient1 = new Patient("4","nawaz","ali","karachi","232", "male", "21", "" , "2021-August-8" , "" , "");



let insrt_cmnd = `INSERT INTO covid_patient (patient_id , first_name , last_name , address , contact_no , gender , age , date_admitted , date_discharged , bill_id , room_id)
VALUES (?,?,?,?,?,?,?,?,?,?,?)`
let val = [patient1.patient_id , patient1.first_name , patient1.last_name , patient1.address , patient1.contact_no , patient1.gender , patient1.age , patient1.date_admitted , patient1.date_discharged , patient1.bill_id , patient1.room_id];







const { createPool } = require('mysql');
const { default: onpress } = require('./input');


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "covid analysis",
    connectionLimit: 10
})



// //insert query
    pool.query(insrt_cmnd,val, function(err, result, fields) {
    
        if (err) {
            return console.log(err);
        }
        return console.log(result);
    })


    
    // select query
//     pool.query(`select * from covid_patient`, function(err, result, fields) {

//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })





//delete query
    // pool.query(`DELETE FROM covid_patient WHERE patient_id = '500'`, function (err, result, fields) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     return console.log(result);
    // })
