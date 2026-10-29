const currentCategory = CATALOGUE.find(c => c.id === document.body.dataset.category);
const t = pair => pair[0];
const searchInput = document.getElementById('product-search');
const cards = [...document.querySelectorAll(currentCategory ? '.type-card' : '.collection-card')];
const form = document.getElementById('quote-form');
let inquirySending = false;
let inquiryState = '';
let submissionId = '';
let submissionFingerprint = '';
function updateInquiryStatus(){if(!form)return;document.getElementById('submit-label').textContent='Inquiry preview only';form.querySelector('button[type=submit]').disabled=true;}
function updateSearch() {
 if(!searchInput)return;
 const query = searchInput.value.trim().toLocaleLowerCase();
 let visible = 0;
 cards.forEach(card => { const match = card.dataset.search.toLocaleLowerCase().includes(query); card.hidden = !match; if (match) visible++; });
 document.getElementById('empty-results').hidden = visible > 0;
}
function selectedProduct() {
 if (!form) return null;
 const [categoryId, productId] = form.elements.product.value.split('/');
 const category = CATALOGUE.find(c => c.id === categoryId);
 if (!category) return null;
 return {category, product: category.items.find(p => p.id === productId)};
}
function updateSelectedSummary() {
 const summary = document.getElementById('selected-product-summary');
 if (!summary) return;
 const selected = selectedProduct();
 summary.hidden = !selected;
 summary.textContent = selected ? t(['Selected: ']) + t(selected.category.name) + (selected.product ? ' / ' + t(selected.product.name) : '') : '';
}
searchInput?.addEventListener('input',updateSearch);
document.getElementById('reset-search')?.addEventListener('click',()=>{searchInput.value='';updateSearch();searchInput.focus();});
document.getElementById('search-toggle').addEventListener('click',()=>{if(!searchInput){location.href='/skyever-packaging/index.html#products';return;}document.getElementById('products').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});searchInput.focus({preventScroll:true});});
const menu = document.querySelector('.menu');
function closeMenu(){document.getElementById('navigation').classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=document.getElementById('navigation').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#navigation a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
if (form) {
 const summary=document.createElement('p');summary.id='selected-product-summary';summary.className='selected-product-summary';summary.hidden=true;form.querySelector('h3').after(summary);
 form.elements.product.addEventListener('change',updateSelectedSummary);
 const params=new URLSearchParams(location.search);
 const category=CATALOGUE.find(c=>c.id===params.get('category'));
 if(category){const product=category.items.find(p=>p.id===params.get('product'));form.elements.product.value=category.id+(product?'/'+product.id:'');}
 if(params.get('request')==='samples')form.elements.request.value='Product samples';
 form.addEventListener('submit',event=>event.preventDefault());
 document.querySelectorAll('.footer-main a[href="/skyever-packaging/index.html?request=samples#contact"]').forEach(a=>a.addEventListener('click',()=>{form.elements.request.value='Product samples';}));
}
document.getElementById('year').textContent=new Date().getFullYear();
updateInquiryStatus();
updateSelectedSummary();
updateSearch();

document.querySelectorAll('[data-licence-viewer]').forEach(licenceDialog=>{
 const zoom=licenceDialog.querySelector('.licence-zoom');
 const canvas=licenceDialog.querySelector('.licence-canvas');
 document.querySelectorAll(`[data-open-licence="${licenceDialog.dataset.licenceViewer}"]`).forEach(button=>button.addEventListener('click',()=>licenceDialog.showModal()));
 licenceDialog.querySelector('.licence-close').addEventListener('click',()=>licenceDialog.close());
 zoom.addEventListener('click',()=>{const enlarged=canvas.classList.toggle('is-enlarged');zoom.setAttribute('aria-pressed',String(enlarged));zoom.textContent=enlarged?'Fit to window':'Zoom in';});
 licenceDialog.addEventListener('close',()=>{canvas.classList.remove('is-enlarged');zoom.setAttribute('aria-pressed','false');zoom.textContent='Zoom in';});
 licenceDialog.addEventListener('click',event=>{if(event.target===licenceDialog){const bounds=licenceDialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)licenceDialog.close();}});
});
