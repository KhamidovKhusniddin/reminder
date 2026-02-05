const ALL_UNITS = [
  {
    "id": "I",
    "name": "Unit I: Maktab, Tashqi ko'rinish va Kiyimlar",
    "words": [
      {
        "word": "Beard",
        "trans": "soqol",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Black",
        "trans": "qora",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Board games",
        "trans": "stol o'yinlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Bowling",
        "trans": "bouling",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Brown",
        "trans": "jigarrang",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Canteen",
        "trans": "oshxona (maktab/korxona)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Chemistry",
        "trans": "kimyo",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Chess",
        "trans": "shaxmat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Classroom",
        "trans": "sinfxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Coat",
        "trans": "palto / kurtka",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Corridor",
        "trans": "koridor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Curly",
        "trans": "jingalak",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Dance",
        "trans": "raqs",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Dark",
        "trans": "qora / to'q rangli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Desk",
        "trans": "parta / yozuv stoli",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Drama",
        "trans": "drama / teatr san'ati",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Drawing",
        "trans": "rasm chizish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Fair",
        "trans": "ochiq rangli (soch/teri)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Geography",
        "trans": "geografiya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Gym",
        "trans": "sport zal",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hair",
        "trans": "soch",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hall",
        "trans": "zal / dahliz",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hat",
        "trans": "shlyapa / qalpoq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Homework",
        "trans": "uy vazifasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Ice skating",
        "trans": "konkida uchish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Interactive whiteboard",
        "trans": "interaktiv doska",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "IT [Information Technology]",
        "trans": "informatika / axborot texnologiyalari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Jacket",
        "trans": "kurtka / pidjak",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Jumper",
        "trans": "jemper / sviter",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Laptop",
        "trans": "noutbuk",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Leggings",
        "trans": "leggings / tor shim",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Long",
        "trans": "uzun",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Moustache",
        "trans": "mo'ylov",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Music",
        "trans": "musiqa",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Noticeboard",
        "trans": "e'lonlar doskasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "PE [Physical Education]",
        "trans": "jismoniy tarbiya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Picnic",
        "trans": "piknik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Playing field",
        "trans": "o'yingoh / sport maydoni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Reception",
        "trans": "qabulxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Red",
        "trans": "qizil",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Shirt",
        "trans": "ko'ylak (erkaklar)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Short",
        "trans": "kalta / past bo'yli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Skateboarding",
        "trans": "skeytbord uchish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Staff room",
        "trans": "o'qituvchilar xonasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Straight",
        "trans": "tekis / silliq (soch)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Sweatshirt",
        "trans": "svitshot",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Textbook",
        "trans": "darslik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Tie",
        "trans": "galstuk",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Trousers",
        "trans": "shim",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Video games",
        "trans": "video o'yinlar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Walk",
        "trans": "sayr / yurish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Wavy",
        "trans": "to'lqinsimon (soch)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Whiteboard",
        "trans": "oq doska",
        "type": "n",
        "def": "Part of speech: n"
      }
    ]
  },
  {
    "id": "1",
    "name": "Unit 1: Tuyg'ular va Jarohatlar",
    "words": [
      {
        "word": "A bit",
        "trans": "bir oz",
        "type": "adv",
        "def": "Part of speech: adv"
      },
      {
        "word": "A little bit",
        "trans": "ozgina",
        "type": "adv",
        "def": "Part of speech: adv"
      },
      {
        "word": "Annoyed",
        "trans": "asabiylashgan / g'azablangan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Annoying",
        "trans": "asabga tegadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Anxious",
        "trans": "xavotirlangan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Ashamed",
        "trans": "uyalgan (aybi uchun)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Ask for",
        "trans": "so'ramoq / so'rab olmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Bleed",
        "trans": "qonamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Blood",
        "trans": "qon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Bored",
        "trans": "zerikkan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Boring",
        "trans": "zerikarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Break",
        "trans": "(qo'lni) sindirib olmoq",
        "type": "your arm) (v",
        "def": "Part of speech: your arm) (v"
      },
      {
        "word": "Broken",
        "trans": "singan (qo'l)",
        "type": "arm) (adj",
        "def": "Part of speech: arm) (adj"
      },
      {
        "word": "Bruise",
        "trans": "ko'karish / gumburg'a; ko'kartirmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Burn",
        "trans": "kuydirmoq / yonmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Confused",
        "trans": "hayron / adashgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Confusing",
        "trans": "tushunarsiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cross",
        "trans": "jahli chiqqan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cut",
        "trans": "kesik; kesmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Delighted",
        "trans": "juda xursand / mamnun",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Disappointed",
        "trans": "umidi uzilgan / xafa",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Disgusted",
        "trans": "nafratlangan / jirkanayotgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Disgusting",
        "trans": "jirkanch",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Embarrassed",
        "trans": "uyalgan / xijolat bo'lgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Embarrassing",
        "trans": "uyatli / noqulay (vaziyat)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Envious",
        "trans": "hasadgo'y",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Excited",
        "trans": "hayajonlangan (xursandlikdan)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Exhausted",
        "trans": "juda charchagan / darmoni qurigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Exhausting",
        "trans": "juda charchatadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Extremely",
        "trans": "haddan tashqari / o'ta darajada",
        "type": "adv",
        "def": "Part of speech: adv"
      },
      {
        "word": "Fall",
        "trans": "yiqilib tushmoq",
        "type": "over) (v",
        "def": "Part of speech: over) (v"
      },
      {
        "word": "Find out",
        "trans": "aniqlamoq / bilib olmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Frightened",
        "trans": "qo'rqqan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Frightening",
        "trans": "qo'rqinchli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Get over",
        "trans": "tuzalmoq / (qiyinchilikni) yengib o'tmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Hurt",
        "trans": "og'rimoq / shikast yetkazmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Injure",
        "trans": "jarohat olmoq",
        "type": "yourself) (v",
        "def": "Part of speech: yourself) (v"
      },
      {
        "word": "Injury",
        "trans": "jarohat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Interested",
        "trans": "qiziqqan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Interesting",
        "trans": "qiziqarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Look at",
        "trans": "qaramoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Own up",
        "trans": "aybini bo'yniga olmoq / tan olmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Pain",
        "trans": "og'riq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Proud",
        "trans": "mag'rur / faxrlanadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Put back",
        "trans": "joyiga qaytarib qo'ymoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Rather",
        "trans": "anchagina / bir oz",
        "type": "adv",
        "def": "Part of speech: adv"
      },
      {
        "word": "Relieved",
        "trans": "yengil tortgan (tashvishdan qutulgan)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Satisfied",
        "trans": "qoniqqan / mamnun",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Satisfying",
        "trans": "qoniqtirarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Shocked",
        "trans": "hayratda / shok holatida",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Shocking",
        "trans": "daxshatli / hayratlanarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Slip",
        "trans": "sirpanib ketmoq",
        "type": "over) (v",
        "def": "Part of speech: over) (v"
      },
      {
        "word": "Sprain",
        "trans": "(pay) cho'zilishi; cho'zib olmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Surprised",
        "trans": "hayron qolgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Surprising",
        "trans": "hayratlanarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Suspicious",
        "trans": "shubhali / shubhalanadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Talk about",
        "trans": "haqida gapirmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Tired",
        "trans": "charchagan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Tiring",
        "trans": "charchatadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Trip",
        "trans": "qoqilib ketmoq",
        "type": "over) (v",
        "def": "Part of speech: over) (v"
      },
      {
        "word": "Upset",
        "trans": "xafa / dili og'rigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Very",
        "trans": "juda",
        "type": "adv",
        "def": "Part of speech: adv"
      },
      {
        "word": "Worried",
        "trans": "xavotirlangan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Worrying",
        "trans": "tashvishli",
        "type": "adj",
        "def": "Part of speech: adj"
      }
    ]
  },
  {
    "id": "2",
    "name": "Unit 2: Sarguzasht, Tabiat va Yutuqlar",
    "words": [
      {
        "word": "Accomplish",
        "trans": "bajarmoq / muvaffaqiyatli yakunlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Accomplishment",
        "trans": "muvaffaqiyat / yutuq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Achieve",
        "trans": "erishmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Achievement",
        "trans": "yutuq / natija",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Across",
        "trans": "orqali / kesib o'tib",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Along",
        "trans": "bo'ylab",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Astonishing",
        "trans": "hayratlanarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Athletic",
        "trans": "sportga moyil / baquvvat",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Attempt",
        "trans": "urinish; urinib ko'rmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Awful",
        "trans": "juda yomon / daxshatli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Behind",
        "trans": "orqasida",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Beside",
        "trans": "yonida",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Boots",
        "trans": "botinka / etik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Brave",
        "trans": "jasur",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Brilliant",
        "trans": "juda aqlli / ajoyib",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cave",
        "trans": "g'or",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cliff",
        "trans": "qoya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Complete",
        "trans": "tugatmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Completion",
        "trans": "tugatish / yakunlash",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Dark",
        "trans": "qorong'u",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Deep",
        "trans": "chuqur",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Delicious",
        "trans": "mazali",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Desert",
        "trans": "cho'l",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Develop",
        "trans": "rivojlantirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Development",
        "trans": "rivojlanish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Dinghy",
        "trans": "rezina qayiq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Down",
        "trans": "pastga",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Dream",
        "trans": "tush / orzu; orzu qilmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Employ",
        "trans": "ishga olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Employment",
        "trans": "bandlik / ish bilan ta'minlash",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Entertain",
        "trans": "ko'ngil ochmoq / xursand qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Entertainment",
        "trans": "ko'ngilochar mashg'ulot",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Erupt",
        "trans": "otilmoq (vulqon)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Eruption",
        "trans": "vulqon otilishi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Examination",
        "trans": "imtihon / tekshiruv",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Examine",
        "trans": "ko'zdan kechirmoq / tekshirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Experience",
        "trans": "tajriba; boshdan kechirmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Exploration",
        "trans": "tadqiqot / kashf etish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Explore",
        "trans": "tadqiq qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Fantastic",
        "trans": "ajoyib / fantastik",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Filthy",
        "trans": "juda iflos / kir",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Forest",
        "trans": "o'rmon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Helmet",
        "trans": "kaska / dubulg'a",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hill",
        "trans": "tepalik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Huge",
        "trans": "juda ulkan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Icy",
        "trans": "muzli / muzlagan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Imagination",
        "trans": "tasavvur",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Imagine",
        "trans": "tasavvur qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Impressive",
        "trans": "hayratlanarli / taassurot qoldiradigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Inside",
        "trans": "ichida",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Lake",
        "trans": "ko'l",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Life jacket",
        "trans": "qutqaruv nimchasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Low",
        "trans": "past",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Motivate",
        "trans": "ruhlantirmoq / undamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Motivation",
        "trans": "motivatsiya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Mountain",
        "trans": "tog'",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Narrow",
        "trans": "tor",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Near",
        "trans": "yaqin",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Need",
        "trans": "ehtiyoj; muhtoj bo'lmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Ocean",
        "trans": "okean",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Paddles",
        "trans": "eshkaklar (qayiq uchun)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Poles",
        "trans": "tayoqlar (chang'i/yurish uchun)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Preparation",
        "trans": "tayyorgarlik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Prepare",
        "trans": "tayyorlanmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Relax",
        "trans": "dam olmoq / bo'shashmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Relaxation",
        "trans": "dam olish / hordiq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Remote",
        "trans": "olis / chekka (hudud)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Rescue",
        "trans": "qutqaruv; qutqarmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Risk",
        "trans": "xavf; tavakkal qilmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Risky",
        "trans": "xavfli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "River",
        "trans": "daryo",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rocks",
        "trans": "toshlar / qoyalar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rocky",
        "trans": "toshloq",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Rope",
        "trans": "arqon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rucksack",
        "trans": "ryukzak",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Safety harness",
        "trans": "xavfsizlik kamari (bog'ichlari)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Shallow",
        "trans": "sayoz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Shore",
        "trans": "qirg'oq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Spectacular",
        "trans": "ajoyib (manzara)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Starving",
        "trans": "juda och qolgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Steep",
        "trans": "tik (qoya)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Stream",
        "trans": "soy / kichik daryo",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Strong",
        "trans": "kuchli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Stunning",
        "trans": "hayratlanarli go'zal",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Swimming trunks",
        "trans": "suzish shimi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Tall",
        "trans": "baland (bo'y)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Terrifying",
        "trans": "daxshatli / juda qo'rqinchli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Thrilling",
        "trans": "hayajonli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Through",
        "trans": "orqali / ichidan o'tib",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Tiny",
        "trans": "juda kichik",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Tragic",
        "trans": "fojiali",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Under",
        "trans": "tagida",
        "type": "prep",
        "def": "Part of speech: prep"
      },
      {
        "word": "Valley",
        "trans": "vodiy",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Volcano",
        "trans": "vulqon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Waterfall",
        "trans": "sharshara",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Wide",
        "trans": "keng",
        "type": "adj",
        "def": "Part of speech: adj"
      }
    ]
  },
  {
    "id": "3",
    "name": "Unit 3: Kino, Teledasturlar va Sifatlar",
    "words": [
      {
        "word": "Acceptable",
        "trans": "qabul qilsa bo'ladigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Acting",
        "trans": "aktyorlik o'yini",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Action film",
        "trans": "jangovar film",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Animation",
        "trans": "animatsiya / multfilm",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Appropriate",
        "trans": "munosib / mos",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Assume",
        "trans": "taxmin qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Certain",
        "trans": "aniq / ishonchi komil",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Characters",
        "trans": "qahramonlar (asar/kinoda)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Chat show",
        "trans": "tok-shou",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Comedy",
        "trans": "komediya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Convincing",
        "trans": "ishontirarli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Co-operate",
        "trans": "hamkorlik qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Deny",
        "trans": "inkor etmoq / rad etmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Dependent",
        "trans": "qaram / bog'liq",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Dishonest",
        "trans": "vijdonsiz / naxshir",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Documentary",
        "trans": "hujjatli film",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Emphasise",
        "trans": "urg'u bermoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Ending",
        "trans": "yakun / tugallanish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Fair",
        "trans": "adolatli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Fantasy film",
        "trans": "fantastik film",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Funny",
        "trans": "kulgili",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Game show",
        "trans": "o'yin shousi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Go for sth",
        "trans": "tanlamoq / urinib ko'rmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Gripping",
        "trans": "hayajonli / o'ziga tortadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Honest",
        "trans": "vijdonli / rostgo'y",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Horror film",
        "trans": "daxshatli film",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Illegal",
        "trans": "qonunsiz / noqonuniy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Imaginative",
        "trans": "xayolga boy / ijodkor",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Impatient",
        "trans": "sabrsiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Improve",
        "trans": "yaxshilamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Inappropriate",
        "trans": "nomunosib",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Increase",
        "trans": "ko'paymoq / orttirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Independent",
        "trans": "mustaqil",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Invisible",
        "trans": "ko'rinmas",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Irresponsible",
        "trans": "mas'uliyatsiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Keen on something",
        "trans": "biror narsaga qiziqmoq",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Lead",
        "trans": "yetaklamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Legal",
        "trans": "qonuniy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Likely",
        "trans": "ehtimoli bor",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Moving",
        "trans": "ta'sirli (hissiy)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Musical",
        "trans": "myuzikl",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "News bulletin",
        "trans": "yangiliklar dasturi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Participate",
        "trans": "qatnashmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Patient",
        "trans": "sabrli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Period drama",
        "trans": "tarixiy drama",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Plot",
        "trans": "sujet / voqealar rivoji",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Prevent",
        "trans": "oldini olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Provide",
        "trans": "ta'minlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Reality show",
        "trans": "realiti-shou",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Responsible",
        "trans": "mas'uliyatli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Reveal",
        "trans": "ochib bermoq / fosh qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Romantic comedy",
        "trans": "romantik komediya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Scary",
        "trans": "qo'rqinchli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Scenes",
        "trans": "sahnalar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Science fiction film",
        "trans": "ilmiy-fantastik film",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Script",
        "trans": "ssenariy",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Sitcom",
        "trans": "vaziyatli komediya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Soap",
        "trans": "\"milo\" (serial)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Soundtrack",
        "trans": "saundtrek (musiqa)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Special effects",
        "trans": "maxsus effektlar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Talent show",
        "trans": "iste'dodlar shousi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Thriller",
        "trans": "triller",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Unacceptable",
        "trans": "qabul qilib bo'lmaydigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Uncertain",
        "trans": "noaniq",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Unfair",
        "trans": "nohaq / adolatsiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Unlikely",
        "trans": "dargumon / ehtimoli kam",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Unrealistic",
        "trans": "haqiqatga to'g'ri kelmaydigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Unsurprising",
        "trans": "hayratlanarli emas",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Violent",
        "trans": "zo'ravonlikka boy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Visible",
        "trans": "ko'rinadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "War film",
        "trans": "urush haqidagi film",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Weather forecast",
        "trans": "ob-havo ma'lumoti",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Western",
        "trans": "vestern (kovboylar haqida)",
        "type": "n",
        "def": "Part of speech: n"
      }
    ]
  },
  {
    "id": "4",
    "name": "Unit 4: Ob-havo, Ekologiya va Shahar",
    "words": [
      {
        "word": "Approach",
        "trans": "yaqinlashmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Avalanche",
        "trans": "qor ko'chkisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Billboard",
        "trans": "reklama taxtasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Blow",
        "trans": "esmoq (shamol)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Bus stop",
        "trans": "avtobus bekati",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Climate change",
        "trans": "iqlim o'zgarishi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Close down",
        "trans": "yopilmoq (butunlay)",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Clouds",
        "trans": "bulutlar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cloudy",
        "trans": "bulutli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Come up with",
        "trans": "o'ylab topmoq (fikr/reja)",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Cut down",
        "trans": "kesmoq (daraxtlarni)",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Die out",
        "trans": "qirilib ketmoq / yo'q bo'lmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Drought",
        "trans": "qurg'oqchilik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Earthquake",
        "trans": "zilzila",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Epidemic",
        "trans": "epidemiya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Famine",
        "trans": "ocharchilik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Fire hydrant",
        "trans": "o't o'chirish gidranti",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Flood",
        "trans": "suv toshqini",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Foggy",
        "trans": "tumanli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Forest fire",
        "trans": "o'rmon yong'ini",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Fossil fuels",
        "trans": "qazilma yoqilg'ilar (ko'mir/neft)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Frost",
        "trans": "qirov / ayoz",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Frostbite",
        "trans": "sovuq urishi (tana qismini)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Frosty",
        "trans": "ayozli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Give off",
        "trans": "(hid/gaz/issiqlik) chiqarmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Give up",
        "trans": "voz kechmoq / tashlab yubormoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Global warming",
        "trans": "global isish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Greenhouse gases",
        "trans": "parnik gazlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hail",
        "trans": "do'l; do'l yog'moq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Hail storm",
        "trans": "do'lli bo'ron",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Head",
        "trans": "yo'nalmoq (biror tomonga)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Heat up",
        "trans": "isimoq / isitmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Ice caps",
        "trans": "muzlik qatlamlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Lamp post",
        "trans": "chiroq ustuni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Land",
        "trans": "qo'nmoq (samolyot)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Lightning",
        "trans": "chaqmoq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Live with",
        "trans": "birga yashamoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Look after",
        "trans": "g'amxo'rlik qilmoq / qarab turmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Mist",
        "trans": "xira tuman",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Misty",
        "trans": "xira tumanli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Mudslide",
        "trans": "loy ko'chkisi (sel)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Pavement",
        "trans": "trotuar / piyodalar yo'li",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Pedestrian crossing",
        "trans": "piyodalar o'tish joyi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Put something off",
        "trans": "kechiktirmoq / qoldirmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Rain",
        "trans": "yomg'ir; yomg'ir yog'moq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Rain shower",
        "trans": "qisqa muddatli yomg'ir",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Raindrop",
        "trans": "yomg'ir tomchisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rainforests",
        "trans": "tropik o'rmonlar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rainy",
        "trans": "yomg'irli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Reach",
        "trans": "yetib bormoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Rely on",
        "trans": "tayanmoq / ishonmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Renewable energy",
        "trans": "qayta tiklanuvchi energiya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Road sign",
        "trans": "yo'l belgisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Road works",
        "trans": "yo'l ta'mirlash ishlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Run out",
        "trans": "tugab qolmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Sea levels",
        "trans": "dengiz sathlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Shine",
        "trans": "porlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Shop sign",
        "trans": "do'kon peshlavhasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Shower",
        "trans": "dush / qisqa yomg'ir",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Showery",
        "trans": "yomg'irli (qisqa yomg'irlar)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Snow",
        "trans": "qor; qor yog'moq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Snowflake",
        "trans": "qor parchasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Snowy",
        "trans": "qorli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Spin",
        "trans": "aylanmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Storm",
        "trans": "bo'ron",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Stormy",
        "trans": "bo'ronli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Street corner",
        "trans": "ko'cha burchagi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Sunny",
        "trans": "quyoshli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Sunshine",
        "trans": "quyosh nuri",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Temperature",
        "trans": "harorat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Take off",
        "trans": "uchib ketmoq (samolyot)",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Thunder",
        "trans": "momaqaldiroq; gumburlamoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Thunderstorm",
        "trans": "momaqaldiroqli bo'ron",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Thundery",
        "trans": "momaqaldiroqli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Traffic light",
        "trans": "svetofor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Tsunami",
        "trans": "tsunami",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Use up",
        "trans": "tamom qilmoq / tugatmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Volcanic eruption",
        "trans": "vulqon otilishi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Wake up",
        "trans": "uyg'onmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Windy",
        "trans": "shamolli",
        "type": "adj",
        "def": "Part of speech: adj"
      }
    ]
  },
  {
    "id": "5",
    "name": "Unit 5: Kasblar va Ish muhiti",
    "words": [
      {
        "word": "Architect",
        "trans": "me'mor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Badly-paid",
        "trans": "kam haq to'lanadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Builder",
        "trans": "quruvchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Challenging",
        "trans": "qiyin (lekin qiziqarli)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cleaner",
        "trans": "farrosh / tozalovchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Creative",
        "trans": "ijodkor",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Dentist",
        "trans": "tish shifokori",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Engineer",
        "trans": "muhandis",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Enthusiastic",
        "trans": "g'ayratli / qizg'in",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Estate agent",
        "trans": "rieltor (ko'chmas mulk agenti)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Farm worker",
        "trans": "ferma ishchisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Flexible",
        "trans": "moslanuvchan / egiluvchan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Friendly",
        "trans": "do'stona",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Gardener",
        "trans": "bog'bon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Good at communicating",
        "trans": "muloqotga usta",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Groundskeeper",
        "trans": "maydon nazoratchisi (park/stadion)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hairdresser",
        "trans": "sartarosh (ayollar)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hard-working",
        "trans": "mehnatsevar",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Journalist",
        "trans": "jurnalist",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Locksmith",
        "trans": "chilangar (qulfsoz)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Paramedic",
        "trans": "tez yordam feldsheri",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Photographer",
        "trans": "suratkash",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Physically fit",
        "trans": "jismonan sog'lom / baquvvat",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Pilot",
        "trans": "uchuvchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Pizza delivery man/woman",
        "trans": "pitssa yetkazib beruvchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Police officer",
        "trans": "politsiya xodimi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Programmer",
        "trans": "dasturchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Receptionist",
        "trans": "administrator (qabulxona xodimi)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Reliable",
        "trans": "ishonchli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Repetitive",
        "trans": "bir xil / takrorlanuvchi",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Rewarding",
        "trans": "qoniqarli / foydali (ma'naviy)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Sales assistant",
        "trans": "sotuvchi yordamchisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Solicitor",
        "trans": "advokat / huquqshunos",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Sports coach",
        "trans": "sport murabbiyi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Stressful",
        "trans": "stressli / asabiy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Stunt performer",
        "trans": "kaskadyor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Surfing instructor",
        "trans": "syorfing murabbiyi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Travel agent",
        "trans": "sayyohlik agenti",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Varied",
        "trans": "turli-tuman",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Video game developer",
        "trans": "video o'yin yaratuvchisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Waiter",
        "trans": "ofitsiant",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Well-paid",
        "trans": "yaxshi haq to'lanadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      }
    ]
  },
  {
    "id": "6",
    "name": "Unit 6: Sayohat va Dam olish",
    "words": [
      {
        "word": "Abseiling",
        "trans": "arqonda pastga tushish (sport)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Aquarium",
        "trans": "akvarium",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Art gallery",
        "trans": "san'at galereyasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Atmospheric",
        "trans": "o'ziga xos muhitli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Backpack",
        "trans": "ryukzak",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Bag drop",
        "trans": "yuk topshirish joyi (aeroportda)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Baggage carousel",
        "trans": "yuk lentalari (bagaj uchun)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Beautiful",
        "trans": "go'zal",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Boarding pass",
        "trans": "samolyotga chiqish bileti",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Boat trip",
        "trans": "qayiqda sayohat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Botanical gardens",
        "trans": "botanika bog'i",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Busy",
        "trans": "gavjum / band",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cabin crew",
        "trans": "samolyot xizmatchilari (ekipaj)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Campsite",
        "trans": "lager maydoni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Carnival",
        "trans": "karnaval",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Castle",
        "trans": "qasr",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cathedral",
        "trans": "bosh ibodatxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cheap",
        "trans": "arzon",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Check-in desk",
        "trans": "ro'yxatdan o'tish joyi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Concert",
        "trans": "konsert",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Crowded",
        "trans": "odam bilan to'la / gavjum",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Departure lounge",
        "trans": "kutish zali (jo'nab ketish)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Double room",
        "trans": "ikki kishilik xona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Disappointing",
        "trans": "ko'ngilni qoldiradigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Economy class",
        "trans": "ekonom klass",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Expensive",
        "trans": "qimmat",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Festival",
        "trans": "festival",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Flight attendant",
        "trans": "styuard / styuardessa",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Flight number",
        "trans": "reys raqami",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Fountain",
        "trans": "favvora",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Full board",
        "trans": "uch mahal ovqatli xizmat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Full-time",
        "trans": "to'liq ish kuni",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Half board",
        "trans": "ikki mahal ovqatli xizmat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hand luggage",
        "trans": "qo'l yuki",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Harbour",
        "trans": "bandargoh / gavan",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "High season",
        "trans": "turizm avj olgan mavsum",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hire",
        "trans": "(velosiped) ijaraga olmoq",
        "type": "a bike) (v",
        "def": "Part of speech: a bike) (v"
      },
      {
        "word": "Historic",
        "trans": "tarixiy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Kayaking",
        "trans": "baydarkada suzish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Low season",
        "trans": "turizm pasaygan mavsum",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Market",
        "trans": "bozor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Monument",
        "trans": "yodgorlik / monument",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Mosque",
        "trans": "masjid",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Mountain biking",
        "trans": "tog'da velosiped uchish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Museum",
        "trans": "muzey",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "National park",
        "trans": "milliy bog'",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Old town",
        "trans": "eski shahar qismi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Online check-in",
        "trans": "onlayn ro'yxatdan o'tish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Opera house",
        "trans": "opera teatri",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Palace",
        "trans": "saroy",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Park",
        "trans": "park",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Part-time",
        "trans": "yarim ish kuni",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Passport control",
        "trans": "pasport nazorati",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Peaceful",
        "trans": "tinch / osuda",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Penpal",
        "trans": "xat yozishib turadigan do'st",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Restaurant",
        "trans": "restoran",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Romantic",
        "trans": "romantik",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Ruins",
        "trans": "xarobalar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Safari park",
        "trans": "safari bog'i",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Seat belt",
        "trans": "xavfsizlik kamari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Security camera",
        "trans": "kuzatuv kamerasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Security check",
        "trans": "xavfsizlik tekshiruvi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Shopping district",
        "trans": "savdo rayoni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Single room",
        "trans": "bir kishilik xona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Souvenirs",
        "trans": "esdalik sovg'alari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Square",
        "trans": "maydon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Statue",
        "trans": "haykal",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Sunburn",
        "trans": "quyoshda kuyish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Suncream",
        "trans": "quyoshdan himoyalovchi krem",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Sunglasses",
        "trans": "quyosh ko'zoynagi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Temple",
        "trans": "ma'bad",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Theatre",
        "trans": "teatr",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Theme park",
        "trans": "istirohat bog'i (attraksionli)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Touristy",
        "trans": "sayyohlar bilan to'la",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Tower",
        "trans": "minora",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Travel guide",
        "trans": "sayyohlik yo'l ko'rsatkichi / yo'llovchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Travel programme",
        "trans": "sayohat haqidagi ko'rsatuv",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Window seat",
        "trans": "oyna yonidagi o'rindiq",
        "type": "n",
        "def": "Part of speech: n"
      }
    ]
  },
  {
    "id": "7",
    "name": "Unit 7: Savdo-sotiq, Xaridlar va Pul",
    "words": [
      {
        "word": "Admit",
        "trans": "tan olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Afford",
        "trans": "qurbi yetmoq (moliya)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Agree",
        "trans": "rozi bo'lmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Avoid",
        "trans": "qochmoq / chetlab o'tmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Baker's",
        "trans": "nonvoyxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Bank",
        "trans": "bank",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Bargain",
        "trans": "arzon / foydali xarid",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Be short of",
        "trans": "(pul/vaqt) yetishmasligi",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Borrow",
        "trans": "qarzga olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Butcher's",
        "trans": "qassobxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Buy",
        "trans": "sotib olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "CEO",
        "trans": "bosh ijrochi direktor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Charge",
        "trans": "haq olmoq / pul yozmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Charity shop",
        "trans": "xayriya do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Chemist's",
        "trans": "dorixona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Choose",
        "trans": "tanlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Clothes shop",
        "trans": "kiyim-kechak do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Coffee shop",
        "trans": "qahvaxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Contract",
        "trans": "shartnoma",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cosmetics store",
        "trans": "kosmetika do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cost",
        "trans": "narxi ... turmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Coupon",
        "trans": "kupon / vaucher",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Decide",
        "trans": "qaror qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Deli [delicatessen]",
        "trans": "delikateslar do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Discount",
        "trans": "chegirma",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "DIY store",
        "trans": "qurilish/ro'zg'or mollari do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "End up",
        "trans": "biror holat bilan tugamoq / yakun topmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Enjoy",
        "trans": "zavqlanmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Entrepreneur",
        "trans": "tadbirkor",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Estate agent's",
        "trans": "ko'chmas mulk agentligi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Expect",
        "trans": "kutmoq / umid qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Fail",
        "trans": "muvaffaqiyatsizlikka uchramoq / yiqilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Fancy",
        "trans": "yoqtirmoq / istamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Florist's",
        "trans": "gul do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Funding",
        "trans": "moliyalashtirish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Garden centre",
        "trans": "bog'dorchilik markazi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Get a refund",
        "trans": "pulni qaytarib olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Give a refund",
        "trans": "pulni qaytarib bermoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Greengrocer's",
        "trans": "meva-sabzavot do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Hairdresser's",
        "trans": "sartaroshxona",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Income",
        "trans": "daromad",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Investor",
        "trans": "sarmoyador",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Jeweller's",
        "trans": "zargarlik do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Keep",
        "trans": "saqlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Launderette",
        "trans": "kirxona (o'z-o'ziga xizmat)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Lend",
        "trans": "qarzga bermoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Lose",
        "trans": "yo'qotmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Mind",
        "trans": "e'tiroz bildirmoq / qarshi bo'lmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Newsagent's",
        "trans": "gazeta va jurnallar do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Offer",
        "trans": "taklif qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Optician's",
        "trans": "optika do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Owe",
        "trans": "qarz bo'lmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Pay",
        "trans": "to'lamoq",
        "type": "for sth) (v",
        "def": "Part of speech: for sth) (v"
      },
      {
        "word": "Post-office",
        "trans": "pochta",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Prefer",
        "trans": "afzal ko'rmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Pretend",
        "trans": "o'zini ...dek ko'rsatmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Price tag",
        "trans": "narx yozilgan yorliq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Profits",
        "trans": "foyda",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Promise",
        "trans": "va'da bermoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Receipt",
        "trans": "kvitansiya / chek",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Refund",
        "trans": "pulni qaytarish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Refuse",
        "trans": "rad etmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Run out",
        "trans": "tugab qolmoq",
        "type": "of sth) (v",
        "def": "Part of speech: of sth) (v"
      },
      {
        "word": "Salary",
        "trans": "oylik maosh",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Sale",
        "trans": "sotuv / savdo (arzonlashtirilgan)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Save",
        "trans": "tejamoq / saqlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Save up",
        "trans": "pul to'plamoq",
        "type": "for sth) (v",
        "def": "Part of speech: for sth) (v"
      },
      {
        "word": "Sell",
        "trans": "sotmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Shoe shop",
        "trans": "poyabzal do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Special offer",
        "trans": "maxsus taklif",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Spend",
        "trans": "sarflamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Stationer's",
        "trans": "kanselyariya do'koni",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Takeaway",
        "trans": "olib ketish uchun taom",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Waste",
        "trans": "isrof qilmoq / behuda sarflamoq",
        "type": "v",
        "def": "Part of speech: v"
      }
    ]
  },
  {
    "id": "8",
    "name": "Unit 8: Jinoyat va Jazo",
    "words": [
      {
        "word": "Affordable",
        "trans": "hamyonbop",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Appeal",
        "trans": "apellyatsiya bermoq / murojaat qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Arson",
        "trans": "qasddan o't qo'yish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Arsonist",
        "trans": "o't qo'yuvchi jinoyatchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Balaclava",
        "trans": "balaklava (yuzni yopuvchi niqob)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Board game",
        "trans": "stol o'yini",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Break into something",
        "trans": "buzib/bostirib kirmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Burglar",
        "trans": "uy o'g'risi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Burglary",
        "trans": "uyni buzib o'g'irlash (jinoyat)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Burgle",
        "trans": "o'g'irlamoq (uyga kirib)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Cards",
        "trans": "qarta o'yini",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Careless",
        "trans": "e'tiborsiz / beparvo",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Chewing gum",
        "trans": "saqich",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Childish",
        "trans": "bolalarcha",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cowardly",
        "trans": "qo'rqoqlarcha",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Damage",
        "trans": "zarar yetkazmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Dangerous",
        "trans": "xavfli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Deal drugs",
        "trans": "narkotik sotmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Dental records",
        "trans": "tish tibbiy ma'lumotlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Drinkable",
        "trans": "ichishga yaroqli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Drug dealer",
        "trans": "narkodiler",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Drug-dealing",
        "trans": "narkotik savdosi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Economical",
        "trans": "tejamli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Enjoyable",
        "trans": "yoqimli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Fingerprints",
        "trans": "barmoq izlari",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Foolish",
        "trans": "ahmoqona",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Furious",
        "trans": "daxshatli g'azabda",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Grab",
        "trans": "changallab olmoq / yulqib olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Greenish",
        "trans": "yashilroq",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Handbag",
        "trans": "qo'l sumkasi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Helpful",
        "trans": "foydali / yordam beruvchi",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Hold on",
        "trans": "kutib turmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Hopeful",
        "trans": "umidvor",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Identify",
        "trans": "shaxsini aniqlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Interview",
        "trans": "intervyu / suhbat olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Kill",
        "trans": "o'ldirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Launch",
        "trans": "ishga tushirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Lean",
        "trans": "suyanmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Loot",
        "trans": "talon-toroj qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Looter",
        "trans": "talonchi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Looting",
        "trans": "talonchilik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Lucky",
        "trans": "omadli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Magical",
        "trans": "sehrli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Mug",
        "trans": "ko'chada zo'ravonlik bilan o'g'irlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Mugger",
        "trans": "ko'cha o'g'risi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Mugging",
        "trans": "ko'chadagi o'g'irlik (zo'rlik bilan)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Murder",
        "trans": "qotillik; o'ldirmoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Murder investigation",
        "trans": "qotillik tergovi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Murderer",
        "trans": "qotil",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Mysterious",
        "trans": "sirli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "National",
        "trans": "milliy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Open-top car",
        "trans": "usti ochiq mashina",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Painful",
        "trans": "og'riqli",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Painless",
        "trans": "og'riqsiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Patrol",
        "trans": "patrul qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Pull",
        "trans": "tortmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Rob",
        "trans": "o'marmoq / o'g'irlamoq (bank/odamni)",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Robber",
        "trans": "o'g'ri",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Robbery",
        "trans": "o'g'irlik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Run away",
        "trans": "qochib ketmoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Search",
        "trans": "qidirmoq / tintuv qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Secret code",
        "trans": "maxfiy kod",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Selfish",
        "trans": "xudbin",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Selfless",
        "trans": "fidoyi",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Set fire to something",
        "trans": "biror narsaga o't qo'ymoq",
        "type": "phr v",
        "def": "Part of speech: phr v"
      },
      {
        "word": "Shoplift",
        "trans": "do'kondan o'g'irlik qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Shoplifter",
        "trans": "do'kon o'g'risi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Shoplifting",
        "trans": "do'kondagi o'g'irlik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Smuggle",
        "trans": "kontrabanda qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Smuggler",
        "trans": "kontrabandachi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Smuggling",
        "trans": "kontrabanda (jinoyat)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Snatch",
        "trans": "yulqib olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Steal",
        "trans": "o'g'irlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Strap",
        "trans": "tasma / tasmacha",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Study",
        "trans": "o'rganmoq / o'qimoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Subway",
        "trans": "metropoliten / yer osti yo'li",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Table tennis",
        "trans": "stol tennisi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Tasteless",
        "trans": "mazasiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Theft",
        "trans": "o'g'irlik (mulk o'g'riligi)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Thief [pl. thieves]",
        "trans": "o'g'ri",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Train ticket",
        "trans": "poezd bileti",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Vandal",
        "trans": "vandal (mulkni buzuvchi)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Vandalise",
        "trans": "vandalizm qilmoq / buzmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Vandalism",
        "trans": "vandalizm",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Water park",
        "trans": "akvapark",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Weekly",
        "trans": "haftalik",
        "type": "adj",
        "def": "Part of speech: adj"
      }
    ]
  },
  {
    "id": "9",
    "name": "Unit 9: Materiallar va Mashinalar",
    "words": [
      {
        "word": "Aluminium",
        "trans": "alyuminiy",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Apologise",
        "trans": "uzr so'ramoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Arrange",
        "trans": "tartibga solmoq / rejalashtirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Arrangement",
        "trans": "kelishuv / tartib",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Bald",
        "trans": "kal",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Baldness",
        "trans": "kallik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Base",
        "trans": "asosi / tag qismi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Battery",
        "trans": "batareya",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Broken",
        "trans": "singan / buzilgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Cardboard",
        "trans": "karton",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cement",
        "trans": "sement",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Ceramic",
        "trans": "keramika",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Challenge",
        "trans": "chorlamoq / bahslashmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Circular",
        "trans": "doiraviy",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Comfort",
        "trans": "taskin bermoq / tinchlantirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Complain",
        "trans": "shikoyat qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Copper",
        "trans": "mis",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Cordless",
        "trans": "simsiz",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Credit note",
        "trans": "kredit hujjati (qaytarilgan tovar uchun)",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Curved",
        "trans": "egilgan / qayrilgan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Deaf",
        "trans": "kar (qulog'i og'ir)",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Deafness",
        "trans": "karrlik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Demonstrate",
        "trans": "namoyish qilmoq / tushuntirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Demonstration",
        "trans": "namoyish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Describe",
        "trans": "tasvirlamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Encourage",
        "trans": "ruhlantirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Enquire",
        "trans": "so'ramoq / surishtirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Glass",
        "trans": "shisha",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Gold",
        "trans": "oltin",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Handle",
        "trans": "dasta / tutqich",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Inform",
        "trans": "ma'lumot bermoq / xabardor qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Invent",
        "trans": "ixtiro qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Invention",
        "trans": "ixtiro",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Inventor",
        "trans": "ixtirochi",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Iron",
        "trans": "temir",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Leather",
        "trans": "charm / teri",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Lid",
        "trans": "qopqoq",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Mains",
        "trans": "elektr tarmog'i",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Move",
        "trans": "harakatlanmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Movement",
        "trans": "harakat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Nylon",
        "trans": "neylon",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Paper",
        "trans": "qog'oz",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Persuade",
        "trans": "ko'ndirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Plastic",
        "trans": "plastik",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Problem",
        "trans": "muammo",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rechargeable",
        "trans": "qayta quvvatlanadigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Recommend",
        "trans": "tavsiya qilmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Reconstruct",
        "trans": "qayta tiklamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Reconstruction",
        "trans": "qayta qurish / tiklash",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Record",
        "trans": "yozib olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Recording",
        "trans": "yozib olingan narsa",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Rectangular",
        "trans": "to'rtburchak",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Rediscover",
        "trans": "qayta kashf etmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Rediscovery",
        "trans": "qayta kashf etilish",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Repair",
        "trans": "ta'mirlash; ta'mirlamoq",
        "type": "n, v",
        "def": "Part of speech: n, v"
      },
      {
        "word": "Rubber",
        "trans": "rezina",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Solar-powered",
        "trans": "quyosh energiyasida ishlaydigan",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Spherical",
        "trans": "sharsimon",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Square",
        "trans": "kvadrat shaklidagi",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Steel",
        "trans": "po'lat",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Stone",
        "trans": "tosh",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Tell a story",
        "trans": "hikoya aytib bermoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Thank",
        "trans": "rahmat aytmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Treat",
        "trans": "muomala qilmoq / davolamoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Treatment",
        "trans": "muomala / muolaja",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Triangular",
        "trans": "uchburchak shaklidagi",
        "type": "adj",
        "def": "Part of speech: adj"
      },
      {
        "word": "Warn",
        "trans": "ogohlantirmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Welcome",
        "trans": "xush kelibsiz demoq / kutib olmoq",
        "type": "v",
        "def": "Part of speech: v"
      },
      {
        "word": "Wheels",
        "trans": "g'ildiraklar",
        "type": "n",
        "def": "Part of speech: n"
      },
      {
        "word": "Wood",
        "trans": "yog'och",
        "type": "n",
        "def": "Part of speech: n"
      }
    ]
  }
];