const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const eventType = (data.get("eventType") || "").toString().trim();
    const date = (data.get("date") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = encodeURIComponent(`Enquiry - ${eventType || "Event"} (${name || "Client"})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEvent Type: ${eventType}\nDate: ${date || "Not specified"}\n\nMessage:\n${message || "(No message)"}\n\nSent via Ligature Events website.`
    );

    window.location.href = `mailto:ligatureevents@gmail.com?subject=${subject}&body=${body}`;
  });
}
