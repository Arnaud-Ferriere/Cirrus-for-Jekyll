(function () {
    var content = document.querySelector('article .content');
    if (!content) return;

    // Click-to-zoom for inline content images
    content.querySelectorAll('img').forEach(function (img) {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            var modalImg = document.getElementById('modalImage');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            bootstrap.Modal.getOrCreateInstance(document.getElementById('imageModal')).show();
        });
    });

    // Obsidian-style callouts: > [!WARNING], > [!NOTE], > [!TIP], > [!IMPORTANT], > [!CAUTION]
    var calloutTypes = {
        'NOTE':      { icon: 'ℹ️',  label: 'Note' },
        'TIP':       { icon: '💡', label: 'Tip' },
        'WARNING':   { icon: '⚠️', label: 'Warning' },
        'IMPORTANT': { icon: '❗', label: 'Important' },
        'CAUTION':   { icon: '🔴', label: 'Caution' }
    };
    content.querySelectorAll('blockquote').forEach(function(bq) {
        var firstP = bq.querySelector('p');
        if (!firstP) return;
        var match = firstP.textContent.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]/i);
        if (!match) return;
        var type = match[1].toUpperCase();
        var info = calloutTypes[type];
        firstP.innerHTML = firstP.innerHTML.replace(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i, '');
        bq.classList.add('callout', 'callout-' + type.toLowerCase());
        var header = document.createElement('div');
        header.className = 'callout-header';
        header.textContent = info.icon + ' ' + info.label;
        bq.insertBefore(header, bq.firstChild);
    });

    // Autolink bare URLs (https://...) in text nodes
    (function autolinkUrls(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            var urlRegex = /(https?:\/\/[^\s<>'")\]]+)/g;
            if (!urlRegex.test(node.textContent)) return;
            var span = document.createElement('span');
            span.innerHTML = node.textContent.replace(/(https?:\/\/[^\s<>'")\]]+)/g, function(url) {
                return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + url + '</a>';
            });
            node.parentNode.replaceChild(span, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            var tag = node.tagName;
            if (tag === 'A' || tag === 'CODE' || tag === 'PRE' || tag === 'SCRIPT') return;
            Array.from(node.childNodes).forEach(autolinkUrls);
        }
    })(content);

    // Icon + target="_blank" on all external links
    content.querySelectorAll('a[href^="http"]').forEach(function(a) {
        try { if (new URL(a.href).hostname === window.location.hostname) return; } catch(e) { return; }
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        if (!a.querySelector('.fa-square-up-right')) {
            var icon = document.createElement('i');
            icon.className = 'fa-solid fa-square-up-right';
            icon.setAttribute('aria-hidden', 'true');
            icon.style.cssText = 'margin-left:0.25em;font-size:0.75em;vertical-align:middle;';
            a.appendChild(icon);
        }
    });

    // Intercept PDF button: re-render Mermaid in light theme before printing
    var printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.onclick = async function() {
            if (window.mermaidReRender) {
                await window.mermaidReRender('default');
                window.print();
                await window.mermaidReRender(window.mermaidGetTheme ? window.mermaidGetTheme() : 'default');
            } else {
                window.print();
            }
        };
    }

    // TOC — generated before collapse buttons so textContent stays clean
    var headings = content.querySelectorAll('h2, h3');
    if (headings.length >= 3) {
        var tocList = document.getElementById('toc-list');
        headings.forEach(function (h, i) {
            if (!h.id) h.id = 'heading-' + i;
            var li = document.createElement('li');
            if (h.tagName === 'H3') li.classList.add('toc-h3');
            var a = document.createElement('a');
            a.href = '#' + h.id;
            a.textContent = h.textContent;
            li.appendChild(a);
            tocList.appendChild(li);
        });
        document.getElementById('toc-wrapper').style.display = 'block';
    }

    // Collapsible H2 sections — Bootstrap collapse (native accessibility)
    content.querySelectorAll('h2').forEach(function (h2, idx) {
        var siblings = [];
        var next = h2.nextElementSibling;
        while (next && next.tagName !== 'H2') {
            siblings.push(next);
            next = next.nextElementSibling;
        }
        if (siblings.length === 0) return;

        var wrapperId = 'section-collapse-' + idx;

        var wrapper = document.createElement('div');
        wrapper.className = 'collapse show';
        wrapper.id = wrapperId;
        h2.parentNode.insertBefore(wrapper, siblings[0]);
        siblings.forEach(function (el) { wrapper.appendChild(el); });

        var btn = document.createElement('button');
        btn.className = 'collapse-section-btn';
        btn.setAttribute('type', 'button');
        btn.setAttribute('data-bs-toggle', 'collapse');
        btn.setAttribute('data-bs-target', '#' + wrapperId);
        btn.setAttribute('aria-controls', wrapperId);
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Collapse section');
        btn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
        h2.appendChild(btn);

        wrapper.addEventListener('hide.bs.collapse', function () {
            btn.querySelector('i').className = 'fas fa-chevron-down';
            btn.setAttribute('aria-label', 'Expand section');
        });
        wrapper.addEventListener('show.bs.collapse', function () {
            btn.querySelector('i').className = 'fas fa-chevron-up';
            btn.setAttribute('aria-label', 'Collapse section');
        });

        // Clicking the H2 (outside the button) also toggles the section
        h2.addEventListener('click', function (e) {
            if (e.target === btn || btn.contains(e.target)) return;
            bootstrap.Collapse.getOrCreateInstance(wrapper).toggle();
        });
        h2.style.cursor = 'pointer';
    });
})();
