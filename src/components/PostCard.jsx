import React from 'react';

function PostCard({ title, summary, date, author, tags }) {
    return (
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{summary}</p>
            <p><strong>{date}</strong></p>
            <p><em>{author}</em></p>
            <div>
                {tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                ))}
            </div>
            <button style={styles.button}>Leia mais</button>
        </div>
    );
}

const styles ={
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px 0',
        backgroundColor: '#f9f9f9'
    },
    tag: {
        backgroundColor: '#e0e0e0',
        padding: '4px 8px',
        borderRadius: '4px',
        marginRight: '8px',
        fontSize: '12px'
    },
    button: {
        marginTop: '8px',
        paddinng: '8px 12px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default PostCard;