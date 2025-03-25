import React from 'react';

function BookItem({ title, author, image, description, genre, rating }) {
    const [showDetails, setShowDetails] = React.useState(false);

    return (
        <div style={{
           
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

export default BookItem;