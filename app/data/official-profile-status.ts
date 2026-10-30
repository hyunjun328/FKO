// UFC 공식 선수 프로필에서 자동 수집한 전적과 신체 정보를 제공한다.
export type OfficialProfileStatus = { record?: string; heightCm?: number; reachCm?: number; division?: string; status?: string; knockoutWins?: number; submissionWins?: number; firstRoundFinishes?: number; checkedAt: string; sourceUrl: string };

export const OFFICIAL_PROFILE_STATUS: Record<string, OfficialProfileStatus> = {
  "Aleksandar Rakić": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "15-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/aleksandar-rakic",
    "status": "Activo"
  },
  "Alex Pereira": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "13-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/alex-pereira",
    "status": "Activo"
  },
  "Alistair Overeem": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "47-19-0",
    "sourceUrl": "https://www.ufc.com/athlete/alistair-overeem",
    "status": "No peleando"
  },
  "Amanda Lemos": {
    "checkedAt": "2026-10-30",
    "division": "Peso de la mujer Division",
    "record": "15-7-1",
    "sourceUrl": "https://www.ufc.com/athlete/amanda-lemos",
    "status": "Activo"
  },
  "Amanda Nunes": {
    "checkedAt": "2026-10-30",
    "division": "Gallo de las mujeres Division",
    "record": "23-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/amanda-nunes",
    "status": "Activo"
  },
  "Anderson Silva": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "34-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/anderson-silva"
  },
  "Anthony Hernandez": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "15-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/anthony-hernandez",
    "status": "Activo"
  },
  "Anthony Pettis": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "24-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/anthony-pettis",
    "status": "No peleando"
  },
  "Ben Henderson": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "23-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/benson-henderson",
    "status": "No peleando"
  },
  "Benson Henderson": {
    "checkedAt": "2026-10-29",
    "division": "Welterweight Division",
    "heightCm": 175,
    "reachCm": 178,
    "record": "23-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/benson-henderson",
    "status": "Not Fighting"
  },
  "Brock Lesnar": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "6-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/brock-lesnar",
    "status": "Retirado"
  },
  "Cain Velasquez": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "14-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/cain-velasquez",
    "status": "Retirado"
  },
  "Carla Esparza": {
    "checkedAt": "2026-10-30",
    "division": "Peso de la mujer Division",
    "record": "20-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/carla-esparza",
    "status": "No peleando"
  },
  "Carlos Condit": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "32-14-0",
    "sourceUrl": "https://www.ufc.com/athlete/carlos-condit",
    "status": "Retirado"
  },
  "Chan Sung Jung": {
    "checkedAt": "2026-10-30",
    "division": "Peso pluma Division",
    "record": "17-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/chan-sung-jung",
    "status": "Activo"
  },
  "ChangHo Lee": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "11-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/chang-ho-lee",
    "status": "Activo"
  },
  "Chris Weidman": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "16-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/chris-weidman",
    "status": "No peleando"
  },
  "Chuck Liddell": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "21-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/chuck-liddell",
    "status": "No peleando"
  },
  "Conor McGregor": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "22-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/conor-mcgregor",
    "status": "Activo"
  },
  "Da Woon Jung": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "15-6-1",
    "sourceUrl": "https://www.ufc.com/athlete/da-woon-jung",
    "status": "No peleando"
  },
  "Dan Henderson": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "32-15-0",
    "sourceUrl": "https://www.ufc.com/athlete/dan-henderson",
    "status": "Retirado"
  },
  "Daniel Cormier": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "22-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/daniel-cormier",
    "status": "Retirado"
  },
  "Daniel Rodriguez": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "20-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/daniel-rodriguez",
    "status": "Activo"
  },
  "Demetrious Johnson": {
    "checkedAt": "2026-10-30",
    "division": "Peso mosca Division",
    "record": "27-3-1",
    "sourceUrl": "https://www.ufc.com/athlete/demetrious-johnson",
    "status": "No peleando"
  },
  "Demian Maia": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "28-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/demian-maia",
    "status": "No peleando"
  },
  "Diego Sanchez": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "32-13-0",
    "sourceUrl": "https://www.ufc.com/athlete/diego-sanchez",
    "status": "No peleando"
  },
  "Dominick Cruz": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "24-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/dominick-cruz",
    "status": "Retirado"
  },
  "Donald Cerrone": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "36-17-0",
    "sourceUrl": "https://www.ufc.com/athlete/donald-cerrone",
    "status": "Retirado"
  },
  "DongHun Choi": {
    "checkedAt": "2026-10-30",
    "division": "Peso mosca Division",
    "record": "3-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/donghun-choi",
    "status": "Activo"
  },
  "Dooho Choi": {
    "checkedAt": "2026-10-30",
    "division": "Peso pluma Division",
    "record": "17-5-1",
    "sourceUrl": "https://www.ufc.com/athlete/dooho-choi",
    "status": "Activo"
  },
  "Dustin Poirier": {
    "checkedAt": "2026-10-30",
    "division": "Ligero Division",
    "record": "30-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/dustin-poirier",
    "status": "Activo"
  },
  "Duško Todorović": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "13-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/dusko-todorovic",
    "status": "Activo"
  },
  "Eddie Alvarez": {
    "checkedAt": "2026-10-30",
    "division": "Ligero Division",
    "record": "29-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/eddie-alvarez",
    "status": "No peleando"
  },
  "Erin Blanchfield": {
    "checkedAt": "2026-10-30",
    "division": "Women's Flyweight Division",
    "record": "14-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/erin-blanchfield",
    "status": "Activo"
  },
  "Fabricio Werdum": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "24-8-1",
    "sourceUrl": "https://www.ufc.com/athlete/fabricio-werdum",
    "status": "No peleando"
  },
  "Francis Ngannou": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "17-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/francis-ngannou",
    "status": "No peleando"
  },
  "Frankie Edgar": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "23-11-1",
    "sourceUrl": "https://www.ufc.com/athlete/frankie-edgar",
    "status": "Retirado"
  },
  "Georges St-Pierre": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "26-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/georges-st-pierre",
    "status": "Retirado"
  },
  "Germaine de Randamie": {
    "checkedAt": "2026-10-30",
    "division": "Gallo de las mujeres Division",
    "record": "10-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/germaine-de-randamie",
    "status": "No peleando"
  },
  "Gilbert Urbina": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "8-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/gilbert-urbina",
    "status": "Activo"
  },
  "Gillian Robertson": {
    "checkedAt": "2026-10-30",
    "division": "Peso de la mujer Division",
    "record": "17-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/gillian-robertson",
    "status": "Activo"
  },
  "Glover Teixeira": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "33-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/glover-teixeira",
    "status": "Retirado"
  },
  "Gray Maynard": {
    "checkedAt": "2026-10-30",
    "division": "Peso pluma Division",
    "record": "14-8-1",
    "sourceUrl": "https://www.ufc.com/athlete/gray-maynard",
    "status": "No peleando"
  },
  "Henry Cejudo": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "16-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/henry-cejudo",
    "status": "No peleando"
  },
  "Holly Holm": {
    "checkedAt": "2026-10-30",
    "division": "Gallo de las mujeres Division",
    "record": "15-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/holly-holm",
    "status": "No peleando"
  },
  "Hyun Gyu Lim": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "13-7-1",
    "sourceUrl": "https://www.ufc.com/athlete/hyun-gyu-lim",
    "status": "No peleando"
  },
  "HyunSung Park": {
    "checkedAt": "2026-10-30",
    "division": "Peso mosca Division",
    "record": "10-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/hyunsung-park",
    "status": "Activo"
  },
  "Ian Machado Garry": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "17-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/ian-machado-garry",
    "status": "Activo"
  },
  "Ilia Topuria": {
    "checkedAt": "2026-10-30",
    "division": "Ligero Division",
    "record": "17-1-0",
    "sourceUrl": "https://www.ufc.com/athlete/ilia-topuria",
    "status": "Activo"
  },
  "Islam Makhachev": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "29-1-0",
    "sourceUrl": "https://www.ufc.com/athlete/islam-makhachev",
    "status": "Activo"
  },
  "Jan Błachowicz": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "29-12-2",
    "sourceUrl": "https://www.ufc.com/athlete/jan-blachowicz",
    "status": "Activo"
  },
  "JeongYeong Lee": {
    "checkedAt": "2026-10-30",
    "division": "Peso pluma Division",
    "record": "11-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/jeongyeong-lee",
    "status": "Activo"
  },
  "Joanna Jędrzejczyk": {
    "checkedAt": "2026-10-30",
    "division": "Peso de la mujer Division",
    "record": "16-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/joanna-jedrzejczyk",
    "status": "Retirado"
  },
  "Jon Jones": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "28-1-0",
    "sourceUrl": "https://www.ufc.com/athlete/jon-jones",
    "status": "Activo"
  },
  "JooSang Yoo": {
    "checkedAt": "2026-10-30",
    "division": "Peso pluma Division",
    "record": "9-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/joo-sang-yoo",
    "status": "Activo"
  },
  "Jose Aldo": {
    "checkedAt": "2026-10-30",
    "division": "Peso pluma Division",
    "record": "32-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/jose-aldo",
    "status": "Retirado"
  },
  "José Aldo": {
    "checkedAt": "2026-10-29",
    "division": "Featherweight Division",
    "firstRoundFinishes": 12,
    "heightCm": 170,
    "knockoutWins": 17,
    "reachCm": 178,
    "record": "32-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/jose-aldo",
    "status": "Retired",
    "submissionWins": 1
  },
  "JunYong Park": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "19-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/jun-yong-park",
    "status": "Activo"
  },
  "Justin Gaethje": {
    "checkedAt": "2026-10-30",
    "division": "Ligero Division",
    "record": "28-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/justin-gaethje",
    "status": "Activo"
  },
  "Khabib Nurmagomedov": {
    "checkedAt": "2026-10-30",
    "division": "Ligero Division",
    "record": "29-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/khabib-nurmagomedov",
    "status": "Retirado"
  },
  "Kyung Ho Kang": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "19-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/kyung-ho-kang",
    "status": "No peleando"
  },
  "Luke Rockhold": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "16-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/luke-rockhold",
    "status": "No peleando"
  },
  "Lyoto Machida": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "24-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/lyoto-machida",
    "status": "No peleando"
  },
  "Mackenzie Dern": {
    "checkedAt": "2026-10-30",
    "division": "Peso de la mujer Division",
    "record": "17-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/mackenzie-dern",
    "status": "Activo"
  },
  "Marcin Tybura": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "27-12-0",
    "sourceUrl": "https://www.ufc.com/athlete/marcin-tybura",
    "status": "Activo"
  },
  "Mark Hunt": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "13-14-1",
    "sourceUrl": "https://www.ufc.com/athlete/mark-hunt",
    "status": "No peleando"
  },
  "Mateusz Gamrot": {
    "checkedAt": "2026-10-30",
    "division": "Ligero Division",
    "record": "26-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/mateusz-gamrot",
    "status": "Activo"
  },
  "Matt Hughes": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "46-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/matt-hughes",
    "status": "Retirado"
  },
  "Matt Serra": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "17-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/matt-serra",
    "status": "Retirado"
  },
  "Mauricio Rua": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "27-14-1",
    "sourceUrl": "https://www.ufc.com/athlete/mauricio-rua",
    "status": "No peleando"
  },
  "Michael Bisping": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "31-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/michael-bisping",
    "status": "Retirado"
  },
  "Mirko Cro Cop": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "31-11-2",
    "sourceUrl": "https://www.ufc.com/athlete/mirko-cro-cop",
    "status": "No peleando"
  },
  "Nate Diaz": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "22-13-0",
    "sourceUrl": "https://www.ufc.com/athlete/nate-diaz",
    "status": "No peleando"
  },
  "Navajo Stirling": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "11-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/navajo-stirling",
    "status": "Activo"
  },
  "Nick Diaz": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "26-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/nick-diaz",
    "status": "Activo"
  },
  "Randy Couture": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "19-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/randy-couture",
    "status": "Retirado"
  },
  "Rashad Evans": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "24-8-1",
    "sourceUrl": "https://www.ufc.com/athlete/rashad-evans",
    "status": "Retirado"
  },
  "Renan Barao": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "36-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/renan-barao",
    "status": "No peleando"
  },
  "Rich Franklin": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "29-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/rich-franklin",
    "status": "Retirado"
  },
  "Robert Valentin": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "13-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/robert-valentin-frey",
    "status": "Activo"
  },
  "Ronda Rousey": {
    "checkedAt": "2026-10-30",
    "division": "Gallo de las mujeres Division",
    "record": "12-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/ronda-rousey",
    "status": "Retirado"
  },
  "Rory MacDonald": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "18-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/rory-macdonald",
    "status": "No peleando"
  },
  "Rose Namajunas": {
    "checkedAt": "2026-10-30",
    "division": "Women's Flyweight Division",
    "record": "15-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/rose-namajunas",
    "status": "Activo"
  },
  "Seokhyeon Ko": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "13-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/seokhyeon-ko",
    "status": "Activo"
  },
  "Song Yadong": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "24-9-1",
    "sourceUrl": "https://www.ufc.com/athlete/song-yadong",
    "status": "Activo"
  },
  "Stipe Miocic": {
    "checkedAt": "2026-10-30",
    "division": "De peso pesado Division",
    "record": "20-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/stipe-miocic",
    "status": "Retirado"
  },
  "SuYoung You": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "17-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/suyoung-yu",
    "status": "Activo"
  },
  "TJ Dillashaw": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "18-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/tj-dillashaw",
    "status": "Retirado"
  },
  "Tito Ortiz": {
    "checkedAt": "2026-10-30",
    "division": "Peso semipesado Division",
    "record": "0-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/tito-ortiz",
    "status": "No peleando"
  },
  "Tony Ferguson": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "26-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/tony-ferguson",
    "status": "No peleando"
  },
  "Umar Nurmagomedov": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "20-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/umar-nurmagomedov",
    "status": "Activo"
  },
  "Urijah Faber": {
    "checkedAt": "2026-10-30",
    "division": "Peso gallo Division",
    "record": "35-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/urijah-faber",
    "status": "No peleando"
  },
  "Uroš Medić": {
    "checkedAt": "2026-10-30",
    "division": "Peso welter Division",
    "record": "14-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/uros-medic",
    "status": "Activo"
  },
  "Yan Xiaonan": {
    "checkedAt": "2026-08-11",
    "division": "Women's Strawweight Division",
    "firstRoundFinishes": 8,
    "heightCm": 165,
    "knockoutWins": 8,
    "reachCm": 160,
    "record": "19-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/xiaonan-yan",
    "status": "Active",
    "submissionWins": 1
  },
  "YiSak Lee": {
    "checkedAt": "2026-10-30",
    "division": "Peso medio Division",
    "record": "8-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/yi-sak-lee",
    "status": "Activo"
  }
};
