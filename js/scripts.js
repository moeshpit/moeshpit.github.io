document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

document.addEventListener('mousedown', function(event) {
    if (event.button === 1) { // 1 steht für die mittlere Maustaste
        event.preventDefault();
    }
});

document.querySelectorAll('p').forEach(function (paragraph) {
        paragraph.innerHTML = paragraph.innerHTML.replace(
          /\[(.*?)\]/g,
          '<strong>[$1]</strong>')});


        const songs = `
$uicideboy$ - 5 Grand at 8 to 1
$uicideboy$ - All Dogs Go to Heaven
$uicideboy$ - Antarctica
$uicideboy$ - Are You Going To See The Rose In The Vase, Or The Dust On The Table
$uicideboy$ - Avalon
$uicideboy$ - Bleach
$uicideboy$ - Degeneration in the Key of A Minor
$uicideboy$ - Escape From BABYLON
$uicideboy$ - Fucking Your Culture
$uicideboy$ - I Wanna Be Romanticized
$uicideboy$ - If Self-Destruction Was an Olympic Event, I’d Be Tonya Harding
$uicideboy$ - Life Is but a Stream~
$uicideboy$ - Lighting the Flames of My Own Personal Hell
$uicideboy$ - Materialism as a Means to an End
$uicideboy$ - Matte Black
$uicideboy$ - NEW PROFILE PIC
$uicideboy$ - Paris
$uicideboy$ - Resistance Is Useless
$uicideboy$ - The Thin Grey Line
$uicideboy$ - WE ENVY NOTHING IN THE WORLD.
$uicideboy$, Pouya - $outh $ide $uicide
$uicideboy$, Pouya - Runnin’ Thru the 7th with My Woadies
aespa - Armageddon
aespa - Supernova
Ariana Grande - 7 rings
Ariana Grande - break up with your girlfriend, i'm bored
Ariana Grande - Dangerous Woman
Ariana Grande - God is a woman
Avril Lavigne - Birdie
Avril Lavigne - Complicated
Avril Lavigne - Crush
Avril Lavigne - Dumb Blonde
Avril Lavigne - I Fell in Love with the Devil
Avril Lavigne - Sk8er Boi
Avril Lavigne - Tell Me It's Over
Baby Lasagna - Rim Tim Tagi Dim
Bennett - Vois sur ton chemin
Benny Benassi - I Love My Sex
Benny Benassi - Love Is Gonna Save Us
Benny Benassi - Satisfaction
BLACKPINK - How You Like That
BLACKPINK - Love to Hate Me
BLACKPINK - Lovesick Girls
BLACKPINK - Pink Venom
BLACKPINK - Pretty Savage
BLACKPINK - Shut Down
BLACKPINK - The Happiest Girl
Blümchen - Boomerang
Blümchen - Herz an Herz
Blümchen - Nur Geträumt
BONES - LookingForThis?
BONES - OrderWhatYouWantIWillTakeThePepperonisOff
BONES - TheDifferenceBetweenUs
BONES - TheHandOfTheWitch
BONES - YouCanTellALotAboutAManByTheNeckOfHisShirt
Cher - Dancing Queen
Cher - Gimme! Gimme! Gimme!
Cher - Mamma Mia
Cher - Waterloo
Clairo - Flaming Hot Cheetos
Clairo - Pretty Girl
DAOKO - Fog
DAOKO - JK
DAOKO - VOICE
De Jeugd van Tegenwoordig - Nog Lang Niet
De Jeugd van Tegenwoordig - Watskeburt?!
Die Antwoord - Alien
Die Antwoord - Baby's on Fire
Die Antwoord - Banana Brain
Die Antwoord - Cookie Thumper!
Die Antwoord - Daddy
Die Antwoord - DIE ANTWOORD IS DEAD
Die Antwoord - Enter the Ninja
Die Antwoord - Fish Paste
Die Antwoord - Fok Julle Naaiers
Die Antwoord - Girl I Want 2 Eat U
Die Antwoord - Happy Go Sucky Fucky
Die Antwoord - I Dont Dwank
Die Antwoord - Pitbull Terrier
Die Antwoord - Sex
Die Antwoord - Strunk
Die Antwoord - Ugly Boy
Die Antwoord - Wat Kyk Jy?
DJ Blyatman, Russian Village Boys - Cyka Blyat
DJ Blyatman, Russian Village Boys - Instababe
DJ Blyatman, Russian Village Boys - Razjebasser
DJ Blyatman, длб - Kamaz
Doll.ia - Kawaii Kitchen!
Doll.ia - Plushie Gun!
Elita - Introverted
Elita - Perverted
E-rotic - GIMME GIMME GIMME
E-rotic - Oh Nick Please Not So Quick
for UR "Bloody" Betty - iMagine Boo
for UR "Bloody" Betty - misamisa@ra＿eme.com
Future Girlfriend 音楽 - Benson cut 今夜
Future Girlfriend 音楽 - Crazy Nights 狂気夜
Future Girlfriend 音楽 - Hi High
Future Girlfriend 音楽 - Pink Dance ピンクのダンス
Getter Jaani - Rockefeller Street
Grimes - 4ÆM
Grimes - Flesh without Blood
Grimes - Infinite ❤️ Without Fulfillment
Grimes - Kill v. Maim
Grimes - Oblivion
Grimes - Shinigami Eyes
Grimes, Illangelo - I Wanna Be Software
Grimes, 潘PAN - Scream
JINZO THE TRAP LORD - ☯ レディ・イン・ザ・ウォーター420 // UNDERWATER SHAWTY ☯
JINZO THE TRAP LORD - EVANGELION // フライ・ミー・トゥー・ザ・ムーン
JINZO THE TRAP LORD - HIGHS OF 87 // 気象チャンネル
JINZO THE TRAP LORD - SEGA™ SKY PLAZA // スカイプラザ
JINZO THE TRAP LORD - フロストデーモン /// f r o s t ✨
JINZO THE TRAP LORD - ほこり// DUST
JINZO THE TRAP LORD - 私の名前はGUCCI MANEです。
Joost - Europapa
Joost - Luchtballon
Joost - Wachtmuziek
Joost & Jack Parow - Fryslân Bop
Käärijä, Joost - Trafik!
Lil Mariko - Hi, I'm a Slut
Lil Mariko, Full Tac - Where's My Juul??
Lil Mariko, Zheani - Disgusting
Lil Peep - Five Degrees
Lil Peep - High School
Meg & Dia - Monster
Modern Talking - Brother Louie
Modern Talking - Cheri, Cheri Lady
Mother Mother - Hayloft
Mother Mother - Hayloft II
My Bloody Valentine - Only Shallow
My Bloody Valentine - Sometimes
My Bloody Valentine - To Here Knows When
My Bloody Valentine - When You Sleep
Natalie Portman's Shaved Head - Bedroom Costume
Natalie Portman's Shaved Head - Confections
Natalie Portman's Shaved Head - Holding Hands in the Shower
Natalie Portman's Shaved Head - Slow Motion Tag Team
Natalie Portman's Shaved Head - Sophisticated Side Ponytail
t.A.T.u. - All The Things She Said
t.A.T.u. - Clowns
t.A.T.u. - How Soon Is Now?
t.A.T.u. - Malchik Gay
t.A.T.u. - Not Gonna Get Us
t.A.T.u. - Show Me Love
t.A.T.u. - Нас не догонят
t.A.T.u. - Я сошла с ума
the girl & the robot - never ever
the girl & the robot - please stay
TRI.BE - 둠둠타
TRI.BE - 러버덤
TRI.BE - 우주로
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