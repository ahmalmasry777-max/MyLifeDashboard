// بيانات جدول الدوام والبرنامج الدراسي والتمارين (تم ربط مهام الجيم بـ IDs فريدة لتدخل في حساب النسبة المئوية)
const scheduleData = [
    {
        day: "الجمعة",
        university: "عطلة",
        gymId: "gym_fri",
        gymText: "🏋️ عطلة جيم",
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
        gymId: "gym_sat",
        gymText: "💪 تمرين الجيم: صدر و ترابيس",
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
        gymId: "gym_sun",
        gymText: "💪 تمرين الجيم: ظهر و بايسبس",
        studyProgram: [
            { id: "sun_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "sun_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "sun_1", text: "2 ساعة: دراسة نظري (لغات برمجة)" },
            { id: "sun_2", text: "0.5 ساعة: لغة E / استماع" },
            { id: "sun_3", text: "0.5 ساعة: تنظيم الملاحظات وترتيبها" },
            { id: "sun_4", text: "0.5 ساعة: مراجعة بنيان 2 + بيانيات + عملي بنيان 2" }
        ]
    },
    {
        day: "الإثنين",
        university: "8:30 - 10:30 : بيانيات حاسوبية نظري\n10:30 - 12:30 : عملي بنيان 2 (بالتناوب)\n12:30 - 2:30 : بنيان 2 نظري",
        gymId: "gym_mon",
        gymText: "💪 تمرين الجيم: أرجل و معدة",
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
        gymId: "gym_tue",
        gymText: "🏋️ عطلة جيم",
        studyProgram: [
            { id: "tue_quran", text: "📖 ورد القرآن الكريم: قراءة صفحتين" },
            { id: "tue_book", text: "📚 قراءة كتاب: قراءة 10 صفحات" },
            { id: "tue_1", text: "1 ساعة: عملي أساسيات الشبكات" },
            { id: "tue_2", text: "0.5 ساعة: مادة حمل (احتمالات)" },
            { id: "tue_3", text: "1 ساعة: مهارات برمجية PHP" },
            { id: "tue_4", text: "0.5 ساعة: لغة E" },
            { id: "tue_5", text: "0.5 ساعة: مراجعة عملي لغات برمجة + عملي برمجة 3 + نظري لغات برمجة" }
        ]
    },
    {
        day: "الأربعاء",
        university: "8:30 - 10:30 : عملي لغات برمجة\n10:30 - 12:30 : عملي برمجة 3\n12:30 - 2:30 : لغات برمجة نظري",
        gymId: "gym_wed",
        gymText: "💪 تمرين الجيم: أكتاف و ترابيس",
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
        gymId: "gym_thu",
        gymText: "💪 تمرين الجيم: يدين بالكامل",
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

const badgesList = [
    { id: "b_first_week", title: "بداية الشغف 🚀", desc: "أكملت أول أسبوع دراسي بنجاح!", icon: "🌱" },
    { id: "b_perfect_week", title: "مهندس خارق 💻", desc: "حققت نسبة إنجاز 100% في أسبوع كامل!", icon: "🏆" },
    { id: "b_financial_master", title: "خبير مالي 💰", desc: "سجلت أكثر من 5 معاملات مالية متزنة!", icon: "⚖️" },
    { id: "b_gym_hero", title: "بطل الجيم 💪", desc: "التزمت بجدول الجيم والورد اليومي!", icon: "🏋️" }
];

let completedTasks = JSON.parse(localStorage.getItem('completedScheduleTasks')) || {};
let archivedWeeks = JSON.parse(localStorage.getItem('archivedWeeks')) || [];
let financeTransactions = JSON.parse(localStorage.getItem('financeTransactions')) || [];
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

let weeklyChartInstance = null;
let financeChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const themeBtn = document.getElementById('theme-toggle-btn');
        if (themeBtn) themeBtn.innerText = '☀️ الوضع المضيء';
    }
    renderSchedule('all');
    calculateProgress();
    renderFinance();
    renderBadges();
});

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.innerText = isDarkMode ? '☀️ الوضع المضيء' : '🌓 الوضع المظلم';
    }
    showToast(isDarkMode ? "تم تفعيل الوضع المظلم 🌙" : "تم تفعيل الوضع المضيء ☀️");
}

function switchMainTab(tabId, btnElem) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.main-nav .nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    btnElem.classList.add('active');

    const filterBox = document.getElementById('sidebar-day-filter');
    if (tabId === 'schedule-view') {
        filterBox.style.display = 'block';
        document.getElementById('page-main-title').innerText = 'جدول المتابعة الأسبوعي الشامل 🎯';
    } else if (tabId === 'finance-view') {
        filterBox.style.display = 'none';
        document.getElementById('page-main-title').innerText = 'إدارة الميزانية والمصاريف اليومية 💰';
        renderFinance();
    } else if (tabId === 'reports-view') {
        filterBox.style.display = 'none';
        document.getElementById('page-main-title').innerText = 'صفحة التقارير والتحليلات البيانية 📊';
        renderReports();
    } else if (tabId === 'badges-view') {
        filterBox.style.display = 'none';
        document.getElementById('page-main-title').innerText = 'لوحة الأوسمة والإنجازات 🏆';
        renderBadges();
    }
}

