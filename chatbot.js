(() => {
 const widget=document.createElement('div');
 widget.className='chat-widget';
 widget.innerHTML=`
  <button class="chat-launcher" aria-controls="product-chat" aria-expanded="false" aria-label="Open product assistant">
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8H4l1.6-4A8 8 0 1 1 20 11.5Z"/><path d="M8 10h8M8 14h5"/></svg>
   <span>Ask us</span>
  </button>
  <section id="product-chat" class="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title" hidden>
   <div class="chat-header"><div><h2 id="chat-title">Product assistant</h2><p>SKYEVER PACKAGING</p></div><div class="chat-header-actions"><button type="button" class="chat-clear" aria-label="Start a new conversation">↺</button><button type="button" class="chat-close" aria-label="Close product assistant">×</button></div></div>
   <div class="chat-messages" role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation"></div>
   <div class="chat-suggestions"><button type="button" data-question="samples">Free samples</button><button type="button" data-question="custom">Custom printing</button><button type="button" data-question="products">Find a bag</button></div>
   <form class="chat-form"><label for="chat-question" class="sr-only">Your question</label><textarea id="chat-question" name="question" rows="2" maxlength="1000" required placeholder="Ask about bags, printing or samples…"></textarea><button type="submit" class="chat-send" aria-label="Send question"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m5 12 7-7 7 7M12 5v15"/></svg></button></form>
   <p class="chat-footnote">Automated answers from our product information.</p>
  </section>`;
 document.body.append(widget);
 const panel=widget.querySelector('.chat-panel');
 const launcher=widget.querySelector('.chat-launcher');
 const log=widget.querySelector('.chat-messages');
 const input=widget.querySelector('#chat-question');
 const chatForm=widget.querySelector('.chat-form');
 const sendButton=widget.querySelector('.chat-send');
 const clearButton=widget.querySelector('.chat-clear');
 const language='en';
 let category=document.body.dataset.category||null;
 let sending=false;
 const tr=pair=>pair[0];
 const prompts={samples:['Can I try free samples?'],custom:['Can I print my logo on the bags?'],products:['Which types of bags do you make?']};
 function scrollToLatest(){log.scrollTop=log.scrollHeight;}
 function addMessage(text,kind='assistant'){
  const bubble=document.createElement('div');bubble.className='chat-message chat-'+kind;
  const paragraph=document.createElement('p');paragraph.textContent=text;bubble.append(paragraph);log.append(bubble);scrollToLatest();return bubble;
 }
 function greet(){
  log.replaceChildren();
  const greeting=addMessage('');
  const p=greeting.querySelector('p');
  p.textContent='Hi! I’m SKYEVER’s product assistant. Ask me about bag types, custom printing or free samples.';
 }
 function setOpen(open){
  panel.hidden=!open;launcher.setAttribute('aria-expanded',String(open));
  if(open){input.focus({preventScroll:true});scrollToLatest();}else launcher.focus({preventScroll:true});
 }
 launcher.addEventListener('click',()=>setOpen(panel.hidden));
 widget.querySelector('.chat-close').addEventListener('click',()=>setOpen(false));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){event.stopPropagation();setOpen(false);}});
 clearButton.addEventListener('click',()=>{if(sending)return;category=document.body.dataset.category||null;greet();input.value='';input.focus();});
 async function ask(question,{repeat=false}={}){
  const message=question.trim();if(!message||sending||message.length>1000)return;
  sending=true;
  sendButton.disabled=true;clearButton.disabled=true;
  widget.querySelectorAll('[data-question]').forEach(button=>button.disabled=true);
  widget.querySelectorAll('.chat-retry').forEach(button=>button.remove());
  if(!repeat)addMessage(message,'user');
  input.value='';
  const pending=addMessage(tr(['Finding an answer…']),'pending');
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),15000);
  try {
   const result=window.skyeverAnswerQuestion({message,category});
   pending.remove();category=result.category||category;
   const bubble=addMessage(result.answer);
   if(Array.isArray(result.links)){
    const actions=document.createElement('div');actions.className='chat-links';
    result.links.forEach(item=>{
     if(typeof item.label!=='string'||!/^\/(?:index\.html(?:[?#].*)?|collections\/[a-z-]+\.html|company\.html(?:#[a-z-]+)?)$/.test(item.href))return;
     const link=document.createElement('a');link.href="/skyever-packaging/"+item.href.slice(1);link.textContent=item.label+' →';
     link.addEventListener('click',()=>setOpen(false));actions.append(link);
    });bubble.append(actions);
   }
  } catch(error) {
   pending.remove();
   const bubble=addMessage(tr(error.status===429?['Please wait a minute before sending another question.']:['I couldn’t connect just now. Please try again or leave an enquiry.']),'error');
   const retry=document.createElement('button');retry.type='button';retry.className='chat-retry';retry.textContent=tr(['Try again']);retry.addEventListener('click',()=>{bubble.remove();ask(message,{repeat:true});});
   const contact=document.createElement('a');contact.href='/skyever-packaging/index.html#contact';contact.textContent=tr(['Send an enquiry →']);contact.addEventListener('click',()=>setOpen(false));
   const actions=document.createElement('div');actions.className='chat-links';actions.append(retry,contact);bubble.append(actions);
  } finally {
   clearTimeout(timeout);sending=false;sendButton.disabled=false;clearButton.disabled=false;
   widget.querySelectorAll('[data-question]').forEach(button=>button.disabled=false);
   scrollToLatest();
  }
 }
 chatForm.addEventListener('submit',event=>{event.preventDefault();ask(input.value);});
 input.addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();ask(input.value);}});
 widget.querySelectorAll('[data-question]').forEach(button=>button.addEventListener('click',()=>ask(tr(prompts[button.dataset.question]))));
 greet();
})();
