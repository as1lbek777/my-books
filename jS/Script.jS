'use strict';

const books = [
// 1-block
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        imageSrc: './algorithms.jpg',
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13,
            }
        },
        highlighted: true
    },
// 2-block
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        imageSrc: './algorithms.jpg',
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0,
            }
        },
        highlighted: true
    },
// 3-block
    {
        title: 'Computer Systems: A Programmer\'s Perspective',
        author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
        imageSrc: './algorithms.jpg',
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16
            }
        },
        highlighted: true
    },
// 4-block
    {
        title: "Operating System Concepts",
        author: ["Abrahim Silberschatz", "Peter B. Galvin", "Greg Garne"],
        imageSrc: "./assets/image/algorithms.jpg",
        publisher: "John Wiley & Sons",
        privateationDate: "2004-12-14",
        edition: 10,
        keywords: ["computer sciense", "operating systems", "programming", "software", "C", "Java", "engineering"],
        pages: 921,
        format: "hardcover",
        ISBN: "9780471694663",
        language: "Enlish",
        programmingLanguage: "C, Java",
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65,
            }
        },
    },
// 5-block
    {
        title: "Engineering Mathemathics",
        author: ["K.A Stround", "Dexter J. Booth"],
        imageSrc: "./assets/image/algorithms.jpg",
        publisher: "Palgrave",
        publicationDate: "2007-01-01",
        edition: 14,
        keywords: ["mathematics", "engineering"],
        pages: 1288,
        formats: "paperback",
        ISBN: "9781403942463",
        language: "English",
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6,
            }
        },
        highlighted: true,
    },

]