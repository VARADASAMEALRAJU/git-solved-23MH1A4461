# My Git Mastery Challenge Journey

## Student Information
- **Name:** Sameal Raju Varada  
- **Student ID:** 23MH1A4461  
- **Repository:** [https://github.com/VARADASAMEALRAJU/git-solved-23MH1A4461](https://github.com/VARADASAMEALRAJU/git-solved-23MH1A4461)  
- **Date Started:** 25-10-2025  
- **Date Completed:** 29-10-2025  

---

## Task Summary
Cloned instructor's repository with pre-built conflicts and resolved all  
merge conflicts across multiple branches using proper Git workflows.

---

## Commands Used

| Command | Times Used | Purpose |
|----------|-------------|----------|
| git clone | 1 | Clone instructor's repository |
| git checkout | 20+ | Switch between branches |
| git branch | 10+ | View and manage branches |
| git merge | 2 | Merge dev and conflict-simulator into main |
| git add | 30+ | Stage resolved conflicts |
| git commit | 15+ | Commit resolved changes |
| git push | 10+ | Push to my repository |
| git fetch | 2 | Fetch updates from instructor |
| git pull | 1 | Pull updates |
| git stash | 2 | Save temporary work |
| git cherry-pick | 1 | Copy specific commit |
| git rebase | 1 | Rebase feature branch |
| git reset | 3 | Undo commits (soft/mixed/hard) |
| git revert | 1 | Safe undo |
| git tag | 2 | Create release tags |
| git status | 50+ | Check repository state |
| git log | 30+ | View history |
| git diff | 20+ | Compare changes |

---

## Conflicts Resolved

### Merge 1: main + dev (6 files)

#### 1️⃣ config/app-config.yaml
- **Issue:** Production used port 8080, development used 3000  
- **Resolution:** Unified config with environment-based settings  
- **Strategy:** Keep production as default, add dev as optional  
- **Difficulty:** Medium  |  **Time:** 25 min  

#### 2️⃣ config/database-config.json
- **Issue:** Different database hosts and SSL modes  
- **Resolution:** Added separate profiles for both environments  
- **Difficulty:** Medium  |  **Time:** 20 min  

#### 3️⃣ scripts/deploy.sh
- **Issue:** Different deployment strategies  
- **Resolution:** Conditional logic via `DEPLOY_ENV`  
- **Difficulty:** Hard  |  **Time:** 35 min  

#### 4️⃣ scripts/monitor.js
- **Issue:** Different monitoring intervals/log formats  
- **Resolution:** Used `process.env.NODE_ENV`  
- **Difficulty:** Medium  |  **Time:** 25 min  

#### 5️⃣ docs/architecture.md
- **Issue:** Different architectural descriptions  
- **Resolution:** Merged into comprehensive doc  
- **Difficulty:** Easy  |  **Time:** 15 min  

#### 6️⃣ README.md
- **Issue:** Different feature lists/version numbers  
- **Resolution:** Combined all features clearly  
- **Difficulty:** Easy  |  **Time:** 15 min  

---

### Merge 2: main + conflict-simulator (6 files)

#### 1️⃣ config/app-config.yaml
- **Issue:** Logging level was set to “debug” in conflict-simulator but “info” in main.  
- **Resolution:** Set default to “info” and made it configurable via environment variable.  
- **Strategy:** Environment-based logging setup.  
- **Difficulty:** Medium  |  **Time:** 20 min  

#### 2️⃣ config/database-config.json
- **Issue:** Password encryption methods differed between branches.  
- **Resolution:** Implemented unified `securePassword()` function and used encrypted keys.  
- **Strategy:** Centralized encryption handling.  
- **Difficulty:** Hard  |  **Time:** 30 min  

#### 3️⃣ scripts/deploy.sh
- **Issue:** Conflict-simulator added rollback logic, main didn’t.  
- **Resolution:** Merged both with an optional rollback flag.  
- **Strategy:** Added `--rollback` argument in script for safer deploys.  
- **Difficulty:** Hard  |  **Time:** 40 min  

#### 4️⃣ scripts/monitor.js
- **Issue:** One branch used file logging, other used API-based monitoring.  
- **Resolution:** Kept both by adding configuration toggle.  
- **Strategy:** Added `MONITOR_MODE` variable to control behavior.  
- **Difficulty:** Medium  |  **Time:** 25 min  

#### 5️⃣ docs/architecture.md
- **Issue:** Main described cloud setup; conflict-simulator focused on local simulation.  
- **Resolution:** Combined both under “Cloud” and “Simulator” sections.  
- **Strategy:** Unified architecture explanation.  
- **Difficulty:** Easy  |  **Time:** 15 min  

#### 6️⃣ README.md
- **Issue:** Different steps for running simulation and main app.  
- **Resolution:** Added separate “Run in Simulator Mode” section.  
- **Strategy:** Clarified instructions for both environments.  
- **Difficulty:** Easy  |  **Time:** 15 min  

---

## Most Challenging Parts
1. Understanding conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).  
2. Deciding what to keep during merges.  
3. Combining logic in `scripts/deploy.sh` and `monitor.js`.  
4. Ensuring merged code worked properly after integration.  

---

## Key Learnings

### Technical Skills
- Mastered conflict resolution workflow  
- Understood merge markers and `git diff`  
- Practiced all major Git commands  
- Learned to fix logical and code-based conflicts  

### Best Practices
- Read both sides before resolving  
- Test before commit  
- Write clear commit messages  
- Use `git status` often  
- Commit atomically  

### Git Workflow Insights
- Conflicts are normal, not errors  
- Understand both changes first  
- Document resolution strategy carefully  
- Stay patient and systematic  

---

## Reflection
This challenge taught me that merge conflicts aren’t mistakes — they’re Git asking which version you prefer.  
By reading and understanding both sides, I learned to merge effectively.  
The hands-on practice with `merge`, `rebase`, and `cherry-pick` was invaluable.  

Most importantly, I learned that **`git reflog` is a lifesaver!**
