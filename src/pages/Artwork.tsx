import React, { useState } from 'react';
import { Heart, Filter, ChevronDown, GalleryHorizontal, GalleryVertical, X, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

// Galeria con titulos, sinopsis y cuando se toque te redirija a su pagina
const artworkItems = [
    {
        "id": 1,
        "image": "/artworks/a_dungeon_fall_328117_Rl3ml9E74H48700Z228zSoe95w87h6Wzj32M1bdQ9D39udwe2QO74Z482K0FrF99.jpg",
        "likes": 339,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "A Dungeon Fall",
        "synopsis": "Episodio 1 - Un misterioso dungeon con peligros desconocidos.",
        "rating": "9.5",
        "manhwaLink": "/manhwa/a-dungeon-fall"
      },
      {
        "id": 2,
        "image": "/artworks/a_dungeon_fall_328157_Bx7W07Hf50zD9g0560623n1mb0t84Az4wg4f4g0dp3586s8brD740M48O6706nc2.jpg",
        "likes": 200,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "A Dungeon Fall",
        "synopsis": "Episodio 2 - La batalla por el control del dungeon empieza.",
        "rating": "8.9",
        "manhwaLink": "/manhwa/a-dungeon-fall"
      },
      {
        "id": 3,
        "image": "/artworks/a_yogurt_lady_328724_I358uj58S6wvqNxJ98315tv9352t39V4rhy52N2x3123t7E49a99Sf3diZ9D8794.jpg",
        "likes": 450,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "A Yogurt Lady",
        "synopsis": "Episodio 1 - La historia de una chica que emprende su camino en un negocio peculiar.",
        "rating": "8.7",
        "manhwaLink": "/manhwa/a-yogurt-lady"
      },
      {
        "id": 4,
        "image": "/artworks/a_yogurt_lady_328726_h54vu8540vI3fm9863V3r5pU6d95737f4M486F0X8wn07kcexbyFhuozh47vdF3S.jpg",
        "likes": 220,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "A Yogurt Lady",
        "synopsis": "Episodio 2 - Nuevas aventuras de la chica del yogurt.",
        "rating": "8.5",
        "manhwaLink": "/manhwa/a-yogurt-lady"
      },
      {
        "id": 5,
        "image": "/artworks/a_yogurt_lady_328730_a6k654SCc828107o7zf9i20rg64L5C319C4D8wqd1q6tG76pse88h47435o1Y7a0.jpg",
        "likes": 300,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "A Yogurt Lady",
        "synopsis": "Episodio 3 - Un nuevo reto para la chica del yogurt.",
        "rating": "9.0",
        "manhwaLink": "/manhwa/a-yogurt-lady"
      },
      {
        "id": 6,
        "image": "/artworks/Academy_19game_324046_x3YqZf1Q8Np269hqjwop8q392ryE5z5ypky246G4ivYg639v0va455I278Qr0X5G.jpg",
        "likes": 180,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "Academy 19game",
        "synopsis": "Episodio 1 - Un juego de supervivencia escolar con desafíos épicos.",
        "rating": "8.8",
        "manhwaLink": "/manhwa/academy-19game"
      },
      {
        "id": 7,
        "image": "/artworks/Administrator_privileges_315199_5l14g806bqe6jA105em68J584iEI87L54x6q810772vz68m3d8r6wa85n1j35h38.jpg",
        "likes": 420,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "Administrator Privileges",
        "synopsis": "Episodio 1 - Un hombre obtiene permisos especiales en un mundo virtual.",
        "rating": "9.3",
        "manhwaLink": "/manhwa/administrator-privileges"
      },
      {
        "id": 8,
        "image": "/artworks/Administrator_privileges_325481_63g557S1300RcxLa1pl2x4wwxif3rL6n7Cjv19d314bcKl3w9UT78c58342m73vy.jpg",
        "likes": 380,
        "tags": ["Heroína"],
        "aspectRatio": 0.75,
        "title": "Administrator Privileges",
        "synopsis": "Episodio 2 - La lucha por el control y el poder intensifica.",
        "rating": "9.1",
        "manhwaLink": "/manhwa/administrator-privileges"
      },
    
        {
          "id": 9,
          "image": "/artworks/bunk_bed_323498_vunV8U0Dq7xd5Thqd3515979e23z9OlhX9W8im58e59808t21bBp6M434y022n5t.jpg",
          "likes": 150,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Bunk Bed",
          "synopsis": "Episodio 1 - Dos chicos tienen que compartir una litera en un internado.",
          "rating": "8.2",
          "manhwaLink": "/manhwa/bunk-bed"
        },
        {
          "id": 10,
          "image": "/artworks/bunk_bed_323861_593xc55oYazxl9f0q0A134lh66A7Cq51h5I2h24Vn56i54VOm710tujB5nY9vj68.jpg",
          "likes": 120,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Bunk Bed",
          "synopsis": "Episodio 2 - La convivencia se complica cuando surgen nuevos conflictos.",
          "rating": "8.0",
          "manhwaLink": "/manhwa/bunk-bed"
        },
        {
          "id": 11,
          "image": "/artworks/Can_you_touch_that_321158_Q23ltCrYg9fut2470bBy1g6516d613e5j100ax62qDm4182g18fkq5f2r0p6z1h1.jpg",
          "likes": 280,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Can You Touch That?",
          "synopsis": "Episodio 1 - Un romance complejo entre dos personas de mundos diferentes.",
          "rating": "9.1",
          "manhwaLink": "/manhwa/can-you-touch-that"
        },
        {
          "id": 12,
          "image": "/artworks/Can_you_touch_that_321158_W3sh88po46725wtoWec8Oky467em83ta3Ectwzsl7y600i7s89sy9525121r23bt.jpg",
          "likes": 220,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Can You Touch That?",
          "synopsis": "Episodio 2 - Las emociones entre los protagonistas se intensifican.",
          "rating": "9.0",
          "manhwaLink": "/manhwa/can-you-touch-that"
        },
        {
          "id": 13,
          "image": "/artworks/Can_you_touch_that_321590_xoP1Aedknv1m8589a3ks463a7lu7tw5h1k3787v9M9j9Qo4Fg9X77eei1FiE72zf.jpg",
          "likes": 310,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Can You Touch That?",
          "synopsis": "Episodio 3 - Un giro inesperado cambia la relación entre los protagonistas.",
          "rating": "9.3",
          "manhwaLink": "/manhwa/can-you-touch-that"
        },
        {
          "id": 14,
          "image": "/artworks/chicken_club_331941_fj40gX64xaf5272295py207ftG955z0Pily1oe24011hhgi5y50QIvh56l651iVV.jpg",
          "likes": 450,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Chicken Club",
          "synopsis": "Episodio 1 - Un grupo de amigos se mete en líos mientras buscan aventuras.",
          "rating": "8.8",
          "manhwaLink": "/manhwa/chicken-club"
        },
        {
          "id": 15,
          "image": "/artworks/chicken_club_331941_pprj54jwP67w484fp1Cq72yt49c9363WYe0s0w53xzjlamafbS89144pt0032dym.jpg",
          "likes": 400,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Chicken Club",
          "synopsis": "Episodio 2 - El club de pollo enfrenta nuevos retos más divertidos.",
          "rating": "8.9",
          "manhwaLink": "/manhwa/chicken-club"
        },
        {
          "id": 16,
          "image": "/artworks/chicken_club_331942_xUlPyulssQ8zfny2224NabE352u8i5TEpi1Tdrb1234M4v1f53AvsWmym9Tnoq9y.webp",
          "likes": 360,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Chicken Club",
          "synopsis": "Episodio 3 - Nuevas situaciones cómicas se desatan cuando un miembro se escapa.",
          "rating": "9.0",
          "manhwaLink": "/manhwa/chicken-club"
        },
        {
          "id": 17,
          "image": "/artworks/Desire_Realization_Application_320153_Dudko60klfkWx26405s14QT4y0534xr930m3ym38e987u88Xn440979Kf7d99T52.jpg",
          "likes": 500,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Desire Realization Application",
          "synopsis": "Episodio 1 - Una misteriosa aplicación que permite hacer realidad tus deseos más profundos.",
          "rating": "9.2",
          "manhwaLink": "/manhwa/desire-realization-application"
        },
        {
          "id": 18,
          "image": "/artworks/Desire_Realization_Application_326609_6gLe6q96qsnX2f131xi5QXV96cb2Mj79fd9z1035gGhog5k3u5Qb60d89m9mrc76.jpg",
          "likes": 440,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Desire Realization Application",
          "synopsis": "Episodio 2 - Los deseos comienzan a salir de control.",
          "rating": "9.0",
          "manhwaLink": "/manhwa/desire-realization-application"
        },
        {
          "id": 19,
          "image": "/artworks/Despise_girl_327710_6tDh0O7TciDg67G4gOUb340776804R5g9kebr6or3J470554p0p8P3f2t7979w99.jpg",
          "likes": 350,
          "tags": ["Heroína"],
          "aspectRatio": 0.75,
          "title": "Despise Girl",
          "synopsis": "Episodio 1 - Un chico se enamora de una chica que siempre lo desprecia.",
          "rating": "8.7",
          "manhwaLink": "/manhwa/despise-girl"
        },
        {
            "id": 20,
            "image": "/artworks/Do_It_With_A_Girl_I_Do_not_Know_323697_8q899fyv8Sp1sOhUFh0ddQ8uhi817r020D6w5eU18415d5c4o64hw91q1yld70Ee.jpg",
            "likes": 280,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Do It With A Girl I Do Not Know",
            "synopsis": "Episodio 1 - Un chico se ve envuelto en una serie de situaciones incómodas con una chica desconocida.",
            "rating": "8.5",
            "manhwaLink": "/manhwa/do-it-with-a-girl-i-do-not-know"
          },
          {
            "id": 21,
            "image": "/artworks/Do_It_With_A_Girl_I_Do_not_Know_327680_0qgaM4g6y06u2454M3f288440Oph39qnExqwz32778993j7nga0ui98y0jmo604z.jpg",
            "likes": 250,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Do It With A Girl I Do Not Know",
            "synopsis": "Episodio 2 - La relación se complica cuando ambos comienzan a conocerse.",
            "rating": "8.3",
            "manhwaLink": "/manhwa/do-it-with-a-girl-i-do-not-know"
          },
          {
            "id": 22,
            "image": "/artworks/Do_It_With_A_Girl_I_Do_not_Know_327680_s4Z046h4V917cwN5t4Si2xa340at8981eB7j817k17bgc2tsjlf9g58k5uf6pe3B.jpg",
            "likes": 270,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Do It With A Girl I Do Not Know",
            "synopsis": "Episodio 3 - Los malentendidos aumentan mientras su relación avanza.",
            "rating": "8.4",
            "manhwaLink": "/manhwa/do-it-with-a-girl-i-do-not-know"
          },
          {
            "id": 23,
            "image": "/artworks/ero_game_becomes_reality_328391_f5VqkzJ598X9c4uhmi32448Ly4sdY8pP3l8n9ykY45372Q35tf1S5bY1768f8Zm6.jpg",
            "likes": 320,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Ero Game Becomes Reality",
            "synopsis": "Episodio 1 - Un juego erótico se convierte en algo mucho más real de lo que el protagonista esperaba.",
            "rating": "9.0",
            "manhwaLink": "/manhwa/ero-game-becomes-reality"
          },
          {
            "id": 24,
            "image": "/artworks/ero_game_becomes_reality_328534_7sjWp8On1o25u13v04cll3o5hLH3rD53301gjw4tR420sv1MiT21qK9ex47rllV0.jpg",
            "likes": 350,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Ero Game Becomes Reality",
            "synopsis": "Episodio 2 - El protagonista descubre más sobre las reglas del juego que ahora se ha vuelto real.",
            "rating": "9.1",
            "manhwaLink": "/manhwa/ero-game-becomes-reality"
          },
          {
            "id": 25,
            "image": "/artworks/Female_college_student_who_served_in_the_army_326898_1y68pLRw56e73YkPybWk86g5013oop5E7mjw6y0b831nO622998i1H431a8S79s8.jpg",
            "likes": 220,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Female College Student Who Served in the Army",
            "synopsis": "Episodio 1 - Una joven estudiante universitaria que también fue parte del ejército.",
            "rating": "8.7",
            "manhwaLink": "/manhwa/female-college-student-who-served-in-the-army"
          },
          {
            "id": 26,
            "image": "/artworks/Female_college_student_who_served_in_the_army_327459_10874bczf0v665g82p86tOh12X5nl16yd9S10jk3Ux2cgvq886pri9fp073e6a4x.jpg",
            "likes": 230,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Female College Student Who Served in the Army",
            "synopsis": "Episodio 2 - Su vida universitaria es más difícil por su pasado militar.",
            "rating": "8.8",
            "manhwaLink": "/manhwa/female-college-student-who-served-in-the-army"
          },
          {
            "id": 27,
            "image": "/artworks/Female_college_student_who_served_in_the_army_328159_rg2mlk03eC5UHj8trqsdqRag01f46pV99Cz0Jg9i86NyEYa1tu4y46vbi90avcQk.jpg",
            "likes": 210,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "Female College Student Who Served in the Army",
            "synopsis": "Episodio 3 - El conflicto interno de la protagonista la lleva a enfrentarse a nuevos retos.",
            "rating": "8.6",
            "manhwaLink": "/manhwa/female-college-student-who-served-in-the-army"
          },
          {
            "id": 28,
            "image": "/artworks/For_each_color_you_pick_up_327651_8203h1T2g4gf0W1z338471tzw4x7418f70J2m11rK500gzc08d65cahu941287v1.jpg",
            "likes": 150,
            "tags": ["Heroína"],
            "aspectRatio": 0.75,
            "title": "For Each Color You Pick Up",
            "synopsis": "Episodio 1 - Un color tiene un poder especial que puede cambiar la vida de las personas.",
            "rating": "8.4",
            "manhwaLink": "/manhwa/for-each-color-you-pick-up"
            },
            {
                "id": 29,
                "image": "/artworks/Ghost_XXKING_326916_51M77eb88r5ekcwe6i2I3mpYz070P958048s5diw4IVi0kzg58M935gsv317cw86.jpg",
                "likes": 310,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ghost XXKING",
                "synopsis": "Episodio 1 - Una heroína lucha contra las fuerzas oscuras para proteger el mundo.",
                "rating": "8.9",
                "manhwaLink": "/manhwa/ghost-xxking"
              },
              {
                "id": 30,
                "image": "/artworks/Ghost_XXKING_327438_IWy0Hl87d8D33bEp32ez4Z8136k4syXXw8425z48wxbonc9b95837z244k0r6i16.jpg",
                "likes": 295,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ghost XXKING",
                "synopsis": "Episodio 2 - La heroína se enfrenta a nuevos enemigos que amenazan su paz.",
                "rating": "8.7",
                "manhwaLink": "/manhwa/ghost-xxking"
              },
              {
                "id": 31,
                "image": "/artworks/Ghost_XXKING_327577_0205516j56G16f98r8tNsq33cpy69dNx5235p401ep39mBiZ8LnsR6t36966akQg.jpg",
                "likes": 330,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ghost XXKING",
                "synopsis": "Episodio 3 - La heroína descubre un oscuro secreto sobre su origen.",
                "rating": "9.0",
                "manhwaLink": "/manhwa/ghost-xxking"
              },
              {
                "id": 32,
                "image": "/artworks/Ghost_XXKING_328437_r6ki4042244fk9p2100p24rp9S740j205w711yxasibj0pj460a1jq5p98s796tv.jpg",
                "likes": 340,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ghost XXKING",
                "synopsis": "Episodio 4 - La heroína debe tomar decisiones difíciles que afectarán su destino.",
                "rating": "9.2",
                "manhwaLink": "/manhwa/ghost-xxking"
              },
              {
                "id": 33,
                "image": "/artworks/glory_hole_326638_0xc3KVS58u8B3x3807hjI556fy7m6q174gp8N7o0q4cGqo94U455TwHi97c95134.jpg",
                "likes": 270,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Glory Hole",
                "synopsis": "Episodio 1 - Una joven heroína lucha contra las adversidades de un mundo hostil.",
                "rating": "8.6",
                "manhwaLink": "/manhwa/glory-hole"
              },
              {
                "id": 34,
                "image": "/artworks/glory_hole_326972_ez23365298364axLe99tgcsz3j6cs1hnt2y52nt7Cdl4vu8tV825sp1l04njxLm9.jpg",
                "likes": 260,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Glory Hole",
                "synopsis": "Episodio 2 - La heroína se enfrenta a su destino mientras busca venganza.",
                "rating": "8.5",
                "manhwaLink": "/manhwa/glory-hole"
              },
              {
                "id": 35,
                "image": "/artworks/Harem_Revenge_326355_16o1e90ttui927ts35Q7z7o1565I624H5418G522clAy9676Ldf723a0o35qZ965.jpg",
                "likes": 290,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Harem Revenge",
                "synopsis": "Episodio 1 - Una heroína busca venganza contra aquellos que traicionaron su amor.",
                "rating": "8.8",
                "manhwaLink": "/manhwa/harem-revenge"
              },
              {
                "id": 36,
                "image": "/artworks/I_m_a_pseudo_leader_328510_R7w9287770aoRKFwt54vclo148Axx49z405E7798HO27609851Kri0532b0Stwz6.jpg",
                "likes": 250,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "I'm a Pseudo Leader",
                "synopsis": "Episodio 1 - Una joven heroína debe lidiar con las consecuencias de asumir un liderazgo falso.",
                "rating": "8.4",
                "manhwaLink": "/manhwa/im-a-pseudo-leader"
              },
              {
                "id": 37,
                "image": "/artworks/I_making_idol_Harem_324791_n0oD2x6Lvxe7916uUy2k5Ix5a5UD7zO0288K685o08r6jsje1ez92t24T282k1zL.jpg",
                "likes": 220,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Making Idol Harem",
                "synopsis": "Episodio 1 - La heroína comienza a formar su propio grupo de idols, pero enfrenta obstáculos inesperados.",
                "rating": "8.3",
                "manhwaLink": "/manhwa/making-idol-harem"
              },
              {
                "id": 38,
                "image": "/artworks/intern_diver_321418_l06Dx1u1w22vMMOJ85r6n9gOyd881a178xgs395953cn0z0pIvr47Z81V0d4t4x1.jpg",
                "likes": 200,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Intern Diver",
                "synopsis": "Episodio 1 - La heroína interna se convierte en una experta buceadora mientras enfrenta desafíos subacuáticos.",
                "rating": "8.2",
                "manhwaLink": "/manhwa/intern-diver"
              },
              {
                "id": 39,
                "image": "/artworks/intern_diver_324793_Zvdl7lch627yh7h79y8Nij7kr503U3g868Uj0n66pn27yC9a6e5840017857o5zv.jpg",
                "likes": 210,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Intern Diver",
                "synopsis": "Episodio 2 - La heroína enfrenta nuevos peligros en las profundidades del mar.",
                "rating": "8.2",
                "manhwaLink": "/manhwa/intern-diver"
              },
              {
                "id": 40,
                "image": "/artworks/intern_diver_326673_ji3t53g6oP1e787p1671t183241O22i17lbA6xq476h6y30f54w9i0f2CDw59pP6.jpg",
                "likes": 220,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Intern Diver",
                "synopsis": "Episodio 3 - La heroína comienza a desvelar secretos oscuros del océano.",
                "rating": "8.4",
                "manhwaLink": "/manhwa/intern-diver"
              },
              {
                "id": 41,
                "image": "/artworks/intern_diver_328099_3w76jOy38uR07L792zQvh28zYPJT04tH92p780n26pdub6f1a94vh67oute1ta20.jpg",
                "likes": 230,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Intern Diver",
                "synopsis": "Episodio 4 - La heroína se enfrenta a un enemigo inesperado mientras explora el fondo marino.",
                "rating": "8.5",
                "manhwaLink": "/manhwa/intern-diver"
              },
              {
                "id": 42,
                "image": "/artworks/ironman_331378_5t71oyqli8l8IBe55wEy43o021p8g6j03t6bj1n2o423u018u4l4j02177uhu6Qh.webp",
                "likes": 320,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ironman",
                "synopsis": "Episodio 1 - La heroína se une a los Vengadores para combatir una nueva amenaza global.",
                "rating": "9.0",
                "manhwaLink": "/manhwa/ironman"
              },
              {
                "id": 43,
                "image": "/artworks/ironman_331378_v4qSgX9470324krwobbvj435T9e2k7vs73303Zm5vxTth08cc913rR86Dnx86h6a.jpg",
                "likes": 310,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ironman",
                "synopsis": "Episodio 2 - La heroína enfrenta un dilema moral mientras lucha junto a los Vengadores.",
                "rating": "8.8",
                "manhwaLink": "/manhwa/ironman"
              },
              {
                "id": 44,
                "image": "/artworks/ironman_331378_y6x25cR0vdp69j23odekM2z2Cva27y115dil761D8sj7W3Zs6rn69npfgpo806hu.jpg",
                "likes": 300,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Ironman",
                "synopsis": "Episodio 3 - La heroína descubre que no todo es lo que parece en su misión.",
                "rating": "8.7",
                "manhwaLink": "/manhwa/ironman"
              },
              {
                "id": 45,
                "image": "/artworks/lottery_ticket_329181_n903o4061lS4j9e0Tj26uNt3tpVf2rSvw9c2g4E6biuSAwfvAzh8te37c4603c4v.jpg",
                "likes": 280,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Lottery Ticket",
                "synopsis": "Episodio 1 - La heroína se enfrenta a una serie de desafíos tras ganar la lotería.",
                "rating": "8.6",
                "manhwaLink": "/manhwa/lottery-ticket"
              },
              {
                "id": 46,
                "image": "/artworks/lottery_ticket_329181_RfjTDi73yC1kw02qK0e2b16ifg8q0w9qj560xCS83k55f0k9gvsyrk5Bm55r9Wi7.jpg",
                "likes": 270,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Lottery Ticket",
                "synopsis": "Episodio 2 - La heroína descubre que ser rica no es todo lo que parecía.",
                "rating": "8.4",
                "manhwaLink": "/manhwa/lottery-ticket"
              },
              {
                "id": 47,
                "image": "/artworks/lottery_ticket_329184_k7Gpeu6qwk73Kr7u71dF8T910lgvg4331AQc3nq55fagqv78ect9D504jBhhMaDy.jpg",
                "likes": 260,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Lottery Ticket",
                "synopsis": "Episodio 3 - La heroína debe tomar decisiones difíciles que afectan su futuro.",
                "rating": "8.5",
                "manhwaLink": "/manhwa/lottery-ticket"
              },
              {
                "id": 48,
                "image": "/artworks/Love_Choice_321038_502a4pf5hR643pI8x6r207q1Cqs7D00n759453jy727l3f21fnB9nto1uoA4m466.jpg",
                "likes": 240,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Love Choice",
                "synopsis": "Episodio 1 - La heroína enfrenta una difícil elección que cambiará su vida para siempre.",
                "rating": "8.3",
                "manhwaLink": "/manhwa/love-choice"
              },
              {
                "id": 49,
                "image": "/artworks/Love_Choice_324694_06ngt3ssgq49e55jm814v8w9V2M4114al3QjrH0989D8B666jY73q69k43ku61jw.jpg",
                "likes": 250,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Love Choice",
                "synopsis": "Episodio 2 - La heroína debe elegir entre el amor y el deber.",
                "rating": "8.6",
                "manhwaLink": "/manhwa/love-choice"
              },
              {
                "id": 50,
                "image": "/artworks/Love_Choice_325597_5M3999sM1NhNiFu5799ee59bfE0sln75D23j3R1Nn465fR3QQ1198s808xFCCwub.jpg",
                "likes": 260,
                "tags": ["Heroína"],
                "aspectRatio": 0.75,
                "title": "Love Choice",
                "synopsis": "Episodio 3 - La heroína se enfrenta a los resultados de su elección.",
                "rating": "8.7",
                "manhwaLink": "/manhwa/love-choice"
              },
];



const filterTags = [
  { id: "Héroe", label: "Héroe" },
  { id: "Heroína", label: "Heroína" },
  { id: "+18", label: "+18" },
];

const ArtworkGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("latest");
  const [layoutType, setLayoutType] = useState<"masonry" | "grid">("masonry");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworkItems[0] | null>(null);
  
  const filteredArtwork = activeFilter 
    ? artworkItems.filter(item => item.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())))
    : artworkItems;

  const handleArtworkClick = (artwork: typeof artworkItems[0]) => {
    setSelectedArtwork(artwork);
  };

  const handleNextArtwork = () => {
    if (!selectedArtwork) return;
    
    const currentIndex = filteredArtwork.findIndex(item => item.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % filteredArtwork.length;
    setSelectedArtwork(filteredArtwork[nextIndex]);
  };

  const handlePrevArtwork = () => {
    if (!selectedArtwork) return;
    
    const currentIndex = filteredArtwork.findIndex(item => item.id === selectedArtwork.id);
    const prevIndex = (currentIndex - 1 + filteredArtwork.length) % filteredArtwork.length;
    setSelectedArtwork(filteredArtwork[prevIndex]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-black text-center sm:text-center">GALERÍA</h1>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 mb-6">
          <div className="overflow-x-auto md:w-auto pb-2">
            <div className="flex gap-2">
              {filterTags.map(tag => (
                <Button
                  key={tag.id}
                  variant={activeFilter === tag.id ? "default" : "outline"}
                  className={`rounded-full text-sm whitespace-nowrap ${
                    activeFilter === tag.id ? "bg-primary" : "bg-secondary/10"
                  }`}
                  onClick={() => setActiveFilter(activeFilter === tag.id ? null : tag.id)}
                >
                  {tag.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 ml-2">
              <Button 
                variant={layoutType === "grid" ? "default" : "outline"} 
                size="icon" 
                onClick={() => setLayoutType("grid")}
                title="Grid Layout"
              >
                <GalleryHorizontal size={16} />
              </Button>
              <Button 
                variant={layoutType === "masonry" ? "default" : "outline"} 
                size="icon" 
                onClick={() => setLayoutType("masonry")}
                title="Masonry Layout"
              >
                <GalleryVertical size={16} />
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-2 flex items-center gap-2">
                  <span>{sortBy === "latest" ? "Reciente" : "Más Popular"}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSortBy("latest")}>
                  Reciente
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("popular")}>
                  Popular
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Gallery Grid or Masonry Layout */}
        {layoutType === "grid" ? (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredArtwork.map((artwork) => (
      <Card 
        key={artwork.id} 
        className="relative group overflow-hidden border-0 rounded-lg cursor-pointer"
        onClick={() => handleArtworkClick(artwork)}
      >
        <CardContent className="p-0">
          <img 
            src={artwork.image} 
            alt={`Artwork ${artwork.id}`} 
            className="w-full h-[300px] object-cover" 
          />
          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-full flex items-center gap-1">
            <Heart size={14} className="fill-white text-white" />
            <span className="text-white text-xs">{artwork.likes}</span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        </CardContent>
      </Card>
    ))}
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredArtwork.map((artwork) => (
      <div key={artwork.id} className="mb-4">
        <Card 
          className="relative group overflow-hidden border-0 rounded-lg cursor-pointer"
          onClick={() => handleArtworkClick(artwork)}
        >
          <CardContent className="p-0">
            <img 
              src={artwork.image} 
              alt={`Artwork ${artwork.id}`} 
              className="w-full object-cover" 
            />
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-full flex items-center gap-1">
              <Heart size={14} className="fill-white text-white" />
              <span className="text-white text-xs">{artwork.likes}</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Artwork Detail Dialog */}
      <Dialog open={!!selectedArtwork} onOpenChange={(open) => !open && setSelectedArtwork(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold">
              {selectedArtwork?.title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevArtwork}
                title="Previous artwork"
                className="hidden sm:flex"
              >
                <ArrowLeft size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextArtwork}
                title="Next artwork"
                className="hidden sm:flex"
              >
                <ArrowRight size={18} />
              </Button>
              <DialogClose className="rounded-full p-1 hover:bg-gray-100">
                <X size={18} />
              </DialogClose>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={selectedArtwork?.image} 
                alt={selectedArtwork?.title} 
                className="w-full object-contain" 
              />
              <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded-full flex items-center gap-1">
                <Heart size={14} className="fill-white text-white" />
                <span className="text-white text-xs">{selectedArtwork?.likes}</span>
                <span className="text-white text-xs ml-2">★ {selectedArtwork?.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg">{selectedArtwork?.title}</h3>
                <p className="text-muted-foreground mt-2">{selectedArtwork?.synopsis}</p>
                
                <div className="flex gap-2 mt-4 flex-wrap">
                  {selectedArtwork?.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary/30 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={() => {
                    
                    if (selectedArtwork?.manhwaLink) {
                      window.location.href = selectedArtwork.manhwaLink;
                    }
                  }}
                >
                  Ve a ver esta obra
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4 sm:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevArtwork}
              className="flex-1 mr-2"
            >
              <ArrowLeft size={14} className="mr-1" /> Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextArtwork}
              className="flex-1"
            >
              Siguiente <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default ArtworkGallery;