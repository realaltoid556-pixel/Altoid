"use strict";

/* =========================
   GAME DATABASE
========================= */
const gameLibrary = [       
        {
        title: "1 v 1 Soccer",
        url: "https://html5.gamedistribution.com/8ea3227da34148c8b61633b5b2121196/?gd_sdk_referrer_url=https%3A%2F%2Fwww.1001games.com%2Fsport%2F1-on-1-soccer",
        image: "images/1v1soccer.png"
    },
        {
        title: "2028",
        url: "https://55gms.com/misc/2048/index.html",
        image: "images/2048.png"
    },
        {
        title: "2048 Flappy",
        url: "https://flappy-2048.com/#google_vignette",
        image: "images/2048flappy.png"
    },
        {
        title: "A Dance of Fire And Ice",
        url: "https://kdata1.com/2019/10/1175401/",
        image: "images/ADanceOfFireAndIce.png"
    },
        {
        title: "Adventure Capitalist",
        url: "https://kdata1.com/2021/03/adcapitalist/?d",
        image: "images/AdventureCapitalist.png"
    },
        {
        title: "Amazon Luna",
        url: "https://luna.amazon.com",
        image: "images/AmazonLuna.png"
    },
     {
        title: "BasketBall Stars",
        url: "https://basketball-stars.io/game/basketball-stars/",
        image: "images/BasketBallStars.png"
    },
    {
        title: "Bitlife",
        url: "https://55gms.com/misc/bitlife/",
        image: "images/bitlife.png"
    },
    {
        title: "Bloxorz",
        url: "https://55gms.com/misc/play/bloxrz.html",
        image: "images/Bloxorz.png"
    },
    {
        title: "Boxing Random",
        url: "https://55gms.com/misc/play/bloxrz.html",
        image: "images/BoxingRandom.png"
    },
    {
        title: "Breaking The Bank",
        url: "https://uploads.ungrounded.net/ruffle_wrapper/ruffleembed.html?v=1.2.2&browsermode=default&props=%7B%22ruffle%22%3A%22%2Fruffle_wrapper%2Flib%2Fruffle.js%3F1769231772%22%2C%22public_path%22%3A%22%2Fruffle_wrapper%2Flib%2F%22%2C%22swf%22%3A%22https%3A%2F%2Fuploads.ungrounded.net%2F457000%2F457209_Bank_NG.swf%3F1240646960%22%2C%22vars%22%3A%7B%22NewgroundsAPI_PublisherID%22%3A1%2C%22NewgroundsAPI_SandboxID%22%3A%226976966217115%22%2C%22NewgroundsAPI_SessionID%22%3A%22%22%2C%22NewgroundsAPI_UserName%22%3A%22%26lt%3Bdeleted%26gt%3B%22%2C%22NewgroundsAPI_UserID%22%3A0%2C%22ng_username%22%3A%22%26lt%3Bdeleted%26gt%3B%22%7D%2C%22width%22%3A550%2C%22height%22%3A400%2C%22icon%22%3A%22https%3A%2F%2Fpicon.ngfiles.com%2F457000%2Fflash_457209_card.png%3Ff1601082817%22%2C%22warnOnUnsupportedContent%22%3Afalse%2C%22external%22%3A%22%2Fruffle_wrapper%2Fexternal%2Fruffle-external-input.js%3F1769128201%22%2C%22externalSettings%22%3A%7B%22endpoint%22%3A%22https%3A%2F%2Fwww.newgrounds.com%2Fportal%2Fruffle-options%2F124612%22%2C%22types%22%3A%5B1%5D%7D%7D",
        image: "images/BreakingTheBank.png"
    },
    {
        title: "Build Now GG",
        url: "https://games.crazygames.com/en_US/buildnow-gg/index.html?v=1.279",
        image: "images/BuildNowGG.png"
    },
    {
        title: "Chatgpt",
        url: "https://chatgpt.com/",
        image: "images/Chatgpt.png"
    },
    {
        title: "Chess.com",
        url: "https://www.chess.com/",
        image: "images/chess.com.png"
    },
    {
        title: "Chrome Dino 3D",
        url: "https://lagged.com/api/play2/t-rex-3d2/",
        image: "images/ChromeDino3D.png"
    },
    {
        title: "Cluster Rush",
        url: "https://55gms.com/misc/cluster-rush/index.html",
        image: "images/Cluster.png"
    },
    {
        title: "Cookie Clicker",
        url: "https://55gms.com/misc/cookieclicker/index.html",
        image: "images/CookieClicker.png"
    },
    {
        title: "Cookie Run Kingdom",
        url: "https://72.ip.nowgg.fun/apps/a/10019/b.html",
        image: "images/CookieRunKingdom.png"
    },
    {
        title: "Cool Math Games",
        url: "https://www.coolmathgames.com/",
        image: "images/CoolMathGames.png"
    },
    {
        title: "Crossy Road",
        url: "https://55gms.com/misc/crossy-road/index.html",
        image: "images/CrossyRoad.png"
    },
    {
        title: "Dadish",
        url: "https://55gms.com/misc/dadish/index.html",
        image: "images/Dadish.png"
    },
    {
        title: "Defly io",
        url: "https://defly.io/",
        image: "images/Defly.io.png"
    },
    {
        title: "Doge Miner",
        url: "https://55gms.com/misc/dogeminer/index.html",
        image: "images/DogeMiner.png"
    },
    {
        title: "Drifthunters",
        url: "https://topvaz3.github.io/lesson302/lesson-8/",
        image: "images/Drifthunters.png"
    },
    {
        title: "Drive Mad",
        url: "https://55gms.com/misc/drive-mad/",
        image: "images/Drivemad.png"
    },
    {
        title: "Dunkers",
        url: "https://unblockedgames76.gitlab.io/dunkers/",
        image: "images/Dunkers.png"
    },
    {
        title: "Eagle Craft 1.8",
        url: "https://eaglercraft1-8.github.io/",
        image: "images/EagleCraft18.png"
    },
    {
        title: "Escape From School",
        url: "https://b2c44221-f7be-4fba-af24-2c53e0e6a79f.gdn.poki.com/28226e3f-152d-4487-a460-4274ef1cb9bc/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9cbac7ae26bc931e29ae66af5616acaae6d35ef5&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fescape-from-school&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=3%2C6%2C7%2C48%2C76%2C93%2C228%2C1140%2C1190%2C1209&game_id=b2c44221-f7be-4fba-af24-2c53e0e6a79f&game_version_id=28226e3f-152d-4487-a460-4274ef1cb9bc&inspector=0&csp=1",
        image: "images/EscapeFromSchool.png"
    },
    {
        title: "Fireboy & Watergirl ",
        url: "https://55gms.com/misc/fbwg/index.html",
        image: "images/Fireboy&Watergirl1.png"
    },
    {
        title: "FNF vs Snorlax",
        url: "https://fnf.kdata1.com/snorlax/1/",
        image: "images/FNFvsSnorlax.png"
    },
    {
        title: "Gun Mayhem",
        url: "https://55gms.com/misc/flash/index.html?swf=gmayhem2.swf",
        image: "images/GunMayhem2.png"
    },
    {
        title: "Hole io",
        url: "https://ubg76.gitlab.io/hole-io/",
        image: "images/Holeio.png"
    },
    {
        title: "Idle Startup Tycoon",
        url: "https://ubg76.gitlab.io/idle-startup-company/",
        image: "images/IdleStartupTycoon.png"
    },
    {
        title: "Infinite Craft",
        url: "https://neal.fun/infinite-craft/",
        image: "images/Infinite.png"
    },
    {
        title: "Iron Snout",
        url: "https://topvaz3.github.io/lesson302/lesson-14/",
        image: "images/IronSnout.png"
    },
    {
        title: "Learn to Fly 2",
        url: "https://55gms.com/misc/flash/index.html?swf=learn-to-fly-2.swf",
        image: "images/Learn2Fly2.png"
    },
    {
        title: "Moto X3M",
        url: "https://55gms.com/misc/motox3m/index.html",
        image: "images/MotoX3M.png"
    },
    {
        title: "Murder",
        url: "https://topvaz3.github.io/lesson302/lesson-83/",
        image: "images/Murder.png"
    },
    {
        title: "Nut Simulator ",
        url: "https://nutsimulator.github.io/index.html",
        image: "images/NutSimulator.png"
    },
    {
        title: "Ovo",
        url: "https://55gms.com/misc/ovo/index.html",
        image: "images/Ovo.png"
    },
    {
        title: "Ovo Dimensions",
        url: "https://55gms.com/misc/ovo3/index.html",
        image: "images/OvoDimensions.png"
    },
    {
        title: "Pokemon Fire Red",
        url: "https://55gms.com/misc/emulator/pokemon/red/index.html",
        image: "images/PokemonFire.png"
    },
    {
        title: "Pokemon Showdown",
        url: "https://pokemonshowdown.com/",
        image: "images/PokemonShowdown.png"
    },
    {
        title: "Polytrack",
        url: "https://55gms.com/misc/polytrack/index.html",
        image: "images/Polytrack.png"
    },
    {
        title: "Recoil",
        url: "https://55gms.com/misc/recoil/",
        image: "images/Recoil.png"
    },
    {
        title: "Retro Bowl",
        url: "https://55gms.com/misc/misc/frame.html?link=rb&title=Retro%20Bowl",
        image: "images/RetroBowl.png"
    },
    {
        title: "Riddle School 1",
        url: "https://55gms.com/misc/riddleschool/index.html",
        image: "images/RiddleSchool1.png"
    },
    {
        title: "Roblox",
        url: "https://72.ip.nowgg.fun/apps/a/19900/b.html",
        image: "images/Roblox.png"
    },
    {
        title: "Rocket Bot Royale",
        url: "https://rocketbotroyale2.winterpixel.io/",
        image: "images/RocketBotRoyale.png"
    },
    {
        title: "Run 3",
        url: "https://55gms.com/misc/run3/index.html",
        image: "images/Run3.png"
    },
    {
        title: "Sans Fight",
        url: "https://badtimesimulator.io/",
        image: "images/San.png"
    },
    {
        title: "Skribbl io",
        url: "https://skribbl.io/",
        image: "images/Skribblio.png"
    },
    {
        title: "Slope",
        url: "https://baldis-basics-online.github.io/g5/class-450/",
        image: "images/Slope.png"
    },
    {
        title: "Sonic 1991",
        url: "https://www.allsonicgames.net/sonic-the-hedgehog.php",
        image: "images/Sonic1991.png"
    },
    {
        title: "Stumble Guys",
        url: "https://72.ip.nowgg.fun/apps/a/10011/b.html",
        image: "images/StumbleGuys.png"
    },
    {
        title: "Subway Surfers",
        url: "https://topvaz3.github.io/lesson305/lesson-407/",
        image: "images/SubwaySurfers.png"
    },
    {
        title: "Tomb of the Mask",
        url: "https://topvaz3.github.io/lesson302/lesson-147/",
        image: "images/TombOfTheMask.png"
    },
    {
        title: "Vex 6",
        url: "https://topvaz3.github.io/lesson306/lesson-157/",
        image: "images/Vex6.png"
    },
    {
        title: "World's Hardest Game",
        url: "https://55gms.com/misc/worldshardestgame/index.html",
        image: "images/WorldsHardestGame.png"
    },
    {
        title: "Yohoho io",
        url: "https://yohoho.io/",
        image: "images/Yohohoio.png"
    },
];

/* =========================
   INIT AFTER DOM READY
========================= */
window.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("games");

    console.log("games.js loaded");
    console.log("gameContainer:", gameContainer);

    if (!gameContainer) {
        console.error("❌ #games container not found");
        return;
    }

    gameContainer.innerHTML = "";

    gameLibrary.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <div class="game-img-wrapper">
                <img
                    src="${game.image}"
                    alt="${game.title}"
                    class="game-img"
                    onerror="this.src='https://placehold.co/400x400/1e3a8a/ffffff?text=${encodeURIComponent(game.title)}'"
                />
            </div>
            <p class="game-title">${game.title}</p>
        `;

        card.addEventListener("click", () => {
            // If this is Clash Royale, open the CloudMoon URL in a new tab
            if (game.title === "Clash Royale") {
                window.open(
                    "clash.html",
                    "_blank"
                );
                return;
            }

            // Otherwise, use the regular viewer
            if (game.url) {
                window.location.href =
                    "view.html?url=" + encodeURIComponent(game.url);
            }
        });

        gameContainer.appendChild(card);
    });

    console.log("✅ Games rendered:", gameLibrary.length);
});
