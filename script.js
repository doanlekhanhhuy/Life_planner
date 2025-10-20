// Data Schedule and Quotes
const weeklySchedule = {
    // Vui lòng dán toàn bộ lịch học của bạn vào đây (Bao gồm dữ liệu mẫu của bạn)
    Monday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:50", icon: "🛌" },
        { name: "Wash face", start: "13:50", end: "14:00", icon: "🚿" },
        { name: "Self study – Math", start: "14:00", end: "15:30", icon: "➗" },
        { name: "Break", start: "15:30", end: "15:45", icon: "☕" },
        { name: "Self study – IELTS", start: "15:45", end: "16:45", icon: "🧠" },
        { name: "Break", start: "16:45", end: "17:00", icon: "☕" },
        { name: "Boxing", start: "17:00", end: "19:00", icon: "🥊" },
        { name: "Rest", start: "19:00", end: "19:15", icon: "😌" },
        { name: "Self study – Chemistry", start: "19:15", end: "21:00", icon: "⚗️" },
        { name: "Dinner + rest", start: "21:00", end: "22:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "22:00", end: "23:00", icon: "📘" },
        { name: "Light self study – Music/Art", start: "23:00", end: "23:30", icon: "🎸" }
    ],
    Tuesday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "Shadow boxing", start: "04:50", end: "05:20", icon: "🥊" },
        { name: "IELTS vocabulary", start: "05:20", end: "05:50", icon: "📚" },
        { name: "Pack items", start: "05:50", end: "06:00", icon: "🎒" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Lunch", start: "11:30", end: "12:30", icon: "🍱" },
        { name: "Rest", start: "12:30", end: "12:50", icon: "😴" },
        { name: "Nap", start: "12:50", end: "13:30", icon: "🛌" },
        { name: "Pack items", start: "13:30", end: "14:00", icon: "🎒" },
        { name: "School", start: "14:00", end: "16:30", icon: "🏫" },
        { name: "Break", start: "16:30", end: "16:45", icon: "☕" },
        { name: "Ab workout", start: "16:45", end: "17:05", icon: "💪" },
        { name: "Rest", start: "17:05", end: "17:30", icon: "😌" },
        { name: "Self study – Math", start: "17:30", end: "19:00", icon: "➗" },
        { name: "Dinner + rest", start: "19:00", end: "20:00", icon: "🍽️" },
        { name: "Self study – IELTS", start: "20:00", end: "21:30", icon: "📘" },
        { name: "Break", start: "21:30", end: "21:45", icon: "☕" },
        { name: "Self study – Physics", start: "21:45", end: "22:30", icon: "🔬" },
        { name: "Break", start: "22:30", end: "22:45", icon: "☕" },
        { name: "Self study – Informatics", start: "22:45", end: "23:30", icon: "💻" }
    ],
    // ... (Thêm các ngày khác nếu cần) ...
    Wednesday: [
        { name: "Morning routine", start: "04:30", end: "04:50", icon: "🪥" },
        { name: "School", start: "06:00", end: "11:30", icon: "🏫" },
        { name: "Self study – IELTS", start: "14:00", end: "17:00", icon: "📘" },
        { name: "Boxing", start: "17:00", end: "19:00", icon: "🥊" },
        { name: "Dinner", start: "21:00", end: "22:00", icon: "🍽️" },
    ],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
};

const motivationalQuotes = [
    "Stay focused and never give up!",
    "Every step you take is progress.",
    "Your hard work will pay off.",
    "Keep pushing, you're stronger than you think!",
    "Success is the sum of small efforts.",
    "Embrace the challenge, conquer your goals!",
    "You are capable of amazing things.",
    "Consistency is the key to success.",
    "Make today count!",
    "Your future is created by what you do today."
];

// Định nghĩa các phần tử DOM
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const greetingElement = document.getElementById('greeting');
const motivationalQuoteElement = document.getElementById('motivational-quote');
const taskContainer = document.getElementById('task-container');
const waterBackground = document.getElementById('water-background');

let currentDay = getCurrentDay().day;
let selectedDay = currentDay;

// --- Hàm Helper ---

function createWaterDrops() {
    if (!waterBackground) return; 
    
    for (let i = 0; i < 20; i++) { 
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.width = `${30 + Math.random() * 60}px`; 
        drop.style.height = drop.style.width;
        drop.style.animationDelay = `${Math.random() * 20}s`; 
        waterBackground.appendChild(drop);
    }
}

function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return {
        day: days[today.getDay()],
        formatted: today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    };
}
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
function isTimeInRange(start, end, current) {
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);
    const [currentHours, currentMinutes] = current.split(':').map(Number);

    const startTime = startHours * 60 + startMinutes;
    const endTime = endHours * 60 + endMinutes;
    const currentTime = currentHours * 60 + currentMinutes;

    return currentTime >= startTime && currentTime <= endTime;
}
function isTaskPast(end, current) {
    const [endHours, endMinutes] = end.split(':').map(Number);
    const [currentHours, currentMinutes] = current.split(':').map(Number);

    const endTime = endHours * 60 + endMinutes;
    const currentTime = currentHours * 60 + currentMinutes;

    return currentTime > endTime;
}
function getRandomQuote() {
    const index = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[index];
}


// --- Hàm Cập nhật UI ---

function setTimeBasedGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning Drauy";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon Drauy";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening Drauy";
    } else {
        greeting = "Good Night Drauy";
    }
    
    greetingElement.textContent = greeting;
}

function updateDateTime() {
    const { formatted } = getCurrentDay();
    const currentTime = getCurrentTime();
    
    currentDateElement.textContent = formatted;
    currentTimeElement.textContent = currentTime;
    setTimeBasedGreeting();
}

function setTaskClasses() {
    const taskCards = document.querySelectorAll('.task-card');
    const tasks = weeklySchedule[selectedDay] || [];
    const currentTime = getCurrentTime();
    
    taskCards.forEach((card, index) => {
        if (tasks[index]) {
            const task = tasks[index];
            
            card.classList.remove('past', 'current', 'future');
            
            if (isTimeInRange(task.start, task.end, currentTime)) {
                card.classList.add('current');
            } else if (isTaskPast(task.end, currentTime)) {
                card.classList.add('past');
            } else {
                card.classList.add('future');
            }
        }
    });
}

function applyParallaxEffect() {
    const container = document.querySelector('.timeline-container');
    const taskCards = document.querySelectorAll('.task-card');
    
    if (!container || taskCards.length === 0) return;

    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    const containerCenter = containerTop + containerHeight / 2;
    
    const MAX_DISTANCE = containerHeight * 0.7;
    const MIN_SCALE = 0.85;
    const MAX_SCALE = 1.0;
    const MIN_OPACITY = 0.5;
    const MAX_OPACITY = 1.0;

    taskCards.forEach(card => {
        const cardCenter = card.offsetTop + card.offsetHeight / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        const normalizedDistance = Math.min(1, distance / MAX_DISTANCE);
        
        const scale = MAX_SCALE - (normalizedDistance * (MAX_SCALE - MIN_SCALE));
        const opacity = MAX_OPACITY - (normalizedDistance * (MAX_OPACITY - MIN_OPACITY));

        card.style.setProperty('--parallax-scale', scale.toFixed(3));
        card.style.setProperty('--parallax-opacity', opacity.toFixed(3));
    });
}

function autoScrollToCurrent() {
    if (selectedDay !== currentDay) return; 

    const currentCard = document.querySelector('.task-card.current');
    if (!currentCard) return;

    const container = document.querySelector('.timeline-container');
    const containerRect = container.getBoundingClientRect();
    
    // Cuộn để căn giữa thẻ hiện tại
    const scrollTop = currentCard.offsetTop - (containerRect.height / 2) + (currentCard.offsetHeight / 2);
    
    container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
    });
}

function displayTasks() {
    const tasks = weeklySchedule[selectedDay] || [];
    
    taskContainer.innerHTML = '';
    
    if (tasks.length === 0) {
        taskContainer.innerHTML = '<div class="no-tasks">No tasks scheduled for today. Enjoy your free time!</div>';
        return;
    }

    tasks.forEach((task) => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        taskCard.innerHTML = `
            <div class="task-icon">${task.icon}</div>
            <div class="task-content">
                <h3>${task.name}</h3>
                <div class="task-time">${task.start} – ${task.end}</div>
            </div>
        `;
        
        taskContainer.appendChild(taskCard);
    });
    
    // Chạy sau khi DOM render xong
    setTimeout(() => {
        setTaskClasses();
        applyParallaxEffect(); 
        autoScrollToCurrent(); 
    }, 100);
}


// --- Logic Xử lý Event ---

function handleDaySelection(day) {
    selectedDay = day;
    
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.day === day) {
            btn.classList.add('active');
            
            // Tự động cuộn ngang nút ngày trên mobile
            if (window.innerWidth < 900) {
                const daySelector = document.querySelector('.day-selector');
                const btnRect = btn.getBoundingClientRect();
                const daySelectorRect = daySelector.getBoundingClientRect();
                
                const scrollLeft = btn.offsetLeft - (daySelectorRect.width / 2) + (btnRect.width / 2);
                
                daySelector.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    });
    
    displayTasks();
}

function init() {
    currentDay = getCurrentDay().day;
    selectedDay = currentDay;

    createWaterDrops();
    updateDateTime();
    motivationalQuoteElement.textContent = getRandomQuote();
    
    // Gắn Event listener cho các nút ngày
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            handleDaySelection(btn.dataset.day);
        });
    });
    
    // Đặt nút ngày hiện tại làm active ban đầu
    const currentDayBtn = document.querySelector(`.day-btn[data-day="${currentDay}"]`);
    if (currentDayBtn) {
        currentDayBtn.classList.add('active');
    }
    
    displayTasks();

    // Event listener cho hiệu ứng parallax khi cuộn
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        timelineContainer.addEventListener('scroll', applyParallaxEffect, { passive: true });
    }
    
    // Vòng lặp cập nhật chính
    setInterval(updateDateTime, 10000); 
    setInterval(() => {
        setTaskClasses();
        applyParallaxEffect(); 
        autoScrollToCurrent(); 
    }, 60000); // Cập nhật trạng thái và cuộn mỗi 1 phút
    
    setInterval(() => {
        motivationalQuoteElement.textContent = getRandomQuote();
    }, 300000); // Cập nhật quote sau 5 phút
}

document.addEventListener('DOMContentLoaded', init);