<script>
document.addEventListener("DOMContentLoaded", function () {

    const nameInput = document.getElementById("name");
    const destinationInput = document.getElementById("destination");
    const storyInput = document.getElementById("story");
    const publishBtn = document.getElementById("publishBtn");
    const storyGrid = document.getElementById("storyGrid");

    publishBtn.addEventListener("click", function () {

        const name = nameInput.value.trim();
        const destination = destinationInput.value.trim();
        const story = storyInput.value.trim();

        if (name === "" || destination === "" || story === "") {
            alert("Please fill in all fields.");
            return;
        }

        const newStory = document.createElement("div");
        newStory.classList.add("story");

        newStory.innerHTML = `
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" alt="Travel Story">
            <div class="story-content">
                <h3>${destination}</h3>
                <p>${story}</p>
                <small><strong>By:</strong> ${name}</small>
            </div>
        `;

        storyGrid.appendChild(newStory);

        alert("Story published successfully!");

        nameInput.value = "";
        destinationInput.value = "";
        storyInput.value = "";
    });

});
</script>