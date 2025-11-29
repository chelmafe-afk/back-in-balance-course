
(function(){
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  const COURSE = {
    id: 'back-in-balance-001',
    title: 'Back in Balance',
    description: 'A guided course based on Chelec Pinckney's message: love her the way she needs to be loved, and respect him the way he needs to be respected. Learn biblical, practical steps to restore balance and unity.',
    passingThreshold: 0.8, // 80% required to pass each module
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Foundations — Love & Respect',
        contentHTML: `
          <div class="prose">
            <h2>Love & Respect</h2>
            <p>Explore the core idea: women thrive when loved sacrificially; men thrive when respected genuinely. This is not about hierarchy—it's about mutual honor and meeting God-wired needs.</p>
            <ul>
              <li>Identify how love is perceived (affection, presence, service).</li>
              <li>Identify how respect is perceived (trust, affirmation, partnership).</li>
              <li>Set shared expectations for growth.</li>
            </ul>
          </div>
        `,
        resources: [
          { label: 'Reflection Worksheet', url: '#' }
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'In this course, “love” and “respect” are…',
            options: [
              { label: 'Tools for control', correct: false },
              { label: 'Mutual commitments that meet core needs', correct: true },
              { label: 'Optional extras', correct: false }
            ],
            feedback: 'They are mutual commitments—each partner meeting the other's core need.'
          },
          {
            id: 'q2',
            prompt: 'A practical sign of respect might be…',
            options: [
              { label: 'Frequent criticism to “improve” him', correct: false },
              { label: 'Affirming his effort and inviting partnership', correct: true },
              { label: 'Ignoring agreed boundaries', correct: false }
            ],
            feedback: 'Respect looks like affirmation, trust, and partnership within healthy boundaries.'
          },
          {
            id: 'q3',
            prompt: 'A practical sign of love might be…',
            options: [
              { label: 'Stonewalling during conflict', correct: false },
              { label: 'Showing up consistently and serving needs', correct: true },
              { label: 'Withholding affection to get results', correct: false }
            ],
            feedback: 'Love is sacrificial presence, care, and consistency.'
          },
          {
            id: 'q4',
            prompt: 'Passing threshold for modules in this course is…',
            options: [
              { label: '70%', correct: false },
              { label: '80%', correct: true },
              { label: '90%', correct: false }
            ],
            feedback: 'This course uses an 80% passing threshold.'
          }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Communication & Conflict',
        contentHTML: `
          <div class="prose">
            <h2>Communicate to Connect</h2>
            <p>Practice clarity, curiosity, and calm. Trade assumptions for questions. Use time-outs wisely; return to resolve, not to win.</p>
            <ul>
              <li>Use “I” statements.</li>
              <li>Reflective listening and summarizing.</li>
              <li>Repair attempts and forgiveness rhythms.</li>
            </ul>
          </div>
        `,
        resources: [
          { label: 'Conflict Script (PDF)', url: '#' }
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Which approach reduces defensiveness?',
            options: [
              { label: '“You never…” accusations', correct: false },
              { label: '“I feel… when… I need…” statements', correct: true },
              { label: 'Bringing up past grievances first', correct: false }
            ],
            feedback: 'Own feelings and needs; avoid global accusations.'
          },
          {
            id: 'q2',
            prompt: 'A good repair attempt includes…',
            options: [
              { label: 'Blame shifting', correct: false },
              { label: 'Acknowledging impact + proposing a next step', correct: true },
              { label: 'Silence until it blows over', correct: false }
            ],
            feedback: 'Name the impact, take responsibility, and offer a path forward.'
          },
          {
            id: 'q3',
            prompt: 'When emotions run high, a healthy step is…',
            options: [
              { label: 'Escalate to “win” the point', correct: false },
              { label: 'Take a time-out and schedule a return to dialogue', correct: true },
              { label: 'Leave the issue unresolved', correct: false }
            ],
            feedback: 'Pause to regulate; return to resolve with respect.'
          },
          {
            id: 'q4',
            prompt: 'Reflective listening sounds like…',
            options: [
              { label: '“Here's what I heard you say…”', correct: true },
              { label: '“That's ridiculous.”', correct: false },
              { label: '“I'll explain why you're wrong.”', correct: false }
            ],
            feedback: 'Mirror back content and emotions to show understanding.'
          }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Healing & Forgiveness',
        contentHTML: `
          <div class="prose">
            <h2>Keep a Free Heart</h2>
            <p>Release offense and pain. Forgiveness is a rhythm—sometimes daily. Boundaries protect healing; humility invites restoration.</p>
            <ul>
              <li>Identify offenses and formally release them.</li>
              <li>Practice confession and asking for forgiveness.</li>
              <li>Set wise boundaries during healing.</li>
            </ul>
          </div>
        `,
        resources: [
          { label: 'Forgiveness Guide', url: '#' },
          { label: 'Journaling Prompts', url: '#' }
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'A “free heart” means…',
            options: [
              { label: 'No boundaries are needed', correct: false },
              { label: 'Heart free from offense, pain, unforgiveness, and hurt', correct: true },
              { label: 'Avoiding hard conversations permanently', correct: false }
            ],
            feedback: 'Freedom involves forgiveness and wise, protective boundaries.'
          },
          {
            id: 'q2',
            prompt: 'Forgiveness primarily…',
            options: [
              { label: 'Denies harm occurred', correct: false },
              { label: 'Releases the debt while still allowing boundaries', correct: true },
              { label: 'Requires instant reconciliation', correct: false }
            ],
            feedback: 'We release the debt owed; reconciliation may be a process with boundaries.'
          },
          {
            id: 'q3',
            prompt: 'A wise boundary could be…',
            options: [
              { label: 'Clear limits on time/tones during conflict', correct: true },
              { label: 'Never speaking again', correct: false },
              { label: 'Ignoring patterns to keep peace', correct: false }
            ],
            feedback: 'Healthy limits support sustainable peace and trust.'
          }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Agreement & Unity',
        contentHTML: `
          <div class="prose">
            <h2>Walk in Agreement</h2>
            <p>Unity invites blessing. Build rhythms of prayer, planning, and accountability. Keep the vision visible and actionable.</p>
            <ul>
              <li>Shared goals and calendar rhythms.</li>
              <li>Decision-making agreements.</li>
              <li>Prayer and gratitude habits.</li>
            </ul>
          </div>
        `,
        resources: [
          { label: 'Weekly Rhythm Planner', url: '#' }
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Agreement is sustained by…',
            options: [
              { label: 'Random decisions based on mood', correct: false },
              { label: 'Shared vision, clear rhythms, and accountability', correct: true },
              { label: 'Avoiding all planning', correct: false }
            ],
            feedback: 'Keep the vision visible with agreed rhythms and mutual accountability.'
          },
          {
            id: 'q2',
            prompt: 'A simple unity practice is…',
            options: [
              { label: 'Nightly gratitude and prayer together', correct: true },
              { label: 'Never discussing schedules', correct: false },
              { label: 'Letting assumptions guide decisions', correct: false }
            ],
            feedback: 'Daily gratitude and prayer strengthen unity.'
          }
        ]
      },
      {
        id: 'm5',
        title: 'Module 5: Implementation & Next Steps',
        contentHTML: `
          <div class="prose">
            <h2>Put It Into Practice</h2>
            <p>Craft your 30-day plan with small, consistent steps. Review wins weekly; refine as needed.</p>
            <ul>
              <li>Define 3 habits to practice.</li>
              <li>Schedule weekly check-ins.</li>
              <li>Celebrate progress and iterate.</li>
            </ul>
          </div>
        `,
        resources: [
          { label: '30-Day Plan Template', url: '#' }
        ],
        quiz: [
          {
            id: 'q1',
            prompt: 'Effective change is driven by…',
            options: [
              { label: 'Dramatic gestures once a month', correct: false },
              { label: 'Small, consistent habits over time', correct: true },
              { label: 'Waiting until motivation appears', correct: false }
            ],
            feedback: 'Consistency beats intensity—start small and keep going.'
          },
          {
            id: 'q2',
            prompt: 'A helpful weekly rhythm includes…',
            options: [
              { label: 'Check-ins, gratitude, and course correction', correct: true },
              { label: 'Ignoring goals until the month ends', correct: false },
              { label: 'Keeping wins private', correct: false }
            ],
            feedback: 'Regular review sustains momentum and unity.'
          }
        ]
      }
    ]
  };

  const storageKey = `course-progress::${COURSE.id}`;
  const getProgress = () => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || { currentIndex: 0, scores: {}, completed: false }; }
    catch { return { currentIndex: 0, scores: {}, completed: false }; }
  };
  const setProgress = (data) => localStorage.setItem(storageKey, JSON.stringify(data));
  const resetProgress = () => setProgress({ currentIndex: 0, scores: {}, completed: false });

  function renderLanding(){
    $('#course-title').textContent = COURSE.title;
    const progress = getProgress();
    const completedCount = Object.values(progress.scores).filter(s => s.passed).length;
    const container = document.createElement('section');
    container.className = 'card';
    container.innerHTML = `
      <h2>${COURSE.title}</h2>
      <p>${COURSE.description}</p>
      <div class="progress">
        <span class="pill" aria-live="polite">Completed modules: ${completedCount} / ${COURSE.modules.length}</span>
        <button class="btn" id="start-course">Start / Resume</button>
      </div>
    `;

    const list = document.createElement('section');
    list.className = 'card';
    list.innerHTML = `<h2>Modules</h2><div class="module-list" id="module-list"></div>`;

    const app = $('#app');
    app.innerHTML = '';
    app.appendChild(container);
    app.appendChild(list);

    const listEl = $('#module-list');
    COURSE.modules.forEach((m, idx) => {
      const canAccess = idx === 0 || (getProgress().scores[COURSE.modules[idx-1].id]?.passed);
      const score = getProgress().scores[m.id]?.score ?? null;
      const item = document.createElement('article');
      item.className = 'module-item';
      item.innerHTML = `
        <h3>${m.title}</h3>
        <p class="muted">${canAccess ? 'Unlocked' : '<span class="locked">Locked until you pass previous module</span>'}</p>
        ${score !== null ? `<p class="muted">Last score: ${(score*100).toFixed(0)}%</p>` : ''}
        <div class="module-actions">
          <button class="btn" data-open="${idx}" ${canAccess ? '' : 'disabled'}>Open</button>
          <button class="btn ghost" data-preview="${idx}">Preview</button>
        </div>
      `;
      listEl.appendChild(item);
    });

    $('#start-course').addEventListener('click', () => renderModule(progress.currentIndex));
    $$('#module-list [data-open]').forEach(btn => btn.addEventListener('click', (e) => renderModule(parseInt(e.target.getAttribute('data-open'), 10))));
    $$('#module-list [data-preview]').forEach(btn => btn.addEventListener('click', (e) => renderModulePreview(parseInt(e.target.getAttribute('data-preview'), 10))));
  }

  function renderModulePreview(idx){
    const m = COURSE.modules[idx];
    const container = document.createElement('section');
    container.className = 'card';
    container.innerHTML = `
      <h2>Preview: ${m.title}</h2>
      ${m.contentHTML}
      ${renderResources(m.resources)}
      <div class="module-actions">
        <button class="btn" id="back">Back</button>
      </div>
    `;
    const app = $('#app');
    app.innerHTML = '';
    app.appendChild(container);
    $('#back').addEventListener('click', renderLanding);
  }

  function renderResources(resources){
    if(!resources || !resources.length) return '';
    const items = resources.map(r => `<li><a class="btn ghost" href="${r.url}" target="_blank" rel="noopener">${r.label}</a></li>`).join('');
    return `<h3>Resources</h3><ul style="list-style:none; padding-left:0; display:flex; gap:.5rem; flex-wrap:wrap;">${items}</ul>`;
  }

  function renderModule(idx){
    const progress = getProgress();
    const prevPassed = idx === 0 || progress.scores[COURSE.modules[idx-1].id]?.passed;
    if(!prevPassed){
      alert('Please pass the previous module to unlock this one.');
      return renderLanding();
    }
    progress.currentIndex = idx;
    setProgress(progress);

    const m = COURSE.modules[idx];
    const container = document.createElement('section');
    container.className = 'card';
    container.innerHTML = `
      <h2>${m.title}</h2>
      ${m.contentHTML}
      ${renderResources(m.resources)}
      <div class="module-actions">
        <button class="btn secondary" id="take-quiz">Take Quiz</button>
        <button class="btn ghost" id="back">Back</button>
      </div>
    `;

    const app = $('#app');
    app.innerHTML = '';
    app.appendChild(container);

    $('#take-quiz').addEventListener('click', () => renderQuiz(idx));
    $('#back').addEventListener('click', renderLanding);
  }

  function renderQuiz(idx){
    const m = COURSE.modules[idx];
    const container = document.createElement('section');
    container.className = 'card quiz';
    container.innerHTML = `<h2>Quiz: ${m.title}</h2>`;

    const form = document.createElement('form');
    form.setAttribute('aria-describedby', `quiz-desc-${m.id}`);
    form.innerHTML = `<p id="quiz-desc-${m.id}" class="muted">Answer all questions and submit. You must score ${(COURSE.passingThreshold*100).toFixed(0)}% to pass.</p>`;

    m.quiz.forEach((q, qi) => {
      const field = document.createElement('fieldset');
      field.className = 'question';
      field.innerHTML = `<legend>${qi+1}. ${q.prompt}</legend>`;
      const options = document.createElement('div');
      options.className = 'options';
      q.options.forEach((opt, oi) => {
        const id = `${m.id}-${q.id}-${oi}`;
        const row = document.createElement('label');
        row.className = 'option';
        row.setAttribute('for', id);
        row.innerHTML = `<input type="radio" name="${m.id}-${q.id}" id="${id}" value="${oi}" /> ${opt.label}`;
        options.appendChild(row);
      });
      const fb = document.createElement('div');
      fb.className = 'feedback';
      fb.textContent = q.feedback;
      field.appendChild(options);
      field.appendChild(fb);
      form.appendChild(field);
    });

    const actions = document.createElement('div');
    actions.className = 'module-actions';
    actions.innerHTML = `
      <button class="btn" type="submit">Submit Quiz</button>
      <button class="btn ghost" type="button" id="cancel">Cancel</button>
    `;
    form.appendChild(actions);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const answers = m.quiz.map(q => {
        const name = `${m.id}-${q.id}`;
        const checked = document.querySelector(`input[name='${name}']:checked`);
        return checked ? parseInt(checked.value, 10) : null;
      });
      if(answers.some(a => a === null)){
        alert('Please answer all questions.');
        return;
      }
      const correctCount = answers.reduce((acc, ans, i) => acc + (m.quiz[i].options[ans].correct ? 1 : 0), 0);
      const score = correctCount / m.quiz.length;
      const passed = score >= COURSE.passingThreshold;

      const result = document.createElement('div');
      result.className = 'result';
      result.innerHTML = `<p><strong>Score:</strong> ${(score*100).toFixed(0)}%</p><p>${passed ? '✅ Passed! Next module unlocked.' : '❌ Not passed. Review content and try again.'}</p>`;

      container.appendChild(result);

      const progress = getProgress();
      progress.scores[m.id] = { score, passed, date: new Date().toISOString() };
      if(passed && (idx+1) < COURSE.modules.length){
        progress.currentIndex = idx+1;
      }
      if(passed && (idx+1) === COURSE.modules.length){
        progress.completed = true;
      }
      setProgress(progress);
    });

    $('#cancel')?.addEventListener('click', () => renderModule(idx));

    const app = $('#app');
    app.innerHTML = '';
    app.appendChild(container);
    container.appendChild(form);
  }

  const setTheme = (theme) => document.documentElement.setAttribute('data-theme', theme);
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    const btn = document.getElementById('toggle-theme');
    if(btn){ btn.setAttribute('aria-pressed', String(next === 'light')); }
  };

  function exportProgress(){
    const data = getProgress();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${COURSE.id}-progress.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 100);
  }

  function handleReset(){
    if(confirm('Reset your saved progress?')){ resetProgress(); renderLanding(); }
  }

  function boot(){
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
    document.getElementById('export-progress').addEventListener('click', exportProgress);
    document.getElementById('reset-progress').addEventListener('click', handleReset);
    setTheme('dark');
    renderLanding();
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
