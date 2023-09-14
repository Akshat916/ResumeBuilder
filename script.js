let createResume = document.getElementById('createResume');
let createResumeForm = document.getElementById('createResumeForm');
createResume.addEventListener('click', function(){
    createResumeForm.style.display = 'block';
    document.getElementById('viewResumeDoc').style.display = 'none';
    document.getElementById('viewResumeDoc').innerHTML = '';
});

let editResume = document.getElementById('editResume');
editResume.addEventListener('click', function(){
    createResumeForm.style.display = 'block';
    document.getElementById('viewResumeDoc').style.display = 'none';
    document.getElementById('viewResumeDoc').innerHTML = '';
});

let viewResume = document.getElementById('viewResume');
viewResume.addEventListener('click', function(){
    console.log(document.getElementById('viewResumeDoc').innerHTML == '');
    if(document.getElementById('viewResumeDoc').innerHTML === ''){
    let userResume = localStorage.getItem('resume');
    if(userResume != null){
        let userEmail = prompt("Emter ypur email which fill in your resume");
        userResume = JSON.parse(userResume);
        const selectedItem = userResume.filter((item)=>{
            return item.personalInformation.email === userEmail;
        });
        if(selectedItem.length > 0 ){
            createResumeForm.style.display = 'none';
            let viewResumeDoc = document.getElementById('viewResumeDoc');
            viewResumeDoc.style.display = 'block';
            let tempResume = document.createElement('section');
            tempResume.innerHTML = `<!-- Top Section -->
			<div class="top-section p-5">
				<div class="row">
					<div class="col-lg-6 col-md-6">
						<h1 class="h1 top-heading" contenteditable="true">${selectedItem[0].personalInformation.name}</h1>
						<p>${selectedItem[0].personalInformation.professionalTitle}</p>
					</div>
                    <div class="col-md-5 offset-md-1">
						<table cellpadding="8">
							<tr>
								<td>Email</td>
								<td>${selectedItem[0].personalInformation.email}</td>
							</tr>
							<tr>
								<td>Phone</td>
								<td>${selectedItem[0].personalInformation.number}</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>${selectedItem[0].personalInformation.address}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>

			<!-- About Section -->
			<div class="about-section pt-5 px-5 mt-2">
				<div class="row pt-3">
					<div class="col-lg-12 col-md-6">
						<h2 class="mb-4 about-heading">About Me</h2>
						<p>${selectedItem[0].personalInformation.aboutMe}</p>
					</div>
				</div>
			</div>
			<hr>
			<div class="skill-section px-5 px-lg-4">
				<h2 class="mb-3 skill-heading">Professional Skills</h2>
				<div class="row">
                ${selectedItem[0].skills.map((skillVal)=>{
					return `<div class="col-md-6">
						<div class="mb-3">
							<span>${skillVal}</span>
						</div>
					</div>`;
                }).join('')}
				</div>
			</div>

			<hr>

			<div class="experience-section px-3 px-lg-4">
				<h2 class="mb-5">Work Experience</h2>
				<div class="timeline">
					<div class="card timeline-card timeline-card-primary">
						<div class="card-body">
							<div class="h5 mb-1">${selectedItem[0].workExperience.position} <span class="text-muted h6">at ${selectedItem[0].workExperience.companyName}</span></div>
							<div class="text-muted text-small mb-3">${selectedItem[0].workExperience.duration} years</div>
							<div>${selectedItem[0].workExperience.description}</div>
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="education-section px-3 px-lg-4">
				<h2 class="mb-5">Education</h2>
				<div class="timeline">
					<div class="card  timeline-card timeline-card-success">
						<div class="card-body">
							<div class="h5 mb-1">${selectedItem[0].educationalInformation.degree} in ${selectedItem[0].educationalInformation.specification} <span class="text-muted h6">from ${selectedItem[0].educationalInformation.collegeName}</span></div>
							<div class="text-muted text-small mb-2">${selectedItem[0].educationalInformation.graduation} </div>
                        </div>
					</div>
                </div><hr>`;
            viewResumeDoc.appendChild(tempResume);
        }else if (userEmail !== null){
            alert("Sorry, Email is not found. Please create your resume.")
        }
    }
    else{
        alert("No resume created yet. Please create your resume");
    }
}
});

