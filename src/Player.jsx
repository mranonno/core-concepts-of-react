export default function Player({ name }) {
    const playerStyle = {
        border: '2px solid tomato',
        paddingBottom: '5px',
        borderRadius: '10px',
        color: 'gray'
    }
    return (
        <h3 style={playerStyle}>Name: {name}</h3>
    )
}