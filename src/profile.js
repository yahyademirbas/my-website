// Change your display name on tha landing display
const header = {
    name: "Yahya",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "Hello, I am Yahya. I am studying MIS at Boğaziçi University and trying to improve myself in the field of programming, especially in the field of \"game development\". In this respect, I have learned/learning the working principles of game engines, design patterns, 2D/3D art and tonal harmony. I am slowly working on a game that I have developed completely with its music, art and codes, I am progressing by learning and can say that the part that I have enjoyed the most and want to move forward is coding. Besides, I am a musician, multi-instrumentalist. I have an amateur knowledge of recording technologies and can produce, compose original works. I am also working as a manager in the field of artistic agency. In addition, I'm an amateur guitar maker. This site was created mainly as a portfolio for companies. Maybe over time I'll add devlogs and guitar making vlogs, who knows…"
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "Unity 3D & C#",
        value: 75
    },{
        name: "Unity Photon Network 2 (PUN2)",
        value: 21
    },{
        name: "JAVA (OOP, JDBC & Hibernate, PostgreSQL, Android)",
        value: 52
    },{
        name: "Video Editing",
        value: 97
    },{
        name: "Photoshop",
        value: 91
    },{
        name: "CAD & 3D Modeling",
        value: 31
    },{
        name: "DAWs (Cubase & Reaper)",
        value: 88
    },{
        name: "Python",
        value: 25
    }, {
        name: "Currently learning about Cyber Security, Pen Test etc.",
        value: 10
    },
]
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Services I Can Provide"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "programming",
        name: "Programming For Game Projects",
        skills: ["Unity, C#, Java"],
        //url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Composing, Producing For Your Projects",
        skills: ["Cubase, Sony Vegas, MIDI Technologies"],
        //url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "3D Modeling For Games, Printing, CNC",
        skills: ["Blender, AutoCAD, Fusion 360"],
        //url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Instrument Making",
        skills: ["Handmade unique electric guitars"],
        //url: "https://github.com/kaustubhai"
    },/*
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Project 5",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Project 6",
        skills: ["HTML, CSS, JS"],
        url: "https://github.com/kaustubhai"
    },*/
]
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
/*const section4Title = "Miscellaneous"
const miscellaneous = [
    {
        // Add image in './styles/images.css' in #misc1
        id: "misc1",
        name: "Miscellaneous 1",
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #misc2
        id: "misc2",
        name: "Miscellaneous 2",
        url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #misc3
        id: "misc3",
        name: "Miscellaneous 3",
        url: "https://github.com/kaustubhai"
    },
]*/
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "This is my brief summary! You have seen the services I can offer you above. For now, there are 3 projects waiting in line for guitar making, but I am open for other offers. Especially in game development.",
    copyright: "Yahya Demirbas",
    contactUrl: 'https://form.jotform.com/210765485333963'
}
// Social Media Links
const social = {
    mail: 'https://form.jotform.com/210765485333963',
    github: 'https://github.com/yahyademirbas',
    linkedin: 'https://www.linkedin.com/in/yahyademirbas',
    instagram: 'https://www.instagram.com/yahyademirbash/',
    youtube: 'https://www.youtube.com/channel/UCw2DsGO8ZiChPN1VEDSU7_g',
    spotify: 'https://open.spotify.com/user/yeahyea-tr?si=TnnzKWWtQCu-yJiIOdr76g'
}
// Dont change anything here
export { header, background, about, skillsBar, projects, /*miscellaneous,*/ contact, social, section2title, section3Title, /*section4Title,*/ section5Title }
