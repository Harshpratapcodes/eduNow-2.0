document.getElementById("chatButton").addEventListener("click", function() {
    document.getElementById("chatModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("chatModal").classList.add("hidden");
});

// Close modal when clicking outside of it
document.getElementById("chatModal").addEventListener("click", function(event) {
    if (event.target === this) {
        this.classList.add("hidden");
    }
});

const modal = document.getElementById('consultationModal');
const openModalBtn = document.querySelector('.consult-now-btn'); // Make sure this class is on your button
const closeModalBtn = document.getElementById('closeModalBtn');
const body = document.body;

// Open Modal Function
openModalBtn.addEventListener('click', () => {
modal.classList.remove('hidden');
body.style.overflow = 'hidden';  // Prevent background scrolling
});

// Close Modal Function
closeModalBtn.addEventListener('click', () => {
modal.classList.add('hidden');
body.style.overflow = 'auto';  // Restore background scrolling
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
if (e.target === modal) {
    modal.classList.add('hidden');
    body.style.overflow = 'auto';
}
});