function renderSchedule(filter) {
    const container = document.getElementById('schedule-cards-container');
    container.innerHTML = '';

    const listToRender = filter === 'all' ? scheduleData : scheduleData.filter(d => d.day === filter);

    listToRender.forEach(item => {
        const uniFormatted = item.university.split('\n').map(line => `<div class="university-item">📌 ${line}</div>`).join('');
        
        // تجهيز خانة تمرين الجيم لتكون تفاعلية
        const isGymChecked = completedTasks[item.gymId] ? 'checked' : '';
        const gymCompletedClass = completedTasks[item.gymId] ? 'completed' : '';
        const gymHTML = `
            <div class="gym-box ${gymCompletedClass}" onclick="toggleTask('${item.gymId}')">
                <input type="checkbox" id="chk_${item.gymId}" ${isGymChecked} onclick="event.stopPropagation(); toggleTask('${item.gymId}')">
                <label for="chk_${item.gymId}" style="cursor:pointer;">${item.gymText}</label>
            </div>
        `;

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
                    ${gymHTML}
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
        // حساب مهام الجيم ضمن الإجمالي
        totalTasks++;
        if (completedTasks[d.gymId]) doneTasks++;

        // حساب مهام الدراسة والورد
        d.studyProgram.forEach(task => {
            totalTasks++;
            if (completedTasks[task.id]) doneTasks++;
        });
    });

    const percent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
    document.getElementById('progress-percentage').innerText = `${percent}%`;
    document.getElementById('main-progress-bar').style.width = `${percent}%`;
    return { percent, doneTasks, totalTasks };
}

function addFinanceTransaction() {
    const title = document.getElementById('trans-title').value.trim();
    const amount = Number(document.getElementById('trans-amount').value);
    const type = document.getElementById('trans-type').value;

    if (title && amount > 0) {
        financeTransactions.push({
            id: Date.now(),
            title,
            amount,
            type,
            date: new Date().toLocaleDateString('ar-EG')
        });

        localStorage.setItem('financeTransactions', JSON.stringify(financeTransactions));
        document.getElementById('trans-title').value = '';
        document.getElementById('trans-amount').value = '';
        renderFinance();
        showToast("تم تسجيل الحركة المالية بنجاح!", "success");
    } else {
        showToast("يرجى إدخال كافة بيانات الحركة المالية.", "error");
    }
}

function deleteFinanceTransaction(id) {
    financeTransactions = financeTransactions.filter(t => t.id !== id);
    localStorage.setItem('financeTransactions', JSON.stringify(financeTransactions));
    renderFinance();
    showToast("تم حذف الحركة المالية.");
}

function renderFinance() {
    let totalIncome = 0;
    let totalExpense = 0;
    const filterText = document.getElementById('finance-search-input')?.value.toLowerCase() || '';

    const tbody = document.getElementById('finance-table-body');
    tbody.innerHTML = '';

    financeTransactions.forEach(t => {
        if (t.type === 'income') totalIncome += t.amount;
        else totalExpense += t.amount;

        if (t.title.toLowerCase().includes(filterText)) {
            const typeBadge = t.type === 'income' 
                ? '<span style="color:var(--accent-green); font-weight:bold;">مدخول (+)</span>' 
                : '<span style="color:var(--accent-red); font-weight:bold;">مصروف (-)</span>';

            tbody.innerHTML += `
                <tr>
                    <td>${t.title}</td>
                    <td>${t.amount} ل.س</td>
                    <td>${typeBadge}</td>
                    <td>${t.date}</td>
                    <td class="no-print"><button class="delete-btn" onclick="deleteFinanceTransaction(${t.id})">حذف</button></td>
                </tr>
            `;
        }
    });

    document.getElementById('stat-total-income').innerText = `${totalIncome} ل.س`;
    document.getElementById('stat-total-expenses').innerText = `${totalExpense} ل.س`;
    document.getElementById('stat-net-balance').innerText = `${totalIncome - totalExpense} ل.س`;
}

function archiveAndResetWeek() {
    if (confirm("هل تريد توثيق إنجاز الأسبوع الحالي وبدء أسبوع جديد؟")) {
        const stats = calculateProgress();
        const weekRecord = {
            weekNumber: archivedWeeks.length + 1,
            date: new Date().toLocaleDateString('ar-EG'),
            percentage: stats.percent,
            completedCount: stats.doneTasks,
            totalCount: stats.totalTasks
        };

        archivedWeeks.push(weekRecord);
        localStorage.setItem('archivedWeeks', JSON.stringify(archivedWeeks));

        completedTasks = {};
        localStorage.setItem('completedScheduleTasks', JSON.stringify(completedTasks));

        renderSchedule('all');
        calculateProgress();
        showToast("تم أرشفة الأسبوع وبدء أسبوع جديد ✨", "success");
    }
}

