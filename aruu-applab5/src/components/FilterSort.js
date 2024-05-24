import React from 'react';
import { connect } from 'react-redux';
import { setFilter, setSort } from '../actions';

function FilterSort({ filter, sortBy, setFilter, setSort }) {
    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                style={styles.input}
            />
            <select value={sortBy} onChange={e => setSort(e.target.value)} style={styles.select}>
                <option value="">Sort by</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        marginBottom: '10px',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    select: {
        padding: '10px',
        fontSize: '16px',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#189cef',
        color: '#333',
        appearance: 'none',
    },
};

const mapStateToProps = state => ({
    filter: state.filter,
    sortBy: state.sortBy
});

const mapDispatchToProps = {
    setFilter,
    setSort
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);
