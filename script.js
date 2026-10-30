// البيانات المحدثة بناءً على جدول الجامعة، جدول الدراسة، الورد، وجدول الجيم
const scheduleData = [
    {
        day: "الجمعة",
        university: "عطلة",
        gym: "🏋️ عطلة جيم",
        studyProgram: [
            { id: "fri_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "fri_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "fri_1", text: "2 ساعة: دراسة نظري (بيانيات حاسوبية + بنيان 2)" },
            { id: "fri_2", text: "0.5 ساعة: لغة E تقنية" },
            { id: "fri_3", text: "0.5 ساعة: تطوير مواقع وويب" }
        ]
    },
    {
        day: "السبت",
        university: "عطلة",
        gym: "💪 تمرين الجيم: صدر و ترابيس",
        studyProgram: [
            { id: "sat_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "sat_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "sat_1", text: "2 ساعة: دراسة نظري (أساسيات الشبكات + بحوث العمليات)" },
            { id: "sat_2", text: "0.5 ساعة: تثبيت مفاهيم البرمجة الحالية" },
            { id: "sat_3", text: "0.5 ساعة: لغة E" }
        ]
    },
    {
        day: "الأحد",
        university: "عطلة",
        gym: "💪 تمرين الجيم: ظهر و بايسبس",
        studyProgram: [
            { id: "sun_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "sun_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "sun_1", text: "2 ساعة: دراسة نظري (لغات برمجة)" },
            { id: "sun_2", text: "0.5 ساعة: لغة E / استماع" },
            { id: "sun_3", text: "0.5 ساعة: تنظيم الملاحظات وترتيبها" },
            { id: "sun_4", text: "0.5 ساعة: مراجعة مواد الاثنين (بنيان 2 + بيانيات)" }
        ]
    },
    {
        day: "الإثنين",
        university: "8:30 - 10:30 : بيانيات حاسوبية\n10:30 - 12:30 : بنيان حاسوب 2",
        gym: "💪 تمرين الجيم: أرجل و معدة",
        studyProgram: [
            { id: "mon_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "mon_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "mon_1", text: "1 ساعة: مادة حمل (دارات منطقية)" },
            { id: "mon_2", text: "1 ساعة: مهارات برمجية (HTML / CSS)" },
            { id: "mon_3", text: "0.5 ساعة: E تقنية" },
            { id: "mon_4", text: "0.5 ساعة: تحضير مواد الثلاثاء" }
        ]
    },
    {
        day: "الثلاثاء",
        university: "8:30 - 10:30 : عملي أساسيات الشبكات\n10:30 - 12:30 : أساسيات الشبكات (نظري)\n12:30 - 2:30 : بحوث عمليات (نظري)",
        gym: "🏋️ عطلة جيم",
        studyProgram: [
            { id: "tue_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "tue_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "tue_1", text: "1 ساعة: عملي أساسيات الشبكات" },
            { id: "tue_2", text: "0.5 ساعة: مادة حمل (احتمالات)" },
            { id: "tue_3", text: "1 ساعة: مهارات برمجية PHP" },
            { id: "tue_4", text: "0.5 ساعة: لغة E" },
            { id: "tue_5", text: "0.5 ساعة: تحضير مواد الأربعاء (عملي لغات + عملي برمجة 3 + عملي بنيان 2)" }
        ]
    },
    {
        day: "الأربعاء",
        university: "8:30 - 10:30 : عملي لغات برمجة\n10:30 - 12:30 : عملي برمجة 3\n12:30 - 2:30 : عملي بنيان 2",
        gym: "💪 تمرين الجيم: أكتاف و ترابيس",
        studyProgram: [
            { id: "wed_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "wed_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "wed_1", text: "2.5 ساعة: عملي لغات + عملي برمجة 3 + عملي بنيان 2" },
            { id: "wed_2", text: "0.5 ساعة: مواد حمل (خوارزميات 1)" },
            { id: "wed_3", text: "0.5 ساعة: مهارات برمجية PHP" },
            { id: "wed_4", text: "0.5 ساعة: لغة E" },
            { id: "wed_5", text: "0.5 ساعة: تحضير مواد الخميس" }
        ]
    },
    {
        day: "الخميس",
        university: "8:30 - 10:30 : عملي بيانيات حاسوبية\n10:30 - 12:30 : عملي بحوث",
        gym: "💪 تمرين الجيم: يدين بالكامل",
        studyProgram: [
            { id: "thu_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "thu_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "thu_1", text: "2 ساعة: عملي بيانيات + عملي بحوث" },
            { id: "thu_2", text: "0.5 ساعة: مواد حمل (جبر عام)" },
            { id: "thu_3", text: "0.5 ساعة: مهارات برمجية / ترمیم" },
            { id: "thu_4", text: "0.5 ساعة: لغة E" },
            { id: "thu_5", text: "0.5 ساعة: ترتيب مهام عطلة نهاية الأسبوع" }
        ]
    }
];

// حالة حفظ التقدم محلياً لضمان عدم ضياع البيانات
let completedTasks = JSON.parse(localStorage.getItem('completedScheduleTasks')) || {};
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    renderSchedule('all');
    calculateProgress();
});

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
}

function renderSchedule(filter) {
    const container = document.getElementById('schedule-cards-container');
    container.innerHTML = '';

    const listToRender = filter === 'all' 
        ? scheduleData 
        : scheduleData.filter(d => d.day === filter);

    listToRender.forEach(item => {
        const uniFormatted = item.university.split('\n').map(line => `<div class="university-item">📌 ${line}</div>`).join('');
        
        const tasksHTML = item.studyProgram.map(task => {
            const isChecked = completedTasks[task.id] ? 'checked' : '';
            const completedClass = completedTasks[task.id] ? 'completed' : '';
            return `
                <li class="study-item ${completedClass}">
                    <input type="checkbox" id="${task.id}" ${isChecked} onchange="toggleTask('${task.id}')">
                    <label for="${task.id}">${task.text}</label>
                </li>
            `;
        }).join('');

        container.innerHTML += `
            <div class="day-card">
                <div class="day-card-header">
                    <span class="day-title">📅 ${item.day}</span>
                </div>
                <div>
                    <div class="section-title">🏛️ دوام الجامعة:</div>
                    <div class="university-box">${uniFormatted}</div>
                </div>
                <div>
                    <div class="section-title">🏋️ جدول الجيم:</div>
                    <div class="gym-box">${item.gym}</div>
                </div>
                <div>
                    <div class="section-title">📖 الورد والبرنامج الدراسي:</div>
                    <ul class="study-list">${tasksHTML}</ul>
                </div>
            </div>
        `;
    });
}

function filterDay(day, btnElem) {
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
    btnElem.classList.add('active');
    renderSchedule(day);
}

function toggleTask(id) {
    completedTasks[id] = !completedTasks[id];
    localStorage.setItem('completedScheduleTasks', JSON.stringify(completedTasks));
    const activeBtn = document.querySelector('.day-btn.active');
    const currentFilter = activeBtn ? activeBtn.innerText.replace('📅 ', '').trim() : 'all';
    renderSchedule(currentFilter === 'كل الأيام' ? 'all' : currentFilter);
    calculateProgress();
}

function calculateProgress() {
    let totalTasks = 0;
    let doneTasks = 0;

    scheduleData.forEach(d => {
        d.studyProgram.forEach(task => {
            totalTasks++;
            if (completedTasks[task.id]) doneTasks++;
        });
    });

    const percent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
    document.getElementById('progress-percentage').innerText = `${percent}%`;
    document.getElementById('main-progress-bar').style.width = `${percent}%`;
}