function exportBackupData() {
    const backupData = {
        completedTasks,
        archivedWeeks,
        financeTransactions,
        exportDate: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `study_hub_backup_${new Date().toLocaleDateString('ar-EG')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("تم تحميل ملف النسخة الاحتياطية بنجاح!", "success");
}

function importBackupData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const parsed = JSON.parse(e.target.result);
                completedTasks = parsed.completedTasks || {};
                archivedWeeks = parsed.archivedWeeks || [];
                financeTransactions = parsed.financeTransactions || [];

                localStorage.setItem('completedScheduleTasks', JSON.stringify(completedTasks));
                localStorage.setItem('archivedWeeks', JSON.stringify(archivedWeeks));
                localStorage.setItem('financeTransactions', JSON.stringify(financeTransactions));

                renderSchedule('all');
                calculateProgress();
                renderFinance();
                showToast("تمت استعادة البيانات بنجاح!", "success");
            } catch (err) {
                showToast("فشل استعادة الملف: تنسيق غير صحيح.", "error");
            }
        };
        reader.readAsText(file);
    }
}

function renderReports() {
    let totalCompletedAll = 0;
    archivedWeeks.forEach(w => totalCompletedAll += w.completedCount);
    
    const currentStats = calculateProgress();
    totalCompletedAll += currentStats.doneTasks;

    document.getElementById('stat-total-completed').innerText = totalCompletedAll;
    document.getElementById('stat-weeks-count').innerText = `${archivedWeeks.length} أسبوع`;

    let avgPercent = archivedWeeks.length > 0 
        ? Math.round(archivedWeeks.reduce((acc, w) => acc + w.percentage, 0) / archivedWeeks.length) 
        : currentStats.percent;
    document.getElementById('stat-overall-rate').innerText = `${avgPercent}%`;

    const archiveListElem = document.getElementById('archive-list');
    archiveListElem.innerHTML = archivedWeeks.length === 0 
        ? '<p style="color:var(--text-secondary);">لا توجد أسابيع مؤرشفة بعد.</p>'
        : archivedWeeks.map(w => `
            <div class="archive-item">
                <div><strong>الأسبوع رقم ${w.weekNumber}</strong> - <small>${w.date}</small></div>
                <div><span style="color:var(--accent-green); font-weight:bold;">${w.percentage}% إنجاز</span> (${w.completedCount}/${w.totalCount})</div>
            </div>
        `).join('');

    const ctxWeekly = document.getElementById('weeklyProgressChart').getContext('2d');
    if (weeklyChartInstance) weeklyChartInstance.destroy();
    weeklyChartInstance = new Chart(ctxWeekly, {
        type: 'line',
        data: {
            labels: archivedWeeks.length ? archivedWeeks.map(w => `أسبوع ${w.weekNumber}`) : ['الأسبوع الحالي'],
            datasets: [{
                label: 'نسبة الإنجاز (%)',
                data: archivedWeeks.length ? archivedWeeks.map(w => w.percentage) : [currentStats.percent],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true, scales: { y: { min: 0, max: 100 } } }
    });

    let totalInc = 0, totalExp = 0;
    financeTransactions.forEach(t => { if (t.type === 'income') totalInc += t.amount; else totalExp += t.amount; });

    const ctxFinance = document.getElementById('financeChart').getContext('2d');
    if (financeChartInstance) financeChartInstance.destroy();
    financeChartInstance = new Chart(ctxFinance, {
        type: 'doughnut',
        data: {
            labels: ['إجمالي المدخول', 'إجمالي المصاريف'],
            datasets: [{ data: [totalInc, totalExp], backgroundColor: ['#10b981', '#ef4444'] }]
        },
        options: { responsive: true }
    });
}

function renderBadges() {
    const grid = document.getElementById('badges-grid');
    grid.innerHTML = '';

    const currentStats = calculateProgress();

    badgesList.forEach(b => {
        let isUnlocked = false;
        if (b.id === 'b_first_week' && archivedWeeks.length >= 1) isUnlocked = true;
        if (b.id === 'b_perfect_week' && (currentStats.percent === 100 || archivedWeeks.some(w => w.percentage === 100))) isUnlocked = true;
        if (b.id === 'b_financial_master' && financeTransactions.length >= 5) isUnlocked = true;
        if (b.id === 'b_gym_hero' && currentStats.doneTasks >= 10) isUnlocked = true;

        grid.innerHTML += `
            <div class="badge-card ${isUnlocked ? 'unlocked' : ''}">
                <div class="badge-icon">${b.icon}</div>
                <h4>${b.title}</h4>
                <p>${b.desc}</p>
                <small style="margin-top:5px; display:block; color:${isUnlocked ? 'var(--accent-green)' : 'var(--text-secondary)'}; font-weight:bold;">
                    ${isUnlocked ? 'مكتسب ✨' : 'مغلق 🔒'}
                </small>
            </div>
        `;
    });
}
