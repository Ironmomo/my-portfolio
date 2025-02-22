import cvPath from './assets/resume.pdf'
document.getElementById("cv-btn").addEventListener("click", (event) => {
    event.preventDefault()
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "andrin_fassbind_cv.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})