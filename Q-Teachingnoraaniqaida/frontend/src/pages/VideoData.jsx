const videoData = [
  {
    id: 0,
    name: "Alif",
    image: require("../Assets/huroof/Huroof Mufradat/alif.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 1,
    name: "Baa",
    image: require("../Assets/huroof/Huroof Mufradat/baa.png"),
    video: require("../Assets/huroof/videos/baa.mp4"),
  },
  {
    id: 2,
    name: "Taa",
    image: require("../Assets/huroof/Huroof Mufradat/taa.png"),
    video: require("../Assets/huroof/videos/taa.mp4"),
  },
  {
    id: 3,
    name: "Saa",
    image: require("../Assets/huroof/Huroof Mufradat/saa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 4,
    name: "Jeem",
    image: require("../Assets/huroof/Huroof Mufradat/jeem.png"),
    video: require("../Assets/huroof/videos/jeem.mp4"),
  },
  {
    id: 5,
    name: "Haa",
    image: require("../Assets/huroof/Huroof Mufradat/haa.png"),
    video: require("../Assets/huroof/videos/haa1.mp4"),
  },
  {
    id: 6,
    name: "Kha",
    image: require("../Assets/huroof/Huroof Mufradat/kha.png"),
    video: require("../Assets/huroof/videos/kha.mp4"),
  },
  {
    id: 7,
    name: "Daal",
    image: require("../Assets/huroof/Huroof Mufradat/daal.png"),
    video: require("../Assets/huroof/videos/daal.mp4"),
  },
  {
    id: 8,
    name: "Zaal",
    image: require("../Assets/huroof/Huroof Mufradat/zaal.png"),
    video: require("../Assets/huroof/videos/zaal.mp4"),
  },
  {
    id: 9,
    name: "Raa",
    image: require("../Assets/huroof/Huroof Mufradat/raa.png"),
    video: require("../Assets/huroof/videos/raa.mp4"),
  },
  {
    id: 10,
    name: "Zaa",
    image: require("../Assets/huroof/Huroof Mufradat/zaa.png"),
    video: require("../Assets/huroof/videos/zaa.mp4"),
  },
  {
    id: 11,
    name: "Seen",
    image: require("../Assets/huroof/Huroof Mufradat/seen.png"),
    video: require("../Assets/huroof/videos/seen.mp4"),
  },
  {
    id: 12,
    name: "Sheen",
    image: require("../Assets/huroof/Huroof Mufradat/sheen.png"),
    video: require("../Assets/huroof/videos/sheen.mp4"),
  },
  {
    id: 13,
    name: "Suad",
    image: require("../Assets/huroof/Huroof Mufradat/suad.png"),
    video: require("../Assets/huroof/videos/suad.mp4"),
  },
  {
    id: 14,
    name: "Zuad",
    image: require("../Assets/huroof/Huroof Mufradat/zuad.png"),
    video: require("../Assets/huroof/videos/zuad.mp4"),
  },
  {
    id: 15,
    name: "Tau",
    image: require("../Assets/huroof/Huroof Mufradat/tau.png"),
    video: require("../Assets/huroof/videos/tau.mp4"),
  },
  {
    id: 16,
    name: "Zau",
    image: require("../Assets/huroof/Huroof Mufradat/zau.png"),
    video: require("../Assets/huroof/videos/zau.mp4"),
  },
  {
    id: 17,
    name: "Aeeen",
    image: require("../Assets/huroof/Huroof Mufradat/aeeen.png"),
    video: require("../Assets/huroof/videos/aeeen.mp4"),
  },
  {
    id: 18,
    name: "Gaeen",
    image: require("../Assets/huroof/Huroof Mufradat/gaeen.png"),
    video: require("../Assets/huroof/videos/gaeen.mp4"),
  },
  {
    id: 19,
    name: "Faa",
    image: require("../Assets/huroof/Huroof Mufradat/faa.png"),
    video: require("../Assets/huroof/videos/faa.mp4"),
  },
  {
    id: 20,
    name: "Qaaf",
    image: require("../Assets/huroof/Huroof Mufradat/qaaf.png"),
    video: require("../Assets/huroof/videos/qaaf.mp4"),
  },
  {
    id: 21,
    name: "Kaaf",
    image: require("../Assets/huroof/Huroof Mufradat/kaaf.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 22,
    name: "Laam",
    image: require("../Assets/huroof/Huroof Mufradat/laam.png"),
    video: require("../Assets/huroof/videos/laam.mp4"),
  },
  {
    id: 23,
    name: "Meem",
    image: require("../Assets/huroof/Huroof Mufradat/meem.png"),
    video: require("../Assets/huroof/videos/meem.mp4"),
  },
  {
    id: 24,
    name: "Noon",
    image: require("../Assets/huroof/Huroof Mufradat/noon.png"),
    video: require("../Assets/huroof/videos/noon.mp4"),
  },
  {
    id: 25,
    name: "Wow",
    image: require("../Assets/huroof/Huroof Mufradat/wow.png"),
    video: require("../Assets/huroof/videos/wow.mp4"),
  },
  {
    id: 26,
    name: "Hamza",
    image: require("../Assets/huroof/Huroof Mufradat/hamza.png"),
    video: require("../Assets/huroof/videos/aeeen.mp4"),
  },
  {
    id: 27,
    name: "Haa1",
    image: require("../Assets/huroof/Huroof Mufradat/haa1.png"),
    video: require("../Assets/huroof/videos/haa1.mp4"),
  },
  {
    id: 28,
    name: "Bari_ya",
    image: require("../Assets/huroof/Huroof Mufradat/bari_ya.png"),
    video: require("../Assets/huroof/videos/bari_ya.mp4"),
  },
  {
    id: 29,
    name: "Choti_ya",
    image: require("../Assets/huroof/Huroof Mufradat/choti_ya.png"),
    video: require("../Assets/huroof/videos/choti_ya.mp4"),
  },
  {
    id: 30,
    name: "Alif",
    image: require("../Assets/huroof/Huroof Mufradat/alif.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 31,
    name: "Laam Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/laamalif.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 32,
    name: "Laam Alif3",
    image: require("../Assets/huroof/Huroof Murakkabat/laamalif3.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 33,
    name: "Baa Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/baaalif.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 34,
    name: "Laam Alif2",
    image: require("../Assets/huroof/Huroof Murakkabat/laamalif2.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 35,
    name: "Laam",
    image: require("../Assets/huroof/Huroof Murakkabat/laam.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 36,
    name: "Laam Alif1",
    image: require("../Assets/huroof/Huroof Murakkabat/laamalif1.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 37,
    name: "Laam Haa",
    image: require("../Assets/huroof/Huroof Murakkabat/laamhaa.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 38,
    name: "Laam Alif4",
    image: require("../Assets/huroof/Huroof Murakkabat/laamalif4.png"),
    video: require("../Assets/huroof/videos/alif.mp4"),
  },
  {
    id: 39,
    name: "Baa Laam Baa",
    image: require("../Assets/huroof/Huroof Murakkabat/baalaambaa.png"),
    video: require("../Assets/huroof/videos/baa.mp4"),
  },
  {
    id: 40,
    name: "Kaaf",
    image: require("../Assets/huroof/Huroof Murakkabat/kaaf.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 41,
    name: "Kaaf1",
    image: require("../Assets/huroof/Huroof Murakkabat/kaaf1.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 42,
    name: "Ka Baa",
    image: require("../Assets/huroof/Huroof Murakkabat/kabaa.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 43,
    name: "Kaaf Baa",
    image: require("../Assets/huroof/Huroof Murakkabat/kaafbaa.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 44,
    name: "Qaaf Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/qaafalif.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 45,
    name: "Qaaf Alif1",
    image: require("../Assets/huroof/Huroof Murakkabat/qaafalif1.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 46,
    name: "Ba Ka Taa",
    image: require("../Assets/huroof/Huroof Murakkabat/bakataa.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 47,
    name: "Ta Ka Saa",
    image: require("../Assets/huroof/Huroof Murakkabat/takasaa.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 48,
    name: "Baa",
    image: require("../Assets/huroof/Huroof Murakkabat/baa.png"),
    video: require("../Assets/huroof/videos/baa.mp4"),
  },
  {
    id: 49,
    name: "Taa",
    image: require("../Assets/huroof/Huroof Murakkabat/taa.png"),
    video: require("../Assets/huroof/videos/taa.mp4"),
  },
  {
    id: 50,
    name: "Saa",
    image: require("../Assets/huroof/Huroof Murakkabat/saa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 51,
    name: "Noon",
    image: require("../Assets/huroof/Huroof Murakkabat/noon.png"),
    video: require("../Assets/huroof/videos/noon.mp4"),
  },
  {
    id: 52,
    name: "Yaa",
    image: require("../Assets/huroof/Huroof Murakkabat/yaa.png"),
    video: require("../Assets/huroof/videos/bari_ya.mp4"),
  },
  {
    id: 53,
    name: "Baa Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/baaalif.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 54,
    name: "Noon Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/noonalif.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 55,
    name: "Taa Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/taaalif.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 56,
    name: "Yaa Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/yaaalif.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 57,
    name: "Saa Alif",
    image: require("../Assets/huroof/Huroof Murakkabat/saaalif.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 58,
    name: "Ba Seen",
    image: require("../Assets/huroof/Huroof Murakkabat/baseen.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 59,
    name: "Yaa Seen",
    image: require("../Assets/huroof/Huroof Murakkabat/yaaseen.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 60,
    name: "Noon Seen",
    image: require("../Assets/huroof/Huroof Murakkabat/noonseen.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 61,
    name: "Ta Seen",
    image: require("../Assets/huroof/Huroof Murakkabat/taseen.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 62,
    name: "Sa Seen",
    image: require("../Assets/huroof/Huroof Murakkabat/saseen.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 63,
    name: "Saa Jeem",
    image: require("../Assets/huroof/Huroof Murakkabat/saajeem.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 64,
    name: "Taa Haa",
    image: require("../Assets/huroof/Huroof Murakkabat/taahaa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 65,
    name: "Noon Kha",
    image: require("../Assets/huroof/Huroof Murakkabat/noonkha.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 66,
    name: "Ya Haa",
    image: require("../Assets/huroof/Huroof Murakkabat/yahaa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 67,
    name: "Baa Jeem",
    image: require("../Assets/huroof/Huroof Murakkabat/baajeem.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 68,
    name: "Ya Meem",
    image: require("../Assets/huroof/Huroof Murakkabat/yameem.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 69,
    name: "Ba Meem",
    image: require("../Assets/huroof/Huroof Murakkabat/bameem.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 70,
    name: "Noon Meem",
    image: require("../Assets/huroof/Huroof Murakkabat/noonmeem.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 71,
    name: "Ta Meem1",
    image: require("../Assets/huroof/Huroof Murakkabat/tameem1.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 72,
    name: "Saa Meem",
    image: require("../Assets/huroof/Huroof Murakkabat/saameem.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 73,
    name: "Ba Yaa",
    image: require("../Assets/huroof/Huroof Murakkabat/bayaa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 74,
    name: "Ya Yaa",
    image: require("../Assets/huroof/Huroof Murakkabat/yayaa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 75,
    name: "Noon Yaa",
    image: require("../Assets/huroof/Huroof Murakkabat/noonyaa.png"),
    video: require("../Assets/huroof/videos/saa.mp4"),
  },
  {
    id: 141,
    name: "Alif Laam Meem",
    image: require("../Assets/huroof/Huroof Muraqattat/aliflaammeem.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 142,
    name: "Alif Laam Meem Suad",
    image: require("../Assets/huroof/Huroof Muraqattat/aliflaameemsuad.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 143,
    name: "Tua Seen Meem",
    image: require("../Assets/huroof/Huroof Muraqattat/tuaseenmeem.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 144,
    name: "Tua Seen",
    image: require("../Assets/huroof/Huroof Muraqattat/tauseen.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 145,
    name: "Alif Laam Raa",
    image: require("../Assets/huroof/Huroof Muraqattat/aliflaamra.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 146,
    name: "Alif Laam Meem Raa",
    image: require("../Assets/huroof/Huroof Muraqattat/aliflaameemra.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 147,
    name: "Yaa Seen",
    image: require("../Assets/huroof/Huroof Muraqattat/yaseen.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 148,
    name: "Suad",
    image: require("../Assets/huroof/Huroof Muraqattat/suad.png"),
    video: require("../Assets/huroof/videos/suad.mp4"),
  },
  {
    id: 149,
    name: "Kaaf Haa Yaa Aeen Suad",
    image: require("../Assets/huroof/Huroof Muraqattat/kaafhayaaeensuad.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 150,
    name: "Tua Haa",
    image: require("../Assets/huroof/Huroof Muraqattat/tauha.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 151,
    name: "Ha Meem",
    image: require("../Assets/huroof/Huroof Muraqattat/hameem.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 152,
    name: "Ha Meem Aeen Seen Qaaf",
    image: require("../Assets/huroof/Huroof Muraqattat/hameem_aeenseenqaaf.png"),
    video: require("../Assets/huroof/videos/kaaf.mp4"),
  },
  {
    id: 153,
    name: "Qaaf",
    image: require("../Assets/huroof/Huroof Muraqattat/qaaf.png"),
    video: require("../Assets/huroof/videos/qaaf.mp4"),
  },
  {
    id: 154,
    name: "Noon",
    image: require("../Assets/huroof/Huroof Muraqattat/noon.png"),
    video: require("../Assets/huroof/videos/noon.mp4"),
  },
];

export default videoData;