/*********************************
 * LEGENDS DATA
 *********************************/
const LEGENDS_DATA = {
    // DIRECTORS
    "christopher-nolan": {
        name: "Christopher Nolan",
        category: "Director",
        image: "images/person1.jpg",
        famous_works: ["Inception", "Interstellar", "The Dark Knight", "Dunkirk", "Tenet"],
        biography: "Christopher Nolan is a British-American filmmaker known for his complex narratives and innovative visual techniques.",
        achievements: ["Academy Award nominations", "BAFTA Awards", "Directors Guild Awards"],
        career_path: "Started with short films, then independent features, eventually becoming one of Hollywood's most respected directors."
    },
    "ss-rajamouli": {
        name: "S.S. Rajamouli",
        category: "Director",
        image: "movie/raj.jpg",
        famous_works: ["Baahubali: The Beginning", "Baahubali 2: The Conclusion", "RRR", "Eega", "Magadheera"],
        biography: "S.S. Rajamouli is an Indian filmmaker known for his epic action dramas and fantasy films, regarded as the highest-grossing Indian director of all time.",
        achievements: ["Academy Award for Best Original Song", "Golden Globe Award", "Padma Shri", "National Film Awards"],
        career_path: "Started in television, moved to feature films, and became a pioneer of pan-Indian cinema with global recognition."
    },
    "steven-spielberg": {
        name: "Steven Spielberg",
        category: "Director",
        image: "images/person2.jpg",
        famous_works: ["Jurassic Park", "E.T.", "Schindler's List", "Jaws", "Indiana Jones"],
        biography: "Steven Spielberg is one of the most influential filmmakers in the history of cinema.",
        achievements: ["3 Academy Awards", "Presidential Medal of Freedom", "Kennedy Center Honors"],
        career_path: "Started as a television director, moved to feature films, and became a legendary filmmaker and producer."
    },
    "quentin-tarantino": {
        name: "Quentin Tarantino",
        category: "Director",
        image: "images/person3.jpg",
        famous_works: ["Pulp Fiction", "Kill Bill", "Django Unchained", "Inglourious Basterds"],
        biography: "Quentin Tarantino is known for his distinctive style, nonlinear storylines, and pop culture references.",
        achievements: ["2 Academy Awards for Best Original Screenplay", "Palme d'Or winner"],
        career_path: "Worked in a video rental store, wrote screenplays, and became an acclaimed independent filmmaker."
    },
    "martin-scorsese": {
        name: "Martin Scorsese",
        category: "Director",
        image: "images/staff-1.jpg", // No change specified in snippet
        famous_works: ["Goodfellas", "The Departed", "Taxi Driver", "The Wolf of Wall Street"],
        biography: "Martin Scorsese is an American filmmaker known for his gritty crime dramas and character studies.",
        achievements: ["Academy Award for Best Director", "AFI Life Achievement Award"],
        career_path: "Film school graduate who started with independent films and became a master of cinema."
    },
    "james-cameron": {
        name: "James Cameron",
        category: "Director",
        image: "images/staff-2.jpg", // No change specified in snippet
        famous_works: ["Avatar", "Titanic", "Terminator", "Aliens"],
        biography: "James Cameron is known for his groundbreaking visual effects and epic storytelling.",
        achievements: ["3 Academy Awards", "Highest-grossing films of all time"],
        career_path: "Started as a special effects artist and became a visionary director and technology innovator."
    },
    "denis-villeneuve": {
        name: "Denis Villeneuve",
        category: "Director",
        image: "images/staff-3.jpg", // No change specified in snippet
        famous_works: ["Dune", "Blade Runner 2049", "Arrival", "Sicario"],
        biography: "Denis Villeneuve is a Canadian filmmaker known for his thoughtful science fiction and thriller films.",
        achievements: ["Academy Award nominations", "BAFTA Awards", "Critics' Choice Awards"],
        career_path: "Started in Canadian cinema and became an internationally acclaimed director."
    },
    "satyajit-ray": {
        name: "Satyajit Ray",
        category: "Director",
        image: "movie/ray.jpg",
        famous_works: ["Pather Panchali", "Charulata", "The Music Room", "Mahanagar"],
        biography: "Satyajit Ray was an Indian filmmaker, screenwriter, graphic artist, music composer and author, widely regarded as one of the greatest filmmakers of the 20th century.",
        achievements: ["Academy Honorary Award", "32 National Film Awards", "Legion of Honour", "Bharat Ratna"],
        career_path: "Started as a commercial artist, founded the Calcutta Film Society, and directed the groundbreaking Apu Trilogy."
    },
    "mani-ratnam": {
        name: "Mani Ratnam",
        category: "Director",
        image: "movie/mani.jpg",
        famous_works: ["Roja", "Bombay", "Dil Se..", "Ponniyin Selvan", "Nayakan"],
        biography: "Gopala Ratnam Subramaniam, known as Mani Ratnam, is an Indian film director, screenwriter, and producer who predominantly works in Tamil cinema.",
        achievements: ["6 National Film Awards", "Padma Shri", "Filmfare Awards"],
        career_path: "Management consultant who turned to filmmaking and revolutionized Tamil cinema with his unique visual style."
    },
    "rajkumar-hirani": {
        name: "Rajkumar Hirani",
        category: "Director",
        image: "movie/hirani.jpg",
        famous_works: ["Munna Bhai M.B.B.S.", "3 Idiots", "PK", "Sanju", "Dunki"],
        biography: "Rajkumar Hirani is an Indian filmmaker known for his socially relevant comedy-dramas which have been major box office successes.",
        achievements: ["National Film Awards", "Filmfare Awards"],
        career_path: "Worked in advertising and editing before making his directorial debut with the cult classic Munna Bhai M.B.B.S."
    },
    "yash-chopra": {
        name: "Yash Chopra",
        category: "Director",
        image: "movie/chopra.jpg",
        famous_works: ["Deewaar", "Darr", "Dil To Pagal Hai", "Veer-Zaara", "Jab Tak Hai Jaan"],
        biography: "Yash Raj Chopra was an Indian film director and producer, often called the 'King of Romance'. He founded Yash Raj Films, one of India's biggest production houses.",
        achievements: ["6 National Film Awards", "Dadasaheb Phalke Award", "Padma Bhushan"],
        career_path: "Started as an assistant to his brother B.R. Chopra, debuted with Dhool Ka Phool, and redefined romance in Bollywood."
    },

    // ACTORS
    "prabhas": {
        name: "Prabhas",
        category: "Actor",
        image: "movie/prab.jpg",
        famous_works: ["Baahubali: The Beginning", "Baahubali 2: The Conclusion", "Salaar", "Kalki 2898 AD", "Mirchi"],
        biography: "Uppalapati Venkata Suryanarayana Prabhas Raju is an Indian actor who works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and gained global recognition for his role in the Baahubali franchise.",
        achievements: ["Nandi Award", "SIIMA Awards", "First South Indian actor with a wax statue at Madame Tussauds"],
        career_path: "Debuted with Eeswar, gained stardom with Varsham and Chatrapathi, and became a pan-Indian superstar with Baahubali."
    },
    "shah-rukh-khan": {
        name: "Shah Rukh Khan",
        category: "Actor",
        image: "movie/srk.jpg",
        famous_works: ["Dilwale Dulhania Le Jayenge", "My Name Is Khan", "Pathaan", "Jawan", "Swades"],
        biography: "Shah Rukh Khan, also known as SRK, is an Indian actor and film producer who works in Hindi films. Referred to as the 'Baadshah of Bollywood', he is one of the most successful film stars in the world.",
        achievements: ["14 Filmfare Awards", "Padma Shri", "Ordre des Arts et des Lettres", "Legion of Honour"],
        career_path: "Started in television series like Fauji, debuted in films with Deewana, and rose to superstardom with romantic roles."
    },
    "amitabh-bachchan": {
        name: "Amitabh Bachchan",
        category: "Actor",
        image: "movie/ab.jpg",
        famous_works: ["Sholay", "Deewaar", "Zanjeer", "Piku", "Black"],
        biography: "Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema.",
        achievements: ["4 National Film Awards", "15 Filmfare Awards", "Padma Vibhushan", "Dadasaheb Phalke Award"],
        career_path: "Rose to fame in the 1970s as the 'Angry Young Man', faced a career slump in the 90s, and made a legendary comeback with Mohabbatein and KBC."
    },
    "chiranjeevi": {
        name: "Chiranjeevi",
        category: "Actor",
        image: "movie/chiru.webp",
        famous_works: ["Indra", "Khaidi", "Tagore", "Sye Raa Narasimha Reddy", "Waltair Veerayya"],
        biography: "Konidela Siva Sankara Vara Prasad, known professionally as Chiranjeevi, is an Indian actor and former politician who works predominantly in Telugu cinema.",
        achievements: ["Padma Vibhushan", "3 Nandi Awards", "7 Filmfare Awards South", "Raghupathi Venkaiah Award"],
        career_path: "Debuted in 1978, became the 'Megastar' of Telugu cinema with a string of blockbusters, and served as Minister of Tourism for India."
    },
    "ram-charan": {
        name: "Ram Charan",
        category: "Actor",
        image: "movie/charan.jpg",
        famous_works: ["RRR", "Rangasthalam", "Magadheera", "Dhruva"],
        biography: "Ram Charan is an Indian actor, producer, and entrepreneur who works in Telugu cinema. He is one of the highest-paid actors in Indian cinema.",
        achievements: ["3 Filmfare Awards", "2 Nandi Awards", "Critics' Choice Super Award nomination"],
        career_path: "Son of Chiranjeevi, debuted with Chirutha, achieved massive success with Magadheera, and gained global fame with RRR."
    },
    "mahesh-babu": {
        name: "Mahesh Babu",
        category: "Actor",
        image: "movie/mb.webp",
        famous_works: ["Pokiri", "Okkadu", "Dookudu", "Srimanthudu", "Bharat Ane Nenu"],
        biography: "Ghattamaneni Mahesh Babu is an Indian actor, producer, media personality, and philanthropist who works mainly in Telugu cinema.",
        achievements: ["8 Nandi Awards", "5 Filmfare Awards South", "SIIMA Awards"],
        career_path: "Started as a child artist, debuted as a lead in Rajakumarudu, and established himself as the 'Superstar' of Telugu cinema."
    },

    // MUSIC DIRECTORS
    "mm-keeravani": {
        name: "M.M. Keeravani",
        category: "Music Director",
        image: "movie/mmk.jpg",
        famous_works: ["RRR", "Baahubali", "Eega", "Magadheera", "Annamayya"],
        biography: "Koduri Marakathamani Keeravani is an Indian film composer, playback singer, and lyricist, who predominantly works in Telugu cinema. He is known for his collaborations with his cousin S.S. Rajamouli.",
        achievements: ["Academy Award", "Golden Globe Award", "National Film Award", "Padma Shri"],
        career_path: "Started as an assistant director, became a composer with Manasu Mamatha, and achieved global fame with 'Naatu Naatu'."
    },
    "ghantasala": {
        name: "Ghantasala",
        category: "Music Director",
        image: "movie/ghantasala.jpg",
        famous_works: ["Mayabazar", "Lavakusa", "Gundamma Katha", "Pandava Vanavasam"],
        biography: "Ghantasala Venkateswara Rao was an Indian film composer and playback singer, known as the 'Gaana Gandharva'. He is considered one of the greatest singers and composers of Telugu cinema.",
        achievements: ["Padma Shri", "Raghupathi Venkaiah Award"],
        career_path: "Freedom fighter who became a singer and composer, scoring music for over 100 films and singing over 10,000 songs."
    },
    "ar-rahman": {
        name: "A.R. Rahman",
        category: "Music Director",
        image: "movie/ar.webp",
        famous_works: ["Slumdog Millionaire", "Roja", "Lagaan", "Dil Se", "Ponniyin Selvan"],
        biography: "A.R. Rahman is an Indian composer known for blending traditional Indian music with electronic sounds and world music genres.",
        achievements: ["2 Academy Awards", "2 Grammy Awards", "Padma Bhushan"],
        career_path: "Started in advertising jingles, moved to film music with Roja, and became internationally acclaimed."
    },
    "ilaiyaraaja": {
        name: "Ilaiyaraaja",
        category: "Music Director",
        image: "movie/illya.webp",
        famous_works: ["Nayakan", "Swathi Muthyam", "Sagara Sangamam", "Mouna Ragam"],
        biography: "Ilaiyaraaja is an Indian film composer, singer, and songwriter. He is widely regarded as one of the greatest composers in the Indian film industry.",
        achievements: ["5 National Film Awards", "Padma Vibhushan", "Sangeet Natak Akademi Award"],
        career_path: "Started as a session guitarist, debuted as a composer in 1976, and has composed over 7000 songs for over 1000 films."
    },
    "mani-sharma": {
        name: "Mani Sharma",
        category: "Music Director",
        image: "movie/manis.jpeg",
        famous_works: ["Indra", "Kushi", "Pokiri", "Okkadu", "Samarasimha Reddy"],
        biography: "Mani Sharma is an Indian music director known as the 'Swara Brahma' for his contributions to Telugu and Tamil cinema. He is famous for his background scores.",
        achievements: ["3 Nandi Awards", "3 Filmfare Awards South"],
        career_path: "Started as a keyboard player for Ilaiyaraaja and Raj-Koti, became an independent music director with Super Heroes."
    },
    "devi-sri-prasad": {
        name: "Devi Sri Prasad",
        category: "Music Director",
        image: "movie/dsp.jpeg",
        famous_works: ["Pushpa: The Rise", "Rangasthalam", "Arya", "Waltair Veerayya"],
        biography: "Devi Sri Prasad is an Indian film composer, lyricist, and singer who works predominantly in Telugu and Tamil cinema.",
        achievements: ["National Film Award", "9 Filmfare Awards South", "SIIMA Awards"],
        career_path: "Debuted with Devi, and became known for his energetic and mass-appealing music."
    }
};

/*********************************
 * LEGEND NAVIGATION
 *********************************/
function openLegend(legendId) {
    // Check if dynamic page exists or if we should use generic template
    // Only Rajamouli has a custom static page now, as per user request to use generic for others
    const staticPages = ['ss-rajamouli'];

    if (staticPages.includes(legendId)) {
        window.location.href = `pages/legends/${legendId}.html`;
    } else {
        // Use generic page for others
        window.location.href = `pages/legends/generic_director.html?id=${legendId}`;
    }
}

/*********************************
 * INITIALIZE PAGE
 *********************************/
document.addEventListener("DOMContentLoaded", () => {
    console.log("Legends page loaded with", Object.keys(LEGENDS_DATA).length, "legends");
});