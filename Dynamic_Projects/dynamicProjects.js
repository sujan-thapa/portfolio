const projects = [
    { name: "Online Job Portal", description: "An online job portal connects job seekers with potential employers through an easy-to-navigate platform. It allows users to search for jobs, upload resumes, and apply for positions while enabling employers to post job listings and find suitable candidates.", link: "https://github.com/sujan-thapa/Job-Portal-System" },
    { name: "Movie Recommendation System", description: "A movie recommendation system suggests films based on a user's viewing history, preferences, and ratings. Using machine learning, it learns from user interactions to offer personalized movie choices, enhancing the viewing experience.", link: "https://github.com/sujan-thapa/Movie-Recommendation-System" },
    { name: "Blood DOnation Management System", description: "A blood donation management system helps manage blood donations, track donors, and facilitate the donation process. It connects donors with blood banks or hospitals, ensuring timely and efficient management of blood supply for emergencies.", link: "https://github.com/sujan-thapa/Blood-Donation-Management-System" },
    { name: "Recommendation System Using Machine Learning", description: "A recommendation system uses machine learning algorithms to analyze user behavior and preferences to suggest relevant items. It provides personalized recommendations in various domains such as e-commerce, streaming, and social media.", link: "https://github.com/sujan-thapa/Recommendation-System-Machine-Learning-" }
];

const projectList = document.getElementById("projects");
// for...of loop to iterate over the array of objects
for (const [index,project] of projects.entries()) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("box");
    if (index%2 == 0) {
        
        projectDiv.classList.add("left");
    }else{
        projectDiv.classList.add("right");

    }


    projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}">View Project</a>`;
    projectList.appendChild(projectDiv);
}
