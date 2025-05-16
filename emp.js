var eid= undefined;
var ename = undefined;
var eemail = undefined;
var esalary = undefined;
var edept = undefined;
var econtact = undefined;
 var tbdy = undefined;
 var emp = [];
 function init(){
    eid = document.getElementById('eid');
    ename = document.getElementById('ename');
    eemail = document.getElementById('eemail');
    esalary = document.getElementById('esalary');
    edept = document.getElementById('edept');
    econtact = document.getElementById('econtact');
    tbdy = document.getElementById('tbdy');
    
    console.log(`${eid}: ${ename} : ${eemail} : ${esalary} : ${edept} :${econtact}`)
    //Get data From Local Storage
    var emp_st = localStorage.getItem('employee');
    //convert String into JSON OBJECT
    var emp_obj = JSON.parse(emp_st);
    for(let e of emp_obj){
        emp = [...emp,e];
        //alert(JSON.stringify(emp));
        showEmployee();
    }
 }
//Get All Values from field Objects
function addEmployee(){
    console.log("Length :"+emp.length);
    var id = eid.value;
    var name = ename.value;
    var email = eemail.value;
    var salary = esalary.value;
    var dept = edept.value;
    var mobile = econtact.value;
    //console.log(`${id} : ${name} : ${email} : ${salary} : ${dept}:${mobile}`)
    //Create Object
    var eobj = {id:id,name:name,email:email,mobile:mobile,salary:salary,dept:dept}
    //Data Put on Array Variable
    emp =[...emp,eobj];
    console.log("Length ====> :"+emp.length)

    //Convert JSON in to String Format
    var emp_str = JSON.stringify(emp);

   // Data Save in Local Storage
   localStorage.setItem('employee',emp_str);
}   
function showEmployee(){
    for(let e of emp){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerText = e.id;
        tr.appendChild(td1);
        
        var td2 = document.createElement('td');
        td2.innerText = e.name;
        tr.appendChild(td2);

        var td3 = document.createElement('td');
        td3.innerText = e.email;
        tr.appendChild(td3);

        var td4 = document.createElement('td');
        td4.innerText = e.mobile;
        tr.appendChild(td4);

        var td5 = document.createElement('td');
        td5.innerText = e.salary;
        tr.appendChild(td5);

        var td6 = document.createElement('td');
        td6.innerText = e.dept;
        tr.appendChild(td6);

        var btn = document.createElement('button');
        btn.innerText = 'Edit';
        var td7 = document.createElement('td');
        td7.appendChild(btn);
        tr.appendChild(td7)

        var btn = document.createElement('button');
        btn.innerText = 'Delete';

        var td8 = document.createElement('td');
        td8.appendChild(btn);
        tr.appendChild(td8);
        tbdy.appendChild(tr);
    }
}