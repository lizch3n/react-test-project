/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import {defineMessages} from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
    startProjectHeader: {
        id: `${scope}.start_project.header`,
        defaultMessage: 'Start your next react project in seconds',
    },
    startProjectMessage: {
        id: `${scope}.start_project.message`,
        defaultMessage: 'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
    },
    trymeHeader: {
        id: `${scope}.tryme.header`,
        defaultMessage: 'Try me!',
    },
    trymeMessage: {
        id: `${scope}.tryme.message`,
        defaultMessage: 'Show Github repositories by',
    },
    trymeAtPrefix: {
        id: `${scope}.tryme.atPrefix`,
        defaultMessage: '@',
    },
    "quiz": {
        id: `${scope}.quiz`,
        defaultMessage: 'Fragrance Quiz',
        messages: [
            {
                question: "What kind of music do you prefer?",
                answers: [
                    {"A": "Indie/Rock"},
                    {"B": "Folk/Country"},
                    {"C": "EDM/Techno"},
                    {"D": "Top 40/Modern"},
                    {"E": "World/Obscure"},
                ]
            },
            {
                question: "What is your favorite type of food?",
                answers: [
                    {"A": "I have a major sweet tooth."},
                    {"B": "Comfort/soul food for me. Bring on the butter!"},
                    {"C": "Fresh, light, healthy fare."},
                    {"D": "International cuisine — the spicier the better!"},
                    {"E": "Modern or fusion. I like to try new, trendy spots."},
                ]
            },
            {
                question: "What would you rather do on vacation?",
                answers: [
                    {"A": "Relax on the beach, of course!"},
                    {"B": "Explore in the city."},
                    {"C": "Hike in the mountains."},
                    {"D": "Travel somewhere foreign and exotic."},
                    {"E": "Experience a charming European village."},
                ]
            },
            {
                question: "How would you describe your personal style?",
                answers: [
                    {"A": "Daring. I'm always trying the latest trend."},
                    {"B": "Classic. I wear staples that never go out of style."},
                    {"C": "Flirty. Give me frilly dresses and high heels, please!"},
                    {"D": "Utilitarian. I want to be comfortable."},
                    {"E": "Boho chic. I'm all about beach clothes and vintage charm."},
                ]
            },
            {
                question: "What word best describes your personality?",
                answers: [
                    {"A": "Friendly"},
                    {"B": "Adventurous"},
                    {"C": "Easygoing"},
                    {"D": "Playful"},
                    {"E": "Unique"},
                ]
            },
            {
                question: "You feel best when you are...",
                answers: [
                    {"A": "Reading a good book"},
                    {"B": "Cooking or baking"},
                    {"C": "Working or on the go"},
                    {"D": "Exploring or traveling"},
                    {"E": "Partying with my friends"},
                ]
            },
            {
                question: "Choose a favorite scent from the choices below.",
                answers: [
                    {"A": "Orange"},
                    {"B": "Cloves"},
                    {"C": "Roses"},
                    {"D": "Pine"},
                    {"E": "The ocean"},
                ]
            },
            {
                question: "Pick another scent that appeals to you.",
                answers: [
                    {"A": "Fresh linen"},
                    {"B": "Sandalwood"},
                    {"C": "Vanilla"},
                    {"D": "Jasmine"},
                    {"E": "Leather"},
                ]
            },
            {
                question: "You want your scent to make you feel...",
                answers: [
                    {"A": "Energized"},
                    {"B": "Peaceful"},
                    {"C": "Sensual"},
                    {"D": "Youthful"},
                    {"E": "Courageous"},
                ]
            },
            {
                question: "What is your favorite season?",
                answers: [
                    {"A": "Fall. Bring on the pumpkin spice!"},
                    {"B": " Winter. I love cozy sweaters and snow."},
                    {"C": "Spring. It's fresh and full of opportunity."},
                    {"D": "Summer. I'm all about warm weather and the beach."},
                    {"E": "I don't have a favorite!"},
                ]
            },
        ],
        "answerMap": [
            {
                exotic: ["AE", "DE", "D", "AE", "BE", "AD", "B", "BCE", "CE", "A"],
                "copy": [
                    "Bewitching and mysterious, people often consider you alluring. You might like to make an entrance, explore faraway places and try new things. You likely want a perfume that’s going to turn some heads.",
                    "Oriental fragrances often start out with an animalistic base like ambergris or musk, layered with warmer notes such as amber or vanilla. Feminine and sensual, this scent is the perfect way to turn up the heat on date night."
                ]
            },
            {
                woody: ["ABE", "BC", "C", "DE", "BC", "D", "D", "BE", "BCE", "AB"],
                "copy": [
                    "You’re drawn to the outdoors and love a good hike in the woods. You also might consider yourself to be a career woman or simply one who boasts a no-nonsense attitude. Either way, you’re the leader in your group of friends and love to trailblaze.",
                    "Woody fragrances usually start with a hint of moss or bark and are often mixed with other strong scents that evoke thoughts of nature. Unique and confidence-inspiring, this scent is perfect for commanding respect at the office."
                ]
            },
            {
                floral: ["BCD", "ABCE", "AB", "BC", "AD", "CE", "C", "D", "ACD", "CD"],
                "copy": [
                    "People might describe you as a sweet personality that always lights up the room. You also might be a bit of a romantic who loves a good chick-flick. Classic and feminine, you probably enjoy brunch and a nice glass of rosé.",
                    "Floral fragrances are comprised of different types of flowers — often jasmine, rose or lily of the valley. Sophisticated and soft, this is the perfect perfume to wear to the ballet or to meet your partner’s parents."
                ]
            },
            {
                citrus: ["CD", "CE", "B", "BC", "ADE", "BE", "A", "", "AD", "D"],
                "copy": [
                    "Bright and full of energy, you’re often the one to rally your crew. People might describe you as lively and you likely enjoy sunny days spent with friends. Your favorite activities could include biking to the farmers market or lounging on an outdoor patio.",
                    "Usually a daytime scent, citrus fragrances focus on fruity notes that are often complemented by florals. Wear this to a weekend festival or spritz on anytime for a quick pick-me-up."
                ]
            },
            {
                sweet: ["BD", "AD", "E", "AC", "AD", "AB", "A", "C", "D", "B"],
                "copy": [
                    "You’re girly and bubbly, so people often think of you as flirty and playful. Always the optimist, you draw people in with your sweet disposition and youthful attitude. Your energy is contagious and you likely find yourself surrounded by a large circle of gal pals anywhere you go.",
                    "Also called gourmand fragrances, sweet perfumes often consist of edible scents such as honey, chocolate or candy. The deserts of the fragrance world, sweet perfumes are a go-to when you’re feeling extra pretty or having a fun evening out with your friends."
                ]
            },
            {
                spicy: ["AC", "AB", "BD", "AC", "B", "B", "B", "C", "C", "AB"],
                "copy": [
                    "Sweet and inviting, your friends might consider you a homebody. You enjoy activities like reading, baking or sitting by a cozy fire with a glass of wine. Your warm disposition and great advice make you the perfect girls’ night companion.",
                    "Spicy perfumes are comforting and alluring. Often containing spices like ginger, cinnamon or cloves, these perfumes smell like a bakery. They are perfect to wear when you want those around you to feel safe and warm."
                ]
            },
            {
                green: ["BE", "CE", "CE", "D", "BC", "CED", "CD", "AD", "ABE", "C"],
                "copy": [
                    "Natural and energetic, you might enjoy springtime camping trips or playing sports in an open field. Given your fresh take on life, you don’t like to waste time sitting around. Your friends might say you’re sporty, which makes you a great companion for an outdoor adventure.",
                    "Green fragrances smell of freshly cut grass and give off a modern, clean aroma. Often worn as a daytime fragrance, these perfumes are great to wear to an outdoor gathering or any casual encounter."
                ]
            },
            {
                oceanic: ["CE", "CD", "A", "BDE", "C", "AD", "E", "A", "B", "D"],
                "copy": [
                    "Easygoing and fresh, you love the smell of the beach and fresh linens. Classy but adventurous, you might enjoy beachside picnics or playing tennis in the open air. You enjoy looking clean and polished and know how to have a good time.",
                    "Oceanic perfumes usually combine crisp scents like mountain air and ocean spray. Often paired with a light floral, anyone who wears this fragrance will smell fresh and clean."
                ]
            }
        ]
    }
});
