/**
 * MR MOBILITY STUDIO — CORE APPLICATION ENGINE
 * Brand: MR Solutions
 * Architecture: Mobile-First InfoApp (Pure Standalone Vanilla JS)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA REPOSITORIES: PROTOCOLS & EXERCISES
  // =========================================================================
  const ROUTINES = {
    daily: {
      id: 'daily',
      title: 'Daily 10-Min Mobility Routine',
      tag: 'Morning Spinal & Full Body Flow',
      durationMinutes: 10,
      exercises: [
        {
          name: 'Cat-Cow Spinal Waves',
          target: 'Full Spine & Pelvis',
          duration: 60,
          cue: 'Hands beneath shoulders, knees under hips. Inhale to arch spine and lift chest; exhale to round upper back toward the ceiling like a stretching cat.',
          breath: 'Inhale 4s (Cow) • Exhale 5s (Cat)',
          modification: 'Easier: Perform seated on chair. Deeper: Add lateral head-to-hip wagging at peak flexion.'
        },
        {
          name: "World's Greatest Stretch",
          target: 'Thoracic Spine, Hip Flexors & Hamstrings',
          duration: 60,
          cue: 'Step left foot outside left hand into a deep lunge. Rotate left arm up toward ceiling, following fingers with eyes. Hold 3s, return, and alternate sides.',
          breath: 'Exhale during overhead arm reach • Inhale when returning to plank',
          modification: 'Easier: Drop rear knee to floor with a soft cushion.'
        },
        {
          name: '90/90 Gentle Hip Glides',
          target: 'Internal & External Hip Rotators',
          duration: 60,
          cue: 'Sit tall on floor, knees bent 90 degrees in front and behind. Gently hinge forward over front shin without rounding back, then slowly sweep knees to opposite side.',
          breath: 'Slow 5s diaphragmatic belly breaths throughout movement',
          modification: 'Easier: Place both hands behind hips for torso support.'
        },
        {
          name: 'Downward Dog to Cobra Flow',
          target: 'Posterior Chain & Abdominal Wall',
          duration: 60,
          cue: 'Press hips high into inverted V, pedaling heels gently. Glide smoothly forward into plank, lowering hips into gentle cobra while drawing shoulders away from ears.',
          breath: 'Exhale on Downward Dog • Inhale on gentle Cobra rise',
          modification: 'Easier: Keep knees softly bent in Downward Dog and perform baby cobra.'
        },
        {
          name: 'Deep Squat Hold & Sky Reach',
          target: 'Ankles, Groin & Thoracic Spine',
          duration: 60,
          cue: 'Drop into comfortable deep squat, elbows pushing gently inside knees. Keep chest upright. Reach one hand diagonally upward, gaze following, then switch.',
          breath: 'Inhale deep into pelvic floor • Exhale extending chest open',
          modification: 'Easier: Hold onto a sturdy desk or doorframe for balance.'
        },
        {
          name: 'Thread the Needle Decompression',
          target: 'Mid-Back & Scapular Facet Joints',
          duration: 60,
          cue: 'On hands and knees, slide right arm underneath left armpit until right shoulder and temple gently rest on mat. Breathe into mid-back ribs, then switch at 30s.',
          breath: 'Long 6s exhale as you sink into the gentle twist',
          modification: 'Easier: Place yoga block or folded towel under shoulder.'
        },
        {
          name: 'Kneeling Psoas & Overhead Reach',
          target: 'Hip Flexors & Anterior Hip Capsule',
          duration: 60,
          cue: 'Half-kneeling lunge position. Tuck tailbone under (posterior pelvic tilt). Raise same-side arm and lean subtly toward opposite side to open tight hip flexor.',
          breath: 'Inhale lengthening through ribs • Exhale maintaining pelvis tuck',
          modification: 'Switch sides halfway (at 30s mark).'
        },
        {
          name: 'Prone Scorpion Tail Extension',
          target: 'Lumbar Spine, Pecs & Quadriceps',
          duration: 60,
          cue: 'Lie flat on stomach, arms extended out in T-shape. Bend right knee and smoothly reach right foot diagonally across body toward left hand. Alternate smoothly.',
          breath: 'Exhale as foot rotates across • Inhale returning to center',
          modification: 'Easier: Only reach foot halfway without forcing floor touch.'
        },
        {
          name: 'Standing Lateral Chain Elongation',
          target: 'Quadratus Lumborum (QL) & Intercostals',
          duration: 60,
          cue: 'Cross right foot behind left. Raise right arm overhead and side-bend gently to the left, opening lateral ribs. Hold 30s, then switch sides.',
          breath: 'Inhale deeply into the expanded ribs • Exhale relaxing shoulders',
          modification: 'Easier: Keep feet parallel shoulder-width apart.'
        },
        {
          name: 'Ragdoll Hang & Segmental Roll-up',
          target: 'Full Spine Reset & Hamstrings',
          duration: 60,
          cue: 'Bend knees generously, let torso hang completely over thighs, clasping opposite elbows. Nod head yes and shake no. Slowly roll up vertebra by vertebra.',
          breath: 'Heavy sighing exhales through mouth to release nervous tension',
          modification: 'Rest hands on thighs if lower back feels any pull.'
        }
      ]
    },
    chair: {
      id: 'chair',
      title: 'Gentle Chair Routine',
      tag: 'Desk Workers & Limited Mobility Relief',
      durationMinutes: 6,
      exercises: [
        {
          name: 'Seated Pelvic Clock & Cat-Cow',
          target: 'Lumbar Spine & Pelvic Tilt',
          duration: 60,
          cue: 'Sit on the front edge of chair. Tilt pelvis forward to arch lower back and expand chest, then tilt pelvis back to tuck tailbone and soften chest.',
          breath: 'Inhale on expansion • Exhale on rounding',
          modification: 'Move slowly within comfortable pain-free range.'
        },
        {
          name: 'Seated Figure-4 Piriformis Release',
          target: 'Glutes & Sciatic Nerve Corridor',
          duration: 60,
          cue: 'Cross right ankle over left knee. Keep spine tall. Gently hinge forward from hips with a flat back until a comfortable stretch is felt in outer hip. Switch at 30s.',
          breath: 'Smooth belly breaths, releasing gluteal tension on every exhale',
          modification: 'Easier: Lower the ankle closer to the shin if knees are tight.'
        },
        {
          name: 'Seated Torso Spiral & Open Reach',
          target: 'Thoracic Rotation & Ribcage',
          duration: 60,
          cue: 'Place right hand on outside of left knee, left hand on chair backrest. Gently spiral chest to left while keeping hips anchored. Switch sides at 30s.',
          breath: 'Inhale grow 1 inch taller • Exhale twist 2 millimeters deeper',
          modification: 'Avoid pulling with arms; rotate with core muscles.'
        },
        {
          name: 'Seated Hamstring Glide & Toe Flex',
          target: 'Hamstrings & Sciatic Flossing',
          duration: 60,
          cue: 'Extend right leg forward with heel on floor. Point toes away, then flex toes back toward chin while nodding head slightly. Switch at 30s.',
          breath: 'Gentle rhythmic breath, never forcing or bouncing',
          modification: 'Keep slight bend in knee if nerves feel tight.'
        },
        {
          name: 'Desk Pec Opener & Shoulder Roll',
          target: 'Chest & Forward Posture Reset',
          duration: 60,
          cue: 'Interlace fingers behind lower back or hold chair back. Roll shoulder blades back and down, gently lifting breastbone to counter keyboard hunch.',
          breath: 'Deep diaphragmatic breathing filling upper chest',
          modification: 'Easier: Rest palms on lower back if shoulders are tight.'
        },
        {
          name: 'Suboccipital Release & Chin Tucks',
          target: 'Cervical Spine & Tension Headaches',
          duration: 60,
          cue: 'Draw chin straight back as if making a subtle double chin, lengthening back of neck. Hold 3s, release gently, repeat. Gently drop ear to shoulder.',
          breath: 'Exhale while tucking chin • Inhale on subtle neutral release',
          modification: 'Do not tilt head backward; keep eyes level with horizon.'
        }
      ]
    },
    spine: {
      id: 'spine',
      title: 'Lower Back & Spine Decompression',
      tag: 'Lumbar Relief & Disc Pressure Unload',
      durationMinutes: 7,
      exercises: [
        {
          name: 'Supine Pelvic Tilts & Flattening',
          target: 'Transverse Abdominis & SI Joint',
          duration: 75,
          cue: 'Lie on back, knees bent, feet flat on floor. Gently flatten lower back into floor by contracting lower abs and tilting pelvis back. Hold 5s and release.',
          breath: 'Exhale as you press spine flat • Inhale as you return to neutral',
          modification: 'Place a small folded hand towel under lower back if needed.'
        },
        {
          name: "Child's Pose with Lateral Walk",
          target: 'Lumbar Facet Joints & Latissimus Dorsi',
          duration: 75,
          cue: 'Kneel with knees wide, big toes touching. Sink hips back onto heels and extend arms forward. Walk hands 45 degrees to right, breathe 35s, then walk to left.',
          breath: 'Deep exhales directing air into lower back and side ribs',
          modification: 'Place a pillow between calves and thighs if knees feel compressed.'
        },
        {
          name: 'Glute Bridge Hold with Deep Exhale',
          target: 'Glute Activation & Hip Extensor Relief',
          duration: 75,
          cue: 'Press through heels to lift hips until thighs and torso align. Squeeze glutes firmly at top to shut off overactive hip flexors. Hold 5s, lower slowly.',
          breath: 'Exhale forcefully through mouth on rise • Inhale on gentle descent',
          modification: 'Keep bridge low if lower back arches excessively.'
        },
        {
          name: 'Single & Double Knee-to-Chest Hug',
          target: 'Lumbar Extensor Muscle Decompression',
          duration: 75,
          cue: 'Draw right knee gently toward chest with hands clasped around shin. Hold 30s. Switch to left for 30s. Finish with both knees hugged softly together.',
          breath: 'Slow abdominal breathing massaging internal organs against thighs',
          modification: 'Hold behind thighs if knee joint feels compressed.'
        },
        {
          name: 'Supported Gentle Supine Twist',
          target: 'Thoracolumbar Fascia & Outer Hip',
          duration: 75,
          cue: 'Both knees bent. Let knees gently drop to right side while keeping left shoulder blade anchored to mat. Hold 35s, then slowly roll across to left side.',
          breath: 'Long calm exhales relaxing spine into floor',
          modification: 'Place a pillow beneath knees so they do not hang in air.'
        }
      ]
    },
    bonus: {
      id: 'bonus',
      title: 'Free Knees & Deep Hip Opener',
      tag: 'Surprise Bonus Protocol ($47 Value Included)',
      durationMinutes: 8,
      exercises: [
        {
          name: '90/90 Shin Box Transitions',
          target: 'Hip Internal & External Rotation',
          duration: 90,
          cue: 'Sit with front and back leg bent at 90 degrees. Lift chest, hinge gently over front knee, then slowly pivot on heels to reverse posture to opposite side.',
          breath: 'Inhale tall posture • Exhale as you hinge forward with flat back',
          modification: 'Keep hands on floor behind you for balance.'
        },
        {
          name: 'Supported Couch Stretch (Wall Quad)',
          target: 'Rectus Femoris & Patellar Tendon Unload',
          duration: 90,
          cue: 'Place back knee near wall or sofa with shin vertical. Step opposite foot into lunge. Tuck tailbone under to feel deep quad stretch. Switch at 45s.',
          breath: 'Slow 5s nasal breathing to signal safety to tight quadricep',
          modification: 'Move knee 6-12 inches further away from wall for a gentler angle.'
        },
        {
          name: 'Tibial Rotation & Ankle Rockers',
          target: 'Knee Tracking & Ankle Dorsiflexion',
          duration: 90,
          cue: 'Kneel on one knee. Place hands on shin bone. Gently rotate foot inward and outward, then rock knee forward past toes keeping heel glued to floor.',
          breath: 'Even breathing throughout movement',
          modification: 'Do not allow arch of foot to collapse inward.'
        },
        {
          name: 'Assisted Frog Stretch with Exhale',
          target: 'Hip Adductors & Pelvic Floor Mobility',
          duration: 90,
          cue: 'Knees wide on a padded surface, inside of ankles touching floor. Rest on forearms. Gently glide hips backward until a safe groin stretch is felt.',
          breath: 'Deep exhales allowing pelvic tension to melt without forcing',
          modification: 'Stop immediately if pinching occurs in front hip socket.'
        }
      ]
    }
  };

  // =========================================================================
  // 2. WEB AUDIO API SYNTHESIZER (100% Offline & Pure Sound Generation)
  // =========================================================================
  let audioCtx = null;
  let soundEnabled = true;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Pure Bell Chime (Tibetan bowl / gentle yoga bell)
  function playBellChime() {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      
      // Fundamental 528Hz (Love/Transformation frequency) + 1056Hz harmonic
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      const gain2 = audioCtx.createGain();
      const masterGain = audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(528, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1056, now);

      // Smooth decay
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      gain2.gain.setValueAtTime(0.12, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      masterGain.gain.setValueAtTime(0.8, now);

      osc1.connect(gain1);
      osc2.connect(gain2);
      gain1.connect(masterGain);
      gain2.connect(masterGain);
      masterGain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.3);
      osc2.stop(now + 2.3);
    } catch (e) {
      console.warn('Audio not available:', e);
    }
  }

  // Celebration Sound (Ascending triad C5 - E5 - G5 - C6)
  function playCelebrationFanfare() {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = audioCtx.currentTime;

      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const noteTime = now + (index * 0.16);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.25, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 1.3);
      });
    } catch (e) {
      console.warn('Fanfare audio failed:', e);
    }
  }

  // Soft woodblock tick for 3, 2, 1 transition
  function playTickSound() {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {
      // Ignored
    }
  }

  // =========================================================================
  // 3. APPLICATION STATE & STORAGE
  // =========================================================================
  const STORAGE_KEYS = {
    progress: 'mr_mobility_progress_v1',
    sound: 'mr_mobility_sound_enabled',
    welcomed: 'mr_mobility_welcomed_flag',
    notes: 'mr_mobility_user_notes'
  };

  const state = {
    currentRoutineId: 'daily',
    exerciseIndex: 0,
    secondsLeft: 60,
    timerRunning: false,
    timerInterval: null,
    totalRoutineSeconds: 600,
    routineElapsedSeconds: 0,
    
    // Tracker State: 21 boolean flags
    trackerDays: new Array(21).fill(false),
    userNotes: '',
    
    // Media Player State
    playerPlaying: false,
    playerInterval: null,
    playerCurrentSec: 0,
    playerTotalSec: 225 // 3m 45s
  };

  // Load persistence
  function loadPersistedState() {
    try {
      const savedSound = localStorage.getItem(STORAGE_KEYS.sound);
      if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
      }
      
      const savedProgress = localStorage.getItem(STORAGE_KEYS.progress);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (Array.isArray(parsed) && parsed.length === 21) {
          state.trackerDays = parsed;
        }
      }

      const savedNotes = localStorage.getItem(STORAGE_KEYS.notes);
      if (savedNotes) {
        state.userNotes = savedNotes;
      }
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
    }
  }

  function saveTrackerProgress() {
    try {
      localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(state.trackerDays));
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e);
    }
  }

  function saveNotes(text) {
    try {
      state.userNotes = text;
      localStorage.setItem(STORAGE_KEYS.notes, text);
    } catch (e) {
      console.warn('Could not save notes:', e);
    }
  }

  // =========================================================================
  // 4. TOAST NOTIFICATIONS & CONFETTI CELEBRATION
  // =========================================================================
  function showToast(message, icon = '✨') {
    const toast = document.getElementById('appToast');
    if (!toast) return;
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3400);
  }

  // Canvas Confetti Generator (Clean, pure canvas, zero dependencies)
  function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#10b981', '#06b6d4', '#f59e0b', '#8b5cf6', '#3b82f6', '#ec4899'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() * 200 - 100),
        y: canvas.height * 0.4 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 14,
        vy: Math.random() * -12 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let activeCount = 0;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // Gravity
        p.vx *= 0.98; // Air drag
        p.rotation += p.rSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          activeCount++;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
          ctx.restore();
        }
      });

      if (activeCount > 0) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }

    render();
  }

  // =========================================================================
  // 5. TIMER CONTROLLER
  // =========================================================================
  const CIRCLE_RADIUS = 95;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

  function setRoutine(routineId) {
    if (!ROUTINES[routineId]) return;
    state.currentRoutineId = routineId;
    state.exerciseIndex = 0;
    
    // Pause any running timer
    pauseTimer();

    // Reset current exercise timer
    const currentEx = ROUTINES[routineId].exercises[0];
    state.secondsLeft = currentEx.duration;
    
    // Update total seconds for routine
    state.totalRoutineSeconds = ROUTINES[routineId].exercises.reduce((acc, curr) => acc + curr.duration, 0);
    state.routineElapsedSeconds = 0;

    // Update UI pills
    document.querySelectorAll('.routine-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.dataset.routine === routineId);
    });

    renderExerciseCard();
    updateTimerDial();
  }

  function startTimer() {
    initAudioContext();
    if (state.timerRunning) return;

    state.timerRunning = true;
    updatePlayPauseButtonUI();

    playBellChime();
    showToast(`Starting: ${getCurrentExercise().name}`, '▶️');

    state.timerInterval = setInterval(() => {
      if (state.secondsLeft > 0) {
        state.secondsLeft--;
        state.routineElapsedSeconds++;

        // Audio cues at 3, 2, 1
        if (state.secondsLeft >= 1 && state.secondsLeft <= 3) {
          playTickSound();
        }

        updateTimerDial();
      } else {
        // Exercise completed!
        advanceToNextExercise();
      }
    }, 1000);
  }

  function pauseTimer() {
    state.timerRunning = false;
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    updatePlayPauseButtonUI();
  }

  function toggleTimer() {
    if (state.timerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function resetCurrentTimer() {
    pauseTimer();
    const currentEx = getCurrentExercise();
    state.secondsLeft = currentEx.duration;
    updateTimerDial();
  }

  function getCurrentExercise() {
    const routine = ROUTINES[state.currentRoutineId];
    return routine.exercises[state.exerciseIndex] || routine.exercises[0];
  }

  function advanceToNextExercise() {
    const routine = ROUTINES[state.currentRoutineId];
    if (state.exerciseIndex < routine.exercises.length - 1) {
      state.exerciseIndex++;
      const nextEx = routine.exercises[state.exerciseIndex];
      state.secondsLeft = nextEx.duration;
      playBellChime();
      renderExerciseCard();
      updateTimerDial();
      showToast(`Next: ${nextEx.name}`, '🔔');
    } else {
      // Entire Routine Complete!
      pauseTimer();
      playCelebrationFanfare();
      triggerConfetti();

      // Automatically mark current day in 21-day tracker
      autoMarkNextTrackerDay();

      showToast(`Routine Finished! Great job unlocking your spine!`, '🏆');
      
      // Reset back to start
      state.exerciseIndex = 0;
      state.secondsLeft = routine.exercises[0].duration;
      renderExerciseCard();
      updateTimerDial();
    }
  }

  function previousExercise() {
    if (state.exerciseIndex > 0) {
      state.exerciseIndex--;
    }
    const currentEx = getCurrentExercise();
    state.secondsLeft = currentEx.duration;
    renderExerciseCard();
    updateTimerDial();
  }

  function updatePlayPauseButtonUI() {
    const btn = document.getElementById('btnTimerPlayPause');
    if (!btn) return;
    if (state.timerRunning) {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
          <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
        </svg>
      `;
      btn.setAttribute('title', 'Pause Routine');
    } else {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      `;
      btn.setAttribute('title', 'Start Routine');
    }
  }

  function renderExerciseCard() {
    const routine = ROUTINES[state.currentRoutineId];
    const ex = routine.exercises[state.exerciseIndex];
    if (!ex) return;

    const titleEl = document.getElementById('timerMoveTitle');
    const targetEl = document.getElementById('timerMoveTarget');
    const descEl = document.getElementById('timerMoveDesc');
    const breathEl = document.getElementById('timerMoveBreath');
    const modEl = document.getElementById('timerMoveMod');
    const stepLabelEl = document.getElementById('timerStepLabel');

    if (titleEl) titleEl.textContent = ex.name;
    if (targetEl) targetEl.textContent = ex.target;
    if (descEl) descEl.textContent = ex.cue;
    if (breathEl) breathEl.textContent = ex.breath;
    if (modEl) modEl.textContent = ex.modification;
    if (stepLabelEl) {
      stepLabelEl.textContent = `Movement ${state.exerciseIndex + 1} of ${routine.exercises.length}`;
    }
  }

  function updateTimerDial() {
    const timeDisplay = document.getElementById('timerTimeDisplay');
    const circle = document.getElementById('timerProgressCircle');
    const currentEx = getCurrentExercise();

    if (timeDisplay) {
      const minutes = Math.floor(state.secondsLeft / 60);
      const seconds = state.secondsLeft % 60;
      timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    if (circle) {
      const progressFraction = (currentEx.duration - state.secondsLeft) / currentEx.duration;
      const offset = CIRCLE_CIRCUMFERENCE - progressFraction * CIRCLE_CIRCUMFERENCE;
      circle.style.strokeDashoffset = offset;
    }
  }

  // =========================================================================
  // 6. 21-DAY TRACKER LOGIC & HABIT PERSISTENCE
  // =========================================================================
  function renderTrackerGrid() {
    const daysContainer = document.getElementById('trackerDaysContainer');
    if (!daysContainer) return;

    daysContainer.innerHTML = '';

    // Render 3 Weeks (7 days each)
    for (let week = 0; week < 3; week++) {
      const weekWrap = document.createElement('div');
      weekWrap.className = 'week-group';

      const weekTitles = [
        'Week 1: De-Stiffening & Neural Awakening',
        'Week 2: Deep Range & Tissue Elasticity',
        'Week 3: Fluid Everyday Freedom & Mastery'
      ];

      weekWrap.innerHTML = `
        <div class="week-title">
          <span>${weekTitles[week]}</span>
          <span>Days ${week * 7 + 1}–${(week + 1) * 7}</span>
        </div>
      `;

      const grid = document.createElement('div');
      grid.className = 'days-grid';

      for (let day = 0; day < 7; day++) {
        const dayIndex = week * 7 + day;
        const dayNumber = dayIndex + 1;
        const isCompleted = state.trackerDays[dayIndex];

        const dayBtn = document.createElement('div');
        dayBtn.className = `day-cell ${isCompleted ? 'completed' : ''}`;
        dayBtn.dataset.dayIndex = dayIndex;
        dayBtn.setAttribute('role', 'button');
        dayBtn.setAttribute('tabindex', '0');
        dayBtn.setAttribute('aria-label', `Day ${dayNumber}: ${isCompleted ? 'Completed' : 'Not completed'}`);

        dayBtn.innerHTML = `
          <span class="day-num">${dayNumber}</span>
          <span class="day-status">${isCompleted ? 'Done' : '10m'}</span>
        `;

        dayBtn.addEventListener('click', () => toggleTrackerDay(dayIndex));
        grid.appendChild(dayBtn);
      }

      weekWrap.appendChild(grid);
      daysContainer.appendChild(weekWrap);
    }

    updateTrackerMetrics();
  }

  function toggleTrackerDay(index) {
    initAudioContext();
    state.trackerDays[index] = !state.trackerDays[index];
    saveTrackerProgress();

    if (state.trackerDays[index]) {
      playBellChime();
      showToast(`Day ${index + 1} marked completed! Keep the momentum!`, '✅');
      checkMilestones(index + 1);
    }

    renderTrackerGrid();
  }

  function autoMarkNextTrackerDay() {
    const firstUnfinishedIndex = state.trackerDays.findIndex(day => day === false);
    if (firstUnfinishedIndex !== -1) {
      state.trackerDays[firstUnfinishedIndex] = true;
      saveTrackerProgress();
      renderTrackerGrid();
      showToast(`Day ${firstUnfinishedIndex + 1} marked complete on your tracker!`, '🎉');
    }
  }

  function updateTrackerMetrics() {
    const completedCount = state.trackerDays.filter(Boolean).length;
    const percentage = Math.round((completedCount / 21) * 100);
    const totalMinutes = completedCount * 10;

    // Calculate streak
    let streak = 0;
    for (let i = 0; i < state.trackerDays.length; i++) {
      if (state.trackerDays[i]) {
        streak++;
      } else {
        break;
      }
    }

    // Top status strip
    const statusVal = document.getElementById('statusStreakVal');
    const quickBar = document.getElementById('quickProgressFill');
    if (statusVal) statusVal.textContent = `${completedCount} / 21 Days`;
    if (quickBar) quickBar.style.width = `${percentage}%`;

    // Tracker Card stats
    const countEl = document.getElementById('statCompletedCount');
    const streakEl = document.getElementById('statStreakDays');
    const minsEl = document.getElementById('statTotalMinutes');
    const percentEl = document.getElementById('statPercentNumber');
    const fillEl = document.getElementById('trackerProgressBar');

    if (countEl) countEl.textContent = `${completedCount}/21`;
    if (streakEl) streakEl.textContent = `${streak}d`;
    if (minsEl) minsEl.textContent = `${totalMinutes}m`;
    if (percentEl) percentEl.textContent = `${percentage}%`;
    if (fillEl) fillEl.style.width = `${percentage}%`;

    // Milestones badges
    const m1 = document.getElementById('milestoneDay1');
    const m3 = document.getElementById('milestoneDay3');
    const m7 = document.getElementById('milestoneDay7');
    const m14 = document.getElementById('milestoneDay14');
    const m21 = document.getElementById('milestoneDay21');

    if (m1) m1.classList.toggle('unlocked', completedCount >= 1);
    if (m3) m3.classList.toggle('unlocked', completedCount >= 3);
    if (m7) m7.classList.toggle('unlocked', completedCount >= 7);
    if (m14) m14.classList.toggle('unlocked', completedCount >= 14);
    if (m21) m21.classList.toggle('unlocked', completedCount >= 21);
  }

  function checkMilestones(dayNum) {
    if (dayNum === 3) {
      triggerConfetti();
      playCelebrationFanfare();
      showToast('Badge Unlocked: "Habit Ignition" (3 Days in a row)!', '🔥');
    } else if (dayNum === 7) {
      triggerConfetti();
      playCelebrationFanfare();
      showToast('Badge Unlocked: "Week 1 Spinal Pioneer" Completed!', '🌟');
    } else if (dayNum === 14) {
      triggerConfetti();
      playCelebrationFanfare();
      showToast('Badge Unlocked: "Deep Mobility Master" (2 Full Weeks)!', '⚡');
    } else if (dayNum === 21) {
      triggerConfetti();
      playCelebrationFanfare();
      showToast('🏆 21-Day Graduate! Full Joint Freedom Achieved!', '👑');
    }
  }

  function resetTracker() {
    if (confirm('Reset your 21-Day tracker progress to Day 1?')) {
      state.trackerDays = new Array(21).fill(false);
      saveTrackerProgress();
      renderTrackerGrid();
      showToast('Tracker progress has been reset.', '🔄');
    }
  }

  // =========================================================================
  // 7. SIMULATED AUDIO/VIDEO PLAYER
  // =========================================================================
  function initPlayerVisualizer() {
    const waveContainer = document.getElementById('playerWaveform');
    if (!waveContainer) return;

    waveContainer.innerHTML = '';
    const heights = [35, 60, 40, 80, 55, 90, 70, 45, 95, 80, 60, 40, 75, 85, 50, 65, 90, 40, 60, 30];
    
    heights.forEach((h, i) => {
      const bar = document.createElement('div');
      bar.className = 'wave-bar';
      bar.style.height = `${h}%`;
      bar.dataset.index = i;
      waveContainer.appendChild(bar);
    });
  }

  function toggleAudioPlayer() {
    initAudioContext();
    const btn = document.getElementById('btnPlayerPlay');
    const wave = document.getElementById('playerWaveform');

    state.playerPlaying = !state.playerPlaying;

    if (state.playerPlaying) {
      if (btn) {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1.5"></rect>
            <rect x="14" y="5" width="4" height="14" rx="1.5"></rect>
          </svg>
        `;
      }
      if (wave) wave.classList.add('playing');
      playBellChime();

      state.playerInterval = setInterval(() => {
        if (state.playerCurrentSec < state.playerTotalSec) {
          state.playerCurrentSec++;
          updatePlayerTimeDisplay();
        } else {
          stopAudioPlayer();
        }
      }, 1000);
    } else {
      pauseAudioPlayer();
    }
  }

  function pauseAudioPlayer() {
    state.playerPlaying = false;
    const btn = document.getElementById('btnPlayerPlay');
    const wave = document.getElementById('playerWaveform');
    if (btn) {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      `;
    }
    if (wave) wave.classList.remove('playing');
    if (state.playerInterval) {
      clearInterval(state.playerInterval);
      state.playerInterval = null;
    }
  }

  function stopAudioPlayer() {
    pauseAudioPlayer();
    state.playerCurrentSec = 0;
    updatePlayerTimeDisplay();
  }

  function updatePlayerTimeDisplay() {
    const el = document.getElementById('playerCurrentTime');
    if (!el) return;
    const m = Math.floor(state.playerCurrentSec / 60);
    const s = state.playerCurrentSec % 60;
    el.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function toggleTranscript() {
    const drawer = document.getElementById('transcriptDrawer');
    const btn = document.getElementById('btnToggleTranscript');
    if (!drawer) return;
    drawer.classList.toggle('open');
    if (btn) {
      btn.classList.toggle('active', drawer.classList.contains('open'));
    }
  }

  // =========================================================================
  // 8. MODALS ENGINE (UPSELL & WELCOME)
  // =========================================================================
  const UPSELL_DETAILS = {
    agility: {
      badge: 'PREMIUM TIER • FULL BODY AGILITY',
      title: 'Full Body Agility Academy',
      subtitle: 'Unlock high-level athletic mobility, fascial elasticity flows, rotational power, and lifelong joint longevity.',
      strikePrice: '$97',
      specialPrice: '$27',
      discount: '72% OFF',
      perks: [
        'Over 40+ specialized HD video flows (Hips, Thoracic, Shoulders & Knees)',
        'Fascial lines release protocols (Thomas Myers Anatomy Trains)',
        'Rotational power & anti-injury routines for active adults',
        'Downloadable quick-reference cheat cards for travel & gym',
        'Lifetime access with zero monthly recurring charges'
      ],
      gumroadUrl: 'https://gumroad.com/l/mr-agility-academy?wanted=true'
    },
    coaching: {
      badge: 'VIP CLUB • DIRECT EXPERT GUIDANCE',
      title: 'Live Coaching Club & Posture Audit',
      subtitle: 'Get your posture personally reviewed by MR Solutions mobility specialists with bi-weekly live clinics and private Q&A.',
      strikePrice: '$147',
      specialPrice: '$37',
      discount: '75% OFF',
      perks: [
        'Personal Video Posture Audit: Send your video for customized feedback',
        'Bi-weekly Live Zoom Decompression & Alignment masterclasses',
        'Private WhatsApp VIP Community with direct trainer access',
        'Priority feature requests for next app updates',
        'Full access to all upcoming MR Solutions protocol modules'
      ],
      gumroadUrl: 'https://gumroad.com/l/mr-vip-coaching?wanted=true'
    }
  };

  function openUpsellModal(tierKey = 'agility') {
    const modal = document.getElementById('upsellModal');
    if (!modal) return;

    const data = UPSELL_DETAILS[tierKey] || UPSELL_DETAILS.agility;
    
    document.getElementById('upsellBadge').textContent = data.badge;
    document.getElementById('upsellTitle').textContent = data.title;
    document.getElementById('upsellSubtitle').textContent = data.subtitle;
    document.getElementById('upsellStrike').textContent = data.strikePrice;
    document.getElementById('upsellActual').textContent = data.specialPrice;
    document.getElementById('upsellTag').textContent = data.discount;

    const perksContainer = document.getElementById('upsellPerksList');
    if (perksContainer) {
      perksContainer.innerHTML = data.perks.map(p => `
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${p}</span>
        </li>
      `).join('');
    }

    const ctaBtn = document.getElementById('btnClaimUpsell');
    if (ctaBtn) {
      ctaBtn.href = data.gumroadUrl;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeUpsellModal() {
    const modal = document.getElementById('upsellModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      localStorage.setItem(STORAGE_KEYS.welcomed, 'true');
    }
  }

  // =========================================================================
  // 9. NAVIGATION / TAB SWITCHING ENGINE
  // =========================================================================
  function switchTab(targetTabId) {
    // Check if target is a locked tab triggering upsell
    if (targetTabId === 'locked-agility') {
      openUpsellModal('agility');
      return;
    }
    if (targetTabId === 'locked-coaching') {
      openUpsellModal('coaching');
      return;
    }

    // Update Desktop Nav
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    // Update Mobile Bottom Nav
    document.querySelectorAll('.bottom-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    // Update Content Panes
    document.querySelectorAll('.tab-content').forEach(pane => {
      pane.classList.remove('active');
    });

    const targetPane = document.getElementById(`tab-${targetTabId}`);
    if (targetPane) {
      targetPane.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // =========================================================================
  // 10. INITIALIZATION & EVENT BINDINGS
  // =========================================================================
  function init() {
    loadPersistedState();

    // Setup Timer Circular SVG geometry
    const circle = document.getElementById('timerProgressCircle');
    if (circle) {
      circle.style.strokeDasharray = `${CIRCLE_CIRCUMFERENCE} ${CIRCLE_CIRCUMFERENCE}`;
      circle.style.strokeDashoffset = '0';
    }

    // Set initial routine
    setRoutine('daily');

    // Render tracker
    renderTrackerGrid();

    // Setup player
    initPlayerVisualizer();

    // Sound toggle button in header
    const soundBtn = document.getElementById('btnSoundToggle');
    if (soundBtn) {
      soundBtn.classList.toggle('active', soundEnabled);
      soundBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        localStorage.setItem(STORAGE_KEYS.sound, soundEnabled);
        soundBtn.classList.toggle('active', soundEnabled);
        showToast(soundEnabled ? 'Chime sound enabled' : 'Chime muted', soundEnabled ? '🔔' : '🔕');
        if (soundEnabled) playTickSound();
      });
    }

    // Timer Controls
    const playBtn = document.getElementById('btnTimerPlayPause');
    if (playBtn) playBtn.addEventListener('click', toggleTimer);

    const prevBtn = document.getElementById('btnTimerPrev');
    if (prevBtn) prevBtn.addEventListener('click', previousExercise);

    const nextBtn = document.getElementById('btnTimerNext');
    if (nextBtn) nextBtn.addEventListener('click', advanceToNextExercise);

    const resetBtn = document.getElementById('btnTimerReset');
    if (resetBtn) resetBtn.addEventListener('click', resetCurrentTimer);

    // Routine selector pills
    document.querySelectorAll('.routine-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.routine;
        if (id) setRoutine(id);
      });
    });

    // Audio Player Controls
    const playerPlayBtn = document.getElementById('btnPlayerPlay');
    if (playerPlayBtn) playerPlayBtn.addEventListener('click', toggleAudioPlayer);

    const transcriptBtn = document.getElementById('btnToggleTranscript');
    if (transcriptBtn) transcriptBtn.addEventListener('click', toggleTranscript);

    // Tracker Reset
    const resetTrackerBtn = document.getElementById('btnResetTracker');
    if (resetTrackerBtn) resetTrackerBtn.addEventListener('click', resetTracker);

    // User Notes saving
    const notesInput = document.getElementById('userReflectionNotes');
    if (notesInput) {
      notesInput.value = state.userNotes;
      notesInput.addEventListener('input', (e) => {
        saveNotes(e.target.value);
      });
    }

    // Tab Navigation bindings (Desktop & Mobile)
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        if (tab) switchTab(tab);
      });
    });

    // Locked Cards Clicks
    const lockedCardAgility = document.getElementById('cardLockedAgility');
    if (lockedCardAgility) {
      lockedCardAgility.addEventListener('click', () => openUpsellModal('agility'));
    }

    const lockedCardCoaching = document.getElementById('cardLockedCoaching');
    if (lockedCardCoaching) {
      lockedCardCoaching.addEventListener('click', () => openUpsellModal('coaching'));
    }

    // Modal Close buttons
    const closeUpsellBtn = document.getElementById('btnCloseUpsell');
    if (closeUpsellBtn) closeUpsellBtn.addEventListener('click', closeUpsellModal);

    const upsellOverlay = document.getElementById('upsellModal');
    if (upsellOverlay) {
      upsellOverlay.addEventListener('click', (e) => {
        if (e.target === upsellOverlay) closeUpsellModal();
      });
    }

    const closeWelcomeBtn = document.getElementById('btnCloseWelcome');
    if (closeWelcomeBtn) closeWelcomeBtn.addEventListener('click', closeWelcomeModal);

    const welcomeOverlay = document.getElementById('welcomeModal');
    if (welcomeOverlay) {
      welcomeOverlay.addEventListener('click', (e) => {
        if (e.target === welcomeOverlay) closeWelcomeModal();
      });
    }

    const btnHelp = document.getElementById('btnHelpModal');
    if (btnHelp) btnHelp.addEventListener('click', openWelcomeModal);

    // ESC key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeUpsellModal();
        closeWelcomeModal();
      }
    });

    // PWA Service Worker Registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('MR Mobility PWA Service Worker Registered'))
        .catch((err) => console.log('Service Worker skipped:', err));
    }

    // First time visitor check
    const hasBeenWelcomed = localStorage.getItem(STORAGE_KEYS.welcomed);
    if (!hasBeenWelcomed) {
      setTimeout(openWelcomeModal, 800);
    }
  }

  // Export globally for fast inline button calls if needed
  window.MRMobility = {
    setRoutine,
    switchTab,
    openUpsellModal,
    openWelcomeModal,
    toggleTimer
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
