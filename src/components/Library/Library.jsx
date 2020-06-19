import React, { Suspense } from 'react';
import Filters from '../Filters/Filters'
// import Cards from '../Cards/Cards'
import { connect } from 'react-redux';

const Cards = React.lazy(() => import('../Cards/Cards'));


function Library({ cards }) {

    let filteredCards = cards.filter(item => item.type !== 'Ability').filter(item => item.provision !== '0');

    // filteredCards


    filteredCards.sort((a, b) => {
        return +b.provision - +a.provision;
    })


    return (
        <div>
            <Filters></Filters>
            <Suspense fallback={<div>Loading...</div>}>
                <Cards cards={filteredCards}></Cards>
            </Suspense>
        </div>
    )
}

function mapStateToProps({ cards, filters }) {

    const multiPropsFilter = (products, filters) => {
        const filterKeys = Object.keys(filters);
        return products.filter(product => {
            return filterKeys.every(key => {
                if (!filters[key].length) return true;
                if (Array.isArray(product[key])) {
                    return product[key].some(keyEle => filters[key] == keyEle);
                }
                return filters[key] == product[key];
            });
        });
    };

    return {
        cards: Object.values(filters.selected) === '' ? cards.cards : multiPropsFilter(cards.cards, filters.selected),
    };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Library)