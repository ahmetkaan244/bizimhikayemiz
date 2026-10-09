// Site verileri ve ayarları
window.JOURNAL_DATA = {
  // İsimler ve metinler
  couple: {
    person1: "İsim 1",
    person2: "İsim 2",
    symbol: "♥",
    subtitle: "Bizim hikâyemiz...",
    heroTagline: "Seninle geçen her gün kalbimin en güzel köşesisin...",
    footerNote: "Her günümüz bir öncekinden daha güzel.",
    outroHeading: "Hikâyemiz daha yeni başlıyor...",
    outroSubheading: "Çünkü birlikte yazacağımız upuzun sayfalar var."
  },

  // Tarihler (YYYY-AA-GGTHH:MM:SS)
  dates: {
    firstTalkDate: "2024-01-01T20:00:00",
    relationshipDate: "2024-01-15T00:00:00"
  },

  // Müzik çalar (boşsa dahili piyano çalar)
  music: {
    title: "Karanfil Kokan Geceler & Vals",
    artist: "Akustik Piyano (Bizim Melodimiz)",
    albumCover: "assets/album-cover.svg",
    audioSrc: "", // Örn: "assets/sarki.mp3"
    defaultVolume: 0.7
  },

  // Alıntılar
  quotes: [
    {
      text: "Bazı insanlar hayatımıza girmez, hayatımızın kendisi olur.",
      author: "Bizim Günlüğümüzden"
    },
    {
      text: "Hayatıma girdiğin günden beri, sıradan her anım bir masala dönüştü.",
      author: "Bizim Hikâyemiz"
    },
    {
      text: "Ellerini tuttuğum ilk an, kalbimin doğru yeri bulduğunu anlamıştım.",
      author: "Bizim Hikâyemiz"
    },
    {
      text: "Gözlerinin içine her baktığımda, 'iyi ki varsın' cümlesi yeniden anlam kazanıyor.",
      author: "Bizim Hikâyemiz"
    },
    {
      text: "Daha yolun çok başındayız ve seninle yürümek dünyanın en güzel hissi.",
      author: "Bizim Günlüğümüzden"
    }
  ],

  // Zaman tüneli
  timeline: [
    {
      year: "1. Gün",
      tag: "O İlk Kıvılcım",
      dateBadge: "Başlangıç",
      title: "İlk Mesaj ve Gece Yarısı Sohbeti",
      description: "Hiç hesapta yokken gelen o ilk mesaj, hayatımızı değiştirecek bir yolculuğun ilk adımıydı. Saatlerin nasıl geçtiğini anlamadığımız, uyumak istemediğimiz o ilk uzun gece...",
      quote: "“Bir bildirim sesi hiç bu kadar heyecan verici olmamıştı.”",
      photo: "assets/timeline-2023.svg",
      photoCaption: "İlk uzun sohbetimizin olduğu o an",
      tapeColor: "pink"
    },
    {
      year: "1. Hafta",
      tag: "Biz Oluşumuz",
      dateBadge: "İlk Adım",
      title: "Kalplerimizin Kenetlendiği An",
      description: "Bütün tereddütlerin kaybolduğu, 'biz' olmaya karar verdiğimiz o an. İçimizde başlayan bu sıcacık bağın günden güne büyüyeceğini ikimiz de hissediyorduk.",
      quote: "“Kelimelerin bittiği yerde kalplerimiz konuştu.”",
      photo: "assets/timeline-2023-love.svg",
      photoCaption: "Birlikte ilk gün batımımız",
      tapeColor: "kraft"
    },
    {
      year: "1. Ay",
      tag: "O Tatlı Heyecan",
      dateBadge: "İlk Randevu",
      title: "İlk Kahve Buluşmamız & Titreyen Eller",
      description: "Karşılıklı oturduğumuz o masada heyecandan ellerimizin titrediği, gözlerini her kaçırdığında içimin ısındığı an. Kahvelerimiz soğudu ama aramızdaki sohbet hiç bitmedi.",
      quote: "“Seni gördüğüm an kalbimin ritmi değişti.”",
      photo: "assets/timeline-2024.svg",
      photoCaption: "Birlikte içilen ilk kahvenin hatırası",
      tapeColor: "burgundy"
    },
    {
      year: "6. Ay",
      tag: "Alışkanlıklarımız",
      dateBadge: "Zamanla Büyüyen Sevgi",
      title: "Birlikte Geçen Günler & Alışkanlıklar",
      description: "Sesini duymadan uyuyamadığımız geceler, birbirimizin favori şarkılarını ezberleyişimiz ve gün içinde birbirimize attığımız o tatlı fotoğraflar. Birbirimizin hayatına tamamen yerleştiğimiz o günler.",
      quote: "“Senin yanındayken dünya telaşını kaybediyor.”",
      photo: "assets/timeline-2025.svg",
      photoCaption: "Birlikte paylaştığımız tebessümler",
      tapeColor: "kraft"
    },
    {
      year: "Bugün",
      tag: "Sonsuza Dek",
      dateBadge: "Bugün ve Yarınlarımız",
      title: "Daha Yolun Başındayız...",
      description: "Her sabah uyanıp yeniden seni sevmek, günün her anında seni özlemek... Daha birlikte keşfedeceğimiz onlarca sokak, dinleyeceğimiz yüzlerce şarkı ve yazacağımız çok sayfa var.",
      quote: "“Ve hikâyemiz daha yeni başlıyor...”",
      photo: "assets/timeline-2026.svg",
      photoCaption: "Bugünün taze ve mutlu gülümsemesi",
      tapeColor: "pink"
    }
  ],

  // Polaroid albümü
  polaroids: [
    {
      id: "pol-1",
      title: "Gözlerini Kaçırdığın O An",
      date: "Özel Bir Gün",
      note: "Sana hayranlıkla bakarken aniden yakalanıp utandığın o tatlı tebessüm. Kalbimin ritmini değiştiren ilk anlar.",
      image: "assets/polaroid-3.svg",
      rotation: "-3deg",
      tapeType: "top-center"
    },
    {
      id: "pol-2",
      title: "İlk Kahve Buluşmamız",
      date: "Güzel Bir Gün",
      note: "Masada ellerimizin birbirine değdiği, heyecandan ne söyleyeceğimizi şaşırdığımız o sıcacık gün.",
      image: "assets/polaroid-2.svg",
      rotation: "2.5deg",
      tapeType: "top-left"
    },
    {
      id: "pol-3",
      title: "Yağmurda Saçak Altında",
      date: "Yağmurlu Bir Gün",
      note: "Aniden bastıran yağmurda bir kafenin saçak altına sığınıp kahkahalarla ıslandığımız o serin gün.",
      image: "assets/polaroid-1.svg",
      rotation: "-2deg",
      tapeType: "top-right"
    },
    {
      id: "pol-4",
      title: "İlk Sahil Yürüyüşümüz",
      date: "Ilık Bir Akşam",
      note: "Hafif esen rüzgar, dalgaların sesi ve ellerinin elimin içindeki o eşsiz sıcaklığı...",
      image: "assets/polaroid-4.svg",
      rotation: "3.5deg",
      tapeType: "top-center"
    },
    {
      id: "pol-5",
      title: "Gülme Krizine Girdiğimiz An",
      date: "Neşeli Bir Gün",
      note: "Sadece ikimizin bildiği o küçük espriye dakikalarca durmaksızın güldüğümüz an. Yüzünün en güzel hali.",
      image: "assets/polaroid-5.svg",
      rotation: "-1.5deg",
      tapeType: "top-left"
    },
    {
      id: "pol-6",
      title: "Birlikte Bir Hatıra",
      date: "Bugün",
      note: "Birlikte her geçen gün seni daha çok, daha derinden seviyorum.",
      image: "assets/polaroid-6.svg",
      rotation: "2deg",
      tapeType: "top-right"
    }
  ],

  // Özel anılar
  specialMemories: [
    {
      id: "mem-1",
      icon: "💌",
      title: "İlk Mesaj",
      date: "Başlangıç",
      snippet: "Küçük bir selamın, kalbimi hızlandıran tatlı bir aşka dönüşeceği o an...",
      fullStory: "Telefonumun ekranında beliren o bildirim hala aklımda. İki cümlenin ardında saklanan sıcaklık, o gece saatlerce süren konuşmaya dönüştü. İkimiz de uyumak istemiyorduk çünkü uyursak bu rüya gibi sohbet bitecek sanıyorduk.",
      romanticNote: "“Bir bildirim sesi hiç bu kadar güzel duyulmamıştı.”",
      image: "assets/memory-first-message.svg"
    },
    {
      id: "mem-2",
      icon: "☕",
      title: "İlk Buluşma & Heyecan",
      date: "İlk Gün",
      snippet: "Ellerimizin titrediği, kahve fincanlarının arasında kaybolan o tatlı heyecan...",
      fullStory: "Sokağın köşesinde seni ilk gördüğüm an kalbimin nasıl çarptığını asla unutamam. O masum gülümsemen ve göz göze geldiğimizde yüzümüzün kızarması... Kahvelerimiz soğudu ama aramızdaki sıcaklık hiç soğumadı.",
      romanticNote: "“Seni gördüğüm an, ömrümün en güzel sayfalarının başladığını anlamıştım.”",
      image: "assets/memory-first-date.svg"
    },
    {
      id: "mem-3",
      icon: "❤️",
      title: "İlk El Ele Tutuşma",
      date: "Unutulmaz An",
      snippet: "Dünyanın en güvenli, en huzurlu yerine ilk kez dokunduğum an...",
      fullStory: "Elim eline ilk değdiğinde içimden geçen o elektrik dalgasını tarif edemem. Parmaklarımızın birbirine kenetlendiği o saniye, dünya üzerindeki tüm karmaşa durdu ve sadece biz kaldık.",
      romanticNote: "“Elin elimdeyken hiçbir yere geç kalmış hissetmiyorum.”",
      image: "assets/memory-love-confession.svg"
    },
    {
      id: "mem-4",
      icon: "📸",
      title: "İlk Fotoğrafımız",
      date: "İlk Kare",
      snippet: "Hafifçe çekinerek ama sıcacık yan yana geldiğimiz ilk kare...",
      fullStory: "Kameraya bakarken ikimiz de biraz gergindik. 'Güzel çıkacak mıyız?' diye gülerken çekilen o plansız kare, bugün albümümüzün en değerli köşesinde asılı. Yıllar geçse de o ilk karedeki gözlerimizin ışıltısı hiç solmayacak.",
      romanticNote: "“Zamanı donduran ve sonsuzlaştıran ilk hatıramız.”",
      image: "assets/memory-first-photo.svg"
    },
    {
      id: "mem-5",
      icon: "📞",
      title: "İlk Gece Yarısı Telefonu",
      date: "Gece Yarısı",
      snippet: "Sabaha kadar süren, 'hadi önce sen kapat' dediğimiz o uzun konuşma...",
      fullStory: "Saatlerce konuşup hala söyleyecek sözümüzün bitmediği o ilk gece telefonu. Uykumuz gelse bile telefonu kapatmaya kıyamayışımız, fısıldaşarak kurduğumuz hayaller ve uyuyakaldığımız o huzurlu an.",
      romanticNote: "“Sesin, duyduğum en güzel melodi oldu.”",
      image: "assets/memory-night.svg"
    },
    {
      id: "mem-6",
      icon: "🎁",
      title: "İlk Küçük Sürpriz",
      date: "Tatlı Bir Gün",
      snippet: "Beklenmedik bir anda gelen o tatlı sürpriz ve içindeki koca samimiyet...",
      fullStory: "Maddiyatın ötesinde, 'aklıma geldin ve bunu senin için aldım' dediğin o an... Bir hediyenin büyüklüğü paketinde değil, onu seçerken düşünülen sevgide saklıdır. Hala en özel köşemde saklıyorum.",
      romanticNote: "“En güzel hediye, senin bana verdiğin kalbin.”",
      image: "assets/memory-gift.svg"
    },
    {
      id: "mem-7",
      icon: "🎵",
      title: "İlk Kulaklık Paylaşımı",
      date: "Müzikli Bir Gün",
      snippet: "Kulaklığın bir tekini bana uzattığın ve aynı şarkıda sustuğumuz o an...",
      fullStory: "Yürürken kulaklığın bir ucunu kulağıma takman ve çalan şarkıda ikimizin de sessizleşip birbirine bakması. O günden sonra ne zaman o şarkı çalsa, aklıma sadece senin yüzün geliyor.",
      romanticNote: "“Aynı şarkıyı dinlerken aynı şeyleri hissetmek paha biçilemezdi.”",
      image: "assets/memory-birthday.svg"
    },
    {
      id: "mem-8",
      icon: "😂",
      title: "İlk Ortak İç Şakamız",
      date: "Neşeli Gün",
      snippet: "Sadece ikimizin anladığı, kalabalıkta birbirimize bakıp güldüğümüz o detay...",
      fullStory: "Kimsenin anlamadığı ama bizim her duyduğumuzda gülme krizine girdiğimiz o küçük an. İki insanın birbirine özel bir dil geliştirmesi ve sadece bakışlarıyla bile anlaşabilmesi ne kadar güzel bir his.",
      romanticNote: "“Seninle gülmek, hayatın en hafifletici ilacı.”",
      image: "assets/memory-travel.svg"
    },
    {
      id: "mem-9",
      icon: "✨",
      title: "Bugün ve Birlikte Geçen Her An",
      date: "Daima",
      snippet: "Belli bir güne sığmayan, seninle nefes aldığım her güzel saniye...",
      fullStory: "Hayatıma kattığın tüm güzellikler, yüzümdeki tebessümler ve kalbimdeki huzur için binlerce kez teşekkür ederim. Bizim hikâyemiz tek bir günden ibaret değil; her geçen gün seninle yeniden büyüyen sıcacık bir masal.",
      romanticNote: "“İyi ki varsın bir tanem!”",
      image: "assets/memory-best.svg"
    }
  ],

  // Mektuplar
  letters: [
    {
      id: "letter-1",
      title: "Hayatıma Hoş Geldin",
      sender: "İsim 1",
      recipient: "İsim 2'ye",
      date: "Özel Bir Gün",
      preview: "Seninle geçen her günde hayatım öyle renklendi ki...",
      content: `Sevgilim,

Seninle tanıştığımız andan beri hayatım öyle renklendi, öyle güzelleşti ki bunu kelimelere dökmek çok zor. Hayatıma girdiğin ilk günü, o ilk konuşmamızdaki heyecanı dün gibi hatırlıyorum.

Gülüşün bir evin penceresinden sızan sabah güneşi gibi; nereye düşse orayı ısıtıyor, orayı aydınlatıyor. Yorucu bir günün ardından sadece sesini duymak bile tüm yorgunluğumu unutturmaya yetiyor.

Daha yolun çok başındayız ama biliyorum ki seninle yürünen her yol çok güzel olacak. İyi ki varsın bir tanem. Seni çok seviyorum.`,
      waxColor: "burgundy"
    },
    {
      id: "letter-2",
      title: "Gözlerinin Rengine Yazılanlar",
      sender: "İsim 2",
      recipient: "İsim 1'e",
      date: "Bizim Günümüz",
      preview: "Seninle tanıştığım o günden beri kalbimde sıcacık bir huzur var...",
      content: `Canım Sevgilim,

Seninle tanıştığım o günden beri kalbimde sıcacık bir huzur var. Günlerin seninle nasıl bu kadar hızlı ve tatlı aktığını hiç anlamıyorum.

Ellerimi tuttuğunda içime yerleşen o güven duygusu öyle kıymetli ki... Birlikte güldüğümüz anlar, uzun uzun dertleştiğimiz geceler, kahve içerken göz göze geldiğimiz o sessiz saniyeler... Hepsi benim için çok özel.

İyi ki hayatımdasın, iyi ki karşıma çıktın. Birlikte nice güzel günlere...`,
      waxColor: "gold"
    },
    {
      id: "letter-3",
      title: "Bizim İçin Geleceğe Bir Not",
      sender: "İsim 1 & İsim 2",
      recipient: "Yarınlarımıza...",
      date: "Geleceğe Not",
      preview: "Daha birlikte gideceğimiz çok yer, keşfedeceğimiz çok şarkı var...",
      content: `Sevgilim,

Bu mektup geleceğe bırakılmış küçük bir hatıra olsun. Birlikte başladığımız bu güzel masalda daha sayfalar doldurulmayı bekliyor.

Birlikte gideceğimiz konserler, keşfedeceğimiz yeni şehirler, sabah kahvaltıları, yağmurlu günlerde izleyeceğimiz filmler... Bizi bekleyen o kadar çok 'ilk' var ki hepsi için sabırsızlanıyorum.

Sayfalar doldukça birbirimize olan sevgimiz hep ilk günkü gibi taze ve heyecanlı kalsın.

Sonsuza kadar el ele...`,
      waxColor: "burgundy"
    }
  ],

  // Fotoğraf + metin blokları
  editorialSpreads: [
    {
      image: "assets/editorial-spread-1.svg",
      date: "İlk Günler",
      quote: "Seninle geçen sıradan bir gün bile benim için unutulmaz.",
      subtext: "Ellerimizin ilk kez kenetlendiği, zamanın akmayı unuttuğu o taze akşam...",
      layout: "image-left"
    },
    {
      image: "assets/editorial-spread-2.svg",
      date: "Bugün ve Daima",
      quote: "Birbirimizin ellerinde kaybolurken dünyanın en doğru yolunu bulduk.",
      subtext: "Birlikte paylaştığımız her günde, gözlerindeki o ilk günkü ışıltı hiç sönmesin.",
      layout: "image-right"
    }
  ]
};
