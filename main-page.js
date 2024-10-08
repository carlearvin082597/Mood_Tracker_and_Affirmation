    // Select Mood and Display
    function selectMood(mood) {
        localStorage.setItem('currentMood', mood);
        document.getElementById('selectedMood').innerText = `You selected: ${mood}`;
    }

    // Save Journal Entry
    function saveJournalEntry() {
        const journalEntry = document.getElementById('journalEntry').value;
        const date = new Date().toLocaleDateString();   
        const time = new Date().toLocaleTimeString();
        localStorage.setItem(`journalEntry_${date}_${time}`, journalEntry);
        document.getElementById('journalEntry').value = '';
        alert('Journal entry saved!');
    }

    // Generate Affirmation
    function generateAffirmation() {
        const affirmations = [
            "You are doing your best, and that's enough.",
            "You are capable of amazing things.",
            "Keep going, you've got this!",
            "Every day is a fresh start.",
            "Believe in yourself and your abilities."
        ];
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const affirmation = affirmations[randomIndex];
        document.getElementById('affirmation').innerText = affirmation;
        document.getElementById('affirmation').style.opacity = '1';
        document.getElementById('affirmation').classList.add('show');
    }

    // View Mood History
    function viewMoodHistory() {
        const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
        const historyDiv = document.getElementById('moodHistory');
        historyDiv.innerHTML = '';
        moodHistory.forEach(entry => {
            historyDiv.innerHTML += `<p>${entry.date}: ${entry.mood}</p>`;
        });
    }

    // Save Mood and Journal
    function saveMoodAndJournal() {
        const mood = localStorage.getItem('currentMood');
        const journalEntry = document.getElementById('journalEntry').value;
        const date = new Date().toLocaleDateString();
        const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];
        moodHistory.push({ date, mood, journalEntry });
        localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
        localStorage.removeItem('currentMood');
        document.getElementById('journalEntry').value = '';
        alert('Mood and journal entry saved to history!');
    }

    // Theme Switcher
    function switchTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }

    // Load Saved Theme
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.className = savedTheme;
        }
    }

    // Reset App
    function resetApp() {
        localStorage.removeItem('moodHistory');
        localStorage.removeItem('currentMood');
        localStorage.removeItem('theme');
        alert('App has been reset.');
        document.getElementById('selectedMood').innerText = '';
        document.getElementById('moodHistory').innerHTML = '';
    }