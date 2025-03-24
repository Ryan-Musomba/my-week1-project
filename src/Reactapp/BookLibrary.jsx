import React from 'react';

function BookLibrary() {
    const books = [
        { 
            id: 1, 
            title: "Solo Leveling", 
            author: "Chugong",
            image: "image.webp",
            description: "Solo Leveling follows Sung Jin-Woo, the weakest hunter in a world where hunters battle monsters. After a near-death experience in a dungeon, he gains the ability to level up his strength, becoming one of the most powerful hunters.",
            genre: "Action, Fantasy",
            rating: 4.8
        },
        { 
            id: 2, 
            title: "The Beginning After the End", 
            author: "TurtleMe",
            image: "image1.jpg",
            description: "A former king is reincarnated into a new world filled with magic and monsters. With his past life's memories intact, he must navigate this new world while hiding his extraordinary abilities.",
            genre: "Fantasy, Isekai",
            rating: 4.7
        },
        { 
            id: 3, 
            title: "Omniscient Reader's Viewpoint", 
            author: "Sing-Shong",
            image: "image2.webp",
            description: "Kim Dokja is the only reader of a web novel that becomes reality. With his knowledge of the story, he must survive in a world where the plot he read is coming to life.",
            genre: "Action, Fantasy",
            rating: 4.9
        },
        { 
            id: 4, 
            title: "Overgeared", 
            author: "Park Saenai",
            image: "https://m.media-amazon.com/images/I/81XSO8g5YmL._AC_UF1000,1000_QL80_.jpg",
            description: "Shin Youngwoo is the worst-rated player in the VR game Satisfy until he obtains a legendary class. Now he must navigate the game world with his new abilities.",
            genre: "Action, VR Gaming",
            rating: 4.5
        },
        { 
            id: 5, 
            title: "The Second Coming of Gluttony", 
            author: "Ro Yu-jin",
            image: "image5.webp",
            description: "Seol Jihu, a gambling addict, is given a second chance in a parallel world where he must fight against invaders to save humanity.",
            genre: "Action, Fantasy",
            rating: 4.6
        },
    ];

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            backgroundColor: '#121212',
            padding: '40px 20px',
            minHeight: '100vh',
        }}>
            {books.map(book => (
                <BookItem 
                    key={book.id}
                    title={book.title} 
                    author={book.author}
                    image={book.image}
                    description={book.description}
                    genre={book.genre}
                    rating={book.rating}
                />
            ))}
        </div>
    );
}

function BookItem({ title, author, image, description, genre, rating }) {
    const [showDetails, setShowDetails] = React.useState(false);

    return (
        <div style={{
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '20px',
            width: '250px',
            color: '#e0e0e0',
            position: 'relative'
        }}>
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{title}</h3>
            <p style={{ color: '#b0b0b0' }}>by {author}</p>
            
            <button 
                onClick={() => setShowDetails(!showDetails)}
                style={{
                    backgroundColor: '#0d47a1',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px'
                }}
            >
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            {showDetails && (
                <div style={{ 
                    marginTop: '15px',
                    padding: '15px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px'
                }}>
                    <p>{description}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <span style={{
                            backgroundColor: '#0d47a1',
                            padding: '5px 10px',
                            borderRadius: '20px',
                            fontSize: '0.8rem'
                        }}>
                            {genre}
                        </span>
                        <span style={{
                            backgroundColor: '#1e1e1e',
                            padding: '5px 10px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            border: '1px solid #0d47a1'
                        }}>
                            ⭐ {rating}/5
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookLibrary;