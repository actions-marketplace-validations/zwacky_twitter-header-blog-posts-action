var e=require("https"),t=require("url"),r=require("fs"),n=require("./vendor.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("os"),require("path"),require("http"),require("net"),require("tls"),require("events"),require("assert"),require("util"),require("crypto"),require("querystring"),require("stream"),require("zlib"),require("buffer"),require("string_decoder"),require("timers");var a=s(e),i=s(t),o=s(r);const u=a.default,{URL:p}=i.default,c=o.default.promises,_=n.parser,l=n.requireCore(),m=n.twitter_m.exports,d=__dirname+"/../tmp/header.png",f=process.env.TWITTER_API_KEY,I=process.env.TWITTER_API_SECRET,T=process.env.TWITTER_ACCESS_TOKEN,h=process.env.TWITTER_ACCESS_SECRET,g=l.getInput("BLOG_RSS"),q=Number.parseInt(l.getInput("MAX_TEXT_LENGTH")||"40"),E=Number.parseInt(l.getInput("BLOG_POSTS_AMOUNT")||"3"),S=Number.parseInt(l.getInput("DRAW_BLOGTITLES_X")||"835"),R=Number.parseInt(l.getInput("DRAW_BLOGTITLES_Y")||"150"),w=Number.parseInt(l.getInput("DRAW_BLOGTITLES_LINEHEIGHT")||"55"),b=l.getInput("DRAW_BACKGROUNDCOLOR")||"#00252d",A=l.getInput("DRAW_TEXTS")||'[\n\t["h1", "Hey, I\'m Simon", 125, 100],\n\t["h1", "My latest blog posts", 835, 70],\n\t["h1", "Follow   and say hi!", 545, 390],\n\t["p", "I tweet about webperf, javascript,", 125, 177],\n  ["p", "my learnings and books.", 125, 212]\n]',L=l.getInput("DRAW_IMAGES")||'[\n\t["./assets/images/underscore.png", 310, 145],\n\t["./assets/images/bullets.png", 725, 132],\n\t["./assets/images/curl.png", 505, 350]\n]';(async function(e,t=E){if(!e)throw"no valid BLOG_RSS";const{host:r,pathname:n}=new p(e);return(await new Promise(((e,t)=>{u.request({host:r,path:n},(r=>{let n="";r.on("data",(e=>n+=e)),r.on("end",(()=>e(_.parse(n)))),r.on("error",(e=>t(e)))})).end()}))).rss.channel.item.slice(0,t).map((e=>e.title))})(g).then((e=>async function(e,t=d){const{default:r}=await Promise.resolve().then((function(){return require("./vendor.js")})).then((function(e){return e.index})),n=new r(1500,500,b),s=await r.loadFont(__dirname+"/../assets/fonts/IBMPlexSans-Bold.ttf.fnt"),a=await r.loadFont(__dirname+"/../assets/fonts/Lato-Regular.ttf.fnt");JSON.parse(A).forEach((e=>{const[t,r,i,o]=e,u="h1"===t?s:a;n.print(u,i,o,r)})),e.forEach(((e,t)=>{const r=e.length>q?e.slice(0,q).trim()+"...":e;n.print(a,S,R+w*t,r)}));const i=JSON.parse(L).map((async e=>{const[t,s,a]=e,i=await r.read(t.startsWith("./")?`${__dirname}/../${t.slice(1)}`:t);n.composite(i,s,a)}));return await Promise.all(i),n.write(t),t}(e))).then((e=>async function(e){const t=new m({consumer_key:f,consumer_secret:I,access_token_key:T,access_token_secret:h}),r=await c.readFile(e),n=Buffer.from(r).toString("base64");return t.post("account/update_profile_banner",{banner:n})}(e))).catch((e=>l.setFailed(e))),module.exports={};
