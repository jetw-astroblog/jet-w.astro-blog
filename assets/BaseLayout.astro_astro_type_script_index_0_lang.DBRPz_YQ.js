const y=window.__i18n||{ui:{}},o=y.ui,f=document.querySelector(".back-to-top");f&&(window.addEventListener("scroll",()=>{window.scrollY>300?f.classList.add("show"):f.classList.remove("show")}),f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));document.querySelectorAll('a[href^="#"]').forEach(p=>{p.addEventListener("click",function(r){r.preventDefault();const e=this.getAttribute("href");if(e){const n=document.querySelector(e);n&&n.scrollIntoView({behavior:"smooth"})}})});function C(){const p=document.querySelectorAll("pre:not([data-enhanced])"),r=15;p.forEach(e=>{e.setAttribute("data-enhanced","true");const n=e.querySelector("code");let d="code";if(n?.classList.contains("language-mermaid")||e.classList.contains("mermaid")||e.closest(".mermaid-container"))return;if(n){const s=n.className.split(" ");for(const t of s)if(t.startsWith("language-")){d=t.replace("language-","");break}}const k=e;k.dataset.language&&(d=k.dataset.language);const x=((n?n.textContent:e.textContent)||"").split(`
`).length,v=x>r,c=document.createElement("div");c.className="code-block-wrapper"+(v?" collapsed":"");const a=document.createElement("div");a.className="code-block-header",a.innerHTML=`
            <span class="code-block-lang">${d}</span>
            <div class="code-block-actions">
              ${v?`
                <button class="code-block-btn collapse-btn" title="${o.expand||"Expand"}/${o.collapse||"Collapse"}">
                  <svg class="collapse-icon transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span class="collapse-text">${o.expand||"Expand"}</span>
                </button>
              `:""}
              <button class="code-block-btn copy-btn" title="${o.copyCode||"Copy"}">
                <svg class="copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span class="copy-text">${o.copyCode||"Copy"}</span>
              </button>
            </div>
          `;const u=document.createElement("div");if(u.className="code-block-content",!e.parentNode)return;if(e.parentNode.insertBefore(c,e),c.appendChild(a),c.appendChild(u),u.appendChild(e),v){const s=document.createElement("div");s.className="code-block-expand",s.innerHTML=`
              <button class="expand-btn">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span>${o.expandCode||"Expand code"} (${x} ${o.lines||"lines"})</span>
              </button>
            `,u.appendChild(s);const t=document.createElement("div");t.className="code-block-collapse",t.innerHTML=`
              <button class="collapse-bottom-btn">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
                <span>${o.collapseCode||"Collapse code"}</span>
              </button>
            `,u.appendChild(t);const l=s.querySelector(".expand-btn");l&&l.addEventListener("click",()=>{c.classList.remove("collapsed");const h=a.querySelector(".collapse-text");h&&(h.textContent=o.collapse||"Collapse")});const m=t.querySelector(".collapse-bottom-btn");m&&m.addEventListener("click",()=>{c.classList.add("collapsed");const h=a.querySelector(".collapse-text");h&&(h.textContent=o.expand||"Expand"),c.scrollIntoView({behavior:"smooth",block:"start"})})}const i=a.querySelector(".copy-btn");i&&i.addEventListener("click",async()=>{const s=n?n.textContent:e.textContent;try{await navigator.clipboard.writeText(s||""),i.classList.add("copied");const t=i.querySelector(".copy-text"),l=i.querySelector(".copy-icon");t&&(t.textContent=o.copied||"Copied"),l&&(l.innerHTML=`
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                `),setTimeout(()=>{i.classList.remove("copied"),t&&(t.textContent=o.copyCode||"Copy"),l&&(l.innerHTML=`
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  `)},2e3)}catch(t){console.error("Copy failed:",t)}});const b=a.querySelector(".collapse-btn");b&&b.addEventListener("click",()=>{const s=c.classList.toggle("collapsed"),t=b.querySelector(".collapse-text");t&&(t.textContent=s?o.expand||"Expand":o.collapse||"Collapse")})})}C();const w=new MutationObserver(p=>{let r=!1;p.forEach(e=>{e.addedNodes.length&&e.addedNodes.forEach(n=>{if(n.nodeType===1){const d=n;(d.tagName==="PRE"||d.querySelector?.("pre:not([data-enhanced])"))&&(r=!0)}})}),r&&C()});w.observe(document.body,{childList:!0,subtree:!0});
