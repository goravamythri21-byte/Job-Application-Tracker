let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

function displayJobs() {
    jobList.innerHTML = "";

    jobs.forEach((job, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${job.company}</td>
            <td>${job.role}</td>
            <td>${job.date}</td>
            <td>${job.status}</td>
            <td>
                <button class="delete"
                onclick="deleteJob(${index})">
                Delete
                </button>
            </td>
        `;

        jobList.appendChild(row);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let job = {
        company: document.getElementById("company").value,
        role: document.getElementById("role").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();
    form.reset();
});

function deleteJob(index) {
    jobs.splice(index, 1);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();
}

displayJobs();
