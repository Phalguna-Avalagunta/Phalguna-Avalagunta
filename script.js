// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Enquiry form -> opens email draft
const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const eventType = String(data.get("eventType") || "").trim();
    const date = String(data.get("date") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Ligature Events Enquiry - ${eventType || "Event"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEvent Type: ${eventType}\nDate: ${date || "Not specified"}\n\nMessage:\n${message || "(No message)"}\n`
    );

    window.location.href = `mailto:ligatureevents@gmail.com?subject=${subject}&body=${body}`;
  });
}
