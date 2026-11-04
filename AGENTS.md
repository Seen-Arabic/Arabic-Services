# Arabic Services website

## Scope and starting points

This standalone repository contains the public Arabic Services static website.
It uses HTML, CSS and browser JavaScript, with a bundled `ArabicServices` global
and PWA assets. All paths and commands below are relative to this repository's root.
Do not assume a parent workspace, sibling repositories or an npm development setup.

- `index.html`: main page, browser dependencies and service-worker registration.
- `assets/js/main.js`: service selection, text conversion, copy/share actions,
  install prompts and analytics event calls.
- `assets/css/main.css`: page styling and responsive layout.
- `assets/js/arabic-services.umd.js`: bundled text-processing dependency; loaded
  before the UI script. Treat it as a generated artifact, not editable source.
- `sw.js` and `manifest.json`: service-worker caching and PWA metadata/assets.
- `old-arabic/index.html`: redirect for the existing legacy URL.
- `about.html`, `privacy-policy.html`, `404.html`, `robots.txt`, `README.md` and
  `LICENSE`: supporting pages, discovery, project documentation and licensing.

## Working rules

- Inspect Git status, affected HTML/CSS/JavaScript, callers and formatting settings
  before editing. Preserve existing work and use the smallest safe change.
- Analysis and review requests permit no implementation changes unless requested.
- Keep the existing static architecture. Do not add a framework, package manager,
  production dependency or build pipeline without an explicit need and approval.
- Preserve Arabic text, RTL behavior, existing URLs, DOM IDs, event handlers,
  browser globals and stored preferences unless the request includes changing them.
- Check desktop/mobile layout, keyboard interaction, labels and focus behavior for
  UI changes. Preserve mixed Arabic/Latin text and combining marks in text examples.
- Use the local bundle actually loaded by the page to verify available methods.
  Do not assume npm package changes or external source checkouts update this file.
  Replace the bundle only when requested, using a verified artifact and license notices.
- Inspect the service-worker asset list and caching behavior for asset/URL changes;
  distinguish a stale cached page from a source defect. Do not change caching or PWA
  behavior as an unrelated cleanup.
- Do not add user input/output text to analytics or logs. Keep untrusted text out
  of HTML injection sinks, and preserve existing security/privacy controls.
- Ask before dependency changes, deployment/hosting changes, publishing, committing,
  pushing, deleting files or destructive operations. Never expose credentials.
- Do not manually edit bundled/minified dependencies or rewrite unrelated files.

## Validation

No `package.json`, automated test runner or build script is currently declared.
Do not invent npm commands or install tools implicitly. Use available local tools
and report missing prerequisites.

- With Node.js installed, `node --check assets/js/main.js` and `node --check sw.js`
  provide syntax checks only; they do not validate DOM, service-worker or UI behavior.
- For a browser preview, use an available local HTTP server from this root. If Python
  is installed, `python -m http.server 8000 --bind 127.0.0.1` is one option. Do not
  rely on `file://` for service-worker validation.
- For behavior changes, check service selection/conversion, empty and mixed-script
  inputs, copy/share fallbacks, persisted selection, layout and browser console.
- For PWA changes, inspect registration, asset requests and offline/reload behavior;
  distinguish secure-context/browser support limits from confirmed defects.
- For documentation-only changes, verify referenced files, commands and Markdown
  formatting without starting the site or modifying caches.

Review the final diff/status and report exact checks, results, skipped browser/PWA
checks and remaining assumptions. Do not claim runtime verification from syntax
checks or source inspection alone.
