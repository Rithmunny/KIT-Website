function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var program = document.getElementById('program').value;
    var specialRequirements = document.getElementById('specialRequirements').value;
    var academicHistory = document.getElementById('academicHistory').value;

    // Display enrollment confirmation
    document.getElementById('confirmationName').innerText = name;
    document.getElementById('confirmationAge').innerText = age;
    document.getElementById('confirmationGender').innerText = gender;
    document.getElementById('confirmationProgram').innerText = program;
    document.getElementById('confirmationSpecialRequirements').innerText = specialRequirements;
    document.getElementById('confirmationAcademicHistory').innerText = academicHistory;

    // Show enrollment confirmation section
    document.getElementById('enrollmentConfirmation').classList.remove('hidden');
}
