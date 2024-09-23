document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

document.querySelectorAll('p').forEach(function (paragraph) {
        paragraph.innerHTML = paragraph.innerHTML.replace(
          /\[(.*?)\]/g,
          '<strong>[$1]</strong>')});


        const songs = `
$uicideboy$ - ...And To Those I Love, Thanks For Sticking Around
$uicideboy$ - [whispers indistinctly]
$uicideboy$ - Carrollton
$uicideboy$ - O Pana!
$uicideboy$ - Putrid Pride
$uicideboy$, Pouya - $outh $ide $uicide
.anxious. - Boketto
.kom - Commando Prompt
『drip drop』 - ◅ ≏ ☀ Renai Circulation ☀ ≏ ▻
『drip drop』 - Harro Dandy ～ ｓａｉｌｏｒ ｄｒｅａｍｓ ｅｐ
『drip drop』 - I Will Survive ～
〆 - Ever stay snow
〆 - 海鳴り (music overlaps)
2CELLOS - Eye of the Tiger
2CELLOS - Pirates of the Caribbean
2CELLOS - Smells Like Teen Spirit
2CELLOS - Smooth Criminal
2CELLOS - Use Somebody
2CELLOS - Viva La Vida
2CELLOS - Wake Me Up
2CELLOS - Welcome To The Jungle
3L - タイニーリトル・アジアンタム
3L - モノクロ・インザナイト
3l3phantro - I can't help but WKTK 2013
4nzu - Stay Online
6th - Breakdown The Mosh Pit
6th - Lost Technology
100-200, tanigon - 元気をだして
A L E X - (sad song title)
A L E X - ｎｏ ｏｎｅ ｗｏｕｌｄ ｍｉｓｓ ｍｅ
A L E X - ｚｅｌｄａ'ｓ ｌｕｌｌａｂｙ
ABBA - GIMME! GIMME! GIMME!
Ahmad Jamal - Poinciana
Ahmad Jamal - Snowfall
Air - Alone In Kyoto
Air - Cherry Blossom Girl
aki - Regenerated Blue
Allegories - Funny Way Of Loving You
Amon Tobin - At the End of the Day
Amon Tobin - Easy Muffin
Amon Tobin - Four Ton Mantis
Amon Tobin - Keep Your Distance
Amon Tobin - Saboteur
Amon Tobin - Verbal
Amon Tobin - Yasawas
anNina - Taishou a
ARM/miko ゆか まり - お嫁にしなさいっ！
Art Tatum - Tenderly
Arthur Beatrice - Councillor
Arthur Beatrice - Late
Arthur Beatrice - Midland
Arthur Beatrice - Ornament & Safeguard
Atneck - Going down
Atomic - Slug it out
Atsushi Ohara, Masayoshi Minoshima - りずみっく!
Avril Lavigne - Sk8er Boi
Ayako Saso - NO POSITION
ayame* - mellow mellow
ayame* - Retrospective
ayame* - SACRIFICE
ayame* - Stardust
ayame* - Visions
ｂ - PC、休憩。
ｂ - おやすみ小路
ｂ - カラメル
ｂ - ゆき散る
ｂ - 争乱の軌道
ｂ, bqスタヂオ - 虫と石楠花
ｂ, bqスタヂオ - 金魚の季節
ｂ, cres. - After Party
Bag Raiders - Always
Bag Raiders - Castles In The Air
Bag Raiders - Golden Wings
Bag Raiders - Gone Away
Bag Raiders - Shooting Stars
Bag Raiders - Snake Charmer
Bag Raiders - So Demanding
Bag Raiders - Sunlight
Bag Raiders - Way Back Home
Bart A LiCE - Teip
Basement Jaxx - Do Your Thing
Basement Jaxx - Red Alert
Basement Jaxx - Rendez-Vu
Basement Jaxx - Where's Your Head At?
Basement Jaxx, Lisa Kekaula - Good Luck
Basement Jaxx, Lisa Kekaula - U Don't Know Me
Bastille - Flaws
Bastille - Icarus
Bastille - No Angels
Bastille - Pompeii
Bastille, Ella Eyre - Oh Holy Night
Bastille, The Wombats - Greek Tragedy
bbno$, Rich Brian - edamame
Benny Benassi - I Love My Sex
Benny Benassi - Love Is Gonna Save Us
Benny Benassi - Satisfaction
Benny Benassi, Gary Go - Cinema
bermei.inazawa - 瞬き
BIBIM, RIN - Komplex Pok-chap-han Ma-eum
Big Data - Big Dater
Big Data - Bombs Over Brooklyn
Big Data - The Stroke of Return
Big Data, Joywave - Dangerous
Bill Evans - For Heaven's Sake
Billx - ECLIPSE
Björk - Army of Me
Björk - Enjoy
Björk - I Go Humble
Björk - It's Not Up To You
Björk - The Modern Things
Björk, Brodsky Quartet - Possibly Maybe
Blackbird Blackbird - Beasts
Blacklolita - Breakmoon
Blacklolita - Domin ae te
Blacklolita - Matrix Management
Blacklolita - 黄昏の碑文
BLACKPINK - AS IF IT'S YOUR LAST
BLACKPINK - BOOMBAYAH
BLACKPINK - Crazy Over You
BLACKPINK - DDU-DU DDU-DU
BLACKPINK - FOREVER YOUNG
BLACKPINK - How You Like That
BLACKPINK - Kill This Love
BLACKPINK - Love To Hate Me
BLACKPINK - PLAYING WITH FIRE
BLACKPINK - Pretty Savage
BLACKPINK - STAY
BLACKPINK - WHISTLE
BLACKPINK, Selena Gomez - Ice Cream
Bladee - Best Buy
Bladee - D-925
Bladee - Gatekeeper
Bladee - Knightsbridge
Bladee - Romeo
Bladee, Black Kray - Backstr€€t Boys
Bladee, Yung Lean, Ecco2k - Cherry Bracelets
Blockhead - Hungover Like Whoa
Blockhead - The Robin Byrd Era
Blockhead - Tools Of The Industry
Blümchen - Boomerang
Blümchen - Herz an Herz
Blümchen - Nur Geträumt
Bombay Bicycle Club - Carry Me
Bombay Bicycle Club - Come To
Bombay Bicycle Club - Eyes Off You
Bombay Bicycle Club - Feel
Bombay Bicycle Club - Home By Now
Bombay Bicycle Club - Luna
Bombay Bicycle Club - Overdone
Bombay Bicycle Club - Whenever, Wherever
BONES - 42Carats
BONES - AsTheWorldHasATendencyOfDoing
BONES - Eject
BONES - Espadrilles
BONES - IfYouHadAZuneIHateYou
BONES - LayMeInTheRiver
BONES - LookingForThis?
BONES - OrderWhatYouWantIWillTakeThePepperonisOff
BONES - TheDifferenceBetweenUs
BONES - TheHandOfTheWitch
BONES - WhereTheTreesMeetTheFreeway
BONES - YouCanTellALotAboutAManByTheNeckOfHisShirt
BONES, cat soup, curtis heron - it goes like this
Broken Bells - After The Disco
Broken Bells - Holding On For Life
Broken Bells - Lazy Wonderland
Broken Bells - Perfect World
Broken Bells - The Angel And The Fool
Broken Bells - The Ghost Inside
Broken Bells - The High Road
Bud Powell - Anthropology
Calvin ALiCE, Big Arrow - I'm Alone
Camp Howard - Don't Say Shit You Don't Mean
Caramell - Caramelldansen
cat soup - Attollent
cat soup - cessation
cat soup, hnrk - arcrail
Chairlift - Crying in Public
Chairlift - No Such Thing as Illusion
Chairlift - Ottawa to Osaka
Chairlift - Romeo
Chairlift - Sidewalk Safari
City Girl - on the train somewhere between my apartment and you
Claire - A Million Drums
Claire - Broken Promise Land
Clairo - 4EVER
Clairo - Flaming Hot Cheetos
Clairo - Pretty Girl
Clairo, Danny L. Harle - B.O.M.D.
Clairo, Rejjie Snow - Hello?
College, Electric Youth - A Real Hero
Cosine - Protractor
Cosine - あの海に映るものは
Cres. - After Party
Crystal Castles - Kept
C-Show - What's Goin' On
Culture Beat - Mr. Vain
cybermiso - latinpony
daisan - Petal's Journey
DANGERDOOM - Sofa King
DANGERDOOM, Cee-Lo - Benzi Box
DAOKO - Fog
DAOKO - o○o○o
DAOKO - ずれてる
DAOKO - ネガティブモンスター
DAOKO - はじめましての気持ちを
DAOKO - まだゆめをみている
DAOKO - 浪漫非行
DAOKO - 脳内Disco
DAOKO - 試験一週間前
DAOKO, Paranel, Jinmenusagi - GRAVITY
daph - Pesticide
daph - 風の置き手紙
Deadmau5, Kaskade - I Remember
deadmino4ma, Big Arrow - Kimi & Watashi
Death Cab for Cutie - Soul Meets Body
Desireless - Voyage Voyage
Die Antwoord - $O$
Die Antwoord - DIE ANTWOORD IS DEAD
Die Antwoord - Enter the Ninja
Die Antwoord - Fish Paste
Die Antwoord - In Your Face
Die Antwoord - Rich Bitch
Die Antwoord - Sex
Die Antwoord - Wat Kyk Jy?
Die Antwoord - Wie Maakie Jol Vol?
Digitalism - Circles
Dischord - In Silence
Dischord - The Ultimate Challenge
DJ 296 - 今夜はオーバードーズ。
DJ Blyatman, Russian Village Boys - Cyka Blyat
DJ Blyatman, Russian Village Boys - Instababe
DJ Blyatman, Russian Village Boys - Razjebasser
DJ Blyatman, длб - Kamaz
DJ Genki, Yukacco - Shining World
DJ Myosuke - Judgement
DJ Myosuke, RedOgre, MC Mike Redman - The Vanguard
DJ Okawari - Flower Dance
DJ Okawari - Luv Letter
DJ WAKARAN GIRL, K/DA - POP/STARS (Хард Басс FLEX)
Dragonette - Fixin to Thrill
Dragonette - Gone Too Far
Dragonette - Liar
Dragonette - My Legs
Dragonette - Okay Dolore
Dragonette - True Believer
Drumsound, Bassline Smith, Ayah Marar - The Only Way
Dubscribe - Downward Spiral
Dustboxxxx - Smashup
Dustboxxxx - Smashup
EarBreaker - Hit Back
Electric Youth - Another Story
Electric Youth - The Best Thing
Electric Youth - WeAreTheYouth
Empire of the Sun - We Are the People
E-rotic - GIMME GIMME GIMME
E-rotic - Help Me Dr. Dick
E-rotic - Kiss Me
E-rotic - Kiss Me
E-rotic - Oh Nick Please Not So Quick
Est - ハル
Feryquitous - Camouflage Announce
Feryquitous - Echod
filmiiz - Just a thought
Fitz And The Tantrums - 6am
Fitz And The Tantrums - Fools Gold
Fitz And The Tantrums - MerryGoRound
Florence + the Machine - Dog Days Are Over
Florence + the Machine - Drumming Song
Florence + the Machine - Swimming
Florence + the Machine - You've Got the Love
FM Belfast - Frequency
FM Belfast - Lotus
FM Belfast - Synthia
fmy. - Always 2 Be
fmy. - Forever 2 Be
fmy., *airi - Dream Dance
Fools Garden - Lemon Tree
for UR "Bloody" Betty - iMagine Boo
for UR "Bloody" Betty - misamisa@ra＿eme.com
for UR Betty - Our belief
for UR Betty - wind is blowing from the asia
Foster The People - A Beginner's Guide to Destroying the Moon
Foster The People - Are You What You Want to Be?
Foster The People - Ask Yourself
Foster The People - Don't Stop
Foster The People - Houdini
Foster The People - Warrant
Foster The People - Waste
Four Tet - My Angel Rocks Back and Forth
Freddie Dredd - Abuse
Freezer - Never Stop The Fucking Rave
Fujiya & Miyagi - Collarbone
Fujiya & Miyagi - In One Ear & Out the Other
Fujiya & Miyagi - Photocopier
Fumiaki Kobayashi - White Storm
Future Girlfriend 音楽 - Benson cut 今夜
Future Girlfriend 音楽 - Crazy Nights 狂気夜
Future Girlfriend 音楽 - Hi High
Future Girlfriend 音楽 - Pink Dance ピンクのダンス
G.G. Maeda - 庄周梦蝶
Getter Jaani - Rockefeller Street
Gnarls Barkley - Crazy
Gnarls Barkley - Going On
Go Shiina - Grouch
Go Shiina - Shoko
Go Shiina - Station Opening
Go Shiina - Yase-Transformation
Green Minoshima - Armagemyon
Grimes - 4ÆM
Grimes - Oblivion
Grimes - Shinigami Eyes
Grimes - Violence
Grimes, Illangelo - I Wanna Be Software
Grimes, 潘PAN - Scream
H.△.T GiGAR - RISE THE BLACK
HAARPER - Darth Vader
HAARPER - Thotties
haenssler CLASSIC - Russia
Hank Jones - My Wish
Hard Bass School - Наш гимн
Haruna - Cheek Colours
Hatsune Miku - 39
Hatsune Miku - City Night Lights
Hatsune Miku - DATA 2.0
Hatsune Miku - I am (NOT) Real
Hatsune Miku - Ievan Polkka
Hatsune Miku - Last Night, Good Night
Hatsune Miku - Nyanyanyanyanyanyanya!
Hatsune Miku - ONLINE GAME ADDICTS SPRECHCHOR
Hatsune Miku - Unlimited Skies 2.0
Hatsune Miku - アカツキアライヴァル
Hatsune Miku - エンヴィキャットウォーク
Hatsune Miku - はやぶさ【ちょっと忙しい人向けver.】
Hatsune Miku - ブラック★ロックシューター
Hatsune Miku - マトリョシカ
Hatsune Miku - みくみくにしてあげる♪【してやんよ】
Hatsune Miku - よっこらせっくす
Hatsune Miku - 二次元ドリームフィーバー
Hatsune Miku - 千本桜
Hatsune Miku - 心拍数♯0822
Hatsune Miku - 恋スルVOC@LOID
Hatsune Miku - 桜ノ雨
Hatsune Miku - 腐れ外道とチョコレゐト
Hatsune Miku - 裏表ラバーズ
Hertzinfarkt - Wir Trauen Uns Was
Hiroshi Okubo, SAK. - Beautiful Colors
Hizuru - Submarine
HM Surf - Lemonade
Horace Silver Trio - Message from Kenya
Hot Chip - I Feel Better
IS Kingdom - Countdowning
IS Kingdom - Now is a Dull party
ItoO Yusuke - BOOM!
Iwasaki Taku - Douse Konna no ga Suki desho?
Iwasaki Taku - Her wish is to die too
Iwasaki Taku - Peacock blue eyes
Iwasaki Taku - Sonatine for flute & piano
izna - Spot Enemy
Jack Stauber - Buttercup
Japanese Wallpaper, Jesse Davidson - Between Friends
Jauz - Feel The Volume
JINZO THE TRAP LORD - ☯ レディ・イン・ザ・ウォーター420 // UNDERWATER SHAWTY ☯
JINZO THE TRAP LORD - EVANGELION // フライ・ミー・トゥー・ザ・ムーン
JINZO THE TRAP LORD - HIGHS OF 87 // 気象チャンネル
JINZO THE TRAP LORD - SEGA™ SKY PLAZA // スカイプラザ
JINZO THE TRAP LORD - フロストデーモン /// f r o s t ✨
JINZO THE TRAP LORD - ほこり// DUST
JINZO THE TRAP LORD - 私の名前はGUCCI MANEです。
Juggernaut. - Abyss
Juggernaut. - CounterFate
Juggernaut. - Hypervoltage
Juggernaut. - Skyrim
Juggernaut., Reaper - Desolation
Juliette and the Licks - Inside the Cage
Jurassic5 - What's Golden
Kamikaze - formidableness
Kaname Shigeyoshi - the rain turned to autumn leaves
Kaoru - Emptyset
Kaoru, 紅原ユウ子 - レルトレナイ
Kenichi Chiba - PIANOTAP
Kenichi Chiba, EVO+ - Gotta go
Kenji Kawai - harikitte ikou!
Kenji Kawai - Main Theme
Kenji Kawai - Main Theme ~revise~
Kensuke Ushio - Hero Theme
Kensuke Ushio - Night Cruising
Kensuke Ushio - Nothing Happens
Kensuke Ushio - Peco
Kensuke Ushio - Ping Pong Phase2
Kensuke Ushio - どうせこんなのがスキでしょ?
Kero Kero Bonito - Intro Bonito
Kero Kero Bonito - My Party
Kill Bill - Gangsta Rap 101 // Cybersex Romance
Kill Bill - GHOST
Kill Bill - I THINK YOU'RE REALLY CUTE SO I MADE A SEX SONG ABOUT YOU
Kill Bill - i trust you.
Kill Bill, Scuare - Vibe Killers
Kortarow - Insanity of Legitimacy
Kromestar - 8-Ball
Kromestar - Aston-Martin
Kromestar - Frenemy
k-shi - La fleur
k-shi - msemagiq
Kuroa* - やばいつよくてあたまいいあたいのうた
Kyle Eastwood - How Y'all Doin'
Kyle Eastwood - Song For Ruth
Laibach - Achtung!
Laibach - Ballad Of A Thin Man
Laibach - Tanz Mit Laibach
lil hawk boy, ovi - sleepover
Lil Peep - Five Degrees
Lil Peep - Gym Class
Lil Peep - High School
Lil Peep - The Way I See Things
Lil Peep - the way i see things (prod. kryptik)
lily-an - 夜のサーカス
lily-an - 言葉の花
Little Boots - All for You
Little Boots - Ghost
Little Boots - Hearts Collide
Little Boots - Mathematics
Little Boots - Staring at the Sun
Little Boots - Stuck On Repeat
Little Boots - Stuck on Repeat
Little Boots - Stuck on Repeat
Little Boots - Symmetry
loco - Painter
Lolistyle Gabbers - All Is Fair In Love & Sampling
Lolistyle Gabbers - Extreme Panchira Flash
Lolistyle Gabbers - Happy Capitulation!!
Lolistyle Gabbers - Popcorn pulsar!!
Lolistyle Gabbers - ご注文はジェームズ・ブラウンの死ですか?
Lonely God - Marlboro Nights
Luci - Belt conveyor
LuL - starlight
LuL - 六花
M83 - Lower Your Eyelids to Die with the Sun
M83 - Midnight City
M83 - Midnight City
M83 - Wait
Madonna - American Pie
Madonna - American Pie
Mandalay - This Life
Manu Chao - Bongo Bong
Marching - Etudes No.12 -another approach-
Masayoshi Minoshima, nomico - Bad Apple!!
Masayoshi Minoshima, nomico - Chase
Massaith - K.A.M.A.Z.
Massive New Krew - Overwatch
Meg & Dia - Monster
Memory Tapes - Follow Me
Memory Tapes - Graphics
Memory Tapes - Neighborhood Watch
Memory Tapes - Plain Material
Memory Tapes - Thru The Field
Memory Tapes - Treeship
Memory Tapes - Yes I Know
Métisse - Boom Boom Ba
MF DOOM - Kookies
MF DOOM - Vomitspit
mican* - Border of Life
mican* - EDGE
mican*, ayame* - Captain Murasa
mikanzil, PSYQUI - ENDROLL
Mili - Ga1ahad and Scientific Witchery
Mili - RTRT
Mili - Summoning 101
Mili - world.execute(me);
milka - クライム・ストーリーときみのウソ
Milt Buckner, Milt Hinton & Osie Johnson - Idle Gossip
Milt Buckner, Milt Hinton & Osie Johnson - Little Miss Maudlin
Milt Buckner, Milt Hinton & Osie Johnson - Someone Else's Love
MISTAH FAB - HELICOPTERS
MØ - Maiden
MØ - Never Wanna Know
MØ - Pilgrim
MØ - The Sea
MØ - Waste of Time
MØ - XXX 88
Moby - Why Does My Heart Feel so Bad?
Moby, The Void Pacific Choir - Are You Lost in the World Like Me
Modern Talking - Brother Louie
Modern Talking - Brother Louie
Modern Talking - Cheri, Cheri Lady
moro - Dystopia
Morrigan, リリィ - 080723
mossari, TEA - 隣町の蜃気楼
Mr. Little Jeans - Heaven Sent
Mr. Little Jeans - Heaven Sent
Mr. Little Jeans - Valentine
Mr. Little Jeans, The Silverlake Conservatory Of Music Youth Chorale - Oh Sailor
Mr. Twin Sister - In The House Of Yes
MS MR - Bones
MS MR - Dark Doo Wop
MS MR - hurricane
MS MR - This Isn't Control
Mux Mool - 1st And 4th
Mux Mool - Death 9000
Mux Mool - Enceladus
Mux Mool - SFW Porn
My Bloody Valentine - Only Shallow
My Bloody Valentine - Sometimes
My Bloody Valentine - Sometimes
My Bloody Valentine - To Here Knows When
My Bloody Valentine - When You Sleep
MYTK - Various Artists
myu314, ビートまりお - live so groovy
nachi - Against, Perfect Cherry Blossom.
nachi - Determine
nachi - Strawberry Crisis!!
NaiveDog - GAROU
Nana Takahashi - MAD CIRCUS
Nana Takahashi - 絡繰りドール
Nanahira - びっくりさせたらおこるよ!
Nanidato - Doki Doki no Disco 「ドキドキのディスコ」
naotyu-, ｂ - blackout
Nardis - Reload
Natalie Portman's Shaved Head - Bedroom Costume
Natalie Portman's Shaved Head - Confections
Natalie Portman's Shaved Head - Holding Hands in the Shower
Natalie Portman's Shaved Head - Slow Motion Tag Team
Natalie Portman's Shaved Head - Sophisticated Side Ponytail
Nena - 99 Luftballons
nnn - Centipede
nnn - Religion
nomico - Don't Lose
nomico - Lost Emotion
Nyarons - HARUKAKANATA
ODESZA - Always This Late
ODESZA, Zyra - Say My Name
Olive - I'm Not in Love
Oliver Tree, Robin Schulz - Miss You
Olympic Ayres - Control
only - A Lake in the Autumn
onoken, ｂ - ホシマジナイ
Optomistic - Score
O-SE - 脆弱な人間と創作
OSTER project - Devilz Staircase
Outkast - Hey Ya!
OVERWERK - 12:30
Padded Cell - Are You Anywhere
Padded Cell - Word Of Mouth
Paraf - Perspektiva
paraoka - free flyer
paraoka - REAL 210
Passion Pit - Carried Away
Passion Pit - Constant Conversations
Passion Pit - Hideaway
Passion Pit - Sleepyhead
PHARAOH - Дико, например
PHARAOH - Идол
PHARAOH - Пожар
PHARAOH - Фосфор
Queens Of The Stone Age - Make It Wit Chu
QUIL - Alice
qurter - amara
qurter - Delusion
Ra Ra Riot - Beta Love
Rachel Stevens - Dumb Dumb
Rachel Stevens - Negotiate With Love
Rachel Stevens - Secret Garden
Radiohead - (Nice Dream)
Radiohead - Airbag
Radiohead - Creep
Radiohead - Kid A
Radiohead - Knives Out
Radiohead - Treefingers
RANDO: - Polar Route
RANDO: - QUAD AMMO
Red Garland - M Squad
Regina Spektor - All the Rowboats
Regina Spektor - Ballad of a Politician
Rich Brian - Dat $tick
Rin - Micro Spider
Robyn, Kleerup - With Every Heartbeat
roop - 雨に唄えば
RoughSketch - Ruffnomics Reviva
Round Wave Crusher VS. 4nzu - That Short Hair Girl
Round Wave Crusher VS. LOLISTYLE GABBERS - tease
Röyksopp - Happy Up Here
Russian Village Boys, Mr. Polska - Adidas
Ryunosuke Kudo - M.A.Z.A.I.
Ryunosuke Kudo - Play Game
San Cisco - Beach
Sana - Realize My Desire
Sana - ドキドキWonderland
Sana - ぱーりー！ぱーりー！〜恋のラジパンダリ〜
Sanaas - Get Funky
September - Cry For You
Shimamiya Eiko - Higurashi no Naku Koro ni
Shoichiro Hirata - Believe the Rainbow
Silver Forest - ケロ⑨destiny
Sneaker Pimps - 6 Underground
spctrm, yrufit - Ripple
Surf Curse - Freaks
Swedish House Mafia, Pharrell - One
sweez - ブルームーン
t.A.T.u. - All The Things She Said
t.A.T.u. - Clowns
t.A.T.u. - Malchik Gay
t.A.T.u. - Show Me Love
t.A.T.u. - Ya Soshla S Uma
t.Komine - ボーダーライン
Taku Iwasaki - Her wish is to die too
TCN190 - PARANOiA TCN
Teddy Wilson - You Took Advantage of Me
Teen Mom - Naked In The Eyes Of My Love
the end of genesis ayaka* turbo type 〆 - love♥sign
the girl & the robot - never ever
the girl & the robot - please stay
The Prophet - Wanna Play?
The Submarines - 1940
The Submarines - Fern Beard
The Submarines - Xavia
The Weather Station, Everything I Know - What Am I Going To Do
Thievery Corporation - All That We Perceive
TV on the Radio - Staring at the Sun
TWICE - Knock Knock
TWICE - SIGNAL
TWICE - UP NO MORE
TWICE - UP NO MORE
Umiai - Sandstone
USAO - Big Daddy
Various - Silver Moon, Red Moon
Violent Femmes - Add It Up
Violent Femmes - Add It Up
Violent Femmes - Blister In The Sun
Violent Femmes - Kiss Off
wonderland*material(s) - ちょっとお気に入り
Woodkid - Conquest of Spaces
Woodkid - Falling
Woodkid - Ghost Lights
Woodkid - I Love You
Woodkid - The Golden Age
Woodkid - Where I Live
Xacla - cybernetic solar explosion
xi - Turas-Mara
YACHT - Where Does This Disco?
yanagi - ?deelmooouvy
yanagi - Presto -the other side-
Yeah Yeah Yeahs - Heads Will Roll
Ym1024 - Chord Changes
Ym1024 - Double Magic
Ym1024 - the great farewell
ZHU - Faded
ZHU - Paradise Awaits
ZONE-33 - XENOS
アクジ - ELIMINATE REloaded 2019
かめりあ - overkill (Schranz VIP)
かめりあ - ベースラインやってる？笑
かめりあ, ななひら - 全日本お風呂化計画
ななひら - Seashore on the moon
ななひら - びっくりさせたらおこるよ!
ななひら - めいらーだえもん☆だもん
ナユタン星人, 初音ミク - アンドロメダアンドロメダ
ハム - Coming home
ハム - Fourth dimension
ハム - Magic du Soleil
ハム - monocology
ハム - 奏の森の囁声
めらみぽっぷ - NeGa/PoSi*ラブ/コール
めらみぽっぷ - 竹ノ花
めらみぽっぷ - 竹ノ花
リズナ - Hale inthe 270°
凋叶棕 - 永夜 「Imperishable Challengers」
大嶋啓之 - A Porta em Verao
幽閉サテライト, Senya - Who Am I?
庭師D - C・☆・N・D・Y・!
玲 - Bring It On
綾倉盟 - Real Intension
綾倉盟 - Romantic Night
綾倉盟 - your smile, your face, your lies, your love
美里 - Necro Fantasia
葉月悠 - uisce beatha agus rince
閣下 - Alfheim
飛燕流舞 - Kung-fu Empire
鹿乃 - イヤホンと蝉時雨
鹿乃 - 君が生まれた日
鹿乃 - 地球最後の告白を
鹿乃 - 骸骨楽団とリリア
        `;

        const songList = document.getElementById('song-list');
        songs.trim().split('\n').forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            songList.appendChild(li);
        });

        let isExpanded = false;

        function togglePlaylist() {
            const playlist = document.getElementById('song-list');
            if (!isExpanded) {
                playlist.style.maxHeight = playlist.scrollHeight + 'px';
            } else {
                playlist.style.maxHeight = '0';
            }
            isExpanded = !isExpanded;
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.onscroll = function() {
            const backToTopButton = document.querySelector('.back-to-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };