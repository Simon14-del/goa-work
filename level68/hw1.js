let age = Number(prompt("type your age"))
let is_student = Boolean(prompt("are you a student"))
if (age >= 18 && age <= 24 && is_student == true){
    alert("შენ ხარ სტუდენტი და გეკუთვნის სტიპენდია")
} else if (is_student == false){
    alert("18 წლის ხარ მარა სტუდენტი არა, რა სტიპენდიაზე ლაპარაკობ")
} else alert("ჯერ სკოლა დაამთავრე")
    

    
