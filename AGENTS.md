<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

## CRITICAL WORKING RULES FOR THIS PROJECT

### 1. READ FIRST, EDIT LATER
- **ALWAYS** read all relevant files (layout, components, pages) before making ANY changes
- Understand the full context and structure first
- Never assume - always verify current state by reading files
- Check what the user has already implemented before adding anything

### 2. BUILD & VERIFY
- Run `pnpm build` after every change
- **ONLY commit if build is successful with zero errors**
- Verify all pages compile correctly in build output
- Check TypeScript compilation passes

### 3. COMMIT DISCIPLINE
- Commit after every successful build
- Write clear, descriptive commit messages
- Use: `git add -A && git commit -m "descriptive message"`
- Never leave uncommitted working changes

### 4. CAREFUL OPERATIONS - NEVER DESTROY USER WORK
- **NEVER** use `git checkout` or `git revert` commands without explicit permission
- **NEVER** overwrite user's work
- Ask before any destructive operations
- When in doubt, read files first before modifying

### 5. UNDERSTAND THE ASSIGNMENT
- Read the full request carefully and completely
- Understand what the user has already done/implemented
- Only add or modify what was specifically requested
- Don't recreate components or features that already exist
- Respect the user's existing code and improvements

### 6. WHEN HALLUCINATION OCCURS
- **STOP** and read AGENTS.md immediately
- Re-read the relevant files to ground yourself in reality
- Verify current state before proceeding
- Ask clarifying questions if uncertain

---

**Remember: The user's work is sacred. Read first, understand completely, edit carefully, build successfully, then commit.**