let skillsArr = [];
let addSkills = document.getElementById('addSkills');
let skills = document.getElementById('skills');
let skillsCounter = 1;
addSkills.addEventListener('click', function(){
    if(document.getElementById('inputSkill'+skillsCounter).value != ''){
        let skillValue = document.getElementById('inputSkill'+skillsCounter).value;
        skillsArr.push(skillValue);
        document.getElementById('removeSkills').style.display='block';
        skillsCounter++;
        let temp = document.createElement('div');
        temp.setAttribute('class', 'col-md-3');
        temp.innerHTML = `<input type="text" class="form-control" id="inputSkill${skillsCounter}" placeholder="Skill ${skillsCounter}" />`;
        let a = document.getElementById('skillsActionBtn');
        skills.insertBefore(temp,a);
    }
});
console.log(skillsArr)
let removeSkills = document.getElementById('removeSkills');
removeSkills.addEventListener('click', function(){
    skills.removeChild(skills.lastElementChild.previousElementSibling);
    skillsArr.pop();
    skillsCounter--;
});

let personalInformationBtn = document.getElementById('personalInformationBtn');
let personalInformation = document.getElementById('personalInformation');
personalInformationBtn.addEventListener('click', function(){
    personalInformation.classList.toggle('toggle');
});

let educationalInformationBtn = document.getElementById('educationalInformationBtn');
let educationalInformation = document.getElementById('educationalInformation');
educationalInformationBtn.addEventListener('click', function(){
    educationalInformation.classList.toggle('toggle');
});

let workExperienceBtn = document.getElementById('workExperienceBtn');
let workExperience = document.getElementById('workExperience');
workExperienceBtn.addEventListener('click', function(){
    workExperience.classList.toggle('toggle');
});

let skillsBtn = document.getElementById('skillsBtn');
skillsBtn.addEventListener('click', function(){
    skills.classList.toggle('toggle');
});

createResumeForm.addEventListener('submit', function(e){
    e.preventDefault();
let inputName = document.getElementById('inputName').value;
let inputEmail = document.getElementById('inputEmail').value;
let inputProfessionalTitle = document.getElementById('inputProfessionalTitle').value;
let inputNumber = document.getElementById('inputNumber').value;
let inputAddress = document.getElementById('inputAddress').value;
let inputAboutMe = document.getElementById('inputAboutMe').value;

let inputCollegeName = document.getElementById('inputCollegeName').value;
let inputDegree = document.getElementById('inputDegree').value;
let inputSpecification = document.getElementById('inputSpecification').value;
let inputGraduationYear = document.getElementById('inputGraduationYear').value;

let inputCompanyName = document.getElementById('inputCompanyName').value;
let inputPosition = document.getElementById('inputPosition').value;
let inputDuration = document.getElementById('inputDuration').value;
let inputDescriptionOfWorkExp = document.getElementById('inputDescriptionOfWorkExp').value;



let inputSkill1 = document.getElementById('inputSkill1').value;

let personalInformationArr = {
    'name': inputName,
    'email': inputEmail,
    'professionalTitle': inputProfessionalTitle,
    'number': inputNumber,
    'address': inputAddress,
    'aboutMe': inputAboutMe,
};
let educationalInformationArr = {
    'collegeName':inputCollegeName,
    'degree': inputDegree,
    'specification': inputSpecification,
    'graduation': inputGraduationYear,
};
let workExperienceArr = {
    'companyName': inputCompanyName,
    'position': inputPosition,
    'duration': inputDuration,
    'description': inputDescriptionOfWorkExp,
};


let resumeObj = {
    'personalInformation': personalInformationArr,
    'educationalInformation': educationalInformationArr,
    'workExperience': workExperienceArr,
    'skills': skillsArr,
};

console.log(resumeObj)

let resumeData = localStorage.getItem('resume');
if(resumeData === null){
    resumeData = [];
}
else{
    resumeData = JSON.parse(resumeData);
}
    
    const selectedItemEmail = resumeData.filter((item)=>{
        return item.personalInformation.email === inputEmail;
    });
    if(selectedItemEmail.length > 0){
        alert("Resume already created with this email address. Please check your resume in view resume page.");
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        createResumeForm.reset();
    }
    else{
        resumeData.push(resumeObj)
        resumeData = JSON.stringify(resumeData);
        let length = resumeData.length;
        localStorage.setItem('resume', resumeData);
        let newlength = JSON.parse(localStorage.getItem('resume')).length;
    
        if(newlength==length){
            alert("There was some issue with storage. Please try again.");
        }
        else{
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            createResumeForm.reset();
        }
    }    
});