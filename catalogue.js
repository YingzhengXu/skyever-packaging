// Shared product catalogue. Keep descriptions factual and specifications order-specific.
const CATALOGUE = [
  {
    "id": "shopping",
    "name": [
      "Shopping & Carrier Bags",
      "购物袋与手提袋"
    ],
    "intro": [
      "Carrier bags for supermarkets, retail stores and everyday shopping.",
      "适用于超市、零售门店及日常购物，可定制袋型、尺寸与印刷。"
    ],
    "image": "retail-bag.png",
    "items": [
      {
        "id": "t-shirt",
        "name": [
          "T-shirt Bags",
          "背心袋／马甲袋"
        ],
        "intro": [
          "Handle bags for supermarket checkout and everyday carrying.",
          "适合超市结账与日常装物的背心式手提袋。"
        ]
      },
      {
        "id": "flat-shopping",
        "name": [
          "Flat Shopping Bags",
          "平口购物袋"
        ],
        "intro": [
          "Simple open-top bags for packing retail purchases.",
          "用于零售商品装袋，袋口平直、款式简洁。"
        ]
      },
      {
        "id": "die-cut",
        "name": [
          "Die-cut Handle Bags",
          "冲孔手提袋"
        ],
        "intro": [
          "Integrated cut-out handles for retail and branded packaging.",
          "袋身冲孔作提手，适合门店与品牌包装。"
        ]
      },
      {
        "id": "soft-loop",
        "name": [
          "Soft Loop Handle Bags",
          "软环手提袋"
        ],
        "intro": [
          "Bags with attached loop handles for retail carrying.",
          "配独立软环提手，适合零售商品提拿。"
        ]
      },
      {
        "id": "boutique",
        "name": [
          "Boutique Shopping Bags",
          "服装店购物袋"
        ],
        "intro": [
          "Custom carrier bags for clothing and accessories.",
          "为服装、鞋帽及配饰提供门店购物包装。"
        ]
      },
      {
        "id": "takeaway",
        "name": [
          "Takeaway Bags",
          "外卖打包袋"
        ],
        "intro": [
          "Carrier bags for packed meals and takeaway containers.",
          "用于外卖餐盒及已包装食品的提拿。"
        ]
      },
      {
        "id": "reusable",
        "name": [
          "Reusable Shopping Bags",
          "加厚购物袋"
        ],
        "intro": [
          "Thicker carrier formats for repeat shopping use.",
          "加厚袋型，可根据重复使用需求确认规格。"
        ]
      },
      {
        "id": "printed",
        "name": [
          "Printed Shopping Bags",
          "定制印刷购物袋"
        ],
        "intro": [
          "Shopping bags printed with your brand and artwork.",
          "可印刷品牌 Logo 与图案的购物袋。"
        ]
      }
    ]
  },
  {
    "id": "zipper",
    "name": [
      "Zipper & Resealable Bags",
      "拉链袋与自封袋"
    ],
    "intro": [
      "Resealable bags for clothing, accessories, small parts and storage.",
      "适用于服装、饰品、小配件及收纳，提供多种可重复封口形式。"
    ],
    "image": "zipper-sample.jpg",
    "items": [
      {
        "id": "garment-zipper",
        "name": [
          "Garment Zipper Bags",
          "服装拉链袋"
        ],
        "intro": [
          "Zipper packaging for clothing, textiles and apparel sets.",
          "适合服装、纺织品及套装的拉链包装。"
        ]
      },
      {
        "id": "slider",
        "name": [
          "Slider Zipper Bags",
          "滑块拉链袋"
        ],
        "intro": [
          "A sliding closure for convenient opening and resealing.",
          "通过滑块开合，便于重复取放物品。"
        ]
      },
      {
        "id": "press-seal",
        "name": [
          "Press-to-close Bags",
          "凹凸扣自封袋"
        ],
        "intro": [
          "Press-seal bags for packing and organising small items.",
          "按压封口，适合小件商品包装与分类。"
        ]
      },
      {
        "id": "clear",
        "name": [
          "Clear Resealable Bags",
          "透明自封袋"
        ],
        "intro": [
          "Transparent packaging that keeps the contents visible.",
          "透明袋身，便于查看与展示袋内物品。"
        ]
      },
      {
        "id": "frosted",
        "name": [
          "Frosted Zipper Bags",
          "磨砂拉链袋"
        ],
        "intro": [
          "A frosted finish for clothing and retail packaging.",
          "磨砂外观，适合服装及零售商品包装。"
        ]
      },
      {
        "id": "underwear",
        "name": [
          "Underwear & Sock Bags",
          "内衣袜子包装袋"
        ],
        "intro": [
          "Resealable packs for underwear, socks and small garments.",
          "用于内衣、袜子等小件服装的自封包装。"
        ]
      },
      {
        "id": "accessories",
        "name": [
          "Accessory & Parts Bags",
          "饰品与配件自封袋"
        ],
        "intro": [
          "Small resealable bags for jewellery, fittings and components.",
          "用于饰品、五金与小配件的分类包装。"
        ]
      },
      {
        "id": "storage",
        "name": [
          "Resealable Storage Bags",
          "自封收纳袋"
        ],
        "intro": [
          "Resealable formats for organising everyday belongings.",
          "便于日常物品整理与反复取放。"
        ]
      }
    ]
  },
  {
    "id": "pet",
    "name": [
      "Pet Waste & Pet Care Bags",
      "宠物用品袋"
    ],
    "intro": [
      "Pet waste bags and liners for everyday pet care and retail.",
      "涵盖宠物拾便、猫砂清理与宠物护理用途，支持卷装及零售包装。"
    ],
    "image": "pet-poop-bags.jpg",
    "items": [
      {
        "id": "roll",
        "name": [
          "Pet Waste Bags on Rolls",
          "卷装宠物拾便袋"
        ],
        "intro": [
          "Compact rolls for daily walks and pet waste disposal.",
          "小卷包装，适合日常遛宠时携带使用。"
        ]
      },
      {
        "id": "flat",
        "name": [
          "Flat-packed Pet Waste Bags",
          "平装宠物拾便袋"
        ],
        "intro": [
          "Flat-packed bags for pet care and refill supplies.",
          "平装供应，适合宠物护理及补充装。"
        ]
      },
      {
        "id": "handle",
        "name": [
          "Handle Pet Waste Bags",
          "带提手拾便袋"
        ],
        "intro": [
          "Pet waste bags with handles for carrying and tying.",
          "带提手设计，便于提拿与打结。"
        ]
      },
      {
        "id": "dispenser",
        "name": [
          "Dispenser Refill Rolls",
          "拾便器替换卷袋"
        ],
        "intro": [
          "Refill rolls sized to suit your dispenser requirements.",
          "可按拾便器尺寸要求定制替换卷袋。"
        ]
      },
      {
        "id": "large",
        "name": [
          "Large Pet Waste Bags",
          "加大宠物垃圾袋"
        ],
        "intro": [
          "Larger formats for pet waste and cleanup tasks.",
          "加大袋型，适合宠物废弃物收集与清理。"
        ]
      },
      {
        "id": "litter-disposal",
        "name": [
          "Cat Litter Disposal Bags",
          "猫砂垃圾袋"
        ],
        "intro": [
          "Bags for collecting and disposing of used cat litter.",
          "用于收集与处理使用后的猫砂。"
        ]
      },
      {
        "id": "litter-liner",
        "name": [
          "Litter Tray Liners",
          "猫砂盆衬袋"
        ],
        "intro": [
          "Liners sized for different cat litter trays.",
          "可按猫砂盆尺寸定制内衬袋。"
        ]
      },
      {
        "id": "branded",
        "name": [
          "Branded Pet Care Bags",
          "宠物品牌定制包装袋"
        ],
        "intro": [
          "Custom-printed bags and retail packs for pet brands.",
          "面向宠物品牌定制印刷及零售包装。"
        ]
      }
    ]
  },
  {
    "id": "food",
    "name": [
      "Food Packaging & Storage Bags",
      "食品包装与保鲜袋"
    ],
    "intro": [
      "Bag formats for produce, bread, frozen foods and food storage.",
      "面向果蔬、面包、冷冻食品与日常储存，按食品用途确认材料。"
    ],
    "image": "food-produce-sample.jpg",
    "items": [
      {
        "id": "storage",
        "name": [
          "Food Storage Bags",
          "家用保鲜袋"
        ],
        "intro": [
          "Bags for portioning and storing everyday food items.",
          "用于日常食品分装与储存。"
        ]
      },
      {
        "id": "produce-roll",
        "name": [
          "Produce Bags on Rolls",
          "果蔬连卷袋"
        ],
        "intro": [
          "Roll bags for fruit and vegetable counters.",
          "适合超市果蔬区取用的连卷包装袋。"
        ]
      },
      {
        "id": "flat-food",
        "name": [
          "Flat Food Bags",
          "食品平口袋"
        ],
        "intro": [
          "Open-top bags for simple food packing and portioning.",
          "适用于食品装袋与分装的平口袋型。"
        ]
      },
      {
        "id": "resealable",
        "name": [
          "Resealable Food Bags",
          "食品自封袋"
        ],
        "intro": [
          "Resealable formats for food storage and repeated access.",
          "自封开合，便于食品储存与多次取用。"
        ]
      },
      {
        "id": "frozen",
        "name": [
          "Frozen Food Bags",
          "冷冻食品袋"
        ],
        "intro": [
          "Packaging specified for frozen food storage conditions.",
          "根据冷冻储存条件确认材料与规格。"
        ]
      },
      {
        "id": "bread",
        "name": [
          "Bread Bags",
          "面包袋"
        ],
        "intro": [
          "Bags sized for loaves, rolls and bakery products.",
          "适用于吐司、餐包等烘焙食品包装。"
        ]
      },
      {
        "id": "vacuum",
        "name": [
          "Vacuum Food Bags",
          "食品真空包装袋"
        ],
        "intro": [
          "Bag structures selected for your vacuum-packing process.",
          "根据真空包装方式选择袋体结构。"
        ]
      },
      {
        "id": "stand-up",
        "name": [
          "Stand-up Zipper Pouches",
          "食品自立拉链袋"
        ],
        "intro": [
          "Standing pouches with resealable closures for food products.",
          "可站立展示、带自封口的食品包装袋。"
        ]
      },
      {
        "id": "laminated",
        "name": [
          "Laminated Food Pouches",
          "食品复合包装袋"
        ],
        "intro": [
          "Layered packaging tailored to the food and packing process.",
          "结合食品种类与包装工艺选择复合结构。"
        ]
      },
      {
        "id": "film",
        "name": [
          "Food Packaging Films",
          "食品包装卷膜"
        ],
        "intro": [
          "Printed films for compatible food packaging lines.",
          "适配食品包装生产线的定制印刷卷膜。"
        ]
      }
    ]
  },
  {
    "id": "garbage",
    "name": [
      "Garbage Bags & Bin Liners",
      "垃圾袋与垃圾桶内衬袋"
    ],
    "intro": [
      "Waste bags for household, commercial and industrial collection.",
      "覆盖家庭、商业与工业清洁，可选择大尺寸、加厚及抽绳束口款。"
    ],
    "image": "drawstring-sample.jpg",
    "items": [
      {
        "id": "household",
        "name": [
          "Household Garbage Bags",
          "家用垃圾袋"
        ],
        "intro": [
          "Everyday waste bags sized for household bins.",
          "适配家用垃圾桶的日常垃圾收集袋。"
        ]
      },
      {
        "id": "commercial",
        "name": [
          "Commercial Garbage Bags",
          "商用垃圾袋"
        ],
        "intro": [
          "Waste bags for offices, stores and cleaning operations.",
          "用于办公室、门店及商业清洁。"
        ]
      },
      {
        "id": "large",
        "name": [
          "Large Garbage Bags",
          "大型垃圾袋"
        ],
        "intro": [
          "Large formats for bigger bins and waste volumes.",
          "适合大垃圾桶及较多垃圾的集中收集。"
        ]
      },
      {
        "id": "heavy-duty",
        "name": [
          "Heavy-duty Garbage Bags",
          "加厚重型垃圾袋"
        ],
        "intro": [
          "Thicker specifications for demanding waste collection tasks.",
          "可按垃圾收集需求定制加厚规格。"
        ]
      },
      {
        "id": "drawstring",
        "name": [
          "Drawstring Garbage Bags",
          "抽绳／束口垃圾袋"
        ],
        "intro": [
          "Drawstring closures for gathering and tying the bag opening.",
          "抽绳收拢袋口，便于束口与提拿。"
        ]
      },
      {
        "id": "t-shirt",
        "name": [
          "T-shirt Garbage Bags",
          "背心式垃圾袋"
        ],
        "intro": [
          "Handle bags for convenient tying and carrying.",
          "背心提手设计，方便打结与提拿。"
        ]
      },
      {
        "id": "flat-top",
        "name": [
          "Flat-top Garbage Bags",
          "平口垃圾袋"
        ],
        "intro": [
          "Straight open-top bags for general waste collection.",
          "平直袋口，适用于常规垃圾收集。"
        ]
      },
      {
        "id": "roll",
        "name": [
          "Garbage Bags on Rolls",
          "连卷垃圾袋"
        ],
        "intro": [
          "Roll-packed bags for storage and regular dispensing.",
          "连卷包装，便于存放与逐只取用。"
        ]
      },
      {
        "id": "flat-pack",
        "name": [
          "Flat-packed Garbage Bags",
          "平装垃圾袋"
        ],
        "intro": [
          "Stacked bags for bulk supply and cleaning teams.",
          "成叠平装，适合批量供应与保洁使用。"
        ]
      },
      {
        "id": "garden",
        "name": [
          "Garden & Leaf Bags",
          "园林落叶袋"
        ],
        "intro": [
          "Bags for gathering leaves and garden cleanup waste.",
          "用于落叶收集与园林清理。"
        ]
      },
      {
        "id": "bin-liner",
        "name": [
          "Large Bin Liners",
          "大型垃圾桶内衬袋"
        ],
        "intro": [
          "Liners customised to the dimensions of larger bins.",
          "按大型垃圾桶尺寸定制内衬袋。"
        ]
      }
    ]
  },
  {
    "id": "industrial",
    "name": [
      "Industrial & Protective Bags",
      "工业包装与防护袋"
    ],
    "intro": [
      "Bags, covers and liners for products, equipment and transport.",
      "为设备、家具、零部件及大件产品提供包装、防尘与内衬方案。"
    ],
    "image": "industrial-liner-sample.jpg",
    "items": [
      {
        "id": "flat",
        "name": [
          "Industrial Flat Bags",
          "工业平口袋"
        ],
        "intro": [
          "Simple bag formats for industrial products and supplies.",
          "用于工业产品与物料的常规装袋。"
        ]
      },
      {
        "id": "large-pe",
        "name": [
          "Large PE Bags",
          "大尺寸 PE 袋"
        ],
        "intro": [
          "Large polyethylene bags made to your product dimensions.",
          "按产品尺寸定制大规格 PE 包装袋。"
        ]
      },
      {
        "id": "equipment",
        "name": [
          "Equipment Dust Covers",
          "机器设备防尘袋"
        ],
        "intro": [
          "Covers sized for machinery during storage and handling.",
          "适配机器设备储存与搬运的罩袋。"
        ]
      },
      {
        "id": "appliance",
        "name": [
          "Appliance Protection Bags",
          "家电防护袋"
        ],
        "intro": [
          "Packaging bags for appliances and related components.",
          "用于家电整机及相关部件包装。"
        ]
      },
      {
        "id": "furniture",
        "name": [
          "Furniture Dust Covers",
          "家具防尘袋"
        ],
        "intro": [
          "Cover bags for furniture storage and transport.",
          "适用于家具储存与运输时覆盖防尘。"
        ]
      },
      {
        "id": "parts",
        "name": [
          "Hardware & Parts Bags",
          "五金零件包装袋"
        ],
        "intro": [
          "Bags for sorting and packing hardware and components.",
          "用于五金零件分类与装袋。"
        ]
      },
      {
        "id": "carton-liner",
        "name": [
          "Carton Liners",
          "纸箱内衬袋"
        ],
        "intro": [
          "Inner bags sized to fit cartons and boxed goods.",
          "配合纸箱尺寸使用的内包装袋。"
        ]
      },
      {
        "id": "drum-liner",
        "name": [
          "Drum & Container Liners",
          "桶内衬袋"
        ],
        "intro": [
          "Liners made to fit drums and other containers.",
          "按桶及容器规格定制内衬袋。"
        ]
      },
      {
        "id": "pallet",
        "name": [
          "Pallet Covers",
          "托盘罩袋"
        ],
        "intro": [
          "Large covers for palletised goods and storage.",
          "用于托盘货物覆盖与仓储包装。"
        ]
      },
      {
        "id": "shrink",
        "name": [
          "Shrink Packaging Bags",
          "收缩包装袋"
        ],
        "intro": [
          "Bag formats selected for compatible heat-shrink processes.",
          "配合适用热收缩工艺的包装袋。"
        ]
      },
      {
        "id": "tubing",
        "name": [
          "Industrial Tubing & Films",
          "工业筒膜与包装膜"
        ],
        "intro": [
          "Tubing and films for customised industrial packing.",
          "适合工业定制包装的筒膜与卷膜。"
        ]
      }
    ]
  },
  {
    "id": "mailing",
    "name": [
      "Mailing & Shipping Bags",
      "电商与物流包装袋"
    ],
    "intro": [
      "Mailers and self-seal bags for e-commerce and order fulfilment.",
      "为电商与物流发货提供邮寄、自粘封口及品牌包装选择。"
    ],
    "image": "mailer-sample.jpg",
    "items": [
      {
        "id": "poly-mailer",
        "name": [
          "Poly Mailers",
          "塑料快递袋"
        ],
        "intro": [
          "Plastic mailing bags for everyday e-commerce shipments.",
          "适合日常电商商品邮寄的塑料包装袋。"
        ]
      },
      {
        "id": "self-seal",
        "name": [
          "Self-seal Mailers",
          "自粘封口快递袋"
        ],
        "intro": [
          "Peel-and-seal closures for preparing orders for dispatch.",
          "自粘封口，方便订单装袋与发货。"
        ]
      },
      {
        "id": "return",
        "name": [
          "Dual-strip Return Mailers",
          "双胶条退货快递袋"
        ],
        "intro": [
          "Two adhesive strips for initial shipping and return packing.",
          "双胶条设计，适配首次发货与退货包装。"
        ]
      },
      {
        "id": "clothing",
        "name": [
          "Clothing Mailers",
          "服装邮寄袋"
        ],
        "intro": [
          "Mailing formats for garments and apparel orders.",
          "用于服装订单及纺织品邮寄。"
        ]
      },
      {
        "id": "tamper",
        "name": [
          "Tamper-evident Mailers",
          "防拆封快递袋"
        ],
        "intro": [
          "Closure options designed to show signs of opening.",
          "可选择留有开封痕迹的封口设计。"
        ]
      },
      {
        "id": "bubble",
        "name": [
          "Bubble Mailers",
          "气泡快递袋"
        ],
        "intro": [
          "Mailing bags with an inner cushioning layer.",
          "内配缓冲层的邮寄包装袋。"
        ]
      },
      {
        "id": "clear-self-seal",
        "name": [
          "Clear Self-seal Bags",
          "透明自粘包装袋"
        ],
        "intro": [
          "Clear bags for product presentation and inner packaging.",
          "用于商品展示与内包装的透明自粘袋。"
        ]
      },
      {
        "id": "document",
        "name": [
          "Document Bags",
          "文件袋"
        ],
        "intro": [
          "Bags sized for documents and printed materials.",
          "适配文件、资料及印刷品包装。"
        ]
      },
      {
        "id": "packing-list",
        "name": [
          "Packing List Envelopes",
          "快递单据背胶袋"
        ],
        "intro": [
          "Adhesive-backed pouches for attaching shipping documents.",
          "背胶固定，用于装载并粘贴运输单据。"
        ]
      }
    ]
  },
  {
    "id": "biodegradable",
    "name": [
      "Biodegradable Bags",
      "可降解包装袋"
    ],
    "intro": [
      "Material options for shopping, pet care, waste and product packaging.",
      "可按用途讨论可降解材料，具体性能与降解条件按所选材料确认。"
    ],
    "image": "biodegradable-sample.png",
    "items": [
      {
        "id": "shopping",
        "name": [
          "Biodegradable Shopping Bags",
          "可降解购物袋"
        ],
        "intro": [
          "Material options for retail carrier and shopping bags.",
          "面向零售购物袋的可降解材料方案。"
        ]
      },
      {
        "id": "pet",
        "name": [
          "Biodegradable Pet Waste Bags",
          "可降解宠物拾便袋"
        ],
        "intro": [
          "Pet waste bag formats with biodegradable material options.",
          "可选择降解材料方案的宠物拾便袋。"
        ]
      },
      {
        "id": "garbage",
        "name": [
          "Biodegradable Garbage Bags",
          "可降解垃圾袋"
        ],
        "intro": [
          "Biodegradable material options for waste collection bags.",
          "面向垃圾收集用途的可降解袋方案。"
        ]
      },
      {
        "id": "food",
        "name": [
          "Biodegradable Food Bags",
          "可降解食品包装袋"
        ],
        "intro": [
          "Material options assessed for the intended food application.",
          "结合具体食品用途确认材料适用性。"
        ]
      },
      {
        "id": "garment",
        "name": [
          "Biodegradable Garment Bags",
          "可降解服装包装袋"
        ],
        "intro": [
          "Material options for garment and apparel packaging.",
          "面向服装及纺织品包装的材料方案。"
        ]
      },
      {
        "id": "mailing",
        "name": [
          "Biodegradable Mailers",
          "可降解快递袋"
        ],
        "intro": [
          "Material options for e-commerce mailing requirements.",
          "结合电商邮寄需求选择材料方案。"
        ]
      },
      {
        "id": "custom",
        "name": [
          "Custom Biodegradable Bags",
          "其他定制可降解袋"
        ],
        "intro": [
          "Discuss the format, use and required material documentation.",
          "按用途讨论袋型及所需材料资料。"
        ]
      }
    ]
  }
];
if (typeof module !== "undefined") module.exports = CATALOGUE;
