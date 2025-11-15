// ===========================
// Google Calendar API Integration
// ===========================
const CALENDAR_API_KEY = "AIzaSyAISDIlIS6j5X2SdK3RN48_zpGP8r_w3hk";
const CALENDAR_ID =
  "c_e19e92eaa14c5a1b895ef0dd8208b8ce24a0f7a599d3b15a9bc129915f3b890e@group.calendar.google.com";
const SHEETS_API_KEY = "YOUR_GOOGLE_SHEETS_API_KEY";
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";

// Fetch events from Google Calendar
async function fetchCalendarEvents(maxResults = 10) {
  try {
    const timeMin = new Date().toISOString();
    const encodedCalendarId = encodeURIComponent(CALENDAR_ID);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodedCalendarId}/events?key=${CALENDAR_API_KEY}&timeMin=${timeMin}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`;

    console.log("=== CALENDAR API DEBUG ===");
    console.log("Calendar ID:", CALENDAR_ID);
    console.log("API Key:", CALENDAR_API_KEY.substring(0, 10) + "...");
    console.log("Fetching URL:", url);

    const response = await fetch(url);
    console.log("Response Status:", response.status, response.statusText);

    const data = await response.json();
    console.log("API Response:", data);

    if (data.error) {
      console.error("❌ Calendar API Error:", data.error);
      console.error("Error Message:", data.error.message);
      console.error("Error Details:", data.error.errors);
      return [];
    }

    if (data.items && data.items.length > 0) {
      console.log("✅ Successfully fetched", data.items.length, "events");
    } else {
      console.log("⚠️ No events found in calendar");
    }

    return data.items || [];
  } catch (error) {
    console.error("❌ Error fetching calendar events:", error);
    return [];
  }
}

// Check if attachment is an image
function isImageUrl(url) {
  if (!url) return false;
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
  const lowerUrl = url.toLowerCase();
  return imageExtensions.some((ext) => lowerUrl.includes(ext));
}

// Hardcoded leaders data
function fetchLeaders() {
  return [
    {
      name: "John Smith",
      role: "President",
      bio: "Passionate about South Asian culture and community building.",
      photo: "https://via.placeholder.com/150/8F0F22/FFFFFF?text=President",
    },
    {
      name: "Jane Doe",
      role: "Vice President",
      bio: "Loves organizing events and bringing people together.",
      photo: "https://via.placeholder.com/150/236139/FFFFFF?text=VP",
    },
    {
      name: "Mike Johnson",
      role: "Treasurer",
      bio: "Manages finances and helps plan our budget.",
      photo: "https://via.placeholder.com/150/DF993A/FFFFFF?text=Treasurer",
    },
    {
      name: "Sarah Williams",
      role: "Secretary",
      bio: "Keeps us organized and documents our journey.",
      photo: "https://via.placeholder.com/150/8F0F22/FFFFFF?text=Secretary",
    },
  ];
}

// ===========================
// Alpine.js Data Components
// ===========================
document.addEventListener("alpine:init", () => {
  // Main app state
  Alpine.data("app", () => ({
    events: [],
    leaders: [],
    nextEvent: null,
    loading: true,

    async init() {
      console.log("🚀 Initializing app...");
      await this.loadEvents();
      await this.loadLeaders();
      this.loading = false;
      console.log("✅ App initialized. Events:", this.events.length);
    },

    async loadEvents() {
      console.log("📅 Loading events...");
      this.events = await fetchCalendarEvents(10);
      console.log("📊 Events loaded:", this.events.length);
      if (this.events.length > 0) {
        this.nextEvent = this.events[0];
        console.log("⭐ Next event:", this.nextEvent.summary);
      } else {
        console.log("⚠️ No events found");
      }
    },

    async loadLeaders() {
      this.leaders = await fetchLeaders();
    },

    getEventPoster(event) {
      if (event.attachments && event.attachments.length > 0) {
        const imageAttachment = event.attachments.find((att) =>
          isImageUrl(att.fileUrl),
        );
        if (imageAttachment) return imageAttachment.fileUrl;
      }
      return "https://via.placeholder.com/400x300/236139/FEEFC6?text=Event+Poster";
    },

    formatDate(dateString) {
      try {
        if (!dateString) return "Date TBA";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid Date";
        return date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      } catch (error) {
        console.error("Error formatting date:", error);
        return "Date TBA";
      }
    },

    getUpcomingEvents(count = 4) {
      return this.events.slice(0, count);
    },
  }));

  // FAQ Component
  Alpine.data("faq", () => ({
    openItems: [],

    toggle(index) {
      if (this.openItems.includes(index)) {
        this.openItems = this.openItems.filter((i) => i !== index);
      } else {
        this.openItems.push(index);
      }
    },

    isOpen(index) {
      return this.openItems.includes(index);
    },
  }));

  // Stats counter animation
  Alpine.data("statsCounter", (target) => ({
    count: 0,
    target: target,
    hasAnimated: false,

    init() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.animateCount();
              this.hasAnimated = true;
            }
          });
        },
        { threshold: 0.5 },
      );

      this.observer.observe(this.$el);
    },

    animateCount() {
      const duration = 2000;
      const steps = 60;
      const increment = this.target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= this.target) {
          this.count = this.target;
          clearInterval(timer);
        } else {
          this.count = Math.floor(current);
        }
      }, duration / steps);
    },
  }));

  // Theme Toggle Component
  Alpine.data("themeToggle", () => ({
    isDark: false,

    init() {
      // Check for saved theme preference or default to light
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        this.isDark = true;
        document.body.classList.add("dark-theme");
      }
    },

    toggle() {
      this.isDark = !this.isDark;

      if (this.isDark) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
    },
  }));
});

// ===========================
// Scroll Animations
// ===========================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe timeline items
  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });

  // Observe leader cards
  document.querySelectorAll(".leader-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe event cards
  document.querySelectorAll(".event-card").forEach((card) => {
    observer.observe(card);
  });
}

// ===========================
// Smooth Scrolling for Navigation
// ===========================
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===========================
// Initialize on DOM Ready
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initSmoothScrolling();
});

// Re-observe elements when they're dynamically added
document.addEventListener("alpine:initialized", () => {
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
});
