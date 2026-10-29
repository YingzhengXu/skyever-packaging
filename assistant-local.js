(()=>{
// Local, curated product assistant. No external model calls or fabricated sales facts.
const catalogue = CATALOGUE;
const company = {"brand":"SKYEVER Packaging","name":"Qingdao Tianchengyong Plastic & Rubber Co., Ltd.","addressLines":["Intersection of National Highway 204 and Qingdao Road, Jiaozhou District, Qingdao, Shandong, China 266300"]};
const topics = [
 ['shopping',/shopping|carrier|supermarket|retail|t-shirt|t shirt|handle bag|购物|手提|超市|背心|马甲|零售/i],
 ['zipper',/zip(?:per)?\s*bags?|zipper|reseal|slider|garment|apparel|clothing|拉链|自封|服装|衣服|磨砂/i],
 ['pet',/\bpet\b|\bdog\b|poop|pet waste|cat litter|宠物|拾便|粪便|狗|猫砂|屎袋/i],
 ['food',/\bfood\b|produce|bread|freez|frozen|vacuum|食品|保鲜|果蔬|面包|冷冻|真空/i],
 ['garbage',/garbage|trash|rubbish|bin liner|drawstring|垃圾|束口|抽绳|垃圾桶/i],
 ['industrial',/industrial|pallet|carton liner|equipment|appliance|furniture|drum liner|工业|托盘|设备|家电|家具|纸箱内衬/i],
 ['mailing',/mail(?:er|ing)|shipping bag|courier|e-commerce|物流|快递|邮寄|电商|气泡/i],
 ['biodegradable',/biodegrad|compost|降解|堆肥/i]
];
const facts = [
 {id:'address',pattern:/address|located|location|where.*(?:you|factory|company)|地址|在哪里|位置/i,answer:[`Our address is: ${company.addressLines.join(', ')}.`]},
 {id:'licence',pattern:/business licen[cs]e|registration|credit code|registered name|营业执照|登记|信用代码/i,answer:[`You can view the Tianchengyong and Xinsu Packaging business licences on our company information page.`]},
 {id:'samples',pattern:/sampl|试样|样品|寄样|打样/i,answer:['We offer free samples so you can check the material and quality before discussing an order. Tell us the bag type, size and destination in your sample request.']},
 {id:'custom',pattern:/custom|print|logo|artwork|design|定制|印刷|图案|设计|制版/i,answer:['We support custom bag sizes, materials and printing, with plate-making based on your artwork. Share your bag type, dimensions and design requirements so the available options can be confirmed.']},
 {id:'moq',pattern:/\bmoq\b|minimum|small order|起订|最低数量|最少|小批量/i,answer:['No minimum order quantity. Small orders are welcome. Share your bag specifications and preferred quantity for a tailored quote.']},
 {id:'price',pattern:/price|cost|quot|pricing|how much|价格|多少钱|报价|费用|单价/i,answer:['Pricing is quoted for your specifications and quantity. Please share the bag type, size, thickness, printing, estimated quantity and destination; I do not have a confirmed price list.']},
 {id:'shipping',pattern:/shipping|deliver|lead time|how long|transport|send to|ship to|运费|运输|交期|多久|发货|到货|寄到|送到/i,answer:['Production timing and shipping options are confirmed once the specifications, quantity and destination are known. Include your required arrival date; I cannot confirm a delivery date or freight price here.']},
 {id:'materials',pattern:/material|thickness|micron|\bpe\b|\bpp\b|ldpe|hdpe|材料|材质|厚度|微米/i,answer:['Our factory works with PE, PP and biodegradable materials. The material and thickness are selected for the bag format and intended use, rather than one specification for every product.']},
 {id:'biodegradable',pattern:/biodegrad|compost|eco.friendly|降解|堆肥|环保/i,answer:['Biodegradable material options are available. Biodegradable and compostable are different claims: the performance, conditions and supporting documents must be confirmed for the selected product and market.']},
 {id:'certification',pattern:/certif|\biso\b|\bfda\b|\ben\s?13432\b|\bastm\b|food.safe|food.grade|认证|证书|许可证|食品级|食品安全/i,answer:['Our factory information lists ISO 9001 and a food-packaging production licence. Product-specific compliance and documents for your market must still be confirmed. Tell us the applicable standard and intended use in your enquiry.']},
 {id:'company',pattern:/factory|manufacturer|company|experience|how many years|工厂|厂家|公司|经验|成立/i,answer:[`${company.brand} provides custom plastic bags. The registered company is ${company.name} (English translation). Our manufacturing background dates back to 2002.`]}
];
function answerQuestion({message,category}) {
 const pick=pair=>pair[0];
 const explicit=topics.filter(([,pattern])=>pattern.test(message)).map(([id])=>catalogue.find(c=>c.id===id));
 const previous=catalogue.find(c=>c.id===category);
 const current=explicit[0]||previous;
 const matches=facts.filter(f=>f.pattern.test(message));
 const sampleQuestion=matches.some(f=>f.id==='samples');
 const chosen=matches.filter(f=>!(sampleQuestion && f.id==='price' && !/bulk|order price|订单|批量/.test(message))).slice(0,3);
 const links=[];const paragraphs=[];
 if(chosen.some(f=>['company','address','licence'].includes(f.id)))links.push({label:'Company details & business licence',href:'/company.html#business-licence'});
 if(chosen.length)paragraphs.push(...chosen.map(f=>pick(f.answer)));
 if(explicit.length && (!chosen.length || /which|types|what.*bags|哪些|哪种|袋型|种类/i.test(message))){
  for(const c of explicit.slice(0,2))paragraphs.push(`${pick(c.name)}: ${pick(c.intro)} ${pick(['Examples: '])}${c.items.slice(0,3).map(p=>pick(p.name)).join(', ')}.`);
 }
 for(const c of (explicit.length?explicit:current?[current]:[]).slice(0,2))links.push({label:pick(c.name),href:`/collections/${c.id}.html`});
 if(!paragraphs.length) {
  if(/^(hi|hello|hey|你好|您好)[!！,.，。\s]*$/i.test(message))paragraphs.push(pick(['Hello! I’m the product assistant. What will you be packing? I can help with bag types, printing, materials and free samples.']));
  else if(/thank|谢谢|感谢/i.test(message))paragraphs.push(pick(['You’re welcome. You can request free samples or leave your packaging requirements whenever you’re ready.']));
  else if(/product|bags|range|catalog|find a bag|产品|袋子|目录|包装/i.test(message)) {
   paragraphs.push(pick(['We make shopping and carrier bags, zipper bags, pet waste bags, food packaging, garbage bags, industrial bags, mailers and biodegradable bags. What will you use the bag for?']));
   links.push({label:pick(['Browse products']),href:'/index.html#products'});
  } else paragraphs.push(pick(['I don’t have a confirmed answer in our product information. Please leave your question and requirements in an enquiry so the team can review the details.']));
 }
 if(sampleQuestion)links.push({label:pick(['Request free samples']),href:'/index.html?request=samples#contact'});
 else links.push({label:pick(['Send an enquiry']),href:current?`/index.html?category=${current.id}#contact`:'/index.html#contact'});
 return {answer:paragraphs.join('\n\n'),links,category:current?.id||null,language:'en',mode:'product-information'};
}
window.skyeverAnswerQuestion=answerQuestion;

})();
