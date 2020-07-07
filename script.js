

const form = document.querySelector("form");
const input = document.getElementById("typingTextBox");
const messageList = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");
const userConnectedStatus = document.getElementById("userConnectedStatus");
const nameOfUser = document.getElementById("nameOfUser");
const messageField = document.querySelector(".messageField");
const chatContainers = document.querySelector(".chatContainers");
const numOfMessages = document.getElementsByClassName("numOfMessages")[0];
const nameOfConnectedUser = document.getElementById("nameOfConnectedUser");
const mainIntro = document.querySelector(".userChats");

const backToHome = document.getElementById("backToHome");
const navDotted = document.querySelector(".navDotted");
const menuContainer = document.querySelector(".menuContainer");
const goHome = document.getElementById("goHome");

const goToUsername = document.getElementById("goToUsername");
const usernameContainer = document.querySelector(".usernameContainer");

const submitButton = document.getElementById("submitButton");
const usernameTextBox = document.getElementById("usernameTextBox");

const fromAboutToHome = document.getElementById("fromAboutToHome");
const goToAbout = document.getElementById("goToAbout");
const aboutContainer = document.querySelector(".aboutContainer");

const fromContactToHome = document.getElementById("fromContactToHome");
const goToContact = document.getElementById("goToContact");
const contactContainer = document.querySelector(".contactContainer");

const fromProfileToHome = document.getElementById("fromProfileToHome");
const goToProfile = document.getElementById("goToProfile");
const profileContainer = document.querySelector(".profileContainer");
const profileUsername = document.getElementById("profileUsername");
/*
var connectedUsername = prompt("What is your name?");
nameOfConnectedUser.innerText = connectedUsername;
console.log(connectedUsername)
*/

chatContainers.addEventListener("click", () =>{
   
    messageField.style="display:flex";
    numOfMessages.style="visibility:hidden";
    mainIntro.style="display:none";

    const liBibot = document.createElement("li");
    const defaultMessage = document.getElementById("defaultMessage");

    liBibot.innerText = defaultMessage.innerText;
        messageList.append(liBibot);
        liBibot.setAttribute("class", "them");
});

backToHome.addEventListener("click", (e) =>{

    e.preventDefault();

    messageField.style="display:none";
    mainIntro.style="display:flex";
});

navDotted.addEventListener("click", () =>{

    menuContainer.style.display="flex";
    mainIntro.style="display:none";
    messageField.style="display:none";
});

goHome.addEventListener("click", (e) =>{

    e.preventDefault();

    menuContainer.style.display="none";
    mainIntro.style="display:flex";
});

goToUsername.addEventListener("click", (e) =>{

    e.preventDefault();

    menuContainer.style.display="none";
    messageField.style="display:none";
    mainIntro.style="display:none";
    usernameContainer.style="display:flex";
});

submitButton.addEventListener("click", (e) =>{

    e.preventDefault();

    nameOfConnectedUser.innerText = usernameTextBox.value;
    mainIntro.style="display:flex";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none"
    profileUsername.innerText = usernameTextBox.value;
});

fromAboutToHome.addEventListener("click", (e) =>{

    e.preventDefault();

    mainIntro.style="display:flex";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none";
    aboutContainer.style="display:none";
});

goToAbout.addEventListener("click", (e) =>{

    e.preventDefault();

    mainIntro.style="display:none";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none";
    aboutContainer.style="display:flex";
});

fromContactToHome.addEventListener("click", (e) =>{

    e.preventDefault();

    mainIntro.style="display:flex";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none";
    contactContainer.style="display:none";
});

goToContact.addEventListener("click", (e) =>{

    e.preventDefault();

    mainIntro.style="display:none";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none";
    contactContainer.style="display:flex";
});

fromProfileToHome.addEventListener("click", (e) =>{

    e.preventDefault();

    mainIntro.style="display:flex";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none";
    profileContainer.style="display:none";
});

goToProfile.addEventListener("click", (e) =>{

    e.preventDefault();

    mainIntro.style="display:none";
    menuContainer.style.display="none";
    messageField.style="display:none";
    usernameContainer.style="display:none";
    profileContainer.style="display:flex";
});


const possibleMessages= {
    clientMessage: [
        "tell me about yourself",
        "really?",
        "im good",
        "im good and you?",
        "what are your hobbies?",
        "when were you born?",
        "what is your surname?",
        "how are you?",
        "what is your name?",
        "show me your picture",
        "haha",
        "im doing good and you?",
        "hey",
        "hi",
        "how are you doing?",
        "how is your day going?",
        "how old are you?",
        "when were you created?",
        "what is your purpose?",
        "what langueges can you speak?"
    ],
    robotMessage: [
        "I'm just a robot learning what humans ask me \n When i don't understand i will ask my coach to teach me how to answer them next time.",
        "Yeah :)",
        "perfect :) \n Ask me questions",
        "Im good \n ask me questions dear.",
        "I like dancing, and talking to humans when they are bored",
        "I was born on the 8th of July 2020",
        "They did not give me a surname... \n Tell me yours dear.",
        "i am good and you?",
        "My name is KatBot i am a robot",
        "./Desert.jpg",
        "Why are you laughing? :)",
        "Good. \n Ask me any question",
        "hi",
        "hey",
        "I'm doing good thanks and you?",
        "it's going good thanks and you?",
        "I am one day old",
        "I was created today",
        "I'm just here to relieve boredom",
        "I was only taught english, but i will try to other langueges from you"
    ]
};

sendButton.addEventListener("click", (e) =>{

    e.preventDefault();

    const liBibot = document.createElement("li");
    const li = document.createElement("li");

    for (i = 0; i <= possibleMessages.clientMessage.length; i++){
        
        if(input.value == possibleMessages.clientMessage[i]){

            li.innerText = input.value;
            messageList.append(li);
            li.setAttribute("class", "me");

            liBibot.innerText = possibleMessages.robotMessage[i]
            messageList.append(liBibot);
            liBibot.setAttribute("class", "them");

            input.value="";

            break;
        }else{

            li.innerText = input.value;
            messageList.append(li);
            li.setAttribute("class", "me");

            liBibot.innerText = "I do not understand what you are trying to say, please speak english atleast."
            messageList.append(liBibot);
            liBibot.setAttribute("class", "them");

        }
        
    }

    input.value="";
    
 });


//  Setting up the current time

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");

hour.innerText = hours;
minute.innerText = minutes;



 