/*
All info in the list for each level

Level data includes:
    name : Name of the level in-game
    image : File path of the level image
    video : Video of verification (or first victor if link doesn't work)
    description : Description of the level in-game. '(No description provided)' if there is none
    ID : ID for the level in-game
    creator : Name of the player(s) who created the level
    verifier : Name of the player who verified the level
    times : List of info for the leaderboard (Note: new times must be sorted manually)
        # : Position of submission on leaderboard
            name : Name of the player that completed the level
            time : The time for the completion of the level

Level Template:

    # : {
        name : 'Name',
        image : './Images/levelName.webp',
        video : 'https://www.youtube.com/embed/VideoID',
        description : '(No description provided)',
        ID : 123456789,
        creator : 'Creator',
        verifier : 'Verifier',
        times : {
            1 : {
                name : 'Name',
                time : 'X:XX.XXX',
                video : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                linkText : 'YouTube',
            },
            2 : {
                name : 'Name',
                time : 'X:XX.XXX',
                video : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                linkText : 'YouTube',
            },
        },
    },

*/
const data = {
    1 : {
        name : 'GODHANDUFO',
        image : './Images/godHandUFO.webp',
        video : 'https://www.youtube.com/embed/JFcyY0Sv_DA',
        description : 'TOP ONE UDUFO PLATFORMER CHALLENGE - 9887 ATTEMPTS - MADE BY ASTATINE16 AND C0SMICERR0R - GIVE PRAISE TO THE HAND!',
        ID : 132684908,
        creator : 'Astatine16 & c0smic',
        verifier : 'Astatine16',
        times : {
            1 : {
                name : 'Astatine16',
                time : '1:09.429',
                video : 'https://www.youtube.com/watch?v=JFcyY0Sv_DA',
                linkText : 'YouTube',
            },
        },
    },
    2 : {
        name : 'FALLEN ANGEL',
        image : './Images/fallenAngel.webp',
        video : 'https://www.youtube.com/embed/IhlrP2eI7qk',
        description : 'Fallen Angel Industrial Plant',
        ID : 131366052,
        creator : 'Astatine16',
        verifier : 'Astatine16',
        times : {
            1 : {
                name : 'Astatine16',
                time : '18.599',
                video : 'https://www.youtube.com/watch?v=IhlrP2eI7qk',
                linkText : 'YouTube',
            },
        },
    },
    3 : {
        name : 'BrambleIfItWasGood',
        image : './Images/barmbleGood.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : '(No description provided)',
        ID : 114998675,
        creator : 'ashfalcons44',
        verifier : 'ashfalcons44',
        times : {
            1 : {
                name : 'ashfalcons44',
                time : '13.725',
                video : '',
                linkText : '',
            },
        },
    },
    4 : {
        name : 'noobedufopc ultra',
        image : './Images/noobedufopcUltra.webp',
        video : 'https://www.youtube.com/embed/e1Ja8Zj6ggA',
        description : 'WOKEST udufopcl level EVER.....',
        ID : 131546166,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'Astatine16',
                time : '37.316',
                video : '',
                linkText : '',
            },
            2 : {
                name : 'ItsNoobe',
                time : '39.645',
                video : '',
                linkText : '',
            },
        },
    },
    5 : {
        name : 'Lament',
        image : './Images/lament.webp',
        video : 'https://medal.tv/games/geometry-dash/clip/jF9HkN6obmyvvpIzm?invite=cr-MSxTTzksNTM4NjMyNTM5',
        description : '(No description provided)',
        ID : 114988101,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'Astatine16',
                time : '10.654',
                video : 'https://www.youtube.com/watch?v=41ZxuByDxVo',
                linkText : 'YouTube',
            },
            2 : {
                name : 'tenkuyuhh',
                time : '22.520',
                video : '',
                linkText : '',
            },
            3 : {
                name : 'yesimrush',
                time : '31.200',
                video : '',
                linkText : '',
            },
        },
    },
    6 : {
        name : 'BlUDUFObath',
        image : './Images/bath.webp',
        video : 'https://medal.tv/games/geometry-dash/clip/jEWoBygD38UGmfo6w?invite=cr-MSxPRkIsNTM4NjMyNTM5',
        description : 'Made to be Top 1 on the Upside Down UFO Platformer Challenge List. Verified by Me in 1316 Attempts',
        ID : 114965788,
        creator : 'rush',
        verifier : 'rush',
        times : {
            1 : {
                name : 'rush',
                time : '2:45.383',
                video : '',
                linkText : '',
            },
        },
    },
    7 : {
        name : 'run from emoji9',
        image : './Images/runFromEmoji9.webp',
        video : 'https://www.youtube.com/embed/LlVNJfhROOI?start=553s',
        description : 'udufopcl',
        ID : 119771687,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '19.066',
                video : 'https://www.youtube.com/watch?v=LlVNJfhROOI&t=553s',
                linkText : 'YouTube',
            },
        },
    },
    8 : {
        name : 'launchpad ufobyrinth',
        image : './Images/launchpad.webp',
        video : 'https://www.youtube.com/embed/ghrn4ZxM8DI',
        description : 'udufopcl',
        ID : 127331837,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '2.712',
                video : 'https://www.youtube.com/watch?v=ghrn4ZxM8DI',
                linkText : 'YouTube',
            },
        },
    },
    9 : {
        name : 'Fever',
        image : './Images/fever.webp',
        video : 'https://medal.tv/games/geometry-dash/clip/jF91etS4R2m1olOgZ?invite=cr-MSxLMmssNTM4NjMyNTM5',
        description : '(No description provided)',
        ID : 114963741,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'tenkuyuhh',
                time : '17.400',
                video : '',
                linkText : '',
            },
            2 : {
                name : 'yesimrush',
                time : '18.075',
                video : 'https://medal.tv/games/geometry-dash/clips/jF91etS4R2m1olOgZ?invite=cr-MSxMSUssMjU3OTk1Mjgs',
                linkText : 'Medal',
            }
        },
    },
    10 : {
        name : 'Suffer',
        image : './Images/suffer.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : '(No description provided)',
        ID : 111863467,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'tenkuyuhh',
                time : '21.912',
                video : '',
                linkText : '',
            },
        },
    },
    11 : {
        name : 'agony',
        image : './Images/agony.webp',
        video : 'https://medal.tv/games/geometry-dash/clip/jERuUdrH6uF8t9zd5?invite=cr-MSxUM3csNTM4NjMyNTM5',
        description : '(No description provided)',
        ID : 114960048,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'tenkuyuhh',
                time : '24.929',
                video : 'https://medal.tv/games/geometry-dash/clips/jERuUdrH6uF8t9zd5?invite=cr-MSx0VWUsMjkyOTg2ODY1LA',
                linkText : 'Medal',
            },
            2: {
                name: 'yesimrush',
                time : '29.591',
                video : '',
                linkText : '',
            },
        },
    },
    12 : {
        name : 'mangoa',
        image : './Images/mangoa.webp',
        video : 'https://medal.tv/games/geometry-dash/clip/jEMsXCGKH26TVB45a?invite=cr-MSxCbHEsNTM4NjMyNTM5',
        description : '(No description provided)',
        ID : 114952534,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'MyCat223',
                time : '15.812',
                video : '',
                linkText : '',
            },
            2 : {
                name : 'tenkuyuhh',
                time : '15.958',
                video : 'https://medal.tv/games/geometry-dash/clips/jEMsXCGKH26TVB45a?invite=cr-MSxJakosMjkyOTg2ODY1LA',
                linkText : '',
            },
            3 : {
                name : 'yesimrush',
                time : '16.000',
                video : '',
                linkText : '',
            },
        },
    },
    13 : {
        name : 'VSC but ufo',
        image : './Images/vscUfo.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : 'made by coinvessel',
        ID : 114984854,
        creator : 'CoinvesselGD',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'tenkuyuhh',
                time : '35.791',
                video : 'https://medal.tv/games/geometry-dash/clips/jF7mAP6XK_TPI4tdT?invite=cr-MSxVRmYsMjkyOTg2ODY1LA',
                linkText : '',
            },
        },
    },
    14 : {
        name : 'AntiAntigravity',
        image : './Images/antiAntigravity.webp',
        video : 'https://www.youtube.com/embed/YbgwCut3BFc',
        description : 'udufopcl :eyes:',
        ID : 132621790,
        creator : 'MyCat223',
        verifier : 'MyCat223',
        times : {
            1 : {
                name : 'MyCat223',
                time : '38.854',
                video : 'https://www.youtube.com/watch?v=YbgwCut3BFc',
                linkText : '',
            },
        },
    },
    15 : {
        name : 'Mycat sigma boy chal',
        image : './Images/sigmaBoy.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : '(No description provided)',
        ID : 114984412,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'tenkuyuhh',
                time : '17.754',
                video : '',
                linkText : '',
            },
        },
    },
    16 : {
        name : 'spam challenge 1',
        image : './Images/spam1.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : '(No description provided)',
        ID : 114952847,
        creator : 'tenkuyuhh',
        verifier : 'tenkuyuhh',
        times : {
            1 : {
                name : 'tenkuyuhh',
                time : '20.091',
                video : 'https://medal.tv/games/geometry-dash/clips/jEMGVWrrNb5bYI_eJ?invite=cr-MSxtZ2ksMjkyOTg2ODY1LA',
                linkText : '',
            },
        },
    },
    17 : {
        name : 'big yahu challenge x',
        image : './Images/bigYahuChallengeX.webp',
        video : 'https://www.youtube.com/embed/24Eku28-iUY?start=152',
        description : 'israelgpt generate me an upside down ufo platformer challenge // nong: skrillex - bangarang',
        ID : 132852634,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '30.224',
                video : 'https://www.youtube.com/watch?v=24Eku28-iUY&t=152s',
                linkText : 'YouTube',
            },
        },
    },
    18 : {
        name : 'black man chamber',
        image : './Images/blackMan.webp',
        video : 'https://www.youtube.com/embed/3cAfx9pYWqg?start=807',
        description : 'very dark i think probably // udufopcl',
        ID : 132518590,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '35.029',
                video : 'https://www.youtube.com/watch?v=3cAfx9pYWqg&t=807s',
                linkText : 'YouTube',
            },
        },
    },
    19 : {
        name : 'DOG MUNCHER CORRIDOR',
        image : './Images/dogMuncher.webp',
        video : 'https://www.youtube.com/embed/gdfQWECvAcA',
        description : 'DISCRIMINATION TRILOGY FINALE // btw im half asian AND IM NOT RACIST this level is a JOKE',
        ID : 132878056,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '29.954',
                video : 'https://www.youtube.com/watch?v=gdfQWECvAcA&t=65s',
                linkText : 'YouTube',
            },
        },
    },
    20 : {
        name : 'RENEWAL',
        image : './Images/renewal.webp',
        video : 'https://www.youtube.com/embed/lpNPcDd4SX4',
        description : 'Original level by ItsNoobe (asked to upload). udufopcl',
        ID : 118612227,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '29.641',
                video : 'https://www.youtube.com/watch?v=lpNPcDd4SX4',
                linkText : 'YouTube',
            },
        },
    },
    21 : {
        name : 'WIGGLECORE',
        image : './Images/wigglecore.webp',
        video : 'https://www.youtube.com/embed/wrqW7YVjQZM',
        description : 'wiggler wednesday',
        ID : 132848102,
        creator : 'Astatine16',
        verifier : 'Astatine16',
        times : {
            1 : {
                name : 'Astatine16',
                time : '16.704',
                video : 'https://www.youtube.com/watch?v=wrqW7YVjQZM',
                linkText : 'YouTube',
            },
        },
    },
    22 : {
        name : '200mg Ufombien',
        image : './Images/200mgUFO.webp',
        video : 'https://www.youtube.com/embed/Fq508rkQCns',
        description : 'i kinda wanna sleep rn',
        ID : 132919563,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '24.137',
                video : 'https://www.youtube.com/watch?v=Fq508rkQCns&t=9s',
                linkText : 'YouTube',
            },
        },
    },
    23 : {
        name : 'average udufopcl level',
        image : './Images/average.webp',
        video : 'https://www.youtube.com/embed/TMx-I8BQ094',
        description : 'average level in the upside down ufo platformer challenge list',
        ID : 114935113,
        creator : 'MyCat223',
        verifier : 'MyCat223',
        times : {
            1 : {
                name : 'MyCat223',
                time : '37.762',
                video : 'https://www.youtube.com/watch?v=TMx-I8BQ094',
                linkText : 'YouTube',
            },
            2 : {
                name : 'yesimrush',
                time : '52.662',
                video : 'https://www.youtube.com/clip/Ugkx0hj2MaWB2pY0L9w78mIV_nM9iZ-hxwBP',
                linkText : 'YouTube',
            },
            3 : {
                name : 'tenkuyuhh',
                time : '55.350',
                video : 'https://medal.tv/games/geometry-dash/clips/jEM6A9p1wRbMPrY_Y?invite=cr-MSw5NW4sMjkyOTg2ODY1LA',
                linkText : 'Medal',
            },
        },
    },
    24 : {
        name : 'le funky ufo level',
        image : './Images/leFunky.webp',
        video : 'https://www.youtube.com/embed/Duu-QcPfEes?start=134s',
        description : 'udufopcl submission (FOR REAL THIS TIME)',
        ID : 114952921,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'rush',
                time : '29.770',
                video : 'https://medal.tv/games/geometry-dash/clips/jERbScA3ZLe-wJAkG?invite=cr-MSxFUjIsMjU3OTk1Mjgs',
                linkText : 'Medal',
            },
            2 : {
                name : 'ItsNoobe',
                time : '30.937',
                video : 'https://www.youtube.com/watch?v=Duu-QcPfEes',
                linkText : 'YouTube',
            },
        },
    },
    25 : {
        name : 'UFO Funk',
        image : './Images/ufoFunk.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : '',
        ID : 124325607,
        creator : 'CoinvesselGD',
        verifier : 'Astatine16',
        times : {
            1 : {
                name : 'Astatine16',
                time : '14.000',
                video : '',
                linkText : '',
            },
        },
    },
    26 : {
        name : 'zimbabwe',
        image : './Images/zimbabwe.webp',
        video : 'https://www.youtube.com/embed/DAkbOoqpn44',
        description : '(No description provided)',
        ID : 115127631,
        creator : 'TheNewCodex',
        verifier : 'TheNewCodex',
        times : {
            1 : {
                name : 'TheNewCodex',
                time : '9.166',
                video : 'https://www.youtube.com/watch?v=DAkbOoqpn44',
                linkText : 'YouTube',
            },
        },
    },
    27 : {
        name : 'NullU',
        image : './Images/nullU.webp',
        video : 'https://www.youtube.com/embed/EfetjK-ymII',
        description : 'inspired by nullscapes okay // made for the upside down ufo challenge list',
        ID : 132592367,
        creator : 'itzneolol',
        verifier : 'itzneolol',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '26.574',
                video : '',
                linkText : '',
            },
            2 : {
                name : 'itzneolol',
                time : '38.425',
                video : 'https://www.youtube.com/watch?v=EfetjK-ymII',
                linkText : 'YouTube',
            },
        },
    },
    28 : {
        name : 'SuperMPREGixyWorld',
        image : './Images/superAwesome.webp',
        video : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description : 'waiter! waiter! more udufopcl slop please!',
        ID : 132882031,
        creator : 'ItsNoobe',
        verifier : 'ItsNoobe',
        times : {
            1 : {
                name : 'ItsNoobe',
                time : '26.433',
                video : '',
                linkText : '',
            },
        },
    },
    29 : {
        name : 'TOOMDUDUFOIGDPCLBM',
        image : './Images/toomdud.webp',
        video : 'https://www.youtube.com/embed/k0GOhRqADJM',
        description : 'Top One On The Most Difficult Upside Down Unidentified Flying Object (Inside Geometry Dash) Platformer Challenge List -By Mycat. :)',
        ID : 114955327,
        creator : 'Codex',
        verifier : 'Codex',
        times : {
            1 : {
                name : 'Codex',
                time : '9.083',
                video : 'https://www.youtube.com/watch?v=k0GOhRqADJM',
                linkText : 'YouTube',
            },
            2 : {
                name : 'tenkuyuhh',
                time : '14.259',
                video : 'https://medal.tv/games/geometry-dash/clips/jES2OFVS7dhJKcbii?invite=cr-MSxkS04sMjU3OTk1Mjgs',
                linkText : 'Medal',
            },
            3 : {
                name : 'yesimrush',
                time : '18.675',
                video : 'https://medal.tv/games/geometry-dash/clips/jES2OFVS7dhJKcbii?invite=cr-MSxkS04sMjU3OTk1Mjgs',
                linkText : 'Medal',
            },
        },
    },
};

/* Rickroll because no video link:
    3. BrambleIfItWasGood
    10. Suffer
    13. VSC but ufo
    15. Mycat sigma boy chal
    16. spam challenge 1

*/

