export type V3CuratedMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  position?: string;
};

const image = (name: string, alt: string, position?: string): V3CuratedMedia => ({
  type: "image",
  src: `/media/v3/images/${name}.webp`,
  alt,
  position,
});

const video = (name: string, poster: string, alt: string): V3CuratedMedia => ({
  type: "video",
  src: `/media/v3/videos/${name}.mp4`,
  poster: `/media/v3/images/${poster}.webp`,
  alt,
});

const residential = [
  image("residential-budapest-home", "Budapesti családi ház A1 Solar napelemes rendszerrel"),
  image("residential-dunakeszi-roof", "Dunakeszi családi ház napelemes tetőfelülete"),
  image("residential-budapest-huawei-storage", "Huawei inverter és energiatároló egy budapesti A1 Solar projektben"),
  image("residential-piliscsaba-array", "Piliscsabai lakóingatlan rendezett napelemes rendszere"),
  image("residential-budapest-sigenstor-home", "Budapesti családi ház Sigenergy SigenStor rendszerrel"),
];

const commercial = [
  image("commercial-allee-rooftop", "Az Allee Center A1 Solar által megvalósított tetőre szerelt napelemes rendszere"),
  image("commercial-pecel-solar-field", "Nagyméretű ipari tetőn telepített napelemes rendszer Pécelen"),
  image("commercial-allee-city-rooftop", "Városi vállalati napelemes rendszer az Allee Center tetején"),
  image("commercial-pecel-industrial-roof", "A Mektec péceli ipari napelemes projektje"),
];

const industrial = [
  image("bess-foxess-gmax-team", "Az A1 Solar csapata a fertődi FoxESS G-MAX energiatároló rendszer mellett"),
  image("deye-industrial-storage-cabinets", "Ipari energiatároló szekrények gyártói környezetben"),
  image("commercial-pecel-solar-field", "Nagy kiterjedésű ipari napelemes tetőfelület"),
  image("sigenergy-7mwh-project-team", "A magyarországi 7 MWh energiatárolási projekt résztvevői"),
];

const company = [
  image("a1-solar-team", "Az A1 Solar csapata", "center 42%"),
  image("a1-solar-team-vineyard", "Az A1 Solar munkatársai egy közös csapatprogramon"),
  image("a1-solar-tree-planting-action", "Az A1 Solar csapata faültetés közben"),
  image("a1-solar-ultrabalaton-team", "Az A1 Solar Ultrabalaton csapata"),
];

export const heroMediaByPath: Record<string, V3CuratedMedia> = {
  "https://a1solar.hu/": image("residential-budapest-huawei-storage", "Komplett A1 Solar napelemes és energiatároló rendszer"),
  "/rolunk/cegunkrol/": company[0],
  "/rolunk/media/": image("a1-solar-kossuth-radio", "Szényán Endre, az A1 Solar ügyvezetője a Kossuth Rádióban", "center 38%"),
  "/rolunk/szerviz-es-garancia/": image("a1-solar-service-diagnostics", "A1 Solar műszaki diagnosztika és szerviz"),
  "/rolunk/karrier/": company[1],
  "/lakossagi/napelem-energiataroloval/": image("residential-budapest-home", "Budapesti családi ház A1 Solar napelemes rendszerrel", "center calc(50% - 40px)"),
  "/lakossagi/meglevo-napelem-bovitese-energiataroloval/": residential[2],
  "/lakossagi/backup-aramszuneti-megoldasok/": image("backup-harta-deye-system", "Deye backup és energiatároló rendszer Hartán"),
  "/lakossagi/szigetuzemu-napelemes-rendszer/": residential[4],
  "/lakossagi/szerviz-karbantartas/": image("a1-solar-service-diagnostics", "A1 Solar lakossági rendszerdiagnosztika"),
  "/lakossagi/palyazatok-tamogatasok/": residential[3],
  "/vallalati/napelem/": commercial[0],
  "/vallalati/napelem-energiatarolassal/": image("commercial-balatonlelle-sigenergy", "A Garamvári Szőlőbirtok Sigenergy energiatároló rendszere"),
  "/vallalati/meglevo-rendszer-bovitese-energiataroloval/": image("bess-foxess-gmax-team", "Meglévő napelemes rendszerhez illesztett FoxESS G-MAX energiatárolás"),
  "/vallalati/energetikai-optimalizacio-om/": image("a1-solar-service-diagnostics", "A1 Solar vállalati energetikai monitoring és diagnosztika"),
  "/vallalati/ppa-finanszirozott-projektek/": commercial[3],
  "/vallalati/szerviz-tavfelugyelet/": image("a1-solar-service-diagnostics", "A1 Solar vállalati távfelügyelet és műszaki diagnosztika"),
  "/vallalati/palyazatok-tamogatasok/": commercial[2],
  "/ipari/naperomuvek/": commercial[1],
  "/ipari/bess-ipari-energiatarolas/": industrial[0],
  "/ipari/standalone-energiatarolas/": industrial[1],
  "/ipari/pv-storage/": industrial[2],
  "/ipari/aggregacio-flexibilitas/": industrial[3],
  "/referenciak/lakossagi/": residential[3],
  "/referenciak/energiatarolas/": industrial[0],
  "/referenciak/backup/": image("backup-harta-deye-system", "A1 Solar backup referencia Hartán"),
  "/referenciak/vallalati/": commercial[0],
  "/referenciak/bess-ipari/": industrial[0],
  "/referenciak/naperomu/": commercial[1],
  "/technologiak/deye/": image("deye-showroom-team", "Az A1 Solar csapata a Deye ningbói bemutatóközpontjában"),
  "/technologiak/huawei/": image("huawei-summit-a1-team", "Az A1 Solar csapata a Huawei Global Installer Summit rendezvényén"),
  "/technologiak/sigenergy/": image("sigenergy-sigenstor-installation", "Sigenergy SigenStor energiatároló rendszer A1 Solar kivitelezésben"),
  "/technologiak/foxess/": image("foxess-partner-meeting", "A1 Solar szakmai egyeztetés a FoxESS csapatával"),
  "/cikkek/": residential[1],
  "/kapcsolat/": company[1],
};

