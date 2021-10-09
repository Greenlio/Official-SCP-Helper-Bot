let Discord = require("discord.js");
let client = new Discord.Client();
let prefix = "!"

// actual code, fixed


client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    function fetchscp(scp) {
        if(scp == "SCP-096") {
            return "SCP 096 is a powerful creature. If you look at him body, face, etc he will enrage the enrage phase is a dangerous phase if he doesnt get bagged there he can kill SCP-096-1 and even if he just looked at the picture at the other side of the earth!"
        }
        if(scp == "SCP-682") {
            return "SCP 682 Is a hard to destroy reptile he can regenerate very fast and he is called: The Reptile. It is very dangerous to humanity because it hates humanity he wants to destroy humanity for once and for all and the scp foundation wants tho terminate scp 682 for once and for all there were fights to terminate him as like SCP 173 or SCP 096 but the results of both fights were like the same."
        }
        if(scp == "SCP-173") {
            return "SCP 173 also called: The Statue. Is an statue made out of concrete and only moves when unobserved if he is getting observed by someone or something like scp jamitor or human or security camera he will not move at all his kill method is to snap the enemys neck and thats quick he has alot of strength which is unknown where he got the strength from and the makers of the statue are still unknown but theres a youtube video link: https://www.youtube.com/watch?v=4CACc1sfkFU click this link to get to the video!"
        }
        if(scp == "SCP-001") {
            return "SCP-001 also called: The Gate Guardin. Is an angel that guards something that we don't know he is guarding [REDACTED] if you come in near of 1 kilometer range he will do NOTHINGS if you step to 900 meters forward you will get nausea and feel dizzy and if he see's you he will kill you with his giantic sword he is a Appolyon object that is near to impossible to contain as an scp to contain he don't owns a chamber he lives somewhere there were also a broadcast to fear the light because he somehow breached the Appolyon containment and thats bad because he could kill alot of humans!"
        }
        if(scp == "SCP-914") {
            return "SCP-914 is a complex mechanism that upgrades things it can also make you faster it has these variants to upgrade: Poor, Good, 1:1, Fine, Very Fine. The poor variant is to make things poor and useless the Good variant is to make things better to use. The 1:1 variant will copy the 1 thing that you placed in the INPUT and will be copyed and will moved to the OUTPUT. The Fine variant is making it more usefully if you stay in the fine variant you will be teleported to the output then you are faster! The very fine variant makes things alot of good example: L4 Keycard Option: Very Fine *puts L4 Key in inPut *Waits 10 - 15 seconds* a Lv 5 Key will come out in the output theres enough space to put a whole human inside the input or output! Its an safe class object so you can access it with a level 2 or 3 keycard!"
        }
        if(scp == "SCP-2317") {
            return "SCP-2317 is a framed wooden door originally intended for the basement of an eighteenth-century Massachusetts sandstone house. ... When the door is opened, every person walking through the door frame is transported into an alternate reality. 7 chains already broke 1 is left if the last chain breaks the world would end in an XK Class Scenario!"
        }
        if(scp == "SCP-003") {
            return "SCP-003 must be kept at a temperature of at least 35 ° C, at best above 100 ° C. No living multicellular organisms of Category IV or higher should come in contact with SCP-003."
        }
        if(scp == "SCP-003-2") {
            return "In the event of a total power failure, personnel must maintain physical contact with SCP-003-1. Ideally, personnel can use body heat to warm SCP-003-1 above the critical temperature. When SCP-003 reaches its activation temperature, skin contact must be maintained at least until SCP-003-1 has fully reached its second growth stage." 
        }
        if(scp == "SCP-003-3") {
            return "Personnel entering the containment area of ​​SCP-003 must be screened for Category IV or higher parasites and decontaminated if such organisms are present. Any employee who comes into direct contact with SCP-003-1 must report for subsequent decontamination."
        }
        if(scp == "SCP-003-4") {
            return "SCP-003-1 must not be separated from SCP-003-2, except in the event of a serious emergency as described above. Any change in SCP-003-2's runic activities (including pattern changes, color changes, frequency changes) must be reported within three (3) hours of their occurrence. However, any cessation of runic activity must be reported immediately. SCP-003-2 must be continuously connected to and powered by generator 003-IX."
        }
        if(scp == "SCP-049") {
            return "SCP-049 is an doctor that wants to cure the pestillence but you do not have the pestillence he also has a deadly touch so stay away from him as far as possible to not get cured if you get cured you will transform into a zombie and you will be following SCP-049 if you are cured thats called SCP-049-1!"
        }
        if(scp == "SCP-999") {
            return "SCP-999 is an tickle monster made out of slime and can cure pepole from depression and etc it tickles very much and makes pepole happy when touched this monster is also ver cute and if he does a mistake like he drops a cafe by accident he goes back and likes to say sorry!"
        }
        if(scp == "SCP-3000") {
            return "SCP-3000 is a giantic creature also the object class is THAUMIEL only LV5 Card access! It can open a mouth very wide dont wimm in it or you are dead here a cut from logs: ||[REDACTED]|| Ananta... i was wrong (sniffs) god please safe me. SCP-3000 consumes him quickly and swimms into the deep."
        }
        if(scp == "SCP-178") {
            return "SCP-178 are 3D Glasses that makes you see monsters no this is not a horror movie the monsters have 4 arms on there back and they are black and have 2 normal arms and 2 normal legs but the 4 arms are very scary you still can die thats why they are euclid they can make your brain go brain dead and thats bad because you die there and then also in reallife and nobody knows what happened so dont equip the glasses!"
        }
        if(scp == "SCP-500") {
            return "SCP-500 is an pill that cures everything the pill is also used by MTF unit Beta - 7 to cure the zombie cure from the plague doctor and the 1st side is red the second side is white it can cure every sickness so don't worry you can take it without any problems! OBJECT CLASSS: SAFE"
        }
        if(scp == "SCP-1049") {
            return "SCP-1049 is to be kept in a 1 x 1 x 3m aviary. Other than a perch 2m above ground, feeder, and water container, no foreign objects are permitted in SCP-1049's enclosure. SCP-1049 must be kept tethered to the perch at all times. If entry to SCP-1049's enclosure is required, protective clothing must be worn and time spent inside the enclosure must be kept to a minimum."
        }
        if(scp == "SCP-008") {
            return "SCP-008 is an biohazard that makes humans turn into zombies thats scary but if the foundation see's a zombie he will be instantly terminated so you do not need to be scared but if theres an incident and more foundation staff gets infected it gets harder and whole facility lockdown would be initiated and all tests would be cancelled immediately!"
        }
        if(scp == "SCP-035") {
            return "A mask capable of transferring its conscious onto any victim which wears it. In this instance it is worn by a scientist in its containment chamber. Offers the player freedom in exchange for its release."
        }
        if(scp == "SCP-066") {
            return "Produces random effects and behaviors with no visible pattern. Often says: Eric? when within range of a subject."
        }
        if(scp == "SCP-079") {
            return "Creates loud blaring sounds when near CCTV monitors. Attempts to halt the player's progress through varied means."
        }
        if(scp == "SCP-106") {
            return "Capable of traversing through solid matter. Catches victims and takes them to its Pocket Dimension."
        }
        if(scp == "SCP-002") {
            return "SCP-002 resembles a tumorous, fleshy growth with a volume of roughly 60 m³ (or 2000 ft³). An iron valve hatch on one side leads to its interior, which appears to be a standard low-rent apartment of modest size. One wall of the room possesses a single window, though no such opening is visible from the exterior. The room contains furniture which, upon close examination, appears to be sculpted bone, woven hair, and various other biological substances produced by the human body. All matter tested thus far show independent or fragmented DNA sequences for each object in the room."
        }
        // bro 515 was supposed to be here but that code was so messy im not even gonna touch it
        // same with 009 thats multiple messages i am not dealing with
        if(scp == "SCP-2521") {
            return "SCP-2521 is an humanoid like Entity if you call out its name it will take it, or you in the worst case with you, so always only speak SCP-..|.....|..|. for your safety."
        }
    }
    if(command === 'info') {
        const scp = fetchscp(args[1])
        let embed = new Discord.MessageEmbed()
        .setTitle('SCP Info Command')
        .setColor('RANDOM')
        .setFooter(scp)
        message.channel.send(embed)
    }
    if(command === 'credits') {
        message.channel.send('**Credits**\nGreenlio - Rewriting the entire bot.\nShadowPlayer001 - Making original bot (horrible code).')
    }
});

client.login("token here");

// you're welcome child who wrote this