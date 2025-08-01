import React, {useState} from 'react';

function createPost({ onAddPost }){
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title,
            summary,
            date: new Date().toLocaleDateString('pt-BR'),
            author,
            tags: tags.split(',').map(tag => tag.trim())
        };

        onAddPost(newPost);

        setTitle('');
        setSummary(''); 
        setAuthor('');
        setTags('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Criar Novo Post</h2>
            <input 
            type="text" 
            placeholder="Título"
            Value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
            />
            <textarea 
            placeholder="Resumo"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            style={styles.input}
            />
            <input 
            type="text" 
            placeholder="Nome do Autor"
            Value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={styles.input}
            />
            <input 
            type="text" 
            placeholder="Tags (Separadas por vírgula)"
            Value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            style={styles.input}
            />
            <button type="submit" style={styles.button}>Criar Post</button>
        </form>
    )
}

const styles = {
    form: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px'
    },
    input: {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc'
    },
    button: {
    padding: '10px 16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
    }   
};

export default createPost;