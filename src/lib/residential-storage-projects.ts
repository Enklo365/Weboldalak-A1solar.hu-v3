export type ResidentialStorageProject = {
  location: string;
  solar: string;
  inverter: string;
  battery: string;
  backup: "Igen" | "Nem" | "Nincs feltüntetve";
  goal: string;
  images: Array<{ src: string; alt: string; position?: string }>;
};

const media = (name: string) => `/media/v3/images/${name}.webp`;

export const RESIDENTIAL_STORAGE_PROJECTS: ResidentialStorageProject[] = [
  {
    location: "Mezőtárkány",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "Deye · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "A nappali termelés eltárolása és az esti sajátenergia-felhasználás növelése.",
    images: [{ src: media("residential-storage-mezotarkany-deye"), alt: "A1 Solar napelem és energiatároló referencia Mezőtárkányban" }],
  },
  {
    location: "Vadna",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "FoxESS · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "A háztartás saját napelemes energiájának hatékonyabb helyi felhasználása.",
    images: [{ src: media("residential-reference-vadna-foxess"), alt: "A1 Solar FoxESS napelem és energiatároló referencia Vadnán" }],
  },
  {
    location: "Törökbálint",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "Huawei · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "Önfogyasztás-növelés Huawei inverterrel és otthoni energiatárolóval.",
    images: [{ src: media("residential-reference-torokbalint-huawei"), alt: "A1 Solar Huawei napelem és energiatároló referencia Törökbálinton" }],
  },
  {
    location: "Székesfehérvár",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "FoxESS · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "Lakossági termelés és esti energiafelhasználás összehangolása.",
    images: [{ src: media("residential-reference-szekesfehervar-foxess"), alt: "A1 Solar FoxESS napelem és energiatároló referencia Székesfehérváron" }],
  },
  {
    location: "Nagymaros",
    solar: "8,20 kWp · 20 × 410 W",
    inverter: "Sigenergy SigenHybrid · 8 kW",
    battery: "10 kWh",
    backup: "Nem",
    goal: "Nagyobb háztartási termelés és energiatárolás backup funkció nélkül.",
    images: [
      { src: media("residential-reference-nagymaros-sigenergy-roof"), alt: "A1 Solar 8,2 kWp napelemes rendszer Nagymaroson" },
      { src: media("residential-reference-nagymaros-sigenergy-storage"), alt: "Sigenergy inverter és energiatároló az A1 Solar nagymarosi projektjén" },
    ],
  },
  {
    location: "Felsőlajos",
    solar: "Nincs feltüntetve",
    inverter: "Deye · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "A megtermelt napenergia későbbi, háztartáson belüli felhasználása.",
    images: [{ src: media("residential-reference-felsolajos-deye"), alt: "A1 Solar Deye napelem és energiatároló referencia Felsőlajoson", position: "center 38%" }],
  },
  {
    location: "Dunakeszi",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "Deye · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "Lakossági önfogyasztás és esti energiaellátás javítása.",
    images: [{ src: media("residential-reference-dunakeszi-deye"), alt: "A1 Solar Deye napelem és energiatároló referencia Dunakeszin", position: "center 38%" }],
  },
  {
    location: "Budapest · Huawei",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "Huawei · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "Komplett Huawei lakossági napelemes és energiatároló rendszer.",
    images: [
      { src: media("residential-reference-budapest-huawei-roof"), alt: "A1 Solar Huawei napelemes rendszer Budapesten" },
      { src: media("residential-reference-budapest-huawei-equipment"), alt: "Huawei inverter műszaki ellenőrzése az A1 Solar budapesti projektjén" },
    ],
  },
  {
    location: "Budapest · FoxESS",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "FoxESS · 5 kW",
    battery: "10 kWh",
    backup: "Igen",
    goal: "Sajátenergia-felhasználás és áramszüneti backup biztosítása.",
    images: [{ src: media("residential-reference-budapest-foxess-backup"), alt: "A1 Solar FoxESS backupos napelem és energiatároló referencia Budapesten" }],
  },
  {
    location: "Budapest · Sigenergy",
    solar: "3,28 kWp · 8 × 410 W",
    inverter: "Sigenergy · 3 kW",
    battery: "Nincs",
    backup: "Nem",
    goal: "Kompakt lakossági napelemes rendszer későbbi bővíthetőséggel.",
    images: [{ src: media("residential-reference-budapest-sigenergy-solar"), alt: "A1 Solar Sigenergy napelemes referencia Budapesten", position: "center 42%" }],
  },
  {
    location: "Balatonalmádi",
    solar: "4,10 kWp · 10 × 410 W Risen",
    inverter: "Sigenergy SigenStor EC · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "Integrált otthoni energiatermelés és energiatárolás.",
    images: [{ src: media("residential-reference-balatonalmadi-sigenergy"), alt: "A1 Solar Sigenergy SigenStor referencia Balatonalmádiban", position: "center 58%" }],
  },
  {
    location: "Atkár",
    solar: "5,74 kWp · 14 × 410 W Risen",
    inverter: "Deye · 5 kW",
    battery: "10 kWh",
    backup: "Nincs feltüntetve",
    goal: "Napelemes termelés tárolása és a hálózati energiaigény csökkentése.",
    images: [{ src: media("residential-reference-atkar-deye"), alt: "A1 Solar Deye napelem és energiatároló referencia Atkáron", position: "center 60%" }],
  },
];