const sectionMedia: Record<string, V3CuratedMedia[]> = {
  "https://a1solar.hu/#lakossagi-napelem-energiatarolo": [image("home-residential-solar-house", "A1 Solar lakossági napelemes és energiatároló rendszer")],
  "https://a1solar.hu/#meglevo-napelem-bovitese-energiataroloval": [image("home-retrofit-huawei-jaszszentlaszlo", "Huawei inverterrel és energiatárolóval bővített napelemes rendszer Jászszentlászlón")],
  "https://a1solar.hu/#backup-es-energiabiztonsag": [image("home-backup-deye-harta", "A1 Solar Deye backup és energiabiztonsági rendszer Hartán")],
  "https://a1solar.hu/#vallalati-energetikai-megoldasok": [commercial[0]],
  "https://a1solar.hu/#ipari-projektek-es-bess": [industrial[0]],
  "https://a1solar.hu/#nem-egyetlen-termeket-adunk-rendszert-tervezunk": [image("home-complete-energy-system", "Az A1 Solar komplett otthoni energetikai rendszerének felépítése")],
  "https://a1solar.hu/#valodi-tapasztalat-valodi-projektek": [residential[3], image("backup-harta-pharmacy", "Backup rendszer egy hartai gyógyszertárnál"), industrial[0], commercial[1]],
  "https://a1solar.hu/#a-rendszer-atadasa-utan-is-szamithatsz-rank": [image("a1-solar-service-diagnostics", "A1 Solar műszaki diagnosztika")],

  "/rolunk/cegunkrol/#ket-szakmai-terulet-talalkozasabol-szuletett-az-a1-solar": [image("a1-solar-residential-installation", "Az A1 Solar egyik korai lakossági kivitelezése"), image("about-a1-solar-team-building", "Az A1 Solar csapata egy közös csapatépítő programon", "center 48%")],
  "/rolunk/cegunkrol/#kozvetlen-kapcsolat-a-gyartokkal": [image("deye-showroom-team", "A1 Solar a Deye ningbói központjában"), image("foxess-partner-meeting", "A1 Solar és FoxESS szakmai találkozó"), image("sigenergy-factory-visit", "A1 Solar szakmai látogatás a Sigenergy gyárában"), image("huawei-summit-a1-team", "A1 Solar a Huawei Global Installer Summit rendezvényén")],
  "/rolunk/cegunkrol/#nemzetkozi-tapasztalat-stabil-magyar-hatter": [image("about-a1-solar-kenya-solar-park", "Az A1 Solar csapata egy kenyai napelempark építésén", "center 48%"), image("about-a1-solar-zanzibar", "Az A1 Solar csapata Zanzibáron"), image("a1-solar-service-diagnostics", "A1 Solar monitoring és szerviz")],
  "/rolunk/szerviz-es-garancia/#nem-er-veget-a-kapcsolat-a-telepitessel": [image("about-a1-solar-service-technician", "A1 Solar szerviztechnikus műszeres ellenőrzés közben", "center 58%")],
  "/rolunk/szerviz-es-garancia/#igy-tortenik-a-szervizbejelentes": [image("a1-solar-service-diagnostics", "A1 Solar műszaki diagnosztika egy inverteren", "center 52%")],
  "/rolunk/karrier/#milyen-teruleteken-dolgozunk": company,

  "/lakossagi/napelem-energiataroloval/#nem-kulon-napelemet-es-akkumulatort-valasztunk-rendszert-tervezunk": [image("residential-storage-mezotarkany-deye", "Deye napelemes és energiatároló rendszer Mezőtárkányban", "center 50%")],
  "/lakossagi/napelem-energiataroloval/#lakossagi-referenciak-nem-csak-igeretek": residential,
  "/lakossagi/meglevo-napelem-bovitese-energiataroloval/#valodi-bovitesi-referenciak": [residential[2], image("huawei-torokbalint-installation", "Huawei energiatárolós bővítés Törökbálinton")],
  "/lakossagi/backup-aramszuneti-megoldasok/#az-akkumulator-onmagaban-nem-backup": [
    image("backup-system-architecture-infographic", "Egy valódi backup rendszer működését bemutató A1 Solar infografika"),
    image("backup-deye-orange-wall", "Deye inverter, akkumulátor és leválasztás egy A1 Solar backup rendszerben"),
  ],
  "/lakossagi/backup-aramszuneti-megoldasok/#backup-referencia-helyszin": [image("backup-harta-pharmacy", "Backup rendszer egy hartai gyógyszertárban")],
  "/lakossagi/szigetuzemu-napelemes-rendszer/#szigetuzemu-referenciak": [residential[4], image("backup-mosonszolnok-deye", "Deye energiatároló és backup rendszer Mosonszolnokon")],
  "/lakossagi/szerviz-karbantartas/#miben-tudunk-segiteni": [image("a1-solar-service-diagnostics", "A1 Solar műszeres rendszerdiagnosztika")],

  "/vallalati/napelem/#vallalati-referenciak": commercial,
  "/vallalati/napelem-energiatarolassal/#referenciak": [image("commercial-balatonlelle-sigenergy", "Sigenergy vállalati energiatárolás Balatonlellén"), industrial[0]],
  "/vallalati/meglevo-rendszer-bovitese-energiataroloval/#valodi-retrofit-referenciak": [industrial[0], image("commercial-balatonlelle-sigenergy", "Vállalati energiatárolási referencia")],
  "/vallalati/energetikai-optimalizacio-om/#mire-terjedhet-ki-az-o-m": [image("a1-solar-service-diagnostics", "Helyszíni műszaki mérés és diagnosztika")],

  "/ipari/bess-ipari-energiatarolas/#magyarorszag-elso-foxess-g-max-projektje": [industrial[0], video("foxess-gmax-ferod-commissioning", "bess-foxess-gmax-team", "A fertődi FoxESS G-MAX energiatároló rendszer beüzemelése")],
  "/ipari/bess-ipari-energiatarolas/#7-mwh-energiatarolasi-projekt": [industrial[3]],
  "/referenciak/energiatarolas/#magyarorszag-elso-foxess-g-max-energiatarolo-rendszere": [industrial[0]],
  "/referenciak/energiatarolas/#lakossagi-energiatarolo-referencia-helyszin": [residential[2], residential[4]],
  "/referenciak/energiatarolas/#backup-referencia-helyszin": [image("backup-harta-deye-system", "Deye backup rendszer Hartán")],
  "/referenciak/backup/#backup-rendszer-helyszin": [image("backup-harta-deye-system", "Backup rendszer Hartán"), image("backup-harta-pharmacy", "Hartai gyógyszertár backup referenciája")],
  "/referenciak/vallalati/#vallalati-projekt-helyszin": commercial,
  "/referenciak/bess-ipari/#magyarorszag-elso-foxess-g-max-energiatarolo-rendszere": [industrial[0], video("foxess-gmax-ferod-commissioning", "bess-foxess-gmax-team", "FoxESS G-MAX beüzemelés Fertődön")],
  "/referenciak/bess-ipari/#7-mwh-energiatarolasi-projekt": [industrial[3]],
  "/referenciak/naperomu/#naperomu-projekt-helyszin": commercial,

  "/technologiak/deye/#tobbszor-jartunk-a-deye-ningboi-gyaraban": [image("deye-factory-floor", "Deye gyártóüzem Ningbóban"), image("deye-showroom-team", "A1 Solar szakmai egyeztetés a Deye csapatával"), video("deye-frankfurt-products", "deye-industrial-cabinet", "Deye C&I és BESS termékbemutató"), image("deye-frankfurt-exhibition", "Deye szakmai roadshow Frankfurtban"), image("deye-a1-training-team", "Deye telepítői képzés az A1 Solar közreműködésével"), video("deye-training-roadshow", "deye-technical-training", "Deye műszaki oktatás és roadshow")],
  "/technologiak/deye/#kozvetlen-gyartoi-es-disztribucios-hatter": [image("deye-a1-warehouse", "A1 Solar Deye raktárkészlet")],
  "/technologiak/deye/#deye-referencia-helyszin": [image("backup-harta-deye-system", "Deye energiatároló rendszer A1 Solar kivitelezésben")],
  "/technologiak/huawei/#kulonosen-eros-c-i-megoldasok": [image("commercial-allee-solar-array", "Huawei FusionSolar C&I rendszer az Allee Center tetején")],
  "/technologiak/huawei/#a1-solar-a-huawei-global-installer-summiton": [image("huawei-summit-a1-team", "A1 Solar a Huawei Global Installer Summiton"), image("huawei-fusionsolar-showcase", "Huawei FusionSolar technológiai bemutató"), image("huawei-global-installer-summit", "Huawei Global Installer Summit szakmai program")],
  "/technologiak/huawei/#huawei-referencia-helyszin": [image("huawei-budapest-installation", "Huawei inverter és energiatároló Budapesten")],
  "/technologiak/sigenergy/#egyetlen-integralt-energiarendszer": [image("sigenergy-sigenstor-installation", "Sigenergy SigenStor integrált energiarendszer")],
  "/technologiak/sigenergy/#kozvetlen-kapcsolat-a-sigenergy-gyartoval": [image("sigenergy-factory-visit", "A1 Solar a Sigenergy gyárában"), image("sigenergy-production-line", "Sigenergy gyártósor"), image("sigenergy-7mwh-project-team", "A1 Solar és Sigenergy projektcsapat"), image("sigenergy-integrated-showroom", "Sigenergy technológiai bemutató"), video("sigenergy-showroom-presentation", "sigenergy-integrated-showroom", "Sigenergy SigenStor technológiai bemutató")],
  "/technologiak/sigenergy/#elso-kezbol-erkezo-gyartoi-tudas": [image("sigenergy-roadshow", "Sigenergy szakmai roadshow")],
  "/technologiak/sigenergy/#sigenergy-referencia-helyszin": [image("sigenergy-balatonalmadi-installation", "Sigenergy SigenStor telepítés Balatonalmádiban")],
  "/technologiak/foxess/#tobb-szaz-foxess-rendszer-magyarorszagon": [image("residential-piliscsaba-roof", "FoxESS rendszerrel megvalósított lakossági napelemes projekt")],
  "/technologiak/foxess/#kozvetlen-gyartoi-kapcsolat": [image("foxess-partner-meeting", "A1 Solar és FoxESS közvetlen szakmai kapcsolat")],
  "/technologiak/foxess/#gyartoi-c-i-kepzes-hollandiaban": [image("foxess-ci-training", "FoxESS C&I gyártói képzés")],
  "/technologiak/foxess/#magyarorszag-elso-foxess-g-max-telepitese": [industrial[0], video("foxess-gmax-ferod-commissioning", "bess-foxess-gmax-team", "FoxESS G-MAX beüzemelés az A1 Solarral")],
  "/technologiak/foxess/#nemcsak-telepitjuk-oktatjuk-is": [image("foxess-training-demonstration", "FoxESS telepítői oktatás")],
};

const fallbackForPath = (path: string) => {
  if (path.includes("/lakossagi/") || path.includes("/referenciak/lakossagi")) return residential;
  if (path.includes("/vallalati/") || path.includes("/referenciak/vallalati")) return commercial;
  if (path.includes("/ipari/") || path.includes("/referenciak/bess") || path.includes("/referenciak/naperomu")) return industrial;
  if (path.includes("/rolunk/") || path.includes("/kapcsolat/")) return company;
  return [...residential, ...commercial, ...industrial];
};

export const getV3SectionMedia = (path: string, sectionId: string, index = 0): V3CuratedMedia => {
  const exact = sectionMedia[`${path}#${sectionId}`];
  const pool = exact?.length ? exact : fallbackForPath(path);
  return pool[index % pool.length];
};
