
function getFormvalue(event) {

    event.preventDefault();

    let fname = document.querySelector('[name="fname"]').value.trim();

    let lname = document.querySelector('[name="lname"]').value.trim();

    let fullName = fname + " " + lname;

    alert(fullName.trim());
}
