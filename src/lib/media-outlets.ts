export type MediaArticle = {
  date: string;
  title: string;
  href: string;
};

export type MediaOutlet = {
  name: string;
  logo: string;
  articles: MediaArticle[];
};

const article = (date: string, title: string, href: string): MediaArticle => ({ date, title, href });

export const MEDIA_OUTLETS: MediaOutlet[] = [
  {
    name: "YouTube / Magyarósi Csaba",
    logo: "/media/outlets/youtube.png",
    articles: [article("2022.09.14.", "NAPELEM: így hozd ki belőle a MAXIMUMOT", "https://www.youtube.com/watch?v=lmBzSIAKUjE")],
  },
  {
    name: "RTL Reggeli",
    logo: "/media/outlets/rtl.png",
    articles: [
      article("2026.01.20.", "Napelemek és pályázatok: így csökkenthetjük a villanyszámlát", "https://rtl.hu/reggeli/2026/01/20/megujulo-energia-napelemek-x"),
      article("2022.11.22.", "Kinek éri most meg a napelemes beruházás?", "https://rtl.hu/reggeli/2022/11/22/napelemes-x"),
    ],
  },
  {
    name: "Index",
    logo: "/media/outlets/index.png",
    articles: [
      article("2026.08.08.", "Tévhitben élhet csaknem 350 ezer család, azt hiszik, megúszhatnak egy áramszünetet", "https://index.hu/gazdasag/2026/08/08/energiavalsag-napelem-napenergia-naperomu-energiaellatas/"),
      article("2026.03.03.", "Magyar cégek robbantottak Európában: 8-an is rajta vannak az 1000-es elit listán", "https://index.hu/gazdasag/2026/03/03/ceg-vallalat-novekedes-arbevetel-foglalkoztatas-europa-financial-times-ft1000-kkv/"),
      article("2026.01.20.", "Önti a pénzt a kormány az emberekre, és itt most mindenki nagyot kaszálhat", "https://index.hu/gazdasag/2026/01/20/napelem-napenergia-napelemek-kormany-megujulo-energia/"),
      article("2025.03.04.", "Tarolt egy napelemes cég, összesen hét magyar vállalat hódítja meg Európát", "https://index.hu/gazdasag/2025/03/04/financial-times-toplista-legjobb-europa-napelem/"),
      article("2024.01.22.", "A kormány százezrek életéről döntött, és már túl is lehet a nehezén", "https://index.hu/gazdasag/2024/01/22/napelem-napelemek-zold-index-kormany-napenergia-lantos-csaba-aram-aramar-akkumulator/"),
      article("2023.09.14.", "Orbán Viktor egy éjszaka alatt pontot tett a napelemes kérdés végére", "https://index.hu/gazdasag/2023/09/14/napelem-napelemek-napenergia-kormany-dontes-gulyas-gergely-orban-viktor-rezsicsokkentes/"),
      article("2023.09.04.", "A kormány döntött, és már meg is lehet a győztes a napelemharcban", "https://index.hu/gazdasag/2023/09/04/napenergia-energiavalsag-napelem-napelemek-napelemes-rezsikoltseg-rezsicsokkentes-rezsiharc-kormany/"),
      article("2023.07.12.", "Drámai helyzet alakul a napelemes piacon, köddé válnak a beruházók", "https://index.hu/gazdasag/2023/07/12/napelem-energetika-rezsicsokkentes-napelemes-rezsi-rezsikoltseg-rezsivalsag/"),
      article("2023.01.31.", "Újra belobbant a napelempiac, a pénztárcánk a tét", "https://index.hu/gazdasag/2023/01/31/napelem-energia-veszelyhelyzet-energiavalsag-szaldoelszamolas/"),
      article("2022.12.05.", "Egy túlhevült üst lett a napelempiac, ami mindenkit megégethet", "https://index.hu/gazdasag/2022/12/05/napelem-energia-veszelyhelyzet-energiavalsag-aram-napelemek-megujulo-energia-napenergia/"),
    ],
  },
  {
    name: "Origo",
    logo: "/media/outlets/origo.png",
    articles: [article("2023.03.", "Hogyan döntsük el, hogy mekkora rendszerre van szükségünk?", "https://www.origo.hu/gazdasag/2023/03/hogyan-dontsuk-el-hogy-mekkora-rendszerre-van-szuksegunk-a-napelemes-rendszerek-meretezese")],
  },
  {
    name: "HVG / HVG360",
    logo: "/media/outlets/hvg.png",
    articles: [
      article("2026.01.16.", "Mire lehet elég a napelemeseknek dobott energiatárolós mentőöv?", "https://hvg.hu/360/20260116_otthoni-energiatarolo-program-lakossagi-akkupalyazat-allami-tamogatas-napelemes-rendszerek-szaldo-brutto-megterules"),
      article("2025.03.04.", "Egy budafoki napelemcég lett Magyarország leggyorsabban növekvő vállalata", "https://hvg.hu/kkv/20250304_ft-1000-startup-novekedes-napelem-a1"),
      article("2025.01.25.", "Kifutott az utolsó pályázat, de még marad lehetőség lakossági napelemek támogatására", "https://hvg.hu/gazdasag/20250125_napelemes-palyazat-napenergia-plusz-program-falusi-videki-otthonfelujitasi-tamogatas-ingatlan-felujitas-ebx"),
      article("2024.06.05.", "Már eldőltek az első dominók: választás utáni összeomlástól fél a napelemes szakma", "https://hvg.hu/kkv/20240605_lakossagi-napelemes-palyazat-napenergia-plusz-program-napelemes-cegek-kkv-k-a1-solar"),
      article("2023.06.28.", "Tizedére eshetett vissza a hazai napelemes piac", "https://hvg.hu/kkv/20230628_napelem_napelemes_palyazat_napelemes_rendszerek_szabalyozas_bizonytalansag"),
    ],
  },
  {
    name: "24.hu",
    logo: "/media/outlets/24hu.png",
    articles: [
      article("2026.01.26.", "Energiatárolós pályázat: villámgyorsan elfogyhat a keret", "https://24.hu/fn/gazdasag/2026/01/26/energiatarolo-napelem-palyazat-25-millio-forint-gyorsan-elfogyhat/"),
      article("2023.07.12.", "Fontos változás jön a napelemes pályázatoknál júliustól", "https://24.hu/fn/gazdasag/2023/07/12/napelem-napkollektor-napenergia-megujulo-energia-szolar-hoszivattyu-napelemes-palyazat-inverter-e-on-energetika-aram-elektromos-energia/"),
    ],
  },
  {
    name: "ZIP Magazin",
    logo: "/media/outlets/zip-magazin.png",
    articles: [article("2023.07–08.", "A napelemes pályázati helyzetről – A1 Solar kerekasztal-beszélgetés", "https://epa.oszk.hu/05600/05612/00016/pdf/EPA05612_zold_ipar_magazin_2023_4.pdf")],
  },
  {
    name: "Pénzcentrum",
    logo: "/media/outlets/penzcentrum.png",
    articles: [article("2023.08.15.", "Több tízezer magyar család került óriási bajba: versenyt futnak az idővel, rengeteget bukhatnak", "https://www.penzcentrum.hu/otthon/20230815/tobb-tizezer-magyar-csalad-kerult-oriasi-bajba-versenyt-futnak-az-idovel-rengeteget-bukhatnak-1140145")],
  },
  {
    name: "Világgazdaság",
    logo: "/media/outlets/vilaggazdasag.png",
    articles: [
      article("2026.08.11.", "Napelem áramszünet alatt? Így alakíthatja át bombabiztosra otthonát", "https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2026/08/backup-a1-solar-szenyan-tartalekuzem-aramszunet"),
      article("2025.03.04.", "FT1000: hét magyar vállalat, amelytől tanulhat a többi", "https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2025/03/ft1000-het-magyar"),
      article("2024.06.09.", "Napelempiac: túl későn gyorsultak fel a kifizetések", "https://www.vg.hu/energia-vgplus/2024/06/napelem-piac-tul-keson-gyorsultak-fel-a-kifizetesek"),
      article("2023.09.27.", "Bruttó elszámolás mellett is megéri belevágni a napelem-telepítésbe", "https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2023/09/brutto-elszamolas-mellett-is-megeri-belevagni-a-napelem-telepitesbe"),
    ],
  },
  {
    name: "Blikk",
    logo: "/media/outlets/blikk.png",
    articles: [article("2023.09.27.", "Hogyan éri meg a legjobban napelemrendszert telepíteni? A szakértő elárulja", "https://www.blikk.hu/gazdasag/penz/napelem-rendszer-felepitese-szakerto/l814vp8")],
  },
  {
    name: "Economx",
    logo: "/media/outlets/economx.png",
    articles: [
      article("2025.03.04.", "Hét magyar cég is felbukkan a Financial Times listáján", "https://www.economx.hu/belfold/2025/03/04/financial-times-rangsor-magyar-vallalatok-805325/"),
      article("2023.09.27.", "Így éri meg továbbra is napelemes rendszert létesíteni", "https://www.economx.hu/belfold/napelem-brutto-elszamolas-megeri-energia.777996.html"),
    ],
  },
  {
    name: "Portfolio",
    logo: "/media/outlets/portfolio.png",
    articles: [
      article("2025.03.16.", "Pár év alatt nemzetközi sikertörténetet írt egy magyar napelemes cég", "https://www.portfolio.hu/uzlet/20250316/par-ev-alatt-nemzetkozi-sikertortenetet-irt-egy-magyar-napelemes-ceg-747415"),
      article("2024.06.05.", "Szabadesésben a hazai lakossági és céges napelemes piac", "https://www.portfolio.hu/gazdasag/20240605/szabadesesben-a-hazai-lakossagi-es-ceges-napelemes-piac-690475"),
      article("2023.09.29.", "Bajba kerülnek a 100%-os napelemes pályázat nyertesei?", "https://www.portfolio.hu/gazdasag/20230929/bajba-kerulnek-a-100-os-napelemes-palyazat-nyertesei-642519"),
    ],
  },
  {
    name: "Mfor",
    logo: "/media/outlets/mfor.png",
    articles: [article("2023.12.10.", "Árháború dúl a napelemgyártás piacán", "https://mfor.hu/cikkek/kozerdeku/arhaboru-dul-a-napelemgyartas-piacan.html")],
  },
  {
    name: "Klubrádió",
    logo: "/media/outlets/klubradio.png",
    articles: [article("2023.12.21.", "Napelem kontra földgáz – vendég: Kovács István, A1 Solar", "https://www.klubradio.hu/archivum?musor_id=143&page=4")],
  },
  {
    name: "Telex / G7",
    logo: "/media/outlets/telex.png",
    articles: [
      article("2026.08.28.", "Befagyott a napelemes-akkus program, pedig egy újabb paksi válság ellen is jól jöhetne", "https://telex.hu/g7/kozelet/2026/08/28/otthon-energiatarolas-tamogatas-oetp-program-leallas-napelem-akkumulator"),
      article("2026.08.06.", "Kinek jó és miért fontos az okosmérő, amit ingyen lehet majd igényelni?", "https://telex.hu/g7/kozelet/2026/08/06/ingyen-okosmero-igenyles-felhasznalas-okos-otthon-mavir"),
      article("2025.10.08.", "Végre a társasházakra is megérheti napelemeket telepíteni", "https://telex.hu/g7/kozelet/2025/10/08/tarsashaz-napelem-telepites-energiakozosseg-rezsi-felujitas"),
      article("2025.05.03.", "Menny és pokol öt év alatt, így építették fel a négymilliárdos napelemes céget", "https://telex.hu/g7/kozelet/2025/05/03/menny-es-pokol-ot-ev-alatt-igy-epitettek-fel-a-negymilliardos-napelemes-ceget"),
      article("2024.05.30.", "Elkezdték csorgatni a csőd szélén álló napelemes cégeknek a régóta nekik járó állami pénzeket", "https://telex.hu/g7/kozelet/2024/05/30/elkezdtek-csorgatni-a-csod-szelen-allo-napelemes-cegeknek-a-regota-nekik-jaro-allami-penzeket"),
    ],
  },
  {
    name: "Magyar Építéstechnika",
    logo: "/media/outlets/maep.png",
    articles: [article("2024/2025", "Külföldön terjeszkedik a magyar tulajdonú A1 Solar", "https://www.maeponline.hu/files/9/maep-97-web-2.pdf")],
  },
  {
    name: "Forbes.hu",
    logo: "/media/outlets/forbes.png",
    articles: [article("2025.03.04.", "Hét magyar cég, köztük egy Forbes 30/30-as is felkerült a Financial Times toplistájára", "https://forbes.hu/uzlet/het-magyar-ceg-koztuk-egy-forbes-30-30-as-is-felkerult-a-financial-times-toplistajara/")],
  },
  {
    name: "PP Konferencia",
    logo: "/media/outlets/ppkonferencia.png",
    articles: [article("2025.11.28.", "Üzleti Etikai Díjátadó – 2025 – A1 Solar középvállalati díjazott", "https://ppkonferencia.hu/2025/11/28/uzleti-etikai-dijatado-2025/")],
  },
  {
    name: "Technokrata",
    logo: "/media/outlets/technokrata.png",
    articles: [article("2026.08.12.", "A napelem és az akkumulátor sem jelent automatikusan áramszüneti védelmet", "https://www.technokrata.hu/egazdasag/2026/08/12/napelem-es-az-akkumulator-sem-jelent-automatikusan-aramszuneti-vedelmet/")],
  },
];
