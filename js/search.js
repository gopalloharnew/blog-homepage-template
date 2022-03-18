"use strict"

const BLOGS = [
    {
        title: "How to Handle with Real Beggers",
        description: "How to stay with other real beggers out there",
        date: "18 July 2020",
        link: "#"
    },
    {
        title: "What If You get caught",
        description: "Even After all the Precaution. What If You Get Caught.",
        date: "14 June 2020",
        link: "#"
    },
    {
        title: "How to Stay hidden from Everyone that You're Not a begger",
        description: "Although started begging but your normal time can affect when you beg so it's important to make sure that no-one can know that you're not a begger.",
        date: "30 May 2020",
        link: "#"
    },
    {
        title: "Pro tips for Begginer Beggers",
        description: "Here are Some Pro Tips for Begginers to sound like a original Begger",
        date: "30 April 2020",
        link: "#"
    },
    {
        title: "Top 10 Location for Begging",
        description: "Location decide the mood of a person, so It's very Important to choose a Right location to get Attraction",
        date: "11 March 2020",
        link: "#"
    },

    {
        title: "The Communication Skills Required for Begging",
        description: "Communication and Eye contact is intergeral part of making people feel Sympathetic and In this Article I've Wrtten About That.",
        date: "2 February 2020",
        link: "#"
    },
    {
        title: "My First Blog",
        description: "This is My First Blog. In this blog I have Written about How to start Begging and how to earn millions from that.",
        date: "1 January 2020",
        link: "#"
    },
    
    
   
    
]



const searchInput = document.querySelector("#search");
const cardTemplate = document.querySelector("#cardTemplate");
const cardWraper = document.querySelector(".card-wraper");

function populateBlogs(){
    BLOGS.forEach(blogInfo => {
        // creating card
        const newCard = cardTemplate.content.cloneNode(true).children[0];
        newCard.querySelector(".date").innerText = blogInfo.date;
        newCard.querySelector(".card-title").innerText = blogInfo.title;
        newCard.querySelector(".card-title").href = blogInfo.link;
        newCard.querySelector(".card-description").innerText = blogInfo.description;
        newCard.querySelector(".read-more").href = blogInfo.link;

        blogInfo.card = newCard;
        cardWraper.append(newCard);
    })
}

function searchFunc(){
    searchInput.addEventListener("input", ()=>{
        BLOGS.forEach(blogInfo => {
            const value = searchInput.value.toLowerCase().trim();
            const bTitle = blogInfo.title.toLowerCase().trim();
            const bDescription = blogInfo.description.toLowerCase().trim();
            const bDate = blogInfo.date.toLowerCase().trim();
            if(bTitle.includes(value) || bDescription.includes(value) || bDate.includes(value)){
                blogInfo.card.classList.remove("hide");
                return;
            }
            blogInfo.card.classList.add("hide");            
        })
    })
}


populateBlogs();
searchFunc();