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

    var headings = content.querySelectorAll('h2, h3');
    if (headings.length < 3) return;

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
})();
