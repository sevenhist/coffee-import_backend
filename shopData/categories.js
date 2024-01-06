const CATEGORIES = [
  {
    "title": "Новинки",
    "id": "103466876",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/ecosoft/MO675MPECOSENSE/ru_filtr_obratnogo_osmosa_ecosoft_sense_mo675mpecosense_ua_filtr_zvorotnogo_osmosu_ecosoft_sense_mo6_3.png"
  },
  {
    "title": "Генератори",
    "id": "103467627",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/generator/101320-8/generator-iron-angel-eg-3000_1.jpg"
  },
  {
    "title": "Гайковерти пневматичні",
    "id": "103466959",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/3/3515044773_nabir-pnevmoinstrumentu-12.jpg"
  },
  {
    "title": "Шліфмашини пневматичні",
    "id": "103467206",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/3/2028354097_pnevmozachistnaya-mashinka-pryama.jpg"
  },
  {
    "title": "Набори інструменту комбіновані",
    "id": "103466916",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/7/2028539162_nabir-pnevmoinstrumentu-57.jpg"
  },
  {
    "title": "Краскопульти пневматичні",
    "id": "103467109",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/4/2028793553_farbovanij-bak-z.jpg"
  },
  {
    "title": "Ножівка пневматична",
    "id": "103467278",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/5/2028799075_polotno-nozhovochnoe-bimetallicheskoe.jpg"
  },
  {
    "title": "Пневмостеплери",
    "id": "103467158",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/8/2265873800_pnevmopistolet-tsvyahiv-aeropro.jpg"
  },
  {
    "title": "Форсунки та ремкомплекти для фарбопультів",
    "id": "103467084",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/1/2265874786_forsunka-2-mm.jpg"
  },
  {
    "title": "Безповітряні розпилювачі фарби",
    "id": "103467008",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/toptul/8/2387915772_filtr-dlya-bezpovitryanogo.jpg"
  },
  {
    "title": "Побутова техніка",
    "id": "102520302",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/image.jpg"
  },
  {
    "title": "Нок-Бокси",
    "id": "103467360",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4128357763_nok-boks-ecowood-max.jpg"
  },
  {
    "title": "Premium",
    "id": "103467361",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4645996573_nokboks-kub-vd.jpg"
  },
  {
    "title": "Hario",
    "id": "103467370",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4346899492_kofemolka-ruchnaya-hario.jpg"
  },
  {
    "title": "Класичні",
    "id": "103467372",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4343477301_chajnik-hario-buono.jpg"
  },
  {
    "title": "Hario",
    "id": "103467374",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4343483506_elektricheskij-chajnik-hario_1.jpg"
  },
  {
    "title": "Альтернатива",
    "id": "103467375",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4181885274_pres-filtr-200-ml.jpg"
  },
  {
    "title": "Пуровер",
    "id": "103467376",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4340595243_keramicheskij-purover-hario.jpg"
  },
  {
    "title": "V60",
    "id": "103467378",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4578252759_bumazhnye-filtry-hario.jpg"
  },
  {
    "title": "Сервери",
    "id": "103467380",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4343192306_kofejnyj-zavarnik-hario.jpg"
  },
  {
    "title": "Заварники, Френч-преси",
    "id": "103467381",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4343367891_yaponskij-chajnyj-zavarnik.jpg"
  },
  {
    "title": "Набори з V60",
    "id": "103467383",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3543500428_podarunkovij-nabir-hario.jpg"
  },
  {
    "title": "Мірні склянки",
    "id": "103467384",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3543498896_mirnij-stakan-motta.jpg"
  },
  {
    "title": "Термометри",
    "id": "103467385",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4644713926_termometr-dlya-moloka.jpg"
  },
  {
    "title": "Кавомолки (інше)",
    "id": "103467388",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/1883629153_ruchna-kavomolka-z.jpg"
  },
  {
    "title": "Motta Tulip",
    "id": "103467400",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4350886947_pitcher-molochnik-motta.jpg"
  },
  {
    "title": "Motta Europa",
    "id": "103467404",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4350821607_pitcher-molochnik-motta.jpg"
  },
  {
    "title": "Від кавових олій",
    "id": "103467406",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4660486046_poroshok-dlya-chischennya.jpg"
  },
  {
    "title": "Для молочних систем",
    "id": "103467407",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4660586634_zasib-dlya-ochischennya.jpg"
  },
  {
    "title": "Для кавомолок",
    "id": "103467408",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4660685267_zasib-dlya-chischennya.jpg"
  },
  {
    "title": "Ложки дерево",
    "id": "103467411",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3598533109_lozhka-dlya-turki.jpg"
  },
  {
    "title": "Brewista",
    "id": "103467412",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4181708427_chajnik-elektricheskij-brewista.jpg"
  },
  {
    "title": "Ложки для капінга",
    "id": "103467415",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4644723271_lozhka-dlya-kappinga.jpg"
  },
  {
    "title": "Hario",
    "id": "103467417",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4240436271_vnutrennij-i-vneshnij.jpg"
  },
  {
    "title": "Ложки мірні та барні",
    "id": "103467418",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4648087768_mirna-lozhka-dlya.jpg"
  },
  {
    "title": "Сифон",
    "id": "103467422",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4678739868_sifon-hario-next.jpg"
  },
  {
    "title": "Hario",
    "id": "103467423",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2281448503_butylka-zavarnik-hario.jpg"
  },
  {
    "title": "Toddy 20л.",
    "id": "103467425",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3825596400_kran-dlya-sistemi.jpg"
  },
  {
    "title": "Toddy 2л.",
    "id": "103467426",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4656676489_toddy-cold-brew.jpg"
  },
  {
    "title": "Фільтра/Стопери",
    "id": "103467427",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4655345079_bagatorazovi-filtri-vojlok.jpg"
  },
  {
    "title": "Melitta, Clever, Moccamaster",
    "id": "103467431",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4645836109_filtri-paperovi-melitta.jpg"
  },
  {
    "title": "Компактні",
    "id": "103467391",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2421985137_chajnik-hario-v60.jpg"
  },
  {
    "title": "Щітки для груп",
    "id": "103467359",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4660714831_schitka-dlya-chischennya.jpg"
  },
  {
    "title": "Кемекс",
    "id": "103467386",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4642627994_kemeks-dlya-kavi.jpg"
  },
  {
    "title": "Джаг",
    "id": "103467440",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4604647165_dzhag-dlya-espreso.jpg"
  },
  {
    "title": "Джиггера",
    "id": "103467441",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4648203209_dzhiger-dzhager-mirnij.jpg"
  },
  {
    "title": "№5 високий",
    "id": "103467420",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4185456659_organajzer-barnij-venge.jpg"
  },
  {
    "title": "Для декальцинації",
    "id": "103467405",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4660271420_zasib-dlya-chischennya.jpg"
  },
  {
    "title": "Інше",
    "id": "103467390",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4428466490_vagi-dlya-kavi.jpg"
  },
  {
    "title": "Набори Баріста",
    "id": "103467452",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3381100387_nabir-barista-basic.jpg"
  },
  {
    "title": "Набори Баріста Мотта",
    "id": "103467453",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4309873839_nabir-barista-max4.jpg"
  },
  {
    "title": "Ринзери",
    "id": "103467454",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4442449172_rinzer-barnij-vdcoffee.jpg"
  },
  {
    "title": "Інші",
    "id": "103467437",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2833649143_filtr-hario-mnogorazovyj.jpg"
  },
  {
    "title": "1Zpresso",
    "id": "103467457",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2849329042_ruchna-kavomolka-1zpresso.jpg"
  },
  {
    "title": "Жорнова",
    "id": "103467458",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4421238073_originalnye-zhernova-nozhi.jpg"
  },
  {
    "title": "Декантери",
    "id": "103467463",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2895408441_dekantergrafin-dlya-kofe_1.jpg"
  },
  {
    "title": "Щітки для стимера",
    "id": "103467430",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2946846416_schitka-dlya-chischennya.jpg"
  },
  {
    "title": "Латте Арт",
    "id": "103467468",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/2973781140_latte-art-kistochka_1.jpg"
  },
  {
    "title": "Behmor та інші",
    "id": "103467413",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3282564187_kavomolka-domashnya-elektrichna.jpg"
  },
  {
    "title": "Мадлери",
    "id": "103467471",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3069346837_madler-dlya-koktejlej.jpg"
  },
  {
    "title": "Темпер класика",
    "id": "103467368",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4676122741_temper-glyantsevij-easy.jpg"
  },
  {
    "title": "Термосклянки",
    "id": "103467472",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4648126738_termokruzhka-hario-heat.jpg"
  },
  {
    "title": "Інші",
    "id": "103467481",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4573052693_filtr-kavovarka-melitta.jpg"
  },
  {
    "title": "Класичні набори для приготування матчу",
    "id": "103467483",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3935293967_nabir-nuova-380.jpg"
  },
  {
    "title": "Котонові заварники",
    "id": "103467486",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4351148315_kotonovyj-zavarnik-hario.jpg"
  },
  {
    "title": "Hario",
    "id": "103467487",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4644868511_vesy-hario-v60.jpg"
  },
  {
    "title": "Термосервери",
    "id": "103467488",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3276357954_termo-grafin-hario-v60_1.jpg"
  },
  {
    "title": "Пільники та Підставки",
    "id": "103467490",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3280719273_spirtovij-palnik-dlya.jpg"
  },
  {
    "title": "Таймері",
    "id": "103467491",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3297396523_tajmer-sekundomir-dlya.jpg"
  },
  {
    "title": "Набори матчу 3 предмети",
    "id": "103467492",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4524088558_nabir-premium2-chornij.jpg"
  },
  {
    "title": "Ємності для зберігання кави",
    "id": "103467494",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3540045953_comandante-clear-glass.jpg"
  },
  {
    "title": "Motta Aurora",
    "id": "103467499",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4354546799_pitcher-molochnik-motta.jpg"
  },
  {
    "title": "Ростери для обсмажування кави",
    "id": "103467500",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3527357762_roster-behmor-coffee.jpg"
  },
  {
    "title": "Килимки",
    "id": "103467357",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3362217387_silikonovyj-kovrik-kot_1.jpg"
  },
  {
    "title": "Barista Space",
    "id": "103467501",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4325821224_pitcher-molochnik-barista.jpg"
  },
  {
    "title": "Комплексні набори",
    "id": "103467508",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4663017111_nabir-dlya-povnoyi.jpg"
  },
  {
    "title": "Пуш Темпер",
    "id": "103467447",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4583094555_push-temper-.jpg"
  },
  {
    "title": "Europa Black brew",
    "id": "103467515",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3948225318_pitcher-molochnik-europa.jpg"
  },
  {
    "title": "Behmor",
    "id": "103467516",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3527303012_filtr-kofemashina-behmor.jpg"
  },
  {
    "title": "Тявани для матчу (Чаван)",
    "id": "103467517",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4154354617_tyavan-500-ml.jpg"
  },
  {
    "title": "Чашки для капінга",
    "id": "103467504",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3551853057_chashka-dlya-kappinga.jpg"
  },
  {
    "title": "L-подібні",
    "id": "103467512",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3835468613_tsinnik-l-podibnij-10h5.jpg"
  },
  {
    "title": "Прямі",
    "id": "103467527",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3835475970_tsinnik-krejdyanij-z.jpg"
  },
  {
    "title": "AeroPress",
    "id": "103467392",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4045894092_filtr-bagatorazovij-dlya.jpg"
  },
  {
    "title": "Станції для темперування",
    "id": "103467540",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3886007557_stantsiya-dlya-tempera.jpg"
  },
  {
    "title": "Воронки для кави",
    "id": "103467539",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4576507822_podvijna-voronka-dlya.jpg"
  },
  {
    "title": "Moccamaster",
    "id": "103467465",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3893890179_krishka-dlya-servera.jpg"
  },
  {
    "title": "Запчастини Hario",
    "id": "103467543",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3912622303_vnutrennie-zhernova-dlya.jpg"
  },
  {
    "title": "Щітки для холодера",
    "id": "103467510",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4491023907_schitka-dlya-chischennya.jpg"
  },
  {
    "title": "Підставки під чашки",
    "id": "103467518",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3932602363_pidstavka-pid-chashku.jpg"
  },
  {
    "title": "Для чаю",
    "id": "103467545",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3936679010_organajzer-dlya-chayu.jpg"
  },
  {
    "title": "Пітчер Kopi Espresso Latte Art",
    "id": "103467548",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3959931214_picher-molochnik-350.jpg"
  },
  {
    "title": "EcoWood",
    "id": "103467549",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4165346088_nok-boks-ecowood-standart.jpg"
  },
  {
    "title": "Вирівнювач",
    "id": "103467403",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4640164887_virivnyuvach-dlya-kavi.jpg"
  },
  {
    "title": "Розподільник для кави в холедер",
    "id": "103467542",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4073026108_pokraschuvach-dlya-kavi.jpg"
  },
  {
    "title": "Кошики",
    "id": "103467528",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4082949287_kiltse-lelit-l58.jpg"
  },
  {
    "title": "Felicita та інші",
    "id": "103467396",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4118853628_elektrichnij-chajnik-kt10.jpg"
  },
  {
    "title": "№14",
    "id": "103467546",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4185577576_organajzer-barnij-premiumplus.jpg"
  },
  {
    "title": "Тара для зерен",
    "id": "103467551",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4190325848_miska-comandante-coffee.jpg"
  },
  {
    "title": "Прикмет український пуровер",
    "id": "103467552",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4235475719_keramichnij-purover-dotik.jpg"
  },
  {
    "title": "Comandante",
    "id": "103467433",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4217590582_povstyanij-chohol-comandante.jpg"
  },
  {
    "title": "E&B LAB",
    "id": "103467553",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4237122229_gejzerna-kavovarka-e-and-b.jpg"
  },
  {
    "title": "SOY",
    "id": "103467554",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4296867256_utsinka-turka-soy.jpg"
  },
  {
    "title": "Професійні кавомолки (Fiorenzato Eureka)",
    "id": "103467555",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4262500339_kofemolka-eureka-helios.jpg"
  },
  {
    "title": "Маркері",
    "id": "103467532",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4290133194_nabir-markeriv-dlya.jpg"
  },
  {
    "title": "Какао Шоколад",
    "id": "103467558",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4431092769_kakao-poroshok-katiola.jpg"
  },
  {
    "title": "Підставка під фільтер",
    "id": "103467559",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4328294651_pidstavka-trimach-dlya.jpg"
  },
  {
    "title": "Керемічний посуд",
    "id": "103467550",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4363009174_chashka-hario-s.jpg"
  },
  {
    "title": "Jug Coffe Maker",
    "id": "103467480",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4575435817_pitcher-molochnik-100.jpg"
  },
  {
    "title": "Вежі Yama",
    "id": "103467534",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4392837127_zavarnik-1000-ml.jpg"
  },
  {
    "title": "Фільтри для Kalita / Origami",
    "id": "103467564",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4645970146_filtri-155-wave.jpg"
  },
  {
    "title": "Cafec",
    "id": "103467569",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4442514460_filtri-paperovi-cafec.jpg"
  },
  {
    "title": "Різне",
    "id": "103467451",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4502593429_nastilnij-trimach-dlya.jpg"
  },
  {
    "title": "Турецькі склянки Армуди",
    "id": "103467530",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4248241876_turetski-sklyanki-armudi.jpg"
  },
  {
    "title": "Набори для матчу Optimal",
    "id": "103467629",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4607357994_nabir-dlya-prigotuvannya.jpg"
  },
  {
    "title": "DF Momo",
    "id": "103467630",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4573371610_elektrichna-kavomolka-df64.jpg"
  },
  {
    "title": "Холдери",
    "id": "103467635",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4596897226_holder-letit-bezdonnij.jpg"
  },
  {
    "title": "Набори для матчу Limited",
    "id": "103467642",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/3616440335_nabir-dlya-prigotuvannya.jpg"
  },
  {
    "title": "Розподільник для кави та покращайзери",
    "id": "103467643",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4601063433_pokraschuvach-dlya-kavi.jpg"
  },
  {
    "title": "Електричні кавомолки портативні",
    "id": "103467644",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4606126856_elektrichna-kavomolka-hb985.jpg"
  },
  {
    "title": "Ходжича Порошок",
    "id": "103467560",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4612910269_poroshok-matcha-latte.jpg"
  },
  {
    "title": "Врізні",
    "id": "103467455",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4612829319_nok-boks-vd-coffee.jpg"
  },
  {
    "title": "Origami",
    "id": "103467645",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4631669346_keramichnij-purover-origami.jpg"
  },
  {
    "title": "Кільця, Вирви, Дозуючі Чаші",
    "id": "103467633",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4639393148_utsinka-dozuvalna-chasha.jpg"
  },
  {
    "title": "Бамбукове ситечко",
    "id": "103467526",
    "imgUrl": "https://electric-gear.com.ua/image/catalog/product/knbk/4685063629_sito-dlya-matcha.jpg"
  }
]

module.exports = CATEGORIES